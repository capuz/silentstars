---
repo: "AndyAWD/antigravity-cli-statusline"
name: "antigravity-cli-statusline"
description: "A cross-platform statusline skill for Antigravity CLI. Displays API quota, token usage, Git branch, and system resources with multi-language support."
readmeQualityOk: true
url: "https://github.com/AndyAWD/antigravity-cli-statusline"
homepage: "https://andyawd.github.io/antigravity-cli-statusline/docs/workshop/"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["agy-cli", "antigravity-cli"]
stars: 100
forks: 13
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-05-26T11:42:47Z"
lastCommitAt: "2026-10-10T10:04:17Z"
lastReleaseAt: "2026-06-28T17:10:07Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 32
maintainers: ["AndyAWD", "gemini-cli", "andromarces"]
openGraphImageUrl: "https://opengraph.githubassets.com/36028ff5cc71fff71781403095551782b70b3685043b6f762579e8ac2c87603c/AndyAWD/antigravity-cli-statusline"
---

# Antigravity CLI Statusline Skill

[繁體中文](https://github.com/AndyAWD/antigravity-cli-statusline/blob/HEAD/README.zh-TW.md) | [简体中文](https://github.com/AndyAWD/antigravity-cli-statusline/blob/HEAD/README.zh-CN.md) | English

A multilingual, cross-platform skill that customizes the Antigravity CLI statusline (footer) — pick exactly which indicators to show, in any order you like, with smart line wrapping out of the box.

## Screenshots

### Windows

| English (us) | Traditional Chinese (zh-tw) | Simplified Chinese (zh-cn) | Japanese (jp) |
| :---: | :---: | :---: | :---: |
|  |  | *(supports zh-cn mode)* |  |

### macOS

| English (us) | Traditional Chinese (zh-tw) | Simplified Chinese (zh-cn) | Japanese (jp) |
| :---: | :---: | :---: | :---: |
|  |  | *(supports zh-cn mode)* |  |

## Installation

### Prerequisites

- **Node.js** (required) — the renderer scripts are pure `.mjs`. Without Node.js the statusline stays blank and `agy` will auto-disable it after repeated failures. The skill pre-checks this for you.
- **Git** (optional) — needed for `git-branch`, `vcs-dirty`, and `vcs-type` indicators.

### Step A — Install the plugin

```bash
agy plugin install…
