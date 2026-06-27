---
repo: "Dec18studios/Dec18-Plugin-Manager"
name: "Dec18-Plugin-Manager"
description: "Dec 18 Studios OFX Plugin Manager — Tauri 2 desktop app"
url: "https://github.com/Dec18studios/Dec18-Plugin-Manager"
language: "JavaScript"
languages: ["JavaScript", "Rust"]
languagePcts: [40, 24]
stars: 6
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-04-03T20:09:06Z"
lastCommitAt: "2026-06-27T00:34:14Z"
lastReleaseAt: "2026-05-28T13:30:35Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 80
undervaluedScore: 48
maintainers: ["Dec18studios"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a3ae9eb80ebd5ece07e41f2c4ddfbb991be07a7a865c00ed0df463e5d873c4e/Dec18studios/Dec18-Plugin-Manager"
---

# Dec 18 Studios Plugins

A Tauri 2 desktop manager for Dec 18 Studios OFX plugins. Installs, updates, and manages plugin bundles across macOS, Windows, and Linux.

## Features

- Catalog-driven plugin browsing with categories, search, and sorting
- One-click install/update/uninstall for OFX plugin bundles
- SHA256 verification of all downloaded packages
- Host process detection (blocks install while Resolve/Nuke are running)
- Backup and rollback on failed updates
- Auto-updater for the manager app itself
- Donation link integration

## Current Plugins

- **PhotoChemist** — 43-band spectral film emulation (CUDA, Metal, OpenCL)

## Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [Rust](https://www.rust-lang.org/tools/install) toolchain
- Platform build tools (Xcode CLI on macOS, Visual Studio Build Tools on Windows)

### Development

```bash
npm install
npm run tauri:dev
```

### Production Build

```bash
npm run tauri:build
```

## GitHub Setup

### 1. Create the repository

Create `dec18studios/Dec18-Plugin-Manager` on GitHub.

### 2. Enable GitHub Pages

Settings > Pages > Source: **GitHub Actions**.

### 3. Generate Tauri signing keys

```bash
npx…
