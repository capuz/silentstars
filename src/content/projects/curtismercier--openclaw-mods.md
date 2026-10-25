---
repo: "curtismercier/openclaw-mods"
name: "openclaw-mods"
description: "Community patches, configs, and power-user mods for OpenClaw — per-agent compaction, context management, and more"
readmeQualityOk: true
url: "https://github.com/curtismercier/openclaw-mods"
homepage: "https://github.com/openclaw/openclaw"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["ai-agents", "compaction", "configuration", "llm", "multi-agent", "openclaw", "patches"]
stars: 8
forks: 1
openIssues: 2050
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-12T10:43:29Z"
lastCommitAt: "2026-10-25T22:11:21Z"
status: "thriving"
tags: ["solo_builder", "under_pressure"]
healthScore: 70
undervaluedScore: 50
maintainers: ["curtismercier"]
openGraphImageUrl: "https://opengraph.githubassets.com/b38ff73ac6c097b81a5ab7d07e7e6abc6087c60c6b217fcd5d2637bb1b6ea567/curtismercier/openclaw-mods"
---

# openclaw-mods

Community patches, configs, and power-user mods for [OpenClaw](https://github.com/openclaw/openclaw) — the open-source AI agent framework.

## What's here

Patches and modifications that extend OpenClaw beyond its current release. Each mod is self-contained with apply/revert scripts and version tracking, so you can use them safely alongside the official release cycle.

| Mod | Description | Status |
|-----|-------------|--------|
| [tui-theme](https://github.com/curtismercier/openclaw-mods/blob/HEAD/patches/tui-theme/) | Runtime TUI color theming — swap the hardcoded palette without rebuilding | ✅ Tested on v2026.2.16 |
| ~~[per-agent-compaction](https://github.com/curtismercier/openclaw-mods/blob/HEAD/patches/per-agent-compaction/)~~ | Per-agent compaction overrides | 🔀 Superseded by [PR #19329](https://github.com/openclaw/openclaw/pull/19329) |
| [upstream-monitor](https://github.com/curtismercier/openclaw-mods/blob/HEAD/.github/workflows/upstream-monitor.yml) | GitHub Actions workflow that tracks upstream OpenClaw commits, releases, and your open PRs | Active |

## Why this exists

OpenClaw moves fast, but sometimes you need a feature before it lands upstream.…
