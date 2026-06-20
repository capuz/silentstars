/**
 * collect.ts — SilentStars nightly data collector
 *
 * Reads data/seed.txt (owner/repo per line), queries GitHub GraphQL API,
 * computes vitality metrics, writes data/latest.json and
 * src/content/projects/*.md (one file per project).
 *
 * Run:  npm run collect
 * Env:  GITHUB_TOKEN — personal access token or Actions token
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ──────────────────────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────────────────────

type VitalStatus = 'thriving' | 'quiet' | 'at_risk' | 'newborn' | 'revived' | 'archived';
type Tag = 'solo_builder' | 'needs_contributors' | 'hidden_gem' | 'legacy_hero';

interface RepoData {
  repo: string;
  name: string;
  description: string;
  url: string;
  homepage?: string;
  language?: string;
  stars: number;
  forks: number;
  openIssues: number;
  createdAt: string;
  lastCommitAt: string;
  lastReleaseAt?: string;
  status: VitalStatus;
  tags: Tag[];
  vitalityScore: number;
  attentionGap: number;
  maintainers: string[];
  revivedAfterMonths?: number;
  revivedDaysAgo?: number;
}

interface LatestJson {
  collectedAt: string;
  projects: RepoData[];
}

interface GraphQLRepo {
  nameWithOwner: string;
  name: string;
  description: string | null;
  url: string;
  homepageUrl: string | null;
  primaryLanguage: { name: string } | null;
  stargazerCount: number;
  forkCount: number;
  isArchived: boolean;
  createdAt: string;
  defaultBranchRef: {
    target: {
      history: {
        totalCount: number;
        nodes: Array<{ committedDate: string; author: { user: { login: string } | null } }>;
      };
    };
  } | null;
  releases: { nodes: Array<{ publishedAt: string }> };
  issues: { totalCount: number };
  closedIssues: { totalCount: number };
  openIssues: { totalCount: number };
  pullRequests: { totalCount: number };
  mergedPRs: { totalCount: number };
  helpWantedIssues: { totalCount: number };
  goodFirstIssues: { totalCount: number };
  hasReadme: { id: string } | null;
  hasLicense: { id: string } | null;
  hasContributing: { id: string } | null;
  mentionableUsers: { totalCount: number };
}

// ──────────────────────────────────────────────────────────────────────────────
// GraphQL query
// ──────────────────────────────────────────────────────────────────────────────

const REPO_QUERY = `
query($owner: String!, $name: String!, $since: GitTimestamp!) {
  repository(owner: $owner, name: $name) {
    nameWithOwner
    name
    description
    url
    homepageUrl
    primaryLanguage { name }
    stargazerCount
    forkCount
    isArchived
    createdAt
    defaultBranchRef {
      target {
        ... on Commit {
          history(first: 100, since: $since) {
            totalCount
            nodes {
              committedDate
              author { user { login } }
            }
          }
        }
      }
    }
    releases(first: 1, orderBy: { field: CREATED_AT, direction: DESC }) {
      nodes { publishedAt }
    }
    issues(states: OPEN)   { totalCount }
    closedIssues: issues(states: CLOSED) { totalCount }
    openIssues: issues(states: OPEN)     { totalCount }
    pullRequests(states: OPEN)  { totalCount }
    mergedPRs: pullRequests(states: MERGED) { totalCount }
    helpWantedIssues: issues(states: OPEN, labels: ["help wanted"])  { totalCount }
    goodFirstIssues:  issues(states: OPEN, labels: ["good first issue"]) { totalCount }
    hasReadme:        object(expression: "HEAD:README.md") { id }
    hasLicense:       object(expression: "HEAD:LICENSE")   { id }
    hasContributing:  object(expression: "HEAD:CONTRIBUTING.md") { id }
    mentionableUsers(first: 5) { totalCount }
  }
}`;

async function queryGitHub(
  token: string,
  owner: string,
  name: string,
  since: string,
  retries = 3
): Promise<GraphQLRepo | null> {
  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const res = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          Authorization: `bearer ${token}`,
          'Content-Type': 'application/json',
          'User-Agent': 'silentstars-collector',
        },
        body: JSON.stringify({ query: REPO_QUERY, variables: { owner, name, since } }),
      });

      if (res.status === 429 || res.status === 503) {
        // Rate-limit or transient error — wait with exponential backoff
        const wait = Math.pow(2, attempt) * 2000;
        console.warn(`  Rate limited, waiting ${wait / 1000}s…`);
        await new Promise(r => setTimeout(r, wait));
        continue;
      }

      const json = (await res.json()) as { data?: { repository: GraphQLRepo }; errors?: unknown[] };
      if (json.errors) {
        console.error(`  GraphQL errors for ${owner}/${name}:`, json.errors);
        return null;
      }
      return json.data?.repository ?? null;
    } catch (err) {
      if (attempt === retries) throw err;
      await new Promise(r => setTimeout(r, 1000 * (attempt + 1)));
    }
  }
  return null;
}

// ──────────────────────────────────────────────────────────────────────────────
// Metrics
// ──────────────────────────────────────────────────────────────────────────────

const DAY_MS = 86_400_000;

/** Exponential decay weights for commit recency. */
function commitDecayWeight(committedDate: string, now: number): number {
  const ageDays = (now - new Date(committedDate).getTime()) / DAY_MS;
  if (ageDays <= 7)   return 1.0;
  if (ageDays <= 30)  return 0.7;
  if (ageDays <= 90)  return 0.3;
  if (ageDays <= 180) return 0.1;
  return 0;
}

