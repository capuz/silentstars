---
repo: "effect-app/libs"
name: "libs"
description: "The core libraries to build apps with Effect"
url: "https://github.com/effect-app/libs"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 74
forks: 7
openIssues: 20
closedIssues: 25
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2021-05-30T10:35:43Z"
lastCommitAt: "2026-06-26T23:42:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 90
undervaluedScore: 46
maintainers: ["patroza", "MakhBeth", "jfet97"]
openGraphImageUrl: "https://opengraph.githubassets.com/8cce11e8c4c057c732c365eb3781629515c14122719c8069c7f8c32f1b7aad13/effect-app/libs"
fundingLinks: ["GITHUB:https://github.com/patroza"]
---

# Practical use of Effect-TS

This is an opinionated library for full-stack [Effect-TS](https://github.com/Effect-TS/core).
(See repositories for more info and discord link, articles, youtube videos, etc).

WIP [docs](https://github.com/effect-ts-app/docs)

See https://github.com/effect-ts-app/boilerplate for a sample app use.

## Package boundaries

- `effect-app`: service contracts and runtime-agnostic base logic.
- `@effect-app/infra`: backend / Node adapters.
- `@effect-app/vue`: Vue / browser adapters.

Migration targets introduced in this repo include:

- `@effect-app/infra/Emailer/service` -> `effect-app/Emailer`
- `@effect-app/infra/QueueMaker/service` -> `effect-app/QueueMaker`
- `@effect-app/infra/Store/service` -> `effect-app/Store`
- `@effect-app/infra/Model/*` -> `effect-app/Model/*`
- `@effect-app/vue/runtime` -> `effect-app/runtime`
- `@effect-app/vue/toast` -> `effect-app/toast`
- `@effect-app/vue/withToast` -> `effect-app/withToast`

## Update Effect Subtree

`repos/effect` is a git subtree of `https://github.com/Effect-TS/effect-smol.git`.

Recommended (uses the currently pinned `effect` / `@effect/*` version from package.json):

```sh
pnpm subtree:effect
```

Or…
