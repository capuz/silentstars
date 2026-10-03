// A line that starts with an opening or closing HTML tag. Matching any tag (not a fixed list)
// matters: leftover <picture>/<source>/</p> lines indented 4+ spaces render as a code block.
const HTML_TAG_LINE = /^\s*<\/?[a-zA-Z][\w-]*[\s>/]/;
const FENCE = /^\s*(```|~~~)/;

export function stripReadmeNoise(rawReadmeText: string): string {
  let inFence = false;
  return rawReadmeText
    .split('\n')
    .filter(l => {
      if (FENCE.test(l)) { inFence = !inFence; return true; }
      if (inFence) return true;
      return !/^\s*\[!\[/.test(l)                         // strip badge lines
        && !HTML_TAG_LINE.test(l);                         // strip HTML tags
    })
    .join('\n')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')                 // strip inline markdown images (malformed URIs break Vite/rehype)
    .replace(/!\[[^\]]*\]\[[^\]]*\]/g, '')                // strip reference-style markdown images (same reason)
    .replace(/<!--[\s\S]*?-->/g, '')                      // strip HTML comments
    .replace(/\n{3,}/g, '\n\n')                           // collapse blank lines
    .trim();
}
