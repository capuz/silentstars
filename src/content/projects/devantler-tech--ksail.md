---
repo: "devantler-tech/ksail"
name: "ksail"
description: "All-in-one Kubernetes SDK: create, manage, and operate clusters across distributions (Kind, K3d, Talos, VCluster) with built-in GitOps, secrets, AI assistant, and MCP server. Only requires Docker or a Cloud Provider."
url: "https://github.com/devantler-tech/ksail"
homepage: "https://ksail.devantler.tech/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["cli", "github-copilot", "kubernetes", "mcp-server", "tui", "chat", "developer-tool", "gitops", "provisioner", "argocd"]
stars: 148
forks: 10
openIssues: 24
closedIssues: 988
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2023-12-31T16:17:15Z"
lastCommitAt: "2026-06-24T06:38:25Z"
lastReleaseAt: "2024-01-09T01:26:48Z"
status: "thriving"
tags: ["needs_contributors", "funded", "community_hub"]
healthScore: 99
undervaluedScore: 46
maintainers: ["dependabot[bot]", "devantler", "ksail-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d100cea0ca94873918558dd5d2bd51cad82215ff62da38af2fdd2b89f69dbad5/devantler-tech/ksail"
fundingLinks: ["GITHUB:https://github.com/devantler"]
discussionCount: 132
---

# 🛥️🐳 KSail

KSail bundles common Kubernetes tooling into a single binary. Spin up local clusters, deploy workloads, and operate cloud-native stacks across distributions and providers through a CLI, VS Code extension, AI chat TUI, or MCP server — with **only Docker or access to a Cloud Provider required**.

📖 **Full documentation:** <https://ksail.devantler.tech>

## Quick Install

```bash
# macOS / Linux (Homebrew)
brew install --cask devantler-tech/tap/ksail

# Go (1.26.1+)
go install github.com/devantler-tech/ksail/v7@latest
```

See the [Installation Guide](https://ksail.devantler.tech/installation/) for binary downloads and more options.

## AI Assistant Plugins

Install the ksail plugin for [GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) or [Claude Code](https://docs.claude.com/en/docs/claude-code/plugins) to auto-register ksail's MCP server and a ksail expertise skill.

**Copilot CLI:**

```bash
copilot plugin marketplace add devantler-tech/ksail
copilot plugin install ksail
```

**Claude Code:**

```text
/plugin marketplace add devantler-tech/ksail
/plugin install ksail@ksail
```

Requires `ksail` on `PATH`.

## Quick Start

```bash
ksail…
