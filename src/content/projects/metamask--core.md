---
repo: "MetaMask/core"
name: "core"
description: "This monorepo is a collection of packages used across multiple MetaMask clients"
readmeQualityOk: true
url: "https://github.com/MetaMask/core"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
stars: 422
forks: 313
openIssues: 319
closedIssues: 669
watchers: 70
contributors: 252
recentReleases: 0
createdAt: "2018-05-29T12:55:25Z"
lastCommitAt: "2026-11-05T13:59:59Z"
lastReleaseAt: "2018-08-01T01:34:18Z"
status: "thriving"
tags: ["legacy_hero", "funded", "fork_magnet"]
healthScore: 92
undervaluedScore: 38
maintainers: ["cryptodev-2s", "Prithpal-Sooriya", "Mrtenz"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c8d4943bd2d5a3e6a9e3cdfe03795f905e39fcfdba9972c070eb7763e38e2d1/MetaMask/core"
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

By default, all stable skills that support Core are installed when you run `yarn skills`.
Set `SKILLS_AUTO_UPDATE=1` to opt into best-effort…
