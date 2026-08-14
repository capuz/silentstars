---
repo: "sospedra/sospedra.me"
name: "sospedra.me"
description: "R💊"
readmeQualityOk: true
url: "https://github.com/sospedra/sospedra.me"
homepage: "https://sospedra.me"
language: "TypeScript"
languages: ["TypeScript", "CSS"]
languagePcts: [66, 26]
topics: ["personal-website", "nextjs", "react", "ssr", "vercel"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2017-01-23T19:24:37Z"
lastCommitAt: "2026-08-14T05:15:29Z"
lastReleaseAt: "2017-01-24T07:47:54Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 90
undervaluedScore: 80
maintainers: ["sospedra"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6b2677ef904c4b90a4709c9f5862c5b040ac63813595495e76373a74ad7da82/sospedra/sospedra.me"
---

[sospedra.me](https://sospedra.me)
==================================

The Rubén Sospedra's website source code.
Javascript hacker.
Fullstack engineer.

Next.js 16 app router. Node 24 and pnpm 11 (`asdf install`).
`pnpm dev` to develop. `pnpm build` to build. `pnpm test` runs the suites, tsc and biome.
Deps are pinned exact. `.npmrc` sets save-exact so `pnpm add` keeps it that way.

Layout: routes in `app/`, shared code in `services/`, content in `repo/`, tooling in `scripts/`.
Papers live in `repo/papers/<slug>/` as mdx plus metadata.json.
User-run tasks are cli commands: `pnpm cli` lists them.

*Handcrafted with <3 in Barcelona*
