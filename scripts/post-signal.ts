/**
 * post-signal.ts — says why a project is on the radar, from fields collect.ts measured.
 * Nothing here is written by a model: with no real signal the line is simply left out.
 */

export interface SignalInput {
  createdAt?: string;
  lastCommitAt?: string;
  recentReleases?: number;
  contributors?: number;
  revivedAfterMonths?: number;
}

const DAY_MS = 24 * 60 * 60 * 1000;
const MAX_ACTIVE_DAYS = 30;
const MAX_YOUNG_DAYS = 60;

function daysSince(iso: string, now: Date): number {
  return Math.floor((now.getTime() - new Date(iso).getTime()) / DAY_MS);
}

export function activityLabel(p: SignalInput, now: Date): string | null {
  const releases = p.recentReleases ?? 0;
  if (releases > 0) return `${releases} release${releases === 1 ? '' : 's'} in 90 days`;
  if (!p.lastCommitAt) return null;
  const days = daysSince(p.lastCommitAt, now);
  if (days > MAX_ACTIVE_DAYS) return null;
  if (days <= 0) return 'updated today';
  return days === 1 ? 'updated yesterday' : `updated ${days} days ago`;
}

export function whyLine(p: SignalInput, now: Date): string | null {
  const activity = activityLabel(p, now);
  if (!activity) return null;
  if (p.revivedAfterMonths) return `Back after ${p.revivedAfterMonths} months away, ${activity}.`;
  const age = p.createdAt ? daysSince(p.createdAt, now) : Infinity;
  if (age <= MAX_YOUNG_DAYS) return `Started ${age} days ago, ${activity.replace(' in 90 days', ' so far')}.`;
  if (p.contributors === 1) return `One maintainer, ${activity}.`;
  return `${activity[0]!.toUpperCase()}${activity.slice(1)}.`;
}
