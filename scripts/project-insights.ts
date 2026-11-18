// Derived, human-readable insights for a project's detail page
// (src/pages/projects/[slug].astro). Pure functions over data we already
// collect: the frontmatter and the weekly history.
import type { History, NumberedEdition } from './weekly.ts';

const DAY_MS = 86_400_000;

// ── Weekly editions ────────────────────────────────────────────

export type FeaturedSection = 'newcomers' | 'rising' | 'revived';

export interface FeaturedIn {
  week: string;
  issue: number;
  section: FeaturedSection;
  reason: string;
}

const FEATURED_SECTIONS: FeaturedSection[] = ['newcomers', 'rising', 'revived'];

/** repo → editions it was featured in, newest first. "cooling" is not a feature, so it is left out. */
export function editionsByRepo(editions: NumberedEdition[]): Map<string, FeaturedIn[]> {
  const idx = new Map<string, FeaturedIn[]>();
  for (const ed of [...editions].sort((a, b) => b.week.localeCompare(a.week))) {
    for (const section of FEATURED_SECTIONS) {
      for (const it of ed[section]) {
        const list = idx.get(it.repo) ?? [];
        list.push({ week: ed.week, issue: ed.issue, section, reason: it.reason });
        idx.set(it.repo, list);
      }
    }
  }
  return idx;
}

/**
 * Stars gained since `week`: measured from that week's snapshot (or the first
 * later one) to `currentStars`. Null when the repo has no snapshot from then on.
 */
export function starsSince(
  history: History, repo: string, week: string, currentStars: number,
): { week: string; from: number; delta: number } | null {
  const first = Object.keys(history).sort().find(k => k >= week && history[k]!.projects[repo]);
  if (!first) return null;
  const from = history[first]!.projects[repo]!.stars;
  return { week: first, from, delta: currentStars - from };
}

// ── Why it's here ─────────────────────────────────────────────

export interface ProjectFacts {
  repo: string;
  url: string;
  homepage?: string;
  status: string;
  tags: string[];
  stars: number;
  watchers: number;
  forks: number;
  openIssues: number;
  healthScore: number;
  recentReleases: number;
  createdAt: string;
  lastCommitAt: string;
  fundingLinks: string[];
  discussionCount?: number;
  revivedAfterMonths?: number;
}

export interface Funding { platform: string; url: string; }

/** "KO_FI:https://ko-fi.com/x" → { platform: 'ko fi', url }. CUSTOM links are named by their host. */
export function parseFunding(raw: string): Funding {
  const sep = raw.indexOf(':');
  const kind = sep > -1 ? raw.slice(0, sep) : '';
  const url = sep > -1 ? raw.slice(sep + 1) : raw;
  if (!kind || kind === 'CUSTOM') {
    try { return { platform: new URL(url).hostname.replace(/^www\./, ''), url }; }
    catch { return { platform: 'sponsor', url }; }
  }
  return { platform: kind.toLowerCase().replace(/_/g, ' '), url };
}

function plural(n: number, word: string): string {
  return `${n} ${word}${n === 1 ? '' : 's'}`;
}

function ageText(iso: string, now: Date): string {
  const days = Math.max(0, Math.floor((now.getTime() - new Date(iso).getTime()) / DAY_MS));
  if (days === 0) return 'today';
  if (days < 14) return `${plural(days, 'day')} ago`;
  return `${plural(Math.floor(days / 7), 'week')} ago`;
}

function statusLine(f: ProjectFacts, now: Date): string | null {
  switch (f.status) {
    case 'newborn':  return `Created ${ageText(f.createdAt, now)} and already shipping`;
    case 'revived':  return f.revivedAfterMonths ? `Back after ${f.revivedAfterMonths} months of silence` : 'Back after a long silence';
    case 'watched':  return `${plural(f.watchers, 'watcher')} for ${plural(f.stars, 'star')}: devs are tracking it before the crowd`;
    case 'thriving': return `Active: last commit ${ageText(f.lastCommitAt, now)}`;
    case 'at_risk':  return 'Gone quiet with work still open: a good moment to lend a hand';
    default:         return null;
  }
}

