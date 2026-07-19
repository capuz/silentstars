---
repo: "vanillagreencom/vstack"
name: "vstack"
description: "Skills, agents, hooks. Cross-harness. With a side of Pi."
readmeQualityOk: true
url: "https://github.com/vanillagreencom/vstack"
homepage: "http://vanillagreen.com"
language: "GLSL"
languages: ["GLSL", "TypeScript"]
languagePcts: [35, 23]
stars: 43
forks: 14
openIssues: 7
closedIssues: 362
watchers: 0
contributors: 10
recentReleases: 1
createdAt: "2026-03-24T17:37:39Z"
lastCommitAt: "2026-07-19T06:13:42Z"
lastReleaseAt: "2026-04-26T05:15:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 46
maintainers: ["bmethod", "bernardobastardo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e09b500337d2f70c17a9c806258ebb4512fe77e74eb05d8be571936f0215384/vanillagreencom/vstack"
---

# vstack

Cross-harness package manager for AI coding tools.

Author skills, agents, and hooks once. Install them into Claude Code, Cursor, OpenCode, Codex, or Pi from one CLI.

---

## What It Is

A package manager for AI coding workflows. Skills, agents, and hooks live in a source repo; vstack translates them for whichever tool you use. Install per project or for the whole machine, customize freely, and updates won't overwrite your edits.

## Highlights

- **One source, many tools.** Claude Code, Cursor, OpenCode, Codex, Pi.
- **Per project or global.** One workspace or every project on the machine.
- **Customizable.** Tweak agents and skills per project — edits survive updates.
- **Skill dependencies.** Skills declare what they need; everything installs together.
- **Swappable catalogs.** Use this catalog or any compatible repo.
- **Fast TUI.** Native Rust interface for browsing, installing, and managing packages.

## Quick Start

Requires Rust. If you don't have it, install [rustup](https://rustup.rs) (Linux/macOS/WSL):

```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

Then, open new terminal and:

```bash
cargo install --git…
