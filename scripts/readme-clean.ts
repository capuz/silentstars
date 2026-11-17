// A line that starts with an opening or closing HTML tag. Matching any tag (not a fixed list)
// matters: leftover <picture>/<source>/</p> lines indented 4+ spaces render as a code block.
const HTML_TAG_LINE = /^\s*<\/?[a-zA-Z][\w-]*[\s>/]/;
const FENCE = /^\s*(```|~~~)/;
// GitHub alert marker ("> [!NOTE]"); our markdown renders it literally, so it becomes a bold
// label on its own quote paragraph.
const GH_ALERT = /^(\s*>\s*)\[!(note|tip|important|warning|caution)\]\s*$/i;

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
    .map(l => l.replace(GH_ALERT, (_m, q: string, kind: string) =>
      `${q}**${kind[0]!.toUpperCase()}${kind.slice(1).toLowerCase()}**\n${q.trimEnd()}`))
    .join('\n')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')                 // strip inline markdown images (malformed URIs break Vite/rehype)
    .replace(/!\[[^\]]*\]\[[^\]]*\]/g, '')                // strip reference-style markdown images (same reason)
    .replace(/<!--[\s\S]*?-->/g, '')                      // strip HTML comments
    .replace(/\n{3,}/g, '\n\n')                           // collapse blank lines
    .trim();
}

/**
 * Pages show an excerpt of the README. Cut it where a reader would stop: after
 * the last whole paragraph, else the last whole sentence, else a word (with "…").
 * Never leave a link, a code fence or a heading hanging at the end.
 */
export function clipReadme(text: string, max = 1200): string {
  if (text.length <= max) return text;
  const head = text.slice(0, max);
  const min = Math.floor(max * 0.4);

  let out: string;
  let ellipsis = false;
  const para = head.lastIndexOf('\n\n');
  if (para >= min) {
    out = head.slice(0, para);
  } else {
    let sentenceEnd = -1;
    for (const m of head.matchAll(/[.!?](?=\s)/g)) if (m.index! >= min) sentenceEnd = m.index! + 1;
    if (sentenceEnd > 0) {
      out = head.slice(0, sentenceEnd);
    } else {
      out = head.replace(/\s+\S*$/, '');
      ellipsis = true;
    }
  }

  // A table row cut short: drop it, the rows above still form a valid table.
  const lastNl = out.lastIndexOf('\n');
  const lineEnd = text.indexOf('\n', lastNl + 1);
  const fullLine = text.slice(lastNl + 1, lineEnd === -1 ? undefined : lineEnd);
  if (/^\s*\|/.test(fullLine) && out.slice(lastNl + 1).trimEnd() !== fullLine.trimEnd()) {
    out = out.slice(0, Math.max(lastNl, 0));
    ellipsis = false;
  }

  // An open link: "[text" or "[text](url" with no closing ")".
  const openLink = out.search(/\[[^\]]*$|\[[^\]]*\]\([^)]*$/);
  if (openLink > -1) { out = out.slice(0, openLink); ellipsis = true; }

  // An open code fence: cut before it.
  const lines = out.split('\n');
  const fences = lines.flatMap((l, i) => (FENCE.test(l) ? [i] : []));
  if (fences.length % 2 === 1) out = lines.slice(0, fences.at(-1)).join('\n');

  // A heading (or blank lines) left at the end.
  out = out.trimEnd();
  while (/(^|\n)#{1,6}\s[^\n]*$/.test(out)) out = out.replace(/(^|\n)#{1,6}\s[^\n]*$/, '').trimEnd();

  return ellipsis ? `${out}…` : out;
}
