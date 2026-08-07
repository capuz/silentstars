---
repo: "hashiiiii/PrefabLens"
name: "PrefabLens"
description: "Human-readable diffs for UnityYAML assets."
readmeQualityOk: true
url: "https://github.com/hashiiiii/PrefabLens"
homepage: "https://prefablens.hashiiiii.workers.dev/"
language: "Zig"
languages: ["Zig", "TypeScript"]
languagePcts: [40, 38]
topics: ["cli", "code-review", "unity", "unity3d", "zig", "chrome-extension", "gamedev", "unity-editor", "unity-3d"]
stars: 25
forks: 1
openIssues: 13
closedIssues: 72
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-06-28T15:34:39Z"
lastCommitAt: "2026-08-07T05:14:45Z"
lastReleaseAt: "2026-07-17T14:01:40Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 96
undervaluedScore: 50
maintainers: ["hashiiiii", "renovate[bot]", "unidog-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/813316b757f2bbeecb1e706dcfb8646b1ab5c5959c31da3de097207d2c9ccd80/hashiiiii/PrefabLens"
---

# PrefabLens

PrefabLens shows human-readable diffs for UnityYAML assets.
It shows changes at the GameObject, component, and field level.

Try the [live demo](https://prefablens.hashiiiii.workers.dev/).

## Chrome extension (Chrome Web Store)

</p>

## Unity Editor

</p>

## CLI

</p>

## Components

| Directory | Description |
|---|---|
| `core/` | Diff engine in Zig (shared by the CLI and WASM) |
| `cli/` | `prefablens` command-line tool |
| `extension/` | Chrome extension for semantic diffs on GitHub pull requests |
| `editor/` | Unity Editor package for semantic UnityYAML diffs |
| `site/` | Live demo site on Cloudflare Workers, built from the CLI and extension artifacts |

## Installation

### Chrome extension (Chrome Web Store)

Install the extension from the [Chrome Web Store](https://chromewebstore.google.com/detail/dlhnalbfkikchkfedfneiimadommcnip).

### CLI

#### Homebrew (macOS / Linux)

```bash
brew install hashiiiii/tap/prefablens
```

#### Scoop (Windows)

```bash
scoop bucket add hashiiiii https://github.com/hashiiiii/scoop-bucket
scoop install prefablens
```

#### mise

```bash
mise use -g github:hashiiiii/PrefabLens
```

#### Manual

Download the zip for your…
