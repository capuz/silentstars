/**
 * First issues: open "good first issue" / "help wanted" issues nobody has
 * taken yet, in active projects from the catalog. Pure functions; collect.ts
 * feeds them the GraphQL nodes and writes data/first-issues.json, which
 * src/pages/first-issues.astro renders.
 */

const DAY_MS = 86_400_000;

export const FIRST_ISSUE_LABELS = ['good first issue', 'help wanted'] as const;
export type IssueKind = typeof FIRST_ISSUE_LABELS[number];

const MAX_COMMENTS = 8;          // past this the issue is already being discussed
const MAX_IDLE_DAYS = 365;       // untouched for a year: likely stale
const MAX_ISSUES_PER_PROJECT = 5;
const ACTIVE_DAYS = 90;          // a commit in this window: someone will review the PR
const OUTSIDE_PR_WINDOW_DAYS = 180;
export const MERGED_PRS_FETCHED = 30;
// languages.totalSize is bytes; ~40 bytes a line is a rough average for source.
const BYTES_PER_LINE = 40;
// Above this the byte count is mostly vendored or generated code, so the
// estimate stops meaning "lines a person wrote" and is left out.
const MAX_KLOC_SHOWN = 50;

const INSIDE_ASSOCIATIONS = new Set(['OWNER', 'MEMBER', 'COLLABORATOR']);

export interface RawIssue {
  number: number;
  title: string;
  url: string;
  createdAt: string;
  updatedAt: string;
  locked: boolean;
  labels: { nodes: Array<{ name: string }> };
  assignees: { totalCount: number };
  comments: { totalCount: number };
  closedByPullRequestsReferences: { totalCount: number };
}

export interface RawMergedPR {
  mergedAt: string;
  authorAssociation: string;
}

export interface FirstIssue {
  number: number;
  title: string;
  url: string;
  kind: IssueKind;
  createdAt: string;
  comments: number;
}

export interface ProjectSignals {
  outsidePRsMerged: number;
  /** True when every fetched PR counted, so the real number may be higher. */
  outsidePRsCapped: boolean;
  approxKloc?: number;
}

export interface FirstIssueProject {
  repo: string;
  slug: string;
  lastCommitAt: string;
  signals: ProjectSignals;
  goodFirstIssueCount: number;
  issues: FirstIssue[];
}

export interface FirstIssuesJson {
  collectedAt: string;
  projects: FirstIssueProject[];
}

function kindOf(issue: RawIssue): IssueKind | null {
  const names = new Set(issue.labels.nodes.map(l => l.name.toLowerCase()));
  if (names.has('good first issue')) return 'good first issue';
  if (names.has('help wanted')) return 'help wanted';
  return null;
}

export function eligibleIssues(raw: RawIssue[], now: number): FirstIssue[] {
  return raw
    .filter(i => !i.locked
      && i.assignees.totalCount === 0
      && i.closedByPullRequestsReferences.totalCount === 0
      && i.comments.totalCount <= MAX_COMMENTS
      && (now - Date.parse(i.updatedAt)) / DAY_MS <= MAX_IDLE_DAYS)
    .map(i => ({ raw: i, kind: kindOf(i) }))
    .filter((x): x is { raw: RawIssue; kind: IssueKind } => x.kind !== null)
    .sort((a, b) =>
      (a.kind === b.kind ? 0 : a.kind === 'good first issue' ? -1 : 1)
      || Date.parse(b.raw.updatedAt) - Date.parse(a.raw.updatedAt))
    .slice(0, MAX_ISSUES_PER_PROJECT)
    .map(({ raw: i, kind }) => ({
      number: i.number,
      title: i.title,
      url: i.url,
      kind,
      createdAt: i.createdAt,
      comments: i.comments.totalCount,
    }));
}

export function projectSignals(mergedPRs: RawMergedPR[], languagesTotalSize: number, now: number): ProjectSignals {
  const outside = mergedPRs.filter(p =>
    !INSIDE_ASSOCIATIONS.has(p.authorAssociation)
    && (now - Date.parse(p.mergedAt)) / DAY_MS <= OUTSIDE_PR_WINDOW_DAYS).length;
  const kloc = languagesTotalSize > 0 ? Math.max(1, Math.round(languagesTotalSize / BYTES_PER_LINE / 1000)) : 0;
  return {
    outsidePRsMerged: outside,
    outsidePRsCapped: outside > 0 && outside >= MERGED_PRS_FETCHED,
    ...(kloc > 0 && kloc <= MAX_KLOC_SHOWN ? { approxKloc: kloc } : {}),
  };
}

export interface FirstIssueInput {
  repo: string;
  slug: string;
  lastCommitAt: string;
  issues: RawIssue[];
  mergedPRs: RawMergedPR[];
  languagesTotalSize: number;
  goodFirstIssueCount: number;
}

export function buildFirstIssueProject(input: FirstIssueInput, now: number): FirstIssueProject | null {
  if ((now - Date.parse(input.lastCommitAt)) / DAY_MS > ACTIVE_DAYS) return null;
  const issues = eligibleIssues(input.issues, now);
  if (issues.length === 0) return null;
  return {
    repo: input.repo,
    slug: input.slug,
    lastCommitAt: input.lastCommitAt,
    signals: projectSignals(input.mergedPRs, input.languagesTotalSize, now),
    goodFirstIssueCount: input.goodFirstIssueCount,
    issues,
  };
}

export function rankFirstIssueProjects(projects: FirstIssueProject[]): FirstIssueProject[] {
  return [...projects].sort((a, b) =>
    b.signals.outsidePRsMerged - a.signals.outsidePRsMerged
    || b.goodFirstIssueCount - a.goodFirstIssueCount
    || b.issues.length - a.issues.length
    || a.repo.localeCompare(b.repo));
}
