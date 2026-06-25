import { BskyAgent } from '@atproto/api';

const HASHTAGS = [
  'opensource', 'buildinpublic', 'programming', 'coding', 'developer',
  'devs', 'github', 'softwaredev', 'webdev', 'indiedev',
  'typescript', 'javascript', 'python', 'rust', 'golang',
];

const LIMIT = 25;
const THROTTLE_MS = 500;

const identifier = (process.env.BSKY_IDENTIFIER ?? '').replace(/^@/, '');
const password   = process.env.BSKY_APP_PASSWORD ?? '';
if (!identifier || !password) {
  console.error('Set BSKY_IDENTIFIER and BSKY_APP_PASSWORD env vars.');
  process.exit(1);
}

const agent = new BskyAgent({ service: 'https://bsky.social' });
await agent.login({ identifier, password });

interface Post {
  likeCount?: number;
  repostCount?: number;
  indexedAt?: string;
}

async function search(tag: string, sort: 'top' | 'latest'): Promise<Post[]> {
  try {
    const res = await agent.api.app.bsky.feed.searchPosts({ q: '#' + tag, sort, limit: LIMIT });
    return (res.data.posts as Post[]) ?? [];
  } catch (e) {
    console.error(`  ✗ ${tag} (${sort}):`, (e as Error).message);
    return [];
  }
}

function avg(nums: number[]): number {
  if (nums.length === 0) return 0;
  return nums.reduce((a, b) => a + b, 0) / nums.length;
}

function sleep(ms: number): Promise<void> {
  return new Promise(r => setTimeout(r, ms));
}

interface Result {
  tag: string;
  avgLikes: number;
  avgReposts: number;
  maxLikes: number;
  recent24h: number;
  score: number;
}

const results: Result[] = [];
const now = Date.now();
const DAY_MS = 24 * 60 * 60 * 1000;

console.log(`Studying ${HASHTAGS.length} hashtags on Bluesky…\n`);

for (const tag of HASHTAGS) {
  process.stdout.write(`  #${tag}…`);

  const topPosts = await search(tag, 'top');
  await sleep(THROTTLE_MS);
  const latestPosts = await search(tag, 'latest');
  await sleep(THROTTLE_MS);

  const likes    = topPosts.map(p => p.likeCount ?? 0);
  const reposts  = topPosts.map(p => p.repostCount ?? 0);
  const recent24 = latestPosts.filter(p => {
    if (!p.indexedAt) return false;
    return (now - new Date(p.indexedAt).getTime()) < DAY_MS;
  }).length;

  const avgLikes   = avg(likes);
  const avgReposts = avg(reposts);
  const maxLikes   = Math.max(0, ...likes);
  const score      = avgLikes * 0.5 + avgReposts * 1.5 + recent24 * 0.8;

  results.push({ tag, avgLikes, avgReposts, maxLikes, recent24h: recent24, score });
  console.log(` avgLikes=${avgLikes.toFixed(1)} recent24h=${recent24} score=${score.toFixed(1)}`);
}

results.sort((a, b) => b.score - a.score);

console.log('\n─────────────────────────────────────────────────────────────────');
console.log(
  'Hashtag'.padEnd(20),
  'avgLikes'.padStart(9),
  'avgReposts'.padStart(11),
  'maxLikes'.padStart(9),
  'recent24h'.padStart(10),
  'score'.padStart(8),
);
console.log('─'.repeat(70));

for (const r of results) {
  console.log(
    `#${r.tag}`.padEnd(20),
    r.avgLikes.toFixed(1).padStart(9),
    r.avgReposts.toFixed(1).padStart(11),
    String(r.maxLikes).padStart(9),
    String(r.recent24h).padStart(10),
    r.score.toFixed(1).padStart(8),
  );
}

console.log('─'.repeat(70));
console.log(`\n★ Top 3 recomendados: ${results.slice(0, 3).map(r => '#' + r.tag).join('  ')}`);
