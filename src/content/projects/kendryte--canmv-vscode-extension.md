---
repo: "kendryte/canmv-vscode-extension"
name: "canmv-vscode-extension"
description: "VS Code extension for CanMV K230 development and device workflow integration."
url: "https://github.com/kendryte/canmv-vscode-extension"
language: "TypeScript"
languages: ["TypeScript", "HTML"]
languagePcts: [60, 21]
stars: 6
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 7
createdAt: "2026-06-22T07:20:02Z"
lastCommitAt: "2026-06-28T01:34:27Z"
lastReleaseAt: "2026-06-28T01:36:56Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: ["kendryte747", "xelll"]
openGraphImageUrl: "https://opengraph.githubassets.com/b70dfb6a4171f1d4feb4fdafe2ec6ffd4545a239f0c9ae48e570127b24ee07eb/kendryte/canmv-vscode-extension"
---

# CanMV for Visual Studio Code

This repository contains the CanMV for Visual Studio Code extension and its native backend for CanMV K230 development. The extension lets you connect to a board, run MicroPython scripts, preview camera frames, manage files on the device, and use an integrated board terminal from Visual Studio Code.

The extension package README lives at [`extension/README.md`](extension/README.md). Visual Studio Code uses that file when building the VSIX/Marketplace package from `extension/package.json`. This root README is for repository-level setup and development.

## Repository Layout

| Path | Purpose |
| --- | --- |
| `extension/` | Visual Studio Code extension source, package metadata, webviews, resources, and packaged backend binaries. |
| `extension/src/` | TypeScript extension code. |
| `extension/webview/` | Preview, Threshold Editor, and terminal webview HTML. |
| `native/go/` | Native Go backend used by the extension to communicate with the board. |
| `scripts/` | Repository-level build, staging, and packaging helpers. |
| `manifest.json` | Release metadata for firmware, backend, and extension versions. |

## Features

- CanMV K230 board connection,…
