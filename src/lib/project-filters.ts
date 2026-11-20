// /projects/ filter state <-> URL query, so a filtered view can be shared,
// bookmarked and restored with Back: ?status=thriving,quiet&tag=hidden_gem&q=rust
export interface FilterState {
  statuses: string[];
  tags: string[];
  q: string;
}

const list = (v: string | null, allowed: readonly string[]) =>
  [...new Set((v ?? '').split(',').map(s => s.trim()).filter(s => allowed.includes(s)))];

export function parseFilters(
  params: URLSearchParams,
  allowed: { statuses: readonly string[]; tags: readonly string[] },
): FilterState {
  return {
    statuses: list(params.get('status'), allowed.statuses),
    tags: list(params.get('tag'), allowed.tags),
    q: (params.get('q') ?? '').trim().toLowerCase(),
  };
}

export function serializeFilters(state: FilterState): string {
  const p = new URLSearchParams();
  if (state.statuses.length) p.set('status', [...state.statuses].sort().join(','));
  if (state.tags.length) p.set('tag', [...state.tags].sort().join(','));
  if (state.q) p.set('q', state.q);
  return p.toString();
}
