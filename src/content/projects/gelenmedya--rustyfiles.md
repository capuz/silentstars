---
repo: "gelenmedya/rustyfiles"
name: "rustyfiles"
description: "A file manager for Windows that never freezes. Written in Rust."
readmeQualityOk: true
url: "https://github.com/gelenmedya/rustyfiles"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 198
forks: 19
openIssues: 34
closedIssues: 19
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-11-07T19:58:59Z"
lastCommitAt: "2026-11-17T14:45:28Z"
lastReleaseAt: "2026-11-10T13:32:26Z"
status: "newborn"
tags: ["solo_builder", "funded", "release_machine"]
healthScore: 87
undervaluedScore: 28
maintainers: ["gelenmedya", "ialhabbal"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ed206812f7334edaa85373aece6199521cc06e69934d0aa4a186572ae1703af/gelenmedya/rustyfiles"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/ozerguzel"]
---

rustyfiles is a file manager for Windows, written from scratch in Rust. It is meant to replace
File Explorer for everyday work: tabs, dual panes, archives you open like folders, and a
Quick Look–style previewer called DirectLook.

The window never waits on the disk. Listing, icons, thumbnails, the context menu and every file
operation run off the UI thread, so a slow network share or a folder with 100,000 files can't
freeze it.

Free, no account, no ads. Download, double-click, done: see [Install](#install).

## How fast

### Opening a folder

Time from starting the app to the folder's list standing still, in a new window, with the folder
already in the OS file cache. Median of three runs after a warm-up, measured by the speed test
that is built into rustyfiles (Settings › Speed test): anyone can run it on their own machine.

| Folder | rustyfiles | File Explorer | [Files](https://files.community) |
|---|--:|--:|--:|
| Empty folder | 281 ms | 1,006 ms | 813 ms |
| 1,000 files | 284 ms | 2,214 ms | 1,893 ms |
| 10,000 files | 286 ms | 2,221 ms | 1,053 ms |
| 100,000 files | 281 ms | 2,318 ms | 4,069 ms |
| 2,000 pictures (thumbnails) | 278 ms | 2,177 ms | 1,075 ms |
| Memory after…
