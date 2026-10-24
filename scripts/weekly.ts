// Weekly editions ("This week on SilentStars"): a compact per-ISO-week snapshot of
// every project lives in data/history.json, and each edition is computed at build
// time by diffing two consecutive closed weeks. Editions are never stored, so
// tuning the weights below changes past editions too.
import { slugify } from './post-shared.ts';

const DAY_MS = 24 * 60 * 60 * 1000;

export interface WeekEntry {
  name: string;
  stars: number;
  forks: number;
  closedIssues: number;
  lastCommitAt: string;
  lastReleaseAt?: string;
  status: string;
  healthScore: number;
  hasPage: boolean;
  promoted?: boolean;
  postedAt?: string;
}

export interface WeekSnapshot {
  collectedAt: string;
  projects: Record<string, WeekEntry>;
}

export type History = Record<string, WeekSnapshot>;

/** The subset of data/latest.json this module reads. */
export interface LatestLike {
  collectedAt: string;
  projects: Array<{ repo: string } & WeekEntry & Record<string, unknown>>;
}

export type Signal =
  | { kind: 'posted' }
  | { kind: 'submitted' }
  | { kind: 'release' }
  | { kind: 'commits' }
  | { kind: 'stars'; delta: number }
  | { kind: 'issuesClosed'; delta: number }
  | { kind: 'returnAfter'; days: number }
  | { kind: 'statusChange'; from: string; to: string }
  | { kind: 'healthDrop'; delta: number }
  | { kind: 'silentFor'; days: number };

export interface EditionItem {
  repo: string;
  slug: string;
  name: string;
  stars: number;
  signals: Signal[];
  reason: string;
}

export interface Edition {
  week: string;
  newcomers: EditionItem[];
  rising: EditionItem[];
  revived: EditionItem[];
  cooling: EditionItem[];
}

export interface NumberedEdition extends Edition {
  issue: number;
  start: string;
  end: string;
}

// Rising score: a release is the strongest single signal; a commit alone is not
// enough to make the list (most active projects commit every week).
export const RISING_WEIGHTS = { release: 3, commits: 1, starsJump: 2, issueClosed: 1, issuesClosedCap: 3 };
export const RISING_MIN_SCORE = 3;
export const RISING_MAX = 8;
// Star growth only counts when it is both absolute and relative: +2 on a 10-star
// project is news, +2 on a 300-star one is noise.
export const STARS_MIN_DELTA = 2;
export const STARS_MIN_RATIO = 0.1;
// Status-page repos (Upptime) open and close an issue per outage: hundreds a week.
export const ISSUES_SPIKE_MAX = 50;
export const REVIVED_MIN_GAP_DAYS = 45;
export const COOLING_HEALTH_DROP = 10;
export const COOLING_MAX = 8;

const ACTIVE_STATUSES = new Set(['thriving', 'newborn', 'revived']);
const COLD_STATUSES = new Set(['quiet', 'at_risk', 'archived']);

