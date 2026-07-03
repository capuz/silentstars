/**
 * collect.ts — SilentStars nightly data collector
 *
 * Reads data/promoted.json (owner/repo + optional expiry), queries GitHub
 * GraphQL API, computes vitality metrics, writes data/latest.json and
 * src/content/projects/*.md (one file per project).
 *
 * Run:  npm run collect
 * Env:  GITHUB_TOKEN — personal access token or Actions token
 */

import { readFileSync, writeFileSync, existsSync, unlinkSync, readdirSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, '..');

// ──────────────────────────────────────────────────────────────────────────────
// Types
// ──────────────────────────────────────────────────────────────────────────────

type VitalStatus = 'thriving' | 'quiet' | 'at_risk' | 'newborn' | 'revived' | 'archived' | 'watched';
type Tag = 'solo_builder' | 'needs_contributors' | 'hidden_gem' | 'legacy_hero' | 'community_watch'
         | 'funded' | 'release_machine' | 'under_pressure' | 'community_hub' | 'fork_magnet';

interface PostedEntry {
  repo: string;
  slug: string;
  postedAt: string;
  platforms: {
    bsky?: { url: string; postedAt: string };
    x?:    { url: string; postedAt: string };
  };
}

interface RepoData {
  repo: string;
  name: string;
  description: string;
  url: string;
  homepage?: string;
  language?: string;
  languages?: string[];
  languagePcts?: number[];
  topics?: string[];
  stars: number;
  forks: number;
  openIssues: number;
  closedIssues: number;
  watchers: number;
  contributors: number;
  recentReleases: number;
  createdAt: string;
  lastCommitAt: string;
  lastReleaseAt?: string;
  status: VitalStatus;
  tags: Tag[];
  healthScore: number;
  undervaluedScore: number;
  maintainers: string[];
  revivedAfterMonths?: number;
  revivedDaysAgo?: number;
  isFork?: boolean;
  promoted?: boolean;
  postedAt?: string;
  openGraphImageUrl?: string;
  fundingLinks?: Array<{ platform: string; url: string }>;
  discussionCount?: number;
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
  languages: { totalSize: number; edges: Array<{ size: number; node: { name: string } }> };
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
  readme: { text: string } | null;
  hasLicense: { id: string } | null;
  repositoryTopics: { nodes: Array<{ topic: { name: string } }> };
  mentionableUsers: { totalCount: number };
  watchers: { totalCount: number };
  isFork: boolean;
  openGraphImageUrl: string;
  fundingLinks: Array<{ platform: string; url: string }>;
  hasDiscussionsEnabled: boolean;
  discussions: { totalCount: number };
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
    languages(first: 5, orderBy: { field: SIZE, direction: DESC }) {
      totalSize
      edges { size node { name } }
    }
    stargazerCount
    forkCount
    isArchived
    createdAt
    watchers { totalCount }
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
    releases(last: 10, orderBy: { field: CREATED_AT, direction: DESC }) {
      nodes { publishedAt }
    }
    issues(states: OPEN)   { totalCount }
    closedIssues: issues(states: CLOSED) { totalCount }
    openIssues: issues(states: OPEN)     { totalCount }
    pullRequests(states: OPEN)  { totalCount }
    mergedPRs: pullRequests(states: MERGED) { totalCount }
    helpWantedIssues: issues(states: OPEN, labels: ["help wanted"])  { totalCount }
    goodFirstIssues:  issues(states: OPEN, labels: ["good first issue"]) { totalCount }
    readme:           object(expression: "HEAD:README.md") { ... on Blob { text } }
    hasLicense:       object(expression: "HEAD:LICENSE")   { id }
    repositoryTopics(first: 10) { nodes { topic { name } } }
    mentionableUsers(first: 5) { totalCount }
    isFork
    openGraphImageUrl
    fundingLinks { platform url }
    hasDiscussionsEnabled
    discussions(first: 0) { totalCount }
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

/** Stddev of an array of numbers, normalised to [0,1] given a max. */
function normalisedStddev(values: number[], maxVal: number): number {
  if (values.length < 2) return 0;
  const mean = values.reduce((s, v) => s + v, 0) / values.length;
  const variance = values.reduce((s, v) => s + Math.pow(v - mean, 2), 0) / values.length;
  return Math.min(Math.sqrt(variance) / maxVal, 1);
}

/**
 * Health Score (0–100) — is the project alive and maintained right now?
 *
 * health = 0.35·recency       (days since last commit)
 *        + 0.25·cadence       (commit rhythm regularity)
 *        + 0.20·issue_health  (closed ÷ total issues)
 *        + 0.20·pr_health     (merged ÷ total PRs)
 */
function computeHealthScore(repo: GraphQLRepo, lastCommitAt: string, now: number): number {
  const commits = repo.defaultBranchRef?.target.history.nodes ?? [];
  const daysSinceLast = (now - new Date(lastCommitAt).getTime()) / DAY_MS;

  // 35 pts — recency: linear decay over 90 days
  const recencyScore = Math.max(0, 1 - daysSinceLast / 90) * 35;

  // 25 pts — cadence: consistency of commit intervals
  let cadenceScore = 25;
  if (commits.length >= 3) {
    const intervals = commits
      .slice(1)
      .map((c, i) => Math.abs(
        new Date(commits[i]!.committedDate).getTime() - new Date(c.committedDate).getTime()
      ) / DAY_MS);
    cadenceScore = (1 - normalisedStddev(intervals, 30)) * 25;
  }

  // 20 pts — issue health: closed ÷ total (neutral 10 if no issues)
  const totalIssues = repo.closedIssues.totalCount + repo.openIssues.totalCount;
  const issueScore = totalIssues > 0
    ? (repo.closedIssues.totalCount / totalIssues) * 20
    : 10;

  // 20 pts — PR health: merged ÷ total (neutral 10 if no PRs)
  const totalPRs = repo.mergedPRs.totalCount + repo.pullRequests.totalCount;
  const prScore = totalPRs > 0
    ? (repo.mergedPRs.totalCount / totalPRs) * 20
    : 10;

  return Math.min(Math.round(recencyScore + cadenceScore + issueScore + prScore), 100);
}

/**
 * Undervalued Score (0–100) — signal ÷ reach.
 * Above 50 means the project is outrunning its audience.
 *
 * signal = 0.40·commit_velocity  (commits in 90d, norm. 30=max)
 *        + 0.25·contributor_work (people × activity proxy)
 *        + 0.20·issue_response   (resolution rate)
 *        + 0.15·release_cadence  (releases in 90d, norm. 3=max)
 *
 * reach  = log10(stars + watchers + 10)
 *
 * Calibration: signal=0.5, reach≈1.7 (~50 stars+watchers) → score≈50
 *
 * v2 weights: forkRatio replaces pure commitVelocity dominance to prevent
 * vibe-coding repos (5 stars, 0 forks, many commits) from scoring 80+.
 * ageBonus rewards maturity; hasHomepage rewards commitment to docs.
 */
function computeUndervaluedScore(
  repo: GraphQLRepo,
  commits: Array<{ committedDate: string; author: { user: { login: string } | null } }>,
  recentReleases: number,
  now: number
): number {
  // commit_velocity: commits in last 90d, 30 commits = max signal
  const commits90d = commits.filter(
    c => (now - new Date(c.committedDate).getTime()) / DAY_MS <= 90
  ).length;
  const commitVelocity = Math.min(commits90d / 30, 1);

  // contributor_work: unique active authors × velocity (proxy for people × lines)
  const uniqueAuthors = new Set(
    commits
      .filter(c => (now - new Date(c.committedDate).getTime()) / DAY_MS <= 90)
      .map(c => c.author?.user?.login ?? '__unknown__')
  ).size;
  const contributorWork = Math.min((uniqueAuthors * commits90d) / 100, 1);

  // issue_response: closed issues resolution rate (proxy for median reply time)
  const totalIssues = repo.closedIssues.totalCount + repo.openIssues.totalCount;
  const issueResolution = totalIssues > 0
    ? repo.closedIssues.totalCount / totalIssues
    : 0.5;

  // release_cadence: releases in last 90d (3 = max)
  const releaseCadence = Math.min(recentReleases / 3, 1);

  // fork_ratio: forks relative to stars — proxy for "used as dependency" signal
  const forkRatio = Math.min(repo.forkCount / Math.max(repo.stargazerCount, 1), 1);

  // age_bonus: maturity matters — fresh repos need forks/stars to prove themselves
  const monthsOld = (now - new Date(repo.createdAt).getTime()) / (30 * DAY_MS);
  const ageBonus = monthsOld > 6 ? Math.min((monthsOld - 6) / 24, 0.3) : 0;

  // homepage_bonus: maintainer committed to documentation
  const homepageBonus = repo.homepageUrl ? 0.05 : 0;

  const signal = 0.25 * commitVelocity
               + 0.20 * contributorWork
               + 0.20 * issueResolution
               + 0.20 * forkRatio
               + 0.10 * releaseCadence
               + ageBonus
               + homepageBonus;

  // +10 baseline prevents extreme values at near-zero star counts
  const reach = Math.log10(repo.stargazerCount + repo.watchers.totalCount + 10);

  return Math.min(Math.round((signal / reach) * 100), 100);
}

function computeStatus(
  repo: GraphQLRepo,
  lastCommitAt: string,
  previousLastCommit: string | undefined,
  now: number
): VitalStatus {
  const lastCommitMs = new Date(lastCommitAt).getTime();
  const daysSinceLast = (now - lastCommitMs) / DAY_MS;
  const monthsSinceLast = daysSinceLast / 30;

  // 1. Archived: GitHub-archived or dormant > 18 months
  if (repo.isArchived || monthsSinceLast > 18) return 'archived';

  // 2. Revived: was dormant > 6 months, now has commit in last 30 days
  if (previousLastCommit) {
    const prevMs = new Date(previousLastCommit).getTime();
    const gapMonths = (lastCommitMs - prevMs) / (30 * DAY_MS);
    if (gapMonths > 6 && monthsSinceLast < 1) return 'revived';
  }

  // 3. Watched: more watchers than stars — devs tracking before the public notices
  const watchers = repo.watchers.totalCount;
  const watcherRatio = watchers / Math.max(repo.stargazerCount, 1);
  if (watcherRatio >= 2.0 && watchers >= 5 && repo.stargazerCount <= 150) return 'watched';

  // 4. Newborn: < 2 months old, docs present, active in last 2 weeks
  const createdMs = new Date(repo.createdAt).getTime();
  const monthsOld = (now - createdMs) / (30 * DAY_MS);
  if (monthsOld < 2 && repo.readme != null && repo.hasLicense != null && daysSinceLast < 14) return 'newborn';

  // 5. At risk: 2–12 months quiet + open issues or PRs
  const hasOpenWork = repo.openIssues.totalCount > 0 || repo.pullRequests.totalCount > 0;
  if (monthsSinceLast >= 2 && monthsSinceLast <= 12 && hasOpenWork) return 'at_risk';

  // 6. Thriving: commit in last 2 weeks
  if (daysSinceLast < 14) return 'thriving';

  return 'quiet';
}

function computeTags(
  repo: GraphQLRepo,
  lastCommitAt: string,
  now: number,
  recentReleases: number,
  healthScore: number,
): Tag[] {
  const tags: Tag[] = [];
  const commits = repo.defaultBranchRef?.target.history.nodes ?? [];

  // solo_builder: one contributor holds > 80% of visible commits
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

  // hidden_gem: < 100 stars + recent activity + docs
  const monthsSinceLast = (now - new Date(lastCommitAt).getTime()) / (30 * DAY_MS);
  if (repo.stargazerCount < 100 && monthsSinceLast < 3 && repo.readme != null && repo.hasLicense != null) {
    tags.push('hidden_gem');
  }

  // legacy_hero: > 5 years old + commits this calendar year
  const yearsOld = (now - new Date(repo.createdAt).getTime()) / (365 * DAY_MS);
  const thisYear = new Date().getFullYear();
  const hasCommitThisYear = commits.some(
    c => new Date(c.committedDate).getFullYear() === thisYear
  );
  if (yearsOld > 5 && hasCommitThisYear) tags.push('legacy_hero');

  // community_watch: more watchers than stars — people invested before hype arrives
  if (repo.watchers.totalCount > repo.stargazerCount && repo.watchers.totalCount >= 10) {
    tags.push('community_watch');
  }

  // funded: maintainer has active funding (Sponsors, Patreon, OpenCollective, etc.)
  if (repo.fundingLinks?.length > 0) {
    tags.push('funded');
  }

  // release_machine: 5+ releases in last 90 days — serious shipping cadence
  if (recentReleases >= 5) {
    tags.push('release_machine');
  }

  // under_pressure: active solo/micro team drowning in open issues
  if (repo.openIssues.totalCount > 10 && repo.mentionableUsers.totalCount <= 2 && healthScore >= 60) {
    tags.push('under_pressure');
  }

  // community_hub: rich discussion culture beyond issues
  if (repo.hasDiscussionsEnabled && repo.discussions.totalCount > 20) {
    tags.push('community_hub');
  }

  // fork_magnet: used more than it's starred — dependency/template signal
  const forkRatio = repo.forkCount / Math.max(repo.stargazerCount, 1);
  if (forkRatio > 0.5 && repo.forkCount >= 5) {
    tags.push('fork_magnet');
  }

  return tags;
}

// ──────────────────────────────────────────────────────────────────────────────
// Frontmatter + Markdown writer
// ──────────────────────────────────────────────────────────────────────────────

function toFrontmatter(data: RepoData): string {
  const lines: string[] = ['---'];
  lines.push(`repo: "${data.repo}"`);
  lines.push(`name: "${data.name.replace(/"/g, '\\"')}"`);
  lines.push(`description: "${(data.description ?? '').replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"`);
  lines.push(`url: "${data.url}"`);
  if (data.homepage) lines.push(`homepage: "${data.homepage}"`);
  if (data.language) lines.push(`language: "${data.language}"`);
  if (data.languages?.length) lines.push(`languages: [${data.languages.map(l => `"${l}"`).join(', ')}]`);
  if (data.languagePcts?.length) lines.push(`languagePcts: [${data.languagePcts.join(', ')}]`);
  if (data.topics?.length) lines.push(`topics: [${data.topics.map(t => `"${t}"`).join(', ')}]`);
  lines.push(`stars: ${data.stars}`);
  lines.push(`forks: ${data.forks}`);
  lines.push(`openIssues: ${data.openIssues}`);
  lines.push(`closedIssues: ${data.closedIssues}`);
  lines.push(`watchers: ${data.watchers}`);
  lines.push(`contributors: ${data.contributors}`);
  lines.push(`recentReleases: ${data.recentReleases}`);
  lines.push(`createdAt: "${data.createdAt}"`);
  lines.push(`lastCommitAt: "${data.lastCommitAt}"`);
  if (data.lastReleaseAt) lines.push(`lastReleaseAt: "${data.lastReleaseAt}"`);
  lines.push(`status: "${data.status}"`);
  lines.push(`tags: [${data.tags.map(t => `"${t}"`).join(', ')}]`);
  lines.push(`healthScore: ${data.healthScore}`);
  lines.push(`undervaluedScore: ${data.undervaluedScore}`);
  lines.push(`maintainers: [${data.maintainers.map(m => `"${m}"`).join(', ')}]`);
  if (data.revivedAfterMonths != null) lines.push(`revivedAfterMonths: ${data.revivedAfterMonths}`);
  if (data.revivedDaysAgo != null) lines.push(`revivedDaysAgo: ${data.revivedDaysAgo}`);
  if (data.openGraphImageUrl) lines.push(`openGraphImageUrl: "${data.openGraphImageUrl}"`);
  if (data.fundingLinks?.length) lines.push(`fundingLinks: [${data.fundingLinks.map(f => `"${f.platform}:${f.url}"`).join(', ')}]`);
  if (data.discussionCount != null) lines.push(`discussionCount: ${data.discussionCount}`);
  if (data.promoted) lines.push('promoted: true');
  if (data.postedAt) lines.push(`postedAt: "${data.postedAt}"`);
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

  // Load promoted.json — repos to always track, permanent (until: null) or
  // temporarily boosted (until: <date>, from accepted submissions).
  const promotedPath = resolve(ROOT, 'data/promoted.json');
  if (!existsSync(promotedPath)) {
    console.error('❌  data/promoted.json not found.');
    process.exit(1);
  }
  const allPromoted = JSON.parse(readFileSync(promotedPath, 'utf8')) as Array<{ repo: string; until: string | null }>;
  const nowDate = new Date();
  const activePromoted = allPromoted.filter(p => !p.until || new Date(p.until) > nowDate);
  // Write back without expired entries
  if (activePromoted.length < allPromoted.length) {
    writeFileSync(promotedPath, JSON.stringify(activePromoted, null, 2));
    console.log(`🗑  Removed ${allPromoted.length - activePromoted.length} expired promoted repo(s)`);
  }
  const promotedRepos = activePromoted.map(p => p.repo);
  const promotedSet = new Set(promotedRepos.map(r => r.toLowerCase()));

  const postedPath = resolve(ROOT, 'data/posted.json');
  const postedEntries: PostedEntry[] = existsSync(postedPath)
    ? JSON.parse(readFileSync(postedPath, 'utf8'))
    : [];
  const postedRepoSet = new Set(postedEntries.map(e => e.repo.toLowerCase()));
  const postedSlugSet = new Set(postedEntries.map(e => e.slug));
  const postedByRepo  = new Map(postedEntries.map(e => [e.repo.toLowerCase(), e]));

  const discoveredPath = resolve(ROOT, 'data/discovered.json');
  const discoveredCandidates: string[] = [];
  if (existsSync(discoveredPath)) {
    const disc = JSON.parse(readFileSync(discoveredPath, 'utf8')) as { candidates: string[] };
    discoveredCandidates.push(...(disc.candidates ?? []));
  }

  const configPath = resolve(ROOT, 'data/discovery.config.json');
  const healthThreshold: number = existsSync(configPath)
    ? (JSON.parse(readFileSync(configPath, 'utf8')) as { vitalityThreshold: number }).vitalityThreshold
    : 40;

  const postedRepos = postedEntries
    .map(e => e.repo)
    .filter(r => !promotedSet.has(r.toLowerCase()));
  const postedReposSet = new Set(postedRepos.map(r => r.toLowerCase()));

  const repos = [
    ...promotedRepos,
    ...postedRepos,
    ...discoveredCandidates.filter(r =>
      !promotedSet.has(r.toLowerCase()) &&
      !postedReposSet.has(r.toLowerCase())
    ),
  ];

  console.log(`📋  ${promotedRepos.length} promoted + ${postedRepos.length} posted + ${discoveredCandidates.length} discovered → ${repos.length} total (after dedup)`);

  const latestPath = resolve(ROOT, 'data/latest.json');
  const previous: LatestJson | null = existsSync(latestPath)
    ? JSON.parse(readFileSync(latestPath, 'utf8'))
    : null;
  const prevMap = new Map<string, RepoData>(
    previous?.projects.map(p => [p.repo, p]) ?? []
  );

  const now = Date.now();
  const since180d = new Date(now - 180 * DAY_MS).toISOString();

  const results: RepoData[] = [];
  const writtenSlugs = new Set<string>();
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
      if (raw?.isFork) {
        console.log(`    skip (fork)`);
        continue;
      }
      if (!raw) {
        const staleSlug = `${owner}--${name}`.toLowerCase();
        if (postedSlugSet.has(staleSlug)) {
          console.warn(`  ⚠  Could not fetch posted repo ${owner}/${name} — keeping existing MD`);
          writtenSlugs.add(staleSlug);
        } else {
          console.warn(`  ⚠  Could not fetch ${owner}/${name} — removing stale content if present`);
          const stalePath = resolve(ROOT, `src/content/projects/${staleSlug}.md`);
          if (existsSync(stalePath)) {
            unlinkSync(stalePath);
            console.warn(`  🗑  Deleted ${stalePath}`);
          }
        }
        continue;
      }

      const commits = raw.defaultBranchRef?.target.history.nodes ?? [];
      const lastCommitAt = commits[0]?.committedDate ?? raw.createdAt;
      const lastReleaseAt = raw.releases.nodes[0]?.publishedAt;

      // Count releases published in the last 90 days
      const recentReleases = raw.releases.nodes.filter(
        r => (now - new Date(r.publishedAt).getTime()) / DAY_MS <= 90
      ).length;

      const prevRepo = prevMap.get(repoStr);
      const status = computeStatus(raw, lastCommitAt, prevRepo?.lastCommitAt, now);

      let revivedAfterMonths: number | undefined;
      let revivedDaysAgo: number | undefined;
      if (status === 'revived' && prevRepo) {
        const prevMs = new Date(prevRepo.lastCommitAt).getTime();
        const newMs  = new Date(lastCommitAt).getTime();
        revivedAfterMonths = Math.round((newMs - prevMs) / (30 * DAY_MS));
        revivedDaysAgo     = Math.floor((now - newMs) / DAY_MS);
      }

      const healthScore = computeHealthScore(raw, lastCommitAt, now);
      const undervaluedScore = computeUndervaluedScore(raw, commits, recentReleases, now);
      const tags = computeTags(raw, lastCommitAt, now, recentReleases, healthScore);

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
        homepage: (() => {
          const h = raw.homepageUrl?.trim();
          if (!h) return undefined;
          try { new URL(h); return h; } catch {
            try { new URL(`https://${h}`); return `https://${h}`; } catch { return undefined; }
          }
        })(),
        language: raw.primaryLanguage?.name,
        ...(() => {
          const total = raw.languages?.totalSize ?? 0;
          const qualified = (raw.languages?.edges ?? [])
            .map(e => ({ name: e.node.name, pct: total > 0 ? Math.round(e.size / total * 100) : 0 }))
            .filter(l => l.pct >= 20);
          return {
            languages: qualified.map(l => l.name),
            languagePcts: qualified.map(l => l.pct),
          };
        })(),
        topics: raw.repositoryTopics.nodes.map(n => n.topic.name),
        stars: raw.stargazerCount,
        forks: raw.forkCount,
        openIssues: raw.openIssues.totalCount,
        closedIssues: raw.closedIssues.totalCount,
        watchers: raw.watchers.totalCount,
        contributors: raw.mentionableUsers.totalCount,
        recentReleases,
        createdAt: raw.createdAt,
        lastCommitAt,
        lastReleaseAt,
        status,
        tags,
        healthScore,
        undervaluedScore,
        maintainers,
        revivedAfterMonths,
        revivedDaysAgo,
        isFork: raw.isFork,
        promoted: promotedSet.has(repoStr.toLowerCase()) || undefined,
        openGraphImageUrl: raw.openGraphImageUrl || undefined,
        fundingLinks: raw.fundingLinks?.length ? raw.fundingLinks : undefined,
        discussionCount: raw.hasDiscussionsEnabled ? raw.discussions.totalCount : undefined,
      };