/** Stddev of an array of numbers, normalised to [0,1] given a max. */
function normalisedStddev(values: number[], maxVal: number): number {
  if (values.length < 2) return 0;
  const mean = values.reduce((s, v) => s + v, 0) / values.length;
  const variance = values.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / values.length;
  return Math.min(Math.sqrt(variance) / maxVal, 1);
}

function computeVitalityScore(repo: GraphQLRepo, now: number): number {
  const commits = repo.defaultBranchRef?.target.history.nodes ?? [];

  // 45% — activity with exponential decay
  const rawActivity = commits.reduce((s, c) => s + commitDecayWeight(c.committedDate, now), 0);
  // Normalise: assume 50 recent weighted commits = 100%
  const activityScore = Math.min(rawActivity / 50, 1) * 45;

  // 25% — resolution ratio
  const totalWork = (repo.closedIssues.totalCount + repo.mergedPRs.totalCount +
                     repo.openIssues.totalCount + repo.pullRequests.totalCount);
  const resolved  = repo.closedIssues.totalCount + repo.mergedPRs.totalCount;
  const resolutionScore = totalWork > 0 ? (resolved / totalWork) * 25 : 12.5;

  // 20% — documentation (README=5, LICENSE=5, CONTRIBUTING=10)
  let docsRaw = 0;
  if (repo.hasReadme)       docsRaw += 5;
  if (repo.hasLicense)      docsRaw += 5;
  if (repo.hasContributing) docsRaw += 10;
  const docsScore = docsRaw; // already out of 20

  // 10% — commit regularity (consistent interval = high score)
  let continuityScore = 10;
  if (commits.length >= 3) {
    const intervals = commits
      .slice(1)
      .map((c, i) => Math.abs(
        new Date(commits[i]!.committedDate).getTime() - new Date(c.committedDate).getTime()
      ) / DAY_MS);
    const irregularity = normalisedStddev(intervals, 30);
    continuityScore = (1 - irregularity) * 10;
  }

  return Math.round(activityScore + resolutionScore + docsScore + continuityScore);
}

function computeStatus(
  repo: GraphQLRepo,
  lastCommitAt: string,
  previousLastCommit: string | undefined,
  now: number
): VitalStatus {
  const lastCommitMs = new Date(lastCommitAt).getTime();
  const monthsSinceLast = (now - lastCommitMs) / (30 * DAY_MS);

  // 1. Archived
  if (repo.isArchived || monthsSinceLast > 18) return 'archived';

  // 2. Revived: was dormant >6 months, now has commit in last 30 days
  if (previousLastCommit) {
    const prevMs = new Date(previousLastCommit).getTime();
    const gapMonths = (lastCommitMs - prevMs) / (30 * DAY_MS);
    if (gapMonths > 6 && monthsSinceLast < 1) return 'revived';
  }

  // 3. Newborn: created <6 months + README + license + recent commit
  const createdMs = new Date(repo.createdAt).getTime();
  const monthsOld = (now - createdMs) / (30 * DAY_MS);
  if (monthsOld < 6 && repo.hasReadme && repo.hasLicense && monthsSinceLast < 3) return 'newborn';

  // 4. At risk: 3-12 months quiet + open issues/PRs
  const hasOpenWork = repo.openIssues.totalCount > 0 || repo.pullRequests.totalCount > 0;
  if (monthsSinceLast >= 3 && monthsSinceLast <= 12 && hasOpenWork) return 'at_risk';

  // 5. Quiet: last commit <3 months, no recent release
  const lastReleaseAt = repo.releases.nodes[0]?.publishedAt;
  const recentRelease = lastReleaseAt &&
    (now - new Date(lastReleaseAt).getTime()) / (30 * DAY_MS) < 3;
  if (monthsSinceLast < 3 && !recentRelease) return 'quiet';

  // 6. Thriving: commit in last 30 days
  if (monthsSinceLast < 1) return 'thriving';

  return 'quiet';
}

