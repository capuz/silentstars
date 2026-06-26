---
repo: "profbernardoj/morpheus-skill"
name: "morpheus-skill"
description: "Decentralized AI inference for any agent platform. GLM-5, Gemma 4, GLM-4.7-flash, 30+ models via staked MOR tokens. Works with OpenClaw, Hermes Agent, IronClaw, and any platform that supports agentskills.io."
url: "https://github.com/profbernardoj/morpheus-skill"
language: "JavaScript"
languages: ["JavaScript", "Python", "Shell"]
languagePcts: [54, 21, 20]
stars: 20
forks: 4
openIssues: 1
closedIssues: 4
watchers: 0
contributors: 8
recentReleases: 10
createdAt: "2026-04-10T15:48:21Z"
lastCommitAt: "2026-06-26T23:40:37Z"
lastReleaseAt: "2026-06-26T21:32:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 75
undervaluedScore: 51
maintainers: ["profbernardoj"]
openGraphImageUrl: "https://opengraph.githubassets.com/366cf45349083efe322bf14d369131d06c7364efa8f91855ec7784c13a995498/profbernardoj/morpheus-skill"
---

# Morpheus Skill (Canonical)

> The canonical Morpheus decentralized AI agent skill for OpenClaw

## Overview

This is the default/canonical flavor of the EverClaw ecosystem. It provides the full Morpheus infrastructure without domain-specific customization.

**Domain:** morpheusclaw.com  
**Default Model:** GLM-5 (via Morpheus decentralized inference)

## This Is The Source

The `morpheus-skill` repo is the monorepo that contains:
- `packages/core/` — All shared Morpheus infrastructure
- `flavors/` — Per-flavor configs and persona files
- `scripts/` — Ecosystem management scripts

All other flavor repos are composed from `packages/core/` + their specific `flavors/<name>/` directory.

## License

MIT

---

> **Note:** This repository is automatically composed from the [morpheus-skill monorepo](https://github.com/profbernardoj/morpheus-skill). Please submit PRs and issues against the monorepo, not this flavor repo.
// trigger rebuild
