---
repo: "seifip/kilobat-cli"
name: "kilobat-cli"
description: "macOS network diagnostics CLI and MCP server"
readmeQualityOk: true
url: "https://github.com/seifip/kilobat-cli"
homepage: "https://kilobat.app"
language: "Swift"
languages: ["Swift"]
languagePcts: [99]
topics: ["ai-agents", "cli", "macos", "mcp", "mcp-server", "model-context-protocol", "network-diagnostics", "network-monitor", "swift", "wifi"]
stars: 1
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-27T22:53:53Z"
lastCommitAt: "2026-11-05T07:17:58Z"
lastReleaseAt: "2026-10-31T15:03:30Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 87
undervaluedScore: 55
maintainers: ["seifip"]
openGraphImageUrl: "https://opengraph.githubassets.com/73943bbe182888187ae69046efddb5f7cd7c437a596008f5e0f8f948fad6274a/seifip/kilobat-cli"
promoted: true
postedAt: "2026-10-30T11:11:14.626Z"
---

# Kilobat CLI

Network diagnostics for macOS, in your terminal and your AI agent. Find which apps use your connection, diagnose Wi-Fi and DNS problems, trace a failing API request, and keep your Mac awake through a long build.

Free and open source under [GPL-3.0-only](https://github.com/seifip/kilobat-cli/blob/HEAD/LICENSE). No account or telemetry. The CLI runs on its own; the optional [Kilobat Mac app](https://kilobat.app) adds a menu-bar interface, recorded history, and network filtering.

[Quick start](#quick-start) · [Mac app](#kilobat-for-mac) · [AI agents](#use-with-ai-agents-mcp) · [Build from source](#build-from-source) · [Tool reference](#mcp-tool-reference)

## Quick start

Requires **macOS 14 or later**. Homebrew builds from source and requires **Xcode 16 or newer**.

```sh
brew install seifip/kilobat/kilobat
kilobat diagnose
```

Homebrew also installs `kb` as a short alias for `kilobat`.

| Find out… | Command |
| --- | --- |
| Which apps are using the connection | `kilobat status --watch` |
| Why a host or API won't connect | `kilobat why api.github.com` |
| How strong the Wi-Fi signal is | `kilobat wifi` |
| Which Wi-Fi channels are less crowded | `kilobat…
