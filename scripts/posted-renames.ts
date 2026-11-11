/**
 * Keeps posted.json in step with repos renamed or transferred after their post.
 *
 * collect.ts queries posted repos by the name they were posted under; GitHub
 * follows the rename and answers with the new nameWithOwner, so the page was
 * written under a new slug while posted.json kept the old one. The result was
 * two pages per project — a frozen one under the old slug (the URL the Bluesky
 * post links to) and a live one whose og/<slug>.png was never generated, since
 * OG screenshots are taken for posted slugs only. Issue #79 reported one.
 *
 * Now the entry follows the repo: new repo/slug, the old slug kept in
 * previousSlugs, and the old URL served as a redirect (astro.config.ts).
 */
import { slugify, type PostedEntry } from './post-shared.ts';

function withPrevious(entry: PostedEntry, add: string[]): string[] | undefined {
  const all = [...(entry.previousSlugs ?? []), ...add].filter(s => s !== entry.slug);
  const unique = [...new Set(all)];
  return unique.length ? unique : undefined;
}

/**
 * @param fresh posted repo (lowercased, as recorded) → nameWithOwner GitHub returned
 *              for it this run. Repos GitHub didn't answer for are left alone.
 */
export function applyRenames(
  entries: PostedEntry[],
  fresh: Map<string, string>,
): { entries: PostedEntry[]; renamed: { from: string; to: string }[] } {
  const renamed: { from: string; to: string }[] = [];
  const out = entries.map(e => {
    const current = fresh.get(e.repo.toLowerCase());
    if (!current || current === e.repo) return e;
    const slug = slugify(current);
    if (slug === e.slug) return { ...e, repo: current };
    renamed.push({ from: e.slug, to: slug });
    const moved: PostedEntry = { ...e, repo: current, slug };
    const previousSlugs = withPrevious(moved, [e.slug]);
    if (previousSlugs) moved.previousSlugs = previousSlugs;
    else delete moved.previousSlugs;
    return moved;
  });
  return { entries: out, renamed };
}

/**
 * A page that carries a post's postedAt but isn't that post's current slug is a
 * leftover alias (e.g. a repo renamed and then renamed back). Its slug joins the
 * post's previousSlugs so it redirects, and the caller deletes the page.
 * Pages whose postedAt matches no entry stay protected (posted.json may be lost).
 */
export function absorbAliasPages(
  entries: PostedEntry[],
  pages: { slug: string; postedAt?: string }[],
): { entries: PostedEntry[]; aliases: string[] } {
  const byPostedAt = new Map(entries.map(e => [e.postedAt, e]));
  const aliasesOf = new Map<PostedEntry, string[]>();
  const aliases: string[] = [];
  for (const page of pages) {
    const owner = page.postedAt ? byPostedAt.get(page.postedAt) : undefined;
    if (!owner || owner.slug === page.slug) continue;
    aliases.push(page.slug);
    aliasesOf.set(owner, [...(aliasesOf.get(owner) ?? []), page.slug]);
  }
  const out = entries.map(e => {
    const add = aliasesOf.get(e);
    if (!add) return e;
    return { ...e, previousSlugs: withPrevious(e, add) };
  });
  return { entries: out, aliases };
}

/** Astro `redirects` for every previous slug, except slugs that are still a real page. */
export function postedRedirects(entries: PostedEntry[], livePages: Set<string>): Record<string, string> {
  const redirects: Record<string, string> = {};
  for (const e of entries) {
    for (const old of e.previousSlugs ?? []) {
      if (livePages.has(old)) continue;
      redirects[`/projects/${old}/`] = `/projects/${e.slug}/`;
    }
  }
  return redirects;
}
