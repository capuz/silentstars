---
repo: "SableClient/sable-next"
name: "sable-next"
description: " Sable rewrite in Rust and Svelte next.sable.moe, Mirrored from https://git.sable.moe/SableClient/sable-next"
readmeQualityOk: true
url: "https://github.com/SableClient/sable-next"
language: "TypeScript"
languages: ["TypeScript", "Rust", "Svelte"]
languagePcts: [50, 24, 24]
stars: 22
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 22
recentReleases: 0
createdAt: "2026-09-11T20:26:49Z"
lastCommitAt: "2026-10-11T10:15:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["eleboucher", "serialuart", "mini-bomba"]
openGraphImageUrl: "https://opengraph.githubassets.com/36137aac1c364d043b8aff10eb5c833e339d6a162e66aedbc210847d5091fb69/SableClient/sable-next"
---

# <img src="src/lib/assets/res/svg/logo.svg" alt="Sable" width="32" height="32"> Sable v2

A from-scratch rewrite of [Sable](https://github.com/SableClient/Sable), with Svelte and Rust.

Join the Matrix space at [#sable:sable.moe](https://matrix.to/#/#sable:sable.moe) to discuss the project and meowing.

The development web build is deployed to [next.sable.moe](https://next.sable.moe/) and [dev.sable.moe](https://dev.sable.moe/).
See [`infra/README.md`](https://github.com/SableClient/sable-next/blob/HEAD/infra/README.md) for the Cloudflare Worker and OpenTofu
setup.

## Getting started

[mise](https://mise.jdx.dev) manages Node, pnpm, Rust, and other tooling.

```bash
mise install
mise run setup    # pnpm install + git hooks
mise run dev      # SvelteKit on http://localhost:3000
```

`mise run dev` builds the development WASM bundle first. While editing Rust in
another terminal, run `mise run wasm:watch`; Vite reloads after each regenerated
bundle. Production builds generate the optimised WASM bundle automatically.

`pnpm test:e2e` generates its WASM bundle in `src/generated/wasm-e2e/`, so it
can run while the development server is using `src/generated/wasm/`.

Run `mise tasks`…
