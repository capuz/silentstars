---
repo: "BitGo/BitGoWASM"
name: "BitGoWASM"
description: "WebAssembly SDK components for BitGo"
readmeQualityOk: true
url: "https://github.com/BitGo/BitGoWASM"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [54, 44]
stars: 14
forks: 3
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 25
recentReleases: 1
createdAt: "2025-10-09T13:02:49Z"
lastCommitAt: "2026-10-22T08:51:42Z"
lastReleaseAt: "2026-07-28T09:25:32Z"
status: "thriving"
tags: []
healthScore: 97
undervaluedScore: 73
maintainers: ["veetragjain", "OttoAllmendinger", "johnoliverdriscoll"]
openGraphImageUrl: "https://opengraph.githubassets.com/802d0fd850813f6560930c5b881403c7329f3e45047376fcf0ea6e386787c9f9/BitGo/BitGoWASM"
---

# BitGoWASM

This repo is the home of BitGo's WASM libraries.

# Dependencies

- [Rust](https://www.rust-lang.org/) nightly
- [wasm-pack](https://rustwasm.github.io/wasm-pack/) (install with `cargo install wasm-pack`)
- [Node.js](https://nodejs.org/en/)

# Developer Setup

```bash
npm install
```

This will:

- Install all dependencies
- Set up pre-commit hooks via Husky

Pre-commit hooks automatically run on staged files:

- **JS/TS**: Prettier formatting + ESLint
- **Rust**: `cargo fmt` + `cargo clippy`

# Package Management

This monorepo uses [Lerna](https://lerna.js.org/) for managing package versions and publishing to npm.

## Versioning

Packages use **independent versioning** with [Conventional Commits](https://www.conventionalcommits.org/) to automatically determine version bumps:

- `fix:` commits trigger patch releases (0.0.x)
- `feat:` commits trigger minor releases (0.x.0)
- `BREAKING CHANGE:` in commit body triggers major releases (x.0.0)

## Publishing

Publishing is automated via GitHub Actions when changes are pushed to `master` or `beta` branches. The workflow:

1. Builds all packages
2. Runs tests
3. Uses Lerna to analyze commits since last release
4.…