function computeTags(repo: GraphQLRepo, lastCommitAt: string, now: number): Tag[] {
  const tags: Tag[] = [];
  const commits = repo.defaultBranchRef?.target.history.nodes ?? [];

  // solo_builder: one contributor holds >80% of visible commits
  if (commits.length >= 5) {
    const counts: Record<string, number> = {};
    for (const c of commits) {
      const login = c.author?.user?.login ?? '__unknown__';
      counts[login] = (counts[login] ?? 0) + 1;
    }
    const top = Math.max(...Object.values(counts));
    if (top / commits.length > 0.8) tags.push('solo_builder');
  }

  // needs_contributors
  if (repo.helpWantedIssues.totalCount > 0 || repo.goodFirstIssues.totalCount > 0) {
    tags.push('needs_contributors');
  }

  // hidden_gem: <100 stars + recent activity + README + license
  const monthsSinceLast = (now - new Date(lastCommitAt).getTime()) / (30 * DAY_MS);
  if (repo.stargazerCount < 100 && monthsSinceLast < 3 && repo.hasReadme && repo.hasLicense) {
    tags.push('hidden_gem');
  }

  // legacy_hero: >5 years old + commits this year
  const yearsOld = (now - new Date(repo.createdAt).getTime()) / (365 * DAY_MS);
  const thisYear = new Date().getFullYear();
  const hasCommitThisYear = commits.some(
    c => new Date(c.committedDate).getFullYear() === thisYear
  );
  if (yearsOld > 5 && hasCommitThisYear) tags.push('legacy_hero');

  return tags;
}

// ──────────────────────────────────────────────────────────────────────────────
// Frontmatter + Markdown writer
// ──────────────────────────────────────────────────────────────────────────────

function toFrontmatter(data: RepoData): string {
  const lines: string[] = ['---'];
  lines.push(`repo: "${data.repo}"`);
  lines.push(`name: "${data.name.replace(/"/g, '\\"')}"`);
  lines.push(`description: "${(data.description ?? '').replace(/"/g, '\\"')}"`);
  lines.push(`url: "${data.url}"`);
  if (data.homepage) lines.push(`homepage: "${data.homepage}"`);
  if (data.language) lines.push(`language: "${data.language}"`);
  lines.push(`stars: ${data.stars}`);
  lines.push(`forks: ${data.forks}`);
  lines.push(`openIssues: ${data.openIssues}`);
  lines.push(`createdAt: "${data.createdAt}"`);
  lines.push(`lastCommitAt: "${data.lastCommitAt}"`);
  if (data.lastReleaseAt) lines.push(`lastReleaseAt: "${data.lastReleaseAt}"`);
  lines.push(`status: "${data.status}"`);
  lines.push(`tags: [${data.tags.map(t => `"${t}"`).join(', ')}]`);
  lines.push(`vitalityScore: ${data.vitalityScore}`);
  lines.push(`attentionGap: ${data.attentionGap}`);
  lines.push(`maintainers: [${data.maintainers.map(m => `"${m}"`).join(', ')}]`);
  if (data.revivedAfterMonths != null) lines.push(`revivedAfterMonths: ${data.revivedAfterMonths}`);
  if (data.revivedDaysAgo != null) lines.push(`revivedDaysAgo: ${data.revivedDaysAgo}`);
  lines.push('---');
  return lines.join('\n');
}

function slugify(nameWithOwner: string): string {
  return nameWithOwner.replace('/', '--').toLowerCase().replace(/[^a-z0-9-]/g, '-');
}

// ──────────────────────────────────────────────────────────────────────────────
// Main
// ──────────────────────────────────────────────────────────────────────────────

