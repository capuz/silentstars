---
repo: "idindrakusuma/idindrakusuma.github.io"
name: "idindrakusuma.github.io"
description: "My brand new Personal Website ✨ Powered by Next.js and built by Claude & Codex 👾"
readmeQualityOk: true
url: "https://github.com/idindrakusuma/idindrakusuma.github.io"
homepage: "https://indrakusuma.web.id"
language: "TypeScript"
languages: ["TypeScript", "MDX"]
languagePcts: [48, 32]
topics: ["blog", "nextjs", "personal-website"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 14
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2017-06-08T07:59:44Z"
lastCommitAt: "2026-09-29T10:04:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 96
undervaluedScore: 76
maintainers: ["idindrakusuma", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/a01d9a7028f5fa28e3b911a3496a8086f292db455a82010e4acbe6583b77fe52/idindrakusuma/idindrakusuma.github.io"
---

# indrakusuma.web.id

Personal site of Indra Kusuma. Next.js 15 App Router with `output: 'export'`, so
the whole site builds to static HTML for GitHub Pages. Tailwind v4 over CSS custom
properties, TypeScript strict. Fonts, icons and images are self-hosted; the only
third-party runtime code is the analytics tag.

[CONTEXT.md](https://github.com/idindrakusuma/idindrakusuma.github.io/blob/HEAD/CONTEXT.md) defines the domain terms — Section, Marquee, Post — and
is the place to look before naming anything new.

## Setup

```bash
corepack enable   # pins pnpm to the version in `packageManager`
pnpm install
```

pnpm is not a preference here — `preinstall` refuses any other package manager,
and `.nvmrc` pins Node. Both are there because `packageManager` alone declared
pnpm for months while the committed lockfile was npm's.

## Commands

| | |
| --- | --- |
| `pnpm dev` | Dev server on :3000 |
| `pnpm build` | Static export into `out/` |
| `pnpm lint` | oxlint |
| `pnpm typecheck` | `tsc --noEmit` |
| `pnpm test` | Clap counter rules |
| `pnpm assets` | Rebuild every generated asset |
| `pnpm new-post` | Scaffold a new blog post |
| `pnpm assets:posts` | Vendor blog images and measure…
