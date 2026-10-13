---
repo: "kasper9n/ferrum"
name: "ferrum"
description: "Music library app for Mac, Linux and Windows"
readmeQualityOk: true
url: "https://github.com/kasper9n/ferrum"
homepage: "https://ferrum.kasper.space"
language: "Svelte"
languages: ["Svelte", "Rust", "TypeScript"]
languagePcts: [42, 33, 23]
topics: ["music", "music-player", "music-library", "linux", "windows", "macos", "electron", "napi"]
stars: 56
forks: 5
openIssues: 1
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2020-03-19T01:59:08Z"
lastCommitAt: "2026-10-13T10:58:59Z"
lastReleaseAt: "2021-08-08T20:43:07Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 88
undervaluedScore: 49
maintainers: ["kasper9n"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/248387414/09570474-0c43-470d-bfdd-150170338ad3"
fundingLinks: ["GITHUB:https://github.com/kasper9n"]
---

Music library and player

https://github.com/user-attachments/assets/b73cdcf8-8abb-4d43-a5eb-582cad7e3075

## Features
- Playlists & folders
- Filtering
- Queue
- Metadata editing
- Fast. Navigation, sorting & filtering is instant for libraries with 100 000 tracks
- Quick playlist navigation with <kbd>Cmd</kbd><kbd>K</kbd> or <kbd>Ctrl</kbd><kbd>K</kbd>

## Android

The Android app is not useful yet, unless you just want you browse your library. There's no playback or syncing. You have to manually copy over your Library.json file.

## Dev instructions

### Get started

1. Install Node.js
2. Install Rust
3. Run `npm install`

### Structure

App (Electron)
- Source: `src/electron.js` and `src/electron/`
- Build output: `build/app/`

Web (the frontend)
- Source code: napi and `src/`
- Build output: `build/web/`

Napi (the native Rust backend)
- Source code: `src-native/`
- Build output: `ferrum-addon/addon.node`

### Commands
- `npm run dev`: Start app in dev mode
- `npm run dev-release`: Start app in dev mode (optimized)
- `npm run build`: Build
- `npm run lint`: Lint
- `npm run format`: Format

### Publish new version
1. Run `npm run check`
2. Update `CHANGELOG.md`
3. Run `npm…
