---
repo: "mtgto/Fomalhaut2"
name: "Fomalhaut2"
description: "macOS comic viewer"
readmeQualityOk: true
url: "https://github.com/mtgto/Fomalhaut2"
language: "Swift"
languages: ["Swift", "TypeScript", "Rich Text Format"]
languagePcts: [57, 21, 21]
topics: ["macos", "comic-reader"]
stars: 57
forks: 4
openIssues: 5
closedIssues: 11
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-10-11T12:06:00Z"
lastCommitAt: "2026-11-07T10:37:11Z"
lastReleaseAt: "2020-12-20T09:55:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 30
maintainers: ["mtgto", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8b612adddd72cb251317846c8962dbd37f3fb8072fe37abe2f86986a8a80546/mtgto/Fomalhaut2"
---

# Fomalhaut2

A comic viewer for macOS.

- A native macOS GUI application
- Collect your own comics (zip/cbz, rar/cbr, 7z/cb7, PDF)
- See your own comics via web browser

## Install

You can choose Mac App Store or download from github release page.

### 1. Mac App Store (Recommended)

### 2. Manual Download

NOTE: manual download app does not have a feature `Check for update`.

1. Download .dmg file from [Release page](https://github.com/mtgto/Fomalhaut2/releases).
2. Copy `Fomalhaut2.app` to `/Applications` (or you want to).

## Uninstall

1. Move `Fomalhaut2.app` to Trash.
2. Delete `~/Library/Containers/net.mtgto.Fomalhaut2`.

## Screenshots

NOTE: This sample comic is under Public Domain. You can view via https://digitalcomicmuseum.com/index.php?dlid=11721

## Development

Install node.js and pnpm.

```console
cd web
pnpm install
pnpm build
```

## System requirements

- macOS 12+

## Roadmap

- [x] Web server
  - [x] Access comics via web browser (PC / smartphone)
- [ ] Support more file types
  - [x] zip/cbz
  - [x] PDF
  - [x] rar/cbr
  - [x] 7z/cb7
- [x] QuickLook Thumbnail Extension

## Contributing

Use [swift-format](https://github.com/apple/swift-format).

## Authors…
