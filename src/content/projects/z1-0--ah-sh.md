---
repo: "z1-0/ah.sh"
name: "ah.sh"
description: "Ad-hoc development shell manager powered by Nix"
readmeQualityOk: true
url: "https://github.com/z1-0/ah.sh"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
topics: ["cli", "developer-tools", "development-environment", "nix", "nix-flake", "rust", "devenv", "nixos", "nix-develop", "reproducible-environments"]
stars: 115
forks: 4
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 1
recentReleases: 1
createdAt: "2026-01-08T11:09:27Z"
lastCommitAt: "2026-11-03T11:15:45Z"
lastReleaseAt: "2026-08-20T01:22:41Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 20
maintainers: ["z1-0", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4dbc79660029f1969b328cebc395911f7dd4fc8601aadda947d7c082f1ca5925/z1-0/ah.sh"
---

# ah.sh

_Ad-hoc development shell manager powered by Nix_

[Features](#features) • [Installation](#installation) • [Quick Start](#quick-start) • [Usage](#usage) • [Configuration](#configuration)

Per-project development shells in one command. `ah` generates a Nix flake on the fly, manages sessions for quick restore, and supports 60+ languages. No `flake.nix` authoring required.

```bash
# Need Rust and Go? Done.
ah rust go
```

## Features

- **Fast**: type `ah rust` and you're in a shell with the Rust toolchain ready
- **Multi language**: combine multiple languages in one shell
- **Language aliases**: short names for languages, e.g. `py` for Python, `ts` for TypeScript
- **Community-powered**: templates from [devenv](https://devenv.sh) or [dev-templates](https://github.com/the-nix-way/dev-templates), no setup boilerplate required
- **Session management**: no rebuild, quick restore, full visibility with GC pinning
- **Shell completions**: Bash, Zsh, Fish, Elvish, and PowerShell

## Installation

> [!TIP]
> Configure the **[Binary cache](#binary-cache)** before installing to avoid compiling the project from source.

### Prerequisites

[Nix](https://nixos.org) with Flakes enabled…