      results.push(data);

      const isPromoted = promotedSet.has(repoStr.toLowerCase());
      const isPosted    = postedRepoSet.has(repoStr.toLowerCase());
      if (!isPromoted && !isPosted && healthScore < healthThreshold) {
        console.log(`    skip (healthScore ${healthScore} < ${healthThreshold}, discovered)`);
        continue;
      }

      const slug = slugify(raw.nameWithOwner);
      const mdPath = resolve(ROOT, `src/content/projects/${slug}.md`);
      const desc = data.description.trim();
      if (!desc || desc.toLowerCase() === data.name.toLowerCase()) {
        console.log(`    skip (no meaningful description)`);
        if (!isPosted && existsSync(mdPath)) unlinkSync(mdPath);
        continue;
      }
      const body = (() => {
        const raw_readme = raw.readme?.text ?? '';
        if (!raw_readme) return data.description;
        const cleaned = raw_readme
          .split('\n')
          .filter(l => !/^\s*\[!\[/.test(l))          // strip badge lines
          .filter(l => !/^\s*<(img|a |div|p |span)/.test(l)) // strip HTML tags
          .join('\n')
          .replace(/!\[[^\]]*\]\([^)]*\)/g, '')                 // strip inline markdown images (malformed URIs break Vite/rehype)
          .replace(/!\[[^\]]*\]\[[^\]]*\]/g, '')                // strip reference-style markdown images (same reason)
          .replace(/<!--[\s\S]*?-->/g, '')             // strip HTML comments
          .replace(/\n{3,}/g, '\n\n')                  // collapse blank lines
          .trim();
        return cleaned.length > 1200 ? cleaned.slice(0, 1200).replace(/\s+\S*$/, '') + '…' : cleaned;
      })();
      const postedEntry = postedByRepo.get(repoStr.toLowerCase());
      if (postedEntry) data.postedAt = postedEntry.postedAt;

      writeFileSync(mdPath, `${toFrontmatter(data)}\n\n${body}\n`);
      writtenSlugs.add(slug);
    }

    if (i + BATCH_SIZE < repos.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  // Remove orphan MDs whose repo is no longer in the active set
  const projectsDir = resolve(ROOT, 'src/content/projects');

  // Fallback: scan existing MDs for postedAt in frontmatter — protects pages even if posted.json is lost
  for (const file of readdirSync(projectsDir).filter(f => f.endsWith('.md'))) {
    const content = readFileSync(resolve(projectsDir, file), 'utf8');
    if (content.includes('postedAt:')) postedSlugSet.add(file.slice(0, -3));
  }

  for (const file of readdirSync(projectsDir).filter(f => f.endsWith('.md'))) {
    const fileSlug = file.slice(0, -3);
    if (!writtenSlugs.has(fileSlug) && !postedSlugSet.has(fileSlug)) {
      unlinkSync(resolve(projectsDir, file));
      console.log(`  🗑  Removed orphan MD: ${file}`);
    }
  }

  const output: LatestJson = { collectedAt: new Date().toISOString(), projects: results };
  writeFileSync(latestPath, JSON.stringify(output, null, 2));

  console.log(`\n✅  Collected ${results.length} projects → data/latest.json`);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
