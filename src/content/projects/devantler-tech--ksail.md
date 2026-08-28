---
repo: "devantler-tech/ksail"
name: "ksail"
description: "All-in-one Kubernetes SDK: create, manage, and operate clusters across distributions (Kind, K3d, Talos, VCluster) with built-in GitOps, secrets, AI assistant, and MCP server. Only requires Docker or a Cloud Provider."
readmeQualityOk: true
url: "https://github.com/devantler-tech/ksail"
homepage: "https://ksail.devantler.tech/"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["cli", "github-copilot", "kubernetes", "mcp-server", "tui", "chat", "developer-tool", "gitops", "provisioner", "argocd"]
stars: 165
forks: 11
openIssues: 105
closedIssues: 1260
watchers: 3
contributors: 8
recentReleases: 0
createdAt: "2023-12-31T16:17:15Z"
lastCommitAt: "2026-08-28T14:35:04Z"
lastReleaseAt: "2024-01-09T01:26:48Z"
status: "thriving"
tags: ["needs_contributors", "funded", "community_hub"]
healthScore: 98
undervaluedScore: 44
maintainers: ["dependabot[bot]", "devantler", "ksail-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/41e64427eb3ce46bd57af633f75be0f96c52a4bfa42dee99a73ea68c8e260e1d/devantler-tech/ksail"
fundingLinks: ["GITHUB:https://github.com/devantler"]
discussionCount: 132
---

# 🛥️🐳 KSail

KSail bundles common Kubernetes tooling into a single binary. Spin up local clusters, deploy workloads, and operate cloud-native stacks across distributions and providers through a CLI, VS Code extension, AI chat TUI, or MCP server — with **only Docker or access to a Cloud Provider required**.

📖 **Full documentation:** <https://ksail.devantler.tech>

## Quick Install

```bash
# Linux / macOS (checksum-verified release)
curl -fsSL https://github.com/devantler-tech/ksail/releases/latest/download/install.sh | sh

# macOS (Homebrew)
brew install --cask devantler-tech/tap/ksail
```

See the [Installation Guide](https://ksail.devantler.tech/installation/) for binary downloads and more options.

## AI Assistant Plugins

Install the ksail plugin for [GitHub Copilot CLI](https://docs.github.com/en/copilot/how-tos/copilot-cli) or [Claude Code](https://code.claude.com/docs/en/discover-plugins) to auto-register ksail's MCP server and a ksail expertise skill.

**Copilot CLI:**

```bash
copilot plugin marketplace add devantler-tech/ksail
copilot plugin install ksail
```

**Claude Code:**

```text
/plugin marketplace add devantler-tech/ksail
/plugin install ksail@ksail
```…
