---
repo: "haneoka-gakuen/haneoka"
name: "haneoka"
description: "Haneoka — the BanG Dream! Our Notes database, tools and community"
readmeQualityOk: true
url: "https://github.com/haneoka-gakuen/haneoka"
homepage: "https://haneoka.org"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [71, 20]
topics: ["bangdream", "ournotes", "bdon", "astro", "cloudflare-workers", "database", "lit"]
stars: 21
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-29T16:01:04Z"
lastCommitAt: "2026-10-11T10:15:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 42
maintainers: ["panxuc", "doublequiet-on"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1284192270/a519628d-d16a-4cf5-a232-597c0b8cd52d"
discussionCount: 1
---

# Haneoka

Unofficial resource archive and browser viewer for _BanG Dream! Our Notes_.

The production UI is a root-level Astro application with small, route-scoped
Lit workspaces. Shared shell and document components live in `src/components`,
interactive workspaces in `src/lit`, and the Material Design 3 styles in
`src/styles`.

- [Catalog](https://haneoka.org/catalog)
- Searchable multilingual game data
- Audio, video, comic, Live2D, story, and asset viewers
- Interactive chart and story players
- ADV story playback and authoring
- Sonolus-compatible play, watch, preview, and tutorial engines
- Accounts and community features

## Development

Requirements:

- Node.js 24 and Corepack
- Python 3.13, FFmpeg, and `vgmstream-cli` when processing resources
- A modern WebGL2 browser for interactive renderers

```sh
corepack enable
pnpm install --frozen-lockfile
pnpm typecheck
pnpm lint
HANEOKA_CUBISM_RUNTIME_POLICY=optional pnpm build
```

Run the application and Worker locally:

```sh
cp .dev.vars.example .dev.vars
pnpm db:schema:bootstrap:local
pnpm dev:worker
pnpm dev
```

For a static build with the local catalog preview server:

```sh
pnpm build
HOST=127.0.0.1 PORT=3000 pnpm…
