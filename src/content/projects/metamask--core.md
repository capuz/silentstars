---
repo: "MetaMask/core"
name: "core"
description: "This monorepo is a collection of packages used across multiple MetaMask clients"
readmeQualityOk: true
url: "https://github.com/MetaMask/core"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 421
forks: 311
openIssues: 319
closedIssues: 670
watchers: 69
contributors: 256
recentReleases: 0
createdAt: "2018-05-29T12:55:25Z"
lastCommitAt: "2026-11-18T11:55:58Z"
lastReleaseAt: "2018-08-01T01:34:18Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 38
maintainers: ["cursor[bot]", "abretonc7s", "jpuri"]
openGraphImageUrl: "https://opengraph.githubassets.com/f20b2929d966d4721269321ac72e9480d0457aa452025b2f69dc02a5c9358559/MetaMask/core"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/metamask"]
---

# Core Monorepo

This monorepo is a collection of packages used across multiple MetaMask clients (e.g. [`metamask-extension`](https://github.com/MetaMask/metamask-extension/), [`metamask-mobile`](https://github.com/MetaMask/metamask-mobile/)).

## Contributing

See the [Contributor Documentation](https://github.com/MetaMask/core/blob/HEAD/docs) for help on:

- Setting up your development environment
- Working with the monorepo
- Testing changes in clients
- Issuing new releases
- Creating a new package

## Installation/Usage

Each package in this repository has its own README where you can find installation and usage instructions. See `packages/` for more.

## Agent skills

This repo can install MetaMask agent skills for Claude, Cursor, and Codex/OpenAI.
`yarn setup` keeps the public [`MetaMask/skills`](https://github.com/MetaMask/skills)
cache available through the shared `@metamask/skills` CLI. Run `yarn skills` any
time to install or refresh the gitignored generated skills under `.claude/skills/`,
`.cursor/rules/`, and `.agents/skills/`.