async function main() {
  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error('❌  GITHUB_TOKEN is not set.');
    process.exit(1);
  }

  // Load seed list (always included, never filtered by vitality)
  const seedPath = resolve(ROOT, 'data/seed.txt');
  if (!existsSync(seedPath)) {
    console.error('❌  data/seed.txt not found.');
    process.exit(1);
  }
  const seedRepos = readFileSync(seedPath, 'utf8')
    .split('\n')
    .map(l => l.trim())
    .filter(l => l && !l.startsWith('#'));
  const seedSet = new Set(seedRepos.map(r => r.toLowerCase()));

  // Load auto-discovered candidates (optional — skipped if file not found)
  const discoveredPath = resolve(ROOT, 'data/discovered.json');
  const discoveredCandidates: string[] = [];
  if (existsSync(discoveredPath)) {
    const disc = JSON.parse(readFileSync(discoveredPath, 'utf8')) as { candidates: string[] };
    discoveredCandidates.push(...(disc.candidates ?? []));
  }

  // Vitality threshold for auto-discovered repos (seed always bypasses this)
  const configPath = resolve(ROOT, 'data/discovery.config.json');
  const vitalityThreshold: number = existsSync(configPath)
    ? (JSON.parse(readFileSync(configPath, 'utf8')) as { vitalityThreshold: number }).vitalityThreshold
    : 40;

  // Merge: seed first, then discovered (deduplicated)
  const repos = [
    ...seedRepos,
    ...discoveredCandidates.filter(r => !seedSet.has(r.toLowerCase())),
  ];

  console.log(`📋  ${seedRepos.length} seed repos + ${discoveredCandidates.length} discovered → ${repos.length} total (after dedup)`);

  // Load previous state for revived detection
  const latestPath = resolve(ROOT, 'data/latest.json');
  const previous: LatestJson | null = existsSync(latestPath)
    ? JSON.parse(readFileSync(latestPath, 'utf8'))
    : null;
  const prevMap = new Map<string, RepoData>(
    previous?.projects.map(p => [p.repo, p]) ?? []
  );

  // Collect commits from last 180 days
  const now = Date.now();
  const since180d = new Date(now - 180 * DAY_MS).toISOString();

  const results: RepoData[] = [];
  const BATCH_SIZE = 10;

  for (let i = 0; i < repos.length; i += BATCH_SIZE) {
    const batch = repos.slice(i, i + BATCH_SIZE);

    for (const repoStr of batch) {
      const [owner, name] = repoStr.split('/');
      if (!owner || !name) {
        console.warn(`  ⚠  Skipping invalid entry: ${repoStr}`);
        continue;
      }

      console.log(`  → ${owner}/${name}`);
      const raw = await queryGitHub(token, owner, name, since180d);
      if (!raw) {
        console.warn(`  ⚠  Could not fetch ${owner}/${name}`);
        continue;
      }

      const commits = raw.defaultBranchRef?.target.history.nodes ?? [];
      const lastCommitAt = commits[0]?.committedDate ?? raw.createdAt;
      const lastReleaseAt = raw.releases.nodes[0]?.publishedAt;

      const prevRepo = prevMap.get(repoStr);
      const status = computeStatus(raw, lastCommitAt, prevRepo?.lastCommitAt, now);

      // Revived metadata
      let revivedAfterMonths: number | undefined;
      let revivedDaysAgo: number | undefined;
      if (status === 'revived' && prevRepo) {
        const prevMs = new Date(prevRepo.lastCommitAt).getTime();
        const newMs  = new Date(lastCommitAt).getTime();
        revivedAfterMonths = Math.round((newMs - prevMs) / (30 * DAY_MS));
        revivedDaysAgo     = Math.floor((now - newMs) / DAY_MS);
      }

      const vitalityScore = Math.min(computeVitalityScore(raw, now), 100);
      // attentionGap: higher = more undervalued
      const attentionGap = parseFloat(
        (vitalityScore / Math.log10(raw.stargazerCount + 10)).toFixed(1)
      );

      const tags = computeTags(raw, lastCommitAt, now);

      // Top maintainers: users appearing in recent commits
      const maintainerCounts: Record<string, number> = {};
      for (const c of commits) {
        const login = c.author?.user?.login;
        if (login) maintainerCounts[login] = (maintainerCounts[login] ?? 0) + 1;
      }
      const maintainers = Object.entries(maintainerCounts)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 3)
        .map(([login]) => login);

      const data: RepoData = {
        repo: raw.nameWithOwner,
        name: raw.name,
        description: raw.description ?? '',
        url: raw.url,
        homepage: raw.homepageUrl ?? undefined,
        language: raw.primaryLanguage?.name,
        stars: raw.stargazerCount,
        forks: raw.forkCount,
        openIssues: raw.openIssues.totalCount,
        createdAt: raw.createdAt,
        lastCommitAt,
        lastReleaseAt,
        status,
        tags,
        vitalityScore,
        attentionGap,
        maintainers,
        revivedAfterMonths,
        revivedDaysAgo,
      };

      results.push(data);

      // Seed repos always get a content file; discovered repos need vitality >= threshold
      const isFromSeed = seedSet.has(repoStr.toLowerCase());
      if (!isFromSeed && vitalityScore < vitalityThreshold) {
        console.log(`    skip (vitality ${vitalityScore} < ${vitalityThreshold}, discovered)`);
        continue;
      }

      // Write content file
      const slug = slugify(raw.nameWithOwner);
      const mdPath = resolve(ROOT, `src/content/projects/${slug}.md`);
      const body = `${data.name} is tracked by SilentStars. ${data.description}`;
      writeFileSync(mdPath, `${toFrontmatter(data)}\n\n${body}\n`);
    }

    // Brief pause between batches to stay well within 5 000 pts/h
    if (i + BATCH_SIZE < repos.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  // Write latest.json
  const output: LatestJson = { collectedAt: new Date().toISOString(), projects: results };
  writeFileSync(latestPath, JSON.stringify(output, null, 2));

  console.log(`\n✅  Collected ${results.length} projects → data/latest.json`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
