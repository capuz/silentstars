---
repo: "noshiro-pf/mono"
name: "mono"
description: "monorepo for TypeScript projects"
readmeQualityOk: true
url: "https://github.com/noshiro-pf/mono"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
stars: 6
forks: 1
openIssues: 295
closedIssues: 343
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2020-08-05T13:50:53Z"
lastCommitAt: "2026-11-04T13:04:55Z"
lastReleaseAt: "2026-08-10T19:35:09Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 81
maintainers: ["noshiro-pf", "noshiro-repo-automation-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b4823ed092ec320b0b35c688ebb2b4ae54b5dd5a0daa3e01e75ea95e17df78d/noshiro-pf/mono"
fundingLinks: ["GITHUB:https://github.com/noshiro-pf"]
---

# mono

A monorepo for TypeScript projects: published libraries, applications, internal
tooling, and the Zenn articles published at <https://zenn.dev/noshiro_piko>.

## Setup

**Node and pnpm come from the repository, not from your shell's defaults.**
`tools/configs/node-support.json` is the single source of truth for the three
Node versions that matter here, and `pnpm run check:root:node-support` is what
keeps `engines.node`, `volta.node` and the compatibility matrix agreeing with
it:

| version           | what it is                                     |
| :---------------- | :--------------------------------------------- |
| `targets.current` | what a contributor builds on, and `volta.node` |
| `targets.lts`     | what is tested                                 |
| `targets.minimum` | the floor `engines.node` promises to consumers |

```sh
# Node: whatever pins it for you, at the version volta.node names
volta install node          # or: fnm use, nvm install, asdf …
corepack enable             # pnpm, at the version packageManager names

pnpm install
```

`packageManager` in the root `package.json` pins pnpm exactly, so `corepack`
is enough; installing pnpm globally works too as…
