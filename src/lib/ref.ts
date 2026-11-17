const REF = 'silentstars';

/**
 * Tag an outbound link with `ref=silentstars` so the target (GitHub, Bluesky)
 * can attribute the visit. Existing query params are left byte-for-byte as
 * they were — re-serializing via URLSearchParams would turn `%20` into `+`
 * in the Bluesky compose `text`. Falsy or unparseable input is returned as is.
 */
export function withRef<T extends string | undefined | null>(url: T): T {
  if (!url) return url;
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return url;
  }
  if (parsed.searchParams.has('ref')) {
    if (parsed.searchParams.getAll('ref').every(v => v === REF)) return url;
    parsed.searchParams.set('ref', REF);
    return parsed.href as T;
  }
  const hashAt = url.indexOf('#');
  const base = hashAt === -1 ? url : url.slice(0, hashAt);
  const hash = hashAt === -1 ? '' : url.slice(hashAt);
  const sep = base.includes('?') ? (base.endsWith('?') || base.endsWith('&') ? '' : '&') : '?';
  return `${base}${sep}ref=${REF}${hash}` as T;
}
