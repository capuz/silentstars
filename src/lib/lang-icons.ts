// Devicon language icons, vendored in public/icons/lang/ (MIT, see LICENSE-devicon.txt)
// so pages don't fetch one SVG per language from a third-party CDN.
export const DEVICON_SLUGS: Record<string, string> = {
  TypeScript: 'typescript', JavaScript: 'javascript', Python: 'python', Go: 'go',
  Rust: 'rust', Ruby: 'ruby', Java: 'java', Kotlin: 'kotlin', Swift: 'swift',
  C: 'c', 'C++': 'cplusplus', 'C#': 'csharp', PHP: 'php', Dart: 'dart',
  Scala: 'scala', Haskell: 'haskell', Lua: 'lua', Elixir: 'elixir', Zig: 'zig',
  Shell: 'bash', HTML: 'html5', CSS: 'css3', Vue: 'vuejs', Svelte: 'svelte',
  Clojure: 'clojure', Julia: 'julia', Nim: 'nim',
};

/** URL of the language icon, or null when we don't ship one. `prefix` is the
 *  path to the site root: BASE_URL for normal pages, a relative path for pages
 *  opened over file:// (og-card screenshots). */
export function langIconUrl(language: string | null | undefined, prefix: string = import.meta.env.BASE_URL): string | null {
  const slug = language ? DEVICON_SLUGS[language] : undefined;
  return slug ? `${prefix}icons/lang/${slug}.svg` : null;
}
