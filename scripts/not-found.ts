/**
 * Decides what the 404 page should do with a URL nobody serves.
 *
 * GitHub Pages can't do server-side redirects, so 404.html runs this in the
 * browser. Most 404 traffic comes from search engines and chatbots linking to
 * project pages that collect.ts has since removed (pages churn nightly), plus a
 * few legacy routes (/dashboard, /rss.xml, the old /silentstars/ base path).
 */

export type NotFoundResolution =
  | { kind: 'redirect'; to: string }
  | { kind: 'retired'; slug: string; owner: string; repoHint: string }
  | { kind: 'unknown' };

const LEGACY_BASE = '/silentstars';

// Top-level routes that exist on the current site (see src/pages/).
const STATIC_ROUTES = new Set(['', 'about', 'submit', 'projects', 'at-risk', 'resurrections', 'weekly']);

const REMOVED_ROUTES: Record<string, string> = {
  dashboard: '/',
  'rss.xml': '/weekly/',
  'feed.xml': '/weekly/',
  rss: '/weekly/',
  feed: '/weekly/',
};

export function resolveNotFound(pathname: string, liveSlugs: ReadonlySet<string>): NotFoundResolution {
  let path = pathname.toLowerCase();
  const legacy = path === LEGACY_BASE || path.startsWith(`${LEGACY_BASE}/`);
  if (legacy) path = path.slice(LEGACY_BASE.length) || '/';

  const parts = path.split('/').filter(Boolean);
  const [head = '', ...rest] = parts;

  const removed = REMOVED_ROUTES[head];
  if (removed && rest.length === 0) return { kind: 'redirect', to: removed };

  if (head === 'projects' || head === 'project') {
    if (rest.length === 0) return { kind: 'redirect', to: '/projects/' };
    // Accept both the site's owner--repo slug and a GitHub-style owner/repo.
    const slug = rest.length === 2 && !rest[0]!.includes('--') ? `${rest[0]}--${rest[1]}` : rest.join('/');
    if (liveSlugs.has(slug)) return { kind: 'redirect', to: `/projects/${slug}/` };
    // GitHub usernames can't contain "--", so the first one always splits owner from repo.
    const sep = slug.indexOf('--');
    if (sep > 0 && !slug.includes('/')) {
      return { kind: 'retired', slug, owner: slug.slice(0, sep), repoHint: slug.slice(sep + 2) };
    }
    return { kind: 'unknown' };
  }

  if (legacy && STATIC_ROUTES.has(head)) {
    return { kind: 'redirect', to: head ? `/${parts.join('/')}/` : '/' };
  }

  return { kind: 'unknown' };
}
