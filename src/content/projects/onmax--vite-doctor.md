---
repo: "onmax/vite-doctor"
name: "vite-doctor"
description: " Catch the AI slop your agents ship. "
readmeQualityOk: true
url: "https://github.com/onmax/vite-doctor"
homepage: "https://vite-doctor.onmax.me"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
topics: ["ai", "nitro", "nuxt", "vite", "vue", "vuejs"]
stars: 32
forks: 0
openIssues: 2
closedIssues: 14
watchers: 1
contributors: 2
recentReleases: 4
createdAt: "2026-05-10T16:15:25Z"
lastCommitAt: "2026-11-17T14:36:44Z"
lastReleaseAt: "2026-09-05T06:53:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 48
maintainers: ["onmax", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b924809bfa8639d99210618a16011ccfa4625a85a437bcdf3446cd2e43c296fa/onmax/vite-doctor"
---

## Usage

Run Vite Doctor from the project root:

```bash
pnpm dlx vite-doctor .
```

Vite Doctor reads app code, build config, project metadata, and server handlers to catch framework bugs before review. It resolves the installed Nuxt, Nitro, and H3 runtime graph and picks diagnostics that match the versions the framework actually loads.

Need a narrower Doctor Run? Select exact presets, one Rule, or a framework override:

```bash
pnpm dlx vite-doctor . --extends vite/recommended,vue/recommended
pnpm dlx vite-doctor . --rules nuxt/fetch/no-raw-fetch-in-setup
pnpm dlx vite-doctor . --framework nitro
```

`--changed` reports Diagnostics owned by staged, unstaged, or untracked lines, exactly as a full run filtered to those lines would. Rules that report only into their own file run on changed files only; Rules that report across files keep whole-project context. Diagnostics without a source range are included when the file they are anchored to changed:

```bash
pnpm dlx vite-doctor . --changed
pnpm dlx vite-doctor . --since origin/main
```

Doctor recognizes coding-agent runtimes through Vercel's agent catalog and returns a compact agent report when output is non-interactive. An…
