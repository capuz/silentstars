/**
 * discovery-filter.ts — which repos the site may list. Source of truth is
 * data/discovery.config.json: `excludeRepos` (e.g. SilentStars itself, once it
 * crosses the starsRange floor), `excludeOwners` (companies, whose repos aren't
 * the quiet projects this directory is about) and `starsRange.max`.
 */
import config from '../data/discovery.config.json' with { type: 'json' };

export interface ListingRules {
  maxStars: number;
  excludeOwners: readonly string[];
}

const CONFIG_RULES: ListingRules = {
  maxStars: config.starsRange.max,
  excludeOwners: config.excludeOwners,
};

export function isExcludedRepo(fullName: string, excludeRepos: readonly string[] | undefined): boolean {
  const name = fullName.toLowerCase();
  return (excludeRepos ?? []).some(r => r.toLowerCase() === name);
}

export function isExcludedOwner(fullName: string, excludeOwners: readonly string[] = CONFIG_RULES.excludeOwners): boolean {
  const owner = fullName.split('/')[0]!.toLowerCase();
  return excludeOwners.some(o => o.toLowerCase() === owner);
}

/**
 * Applies to submitted (promoted) and already-posted projects too: a repo that
 * outgrows the ceiling leaves the listings. Its page stays, since posts link to
 * it, and the /weekly/ star trails keep showing it.
 */
export function isListable(repo: string, stars: number, rules: ListingRules = CONFIG_RULES): boolean {
  return stars <= rules.maxStars && !isExcludedOwner(repo, rules.excludeOwners);
}

export interface ShownCandidate {
  repo: string;
  name: string;
  stars: number;
  status: string;
  description: string;
}

/**
 * What the home page and /submit/ count as "on the site": listable, not
 * archived, and with a description that says more than the repo name.
 */
export function isShownOnSite(p: ShownCandidate, rules: ListingRules = CONFIG_RULES): boolean {
  if (p.status === 'archived' || !isListable(p.repo, p.stars, rules)) return false;
  const d = p.description.trim();
  return d !== '' && d.toLowerCase() !== p.name.toLowerCase();
}
