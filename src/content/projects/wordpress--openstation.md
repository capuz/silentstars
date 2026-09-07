---
repo: "WordPress/openstation"
name: "openstation"
description: "OpenStation is a WordPress plugin that turns /wp-admin into a desktop-style interface with movable windows and a dock menu. It’s opt-in per user, doesn’t change core, and fully reverts on deactivation."
readmeQualityOk: true
url: "https://github.com/WordPress/openstation"
homepage: "https://wordpress.org/plugins/desktop-mode/"
language: "TypeScript"
languages: ["TypeScript", "PHP"]
languagePcts: [60, 29]
topics: ["wordpress", "wordpress-plugin"]
stars: 267
forks: 40
openIssues: 33
closedIssues: 159
watchers: 6
contributors: 54
recentReleases: 0
createdAt: "2026-04-22T12:31:11Z"
lastCommitAt: "2026-09-07T08:34:40Z"
lastReleaseAt: "2026-05-04T16:40:22Z"
status: "thriving"
tags: []
healthScore: 96
undervaluedScore: 28
maintainers: ["AllTerrainDeveloper", "epeicher", "mmtr"]
openGraphImageUrl: "https://opengraph.githubassets.com/dd19fbb2c0494ce472b18dc7738aaf2e16b315ff6ace1473dca56617e99c4fc7/WordPress/openstation"
---

# WP OpenStation

A WordPress plugin that reimagines `/wp-admin` as a desktop operating system. Admin screens open as draggable, resizable, minimizable **windows** on a **desktop**, with a left-edge **dock** built from the admin menu. Purely opt-in per user — the classic admin stays untouched for everyone else, and deactivating the plugin restores vanilla Core exactly.

Zero Core patches. Every feature is wired through public WordPress hooks.

## Demo

<video src="https://github.com/user-attachments/assets/590aacc2-e9d7-4213-889e-b91e060e1bd8" controls width="720"></video>

---

## Contents

- [Demo](#demo)
- [Current State](#current-state)
- [Still ahead](#still-ahead)
- [Repository layout](#repository-layout)
- [Bundled extensions](#bundled-extensions)
- [How to run it](#how-to-run-it)
  - [Quick install](#quick-install)
  - [Development setup](#development-setup)
- [Requirements](#requirements)
- [For plugin authors](#for-plugin-authors)
- [License](#license)

---

## Current State

- **Station Home**
  Native, role-aware replacement for the ordinary WordPress Dashboard inside OpenStation: recent personal work, four live site instruments, an actionable attention queue, and…