function tagLine(tag: string, f: ProjectFacts): string | null {
  switch (tag) {
    case 'solo_builder':       return 'Built almost entirely by one person';
    case 'needs_contributors': return 'Has issues labelled for new contributors';
    case 'hidden_gem':         return `Health ${f.healthScore}/100 with only ${plural(f.stars, 'star')}`;
    case 'legacy_hero':        return `Around since ${new Date(f.createdAt).getUTCFullYear()} and still shipping`;
    case 'community_watch':    return `${plural(f.watchers, 'watcher')}, more than its ${plural(f.stars, 'star')}`;
    case 'funded': {
      const platforms = [...new Set(f.fundingLinks.map(l => parseFunding(l).platform))];
      return platforms.length ? `Accepts sponsorship (${platforms.join(', ')})` : 'Accepts sponsorship';
    }
    case 'release_machine':    return `${plural(f.recentReleases, 'release')} in the last 90 days`;
    case 'under_pressure':     return `${plural(f.openIssues, 'open issue')} handled by one or two people`;
    case 'community_hub':      return f.discussionCount ? `${plural(f.discussionCount, 'discussion')}: a community beyond issues` : 'A community beyond issues';
    case 'fork_magnet':        return `${plural(f.forks, 'fork')} for ${plural(f.stars, 'star')}: people build on it`;
    default:                   return null;
  }
}

/** Status first, then one sentence per tag, each with the numbers that earned it. */
export function whyItsHere(f: ProjectFacts, now = new Date()): string[] {
  const lines = [statusLine(f, now), ...f.tags.map(t => tagLine(t, f))];
  return lines.filter((l): l is string => !!l);
}

// ── How to help ───────────────────────────────────────────────

export interface HelpLink { label: string; href: string; }

export function helpLinks(f: ProjectFacts): HelpLink[] {
  const links: HelpLink[] = [];
  if (f.homepage) links.push({ label: 'Try it', href: f.homepage });
  links.push({ label: 'Star it', href: f.url });
  // needs_contributors means open issues labelled "good first issue" or "help wanted"
  // (collect.ts); /contribute would list only the first, so search for both.
  if (f.tags.includes('needs_contributors')) {
    const q = encodeURIComponent('is:issue is:open label:"good first issue","help wanted"');
    links.push({ label: 'Help with an open issue', href: `${f.url}/issues?q=${q}` });
  }
  const seen = new Set<string>();
  for (const raw of f.fundingLinks) {
    const { platform, url } = parseFunding(raw);
    if (seen.has(url)) continue;
    seen.add(url);
    links.push({ label: `Sponsor on ${platform}`, href: url });
  }
  return links;
}

// ── Related projects ──────────────────────────────────────────

export interface RelatedCandidate {
  repo: string;
  status: string;
  language?: string;
  topics: string[];
  undervaluedScore: number;
}

// Sharing one of these says nothing about what a project does (a website, a
// blog and an IPTV app are all "HTML"), so on its own it is not a match.
const GENERIC_LANGUAGES = new Set(['HTML', 'CSS', 'SCSS', 'Shell', 'PowerShell', 'Batchfile', 'Dockerfile',
  'Makefile', 'Jupyter Notebook', 'Markdown', 'MDX', 'TeX', 'Nix', 'HCL']);

/**
 * Projects that share topics (×2 each) or the main language (×1) with `target`;
 * a generic language (HTML, Shell…) adds nothing.
 * Archived projects and the target itself are skipped; ties go to the higher
 * undervalued score. Callers pre-filter what is listable.
 */
export function relatedProjects<T extends RelatedCandidate>(target: RelatedCandidate, all: T[], n = 4): T[] {
  const topics = new Set(target.topics.map(t => t.toLowerCase()));
  return all
    .filter(p => p.repo !== target.repo && p.status !== 'archived')
    .map(p => {
      const shared = p.topics.filter(t => topics.has(t.toLowerCase())).length;
      const lang = target.language && p.language === target.language && !GENERIC_LANGUAGES.has(target.language) ? 1 : 0;
      return { p, score: shared * 2 + lang };
    })
    .filter(x => x.score > 0)
    .sort((a, b) => b.score - a.score || b.p.undervaluedScore - a.p.undervaluedScore)
    .slice(0, n)
    .map(x => x.p);
}
