// Cross-document view transitions pair elements by view-transition-name, which
// must be a valid CSS <custom-ident> and unique per page. Project slugs can start
// with a digit or contain dots, so prefix them and swap anything outside
// [a-z0-9_-] for "_".
export function vtName(slug: string, part: 'name' | 'thumb'): string {
  return `p-${slug.toLowerCase().replace(/[^a-z0-9_-]/g, '_')}-${part}`;
}
