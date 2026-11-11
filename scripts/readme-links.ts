/**
 * readme-links.ts — README paths that only make sense inside the repo.
 * collect.ts runs both on every README before writing the project page, so
 * links and images don't resolve against silentstars.dev and 404.
 */

/** Rewrite relative markdown links to point at the source repo on GitHub instead of
 *  this site's domain (README links to docs/other files 404 otherwise). */
export function rewriteRelativeLinks(markdown: string, repoUrl: string): string {
  return markdown.replace(
    /\[([^\]]+)\]\((?!https?:\/\/|mailto:|tel:|#)([^)\s]+)(\s+"[^"]*")?\)/g,
    (_match, text, path, title = '') => {
      const cleanPath = path.replace(/^\.?\//, '');
      return `[${text}](${repoUrl}/blob/HEAD/${cleanPath}${title})`;
    }
  );
}

/** Point relative <img src> at the raw file in the repo (a /blob/ URL is an HTML
 *  page, not an image). Markdown images never get here: readme-clean.ts strips them. */
export function rewriteRelativeImages(html: string, repoUrl: string): string {
  const raw = repoUrl.replace('https://github.com/', 'https://raw.githubusercontent.com/') + '/HEAD';
  return html.replace(
    /(<img\b[^>]*?\bsrc=)(["'])(?!https?:|\/\/|data:)([^"']+)\2/gi,
    (_match, head, quote, path) => `${head}${quote}${raw}/${path.replace(/^\.?\//, '')}${quote}`,
  );
}
