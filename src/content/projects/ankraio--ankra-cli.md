---
repo: "ankraio/ankra-cli"
name: "ankra-cli"
description: "Ankra-CLI for Kubernetes life-cycle management"
readmeQualityOk: true
url: "https://github.com/ankraio/ankra-cli"
homepage: "https://ankra.ai"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["ankra", "cli", "gitops", "kubernetes", "mcp", "platform-engineering"]
stars: 17
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2025-07-11T09:12:01Z"
lastCommitAt: "2026-10-25T22:11:57Z"
lastReleaseAt: "2026-02-02T17:41:32Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 65
maintainers: ["Myothas", "CodeStaple"]
openGraphImageUrl: "https://opengraph.githubassets.com/e6c4ac78f4387a6e96e04a7b49b476ebb08d1f48c4dca2e75631e8b79b37fe5a/ankraio/ankra-cli"
---

# Ankra CLI

A command-line interface for the [Ankra Platform](https://ankra.ai) that allows you to manage Kubernetes clusters, operations, stacks, manifests, addons - and tap into platform-wide insights.

Declare a cluster's platform in one file, apply it, and watch it converge:

When something is wrong, the same CLI reads the live cluster and explains it -
including where to fix it so the next deploy does not revert you:

local mock of the Ankra API - no account, no network, and every cluster, name
and answer in them is fabricated.</sub>

> 📖 **Documentation lives at [docs.ankra.ai](https://docs.ankra.ai).** The complete
> [CLI command reference](https://docs.ankra.ai/reference/cli) - every command, flag,
> and default - is generated from this repository on each release, so it never drifts
> from the shipped CLI. Start with the
> [CLI overview](https://docs.ankra.ai/integrations/ankra-cli) for installation and
> authentication guides. This README covers installing the CLI and developing it;
> for how to *use* any command, the docs are canonical.

## Installation

### Homebrew (Recommended for macOS and Linux)

```bash
brew install ankraio/tap/ankra
```

Upgrades then flow…
