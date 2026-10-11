/**
 * discovery-filter.ts — repos that must never be listed, e.g. SilentStars
 * itself once it crosses the starsRange floor. Source of truth is
 * `excludeRepos` in data/discovery.config.json.
 */

export function isExcludedRepo(fullName: string, excludeRepos: readonly string[] | undefined): boolean {
  const name = fullName.toLowerCase();
  return (excludeRepos ?? []).some(r => r.toLowerCase() === name);
}