export function isoWeekKey(date: Date): string {
  // ISO 8601: the week belongs to the year of its Thursday.
  const d = new Date(Date.UTC(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate()));
  const dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  const yearStart = Date.UTC(d.getUTCFullYear(), 0, 1);
  const week = Math.ceil(((d.getTime() - yearStart) / DAY_MS + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(week).padStart(2, '0')}`;
}

export function weekBounds(key: string): { start: Date; end: Date } {
  const m = /^(\d{4})-W(\d{2})$/.exec(key);
  if (!m) throw new Error(`Invalid ISO week key: ${key}`);
  const year = Number(m[1]);
  const week = Number(m[2]);
  // Jan 4th is always in week 1.
  const jan4 = new Date(Date.UTC(year, 0, 4));
  const week1Monday = jan4.getTime() - ((jan4.getUTCDay() || 7) - 1) * DAY_MS;
  const start = new Date(week1Monday + (week - 1) * 7 * DAY_MS);
  return { start, end: new Date(start.getTime() + 7 * DAY_MS) };
}

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

/** "Oct 12 – 18, 2026" — Monday to Sunday of the ISO week, in UTC. */
export function formatWeekRange(key: string): string {
  const { start, end } = weekBounds(key);
  const last = new Date(end.getTime() - DAY_MS);
  const [sm, sd, sy] = [MONTHS[start.getUTCMonth()], start.getUTCDate(), start.getUTCFullYear()];
  const [em, ed, ey] = [MONTHS[last.getUTCMonth()], last.getUTCDate(), last.getUTCFullYear()];
  if (sy !== ey) return `${sm} ${sd}, ${sy} – ${em} ${ed}, ${ey}`;
  if (sm !== em) return `${sm} ${sd} – ${em} ${ed}, ${ey}`;
  return `${sm} ${sd} – ${ed}, ${ey}`;
}

export function toSnapshot(latest: LatestLike): WeekSnapshot {
  const projects: Record<string, WeekEntry> = {};
  for (const p of latest.projects) {
    projects[p.repo] = {
      name: p.name,
      stars: p.stars,
      forks: p.forks,
      closedIssues: p.closedIssues,
      lastCommitAt: p.lastCommitAt,
      ...(p.lastReleaseAt ? { lastReleaseAt: p.lastReleaseAt } : {}),
      status: p.status,
      healthScore: p.healthScore,
      hasPage: p.hasPage,
      ...(p.promoted ? { promoted: true } : {}),
      ...(p.postedAt ? { postedAt: p.postedAt } : {}),
    };
  }
  return { collectedAt: latest.collectedAt, projects };
}

/** Stores latest as its week's snapshot, unless that week already holds a newer one. */
export function upsertWeek(history: History, latest: LatestLike): History {
  const key = isoWeekKey(new Date(latest.collectedAt));
  const existing = history[key];
  if (existing && existing.collectedAt > latest.collectedAt) return history;
  const next = { ...history, [key]: toSnapshot(latest) };
  return Object.fromEntries(Object.entries(next).sort(([a], [b]) => a.localeCompare(b)));
}

function inRange(iso: string | undefined, start: Date, end: Date): boolean {
  if (!iso) return false;
  const t = new Date(iso).getTime();
  return t >= start.getTime() && t < end.getTime();
}

function daysBetween(a: string | Date, b: string | Date): number {
  return Math.floor((new Date(b).getTime() - new Date(a).getTime()) / DAY_MS);
}

function item(repo: string, e: WeekEntry, signals: Signal[]): EditionItem {
  return { repo, slug: slugify(repo), name: e.name, stars: e.stars, signals, reason: renderReason(signals) };
}

/** Activity signals between two snapshots of the same project, newest first by weight. */
function activitySignals(prev: WeekEntry | undefined, curr: WeekEntry, start: Date, end: Date): Signal[] {
  const signals: Signal[] = [];
  if (inRange(curr.lastReleaseAt, start, end) && curr.lastReleaseAt !== prev?.lastReleaseAt) {
    signals.push({ kind: 'release' });
  }
  if (prev) {
    const closed = curr.closedIssues - prev.closedIssues;
    if (closed > 0 && closed <= ISSUES_SPIKE_MAX) signals.push({ kind: 'issuesClosed', delta: closed });
    const stars = curr.stars - prev.stars;
    if (stars >= STARS_MIN_DELTA && stars >= prev.stars * STARS_MIN_RATIO) signals.push({ kind: 'stars', delta: stars });
  }
  if (inRange(curr.lastCommitAt, start, end)) signals.push({ kind: 'commits' });
  return signals;
}

function risingScore(signals: Signal[]): number {
  let score = 0;
  for (const s of signals) {
    if (s.kind === 'release') score += RISING_WEIGHTS.release;
    else if (s.kind === 'commits') score += RISING_WEIGHTS.commits;
    else if (s.kind === 'stars') score += RISING_WEIGHTS.starsJump;
    else if (s.kind === 'issuesClosed') score += Math.min(s.delta * RISING_WEIGHTS.issueClosed, RISING_WEIGHTS.issuesClosedCap);
  }
  return score;
}

/**
 * Diffs two weekly snapshots. Each project lands in at most one section:
 * newcomers > revived > rising > cooling.
 *
 * Auto-discovered candidates rotate in and out of the directory every night
 * (scripts/discover.ts replaces them), so "has a page now and didn't before" is
 * noise. A newcomer is a project the site actively picked this week: posted to
 * Bluesky, or newly promoted through a submission.
 */
export function computeEdition(prev: WeekSnapshot, curr: WeekSnapshot, weekKey: string): Edition {
  const { start, end } = weekBounds(weekKey);
  const newcomers: EditionItem[] = [];
  const revived: EditionItem[] = [];
  const rising: Array<EditionItem & { score: number }> = [];
  const cooling: Array<EditionItem & { drop: number }> = [];

  for (const [repo, c] of Object.entries(curr.projects)) {
    if (!c.hasPage) continue;
    const p = prev.projects[repo];
    const activity = activitySignals(p, c, start, end);

    const why: Signal | null = inRange(c.postedAt, start, end) ? { kind: 'posted' }
      : c.promoted && !p?.promoted ? { kind: 'submitted' }
      : null;
    if (why) {
      newcomers.push(item(repo, c, [why, ...activity]));
      continue;
    }

    // Without last week's snapshot there is nothing to compare against.
    if (!p) continue;

    const gap = daysBetween(p.lastCommitAt, c.lastCommitAt);
    const returned = inRange(c.lastCommitAt, start, end) && gap > REVIVED_MIN_GAP_DAYS;
    if (returned || (c.status === 'revived' && p.status !== 'revived')) {
      const rest = activity.filter(s => s.kind !== 'commits');
      revived.push(item(repo, c, [{ kind: 'returnAfter', days: Math.max(gap, 0) }, ...rest]));
      continue;
    }

    const score = risingScore(activity);
    if (score >= RISING_MIN_SCORE) {
      rising.push({ ...item(repo, c, activity), score });
      continue;
    }

    const coolingSignals: Signal[] = [];
    if (ACTIVE_STATUSES.has(p.status) && COLD_STATUSES.has(c.status)) {
      coolingSignals.push({ kind: 'statusChange', from: p.status, to: c.status });
    }
    const drop = p.healthScore - c.healthScore;
    if (drop >= COOLING_HEALTH_DROP) coolingSignals.push({ kind: 'healthDrop', delta: drop });
    if (coolingSignals.length > 0) {
      coolingSignals.push({ kind: 'silentFor', days: daysBetween(c.lastCommitAt, end) });
      cooling.push({ ...item(repo, c, coolingSignals), drop });
    }
  }

  const strip = <T extends EditionItem>({ score: _s, drop: _d, ...rest }: T & { score?: number; drop?: number }) => rest as EditionItem;
  return {
    week: weekKey,
    newcomers: newcomers.sort((a, b) => b.stars - a.stars),
    revived: revived.sort((a, b) => b.stars - a.stars),
    rising: rising
      .sort((a, b) => b.score - a.score || b.stars - a.stars)
      .slice(0, RISING_MAX)
      .map(strip),
    cooling: cooling
      .sort((a, b) => b.drop - a.drop || b.stars - a.stars)
      .slice(0, COOLING_MAX)
      .map(strip),
  };
}

/** One edition per pair of consecutive closed weeks (the week containing `now` is still open). */
export function listEditions(history: History, now: Date): NumberedEdition[] {
  const openWeek = isoWeekKey(now);
  const keys = Object.keys(history).sort().filter(k => k < openWeek);
  const editions: NumberedEdition[] = [];

  for (let i = 1; i < keys.length; i++) {
    const week = keys[i]!;
    const ed = computeEdition(history[keys[i - 1]!]!, history[week]!, week);
    const { start, end } = weekBounds(week);
    editions.push({ ...ed, issue: i, start: start.toISOString(), end: end.toISOString() });
  }
  return editions;
}

function plural(n: number, word: string): string {
  return `${n} ${word}${n === 1 ? '' : 's'}`;
}

export function renderReason(signals: Signal[]): string {
  return signals.map(s => {
    switch (s.kind) {
      case 'posted': return 'featured on Bluesky';
      case 'submitted': return 'submitted by its maintainer';
      case 'release': return 'shipped a new release';
      case 'commits': return 'new commits';
      case 'stars': return `+${s.delta} stars`;
      case 'issuesClosed': return `closed ${plural(s.delta, 'issue')}`;
      case 'returnAfter': return `first commit in ${s.days} days`;
      case 'statusChange': return `went from ${s.from.replace('_', ' ')} to ${s.to.replace('_', ' ')}`;
      case 'healthDrop': return `health score down ${s.delta}`;
      case 'silentFor': return `no commits for ${plural(s.days, 'day')}`;
    }
  }).join(' · ');
}
