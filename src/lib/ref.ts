// utm_source is the de-facto campaign-source param: GA4, Plausible, Umami,
// GoatCounter, Fathom and Matomo all read it (GA4 ignores the older `ref`).
const KEY = 'utm_source';
const SOURCE = 'silentstars.dev';

/**
 * Tag an outbound link with `utm_source=silentstars.dev` so the target's
 * analytics can attribute the visit. Existing query params are left
 * byte-for-byte as they were — re-serializing via URLSearchParams would turn
 * `%20` into `+` in the Bluesky compose `text`. Falsy or unparseable input is
 * returned as is.
 */
export function withRef<T extends string | undefined | null>(url: T): T {
  if (!url) return url;
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }
  if (parsed.searchParams.has(KEY)) {
    if (parsed.searchParams.getAll(KEY).every(v => v === SOURCE)) return url;
    parsed.searchParams.set(KEY, SOURCE);
    return parsed.href as T;
  }
  const hashAt = url.indexOf('#');
  const base = hashAt === -1 ? url : url.slice(0, hashAt);
  const hash = hashAt === -1 ? '' : url.slice(hashAt);
  const sep = base.includes('?') ? (base.endsWith('?') || base.endsWith('&') ? '' : '&') : '?';
  return `${base}${sep}${KEY}=${SOURCE}${hash}` as T;
}
