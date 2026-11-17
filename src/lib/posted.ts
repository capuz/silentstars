// Build-time index of data/posted.json by slug. ProjectCard renders hundreds of
// times per build; re-reading and parsing the file on every render was the
// bulk of the project pages' build time once they started showing related cards.
import { loadPosted, type PostedEntry } from '../../scripts/post-shared.ts';

let bySlug: Map<string, PostedEntry> | null = null;

/** First posted entry for `slug` (same as loadPosted().find(...)), parsed once per process. */
export function postedFor(slug: string): PostedEntry | undefined {
  if (!bySlug) {
    bySlug = new Map();
    for (const e of loadPosted()) if (!bySlug.has(e.slug)) bySlug.set(e.slug, e);
  }
  return bySlug.get(slug);
}
