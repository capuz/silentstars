---
repo: "gelenmedya/rustyfiles"
name: "rustyfiles"
description: "A file manager for Windows that never freezes. Written in Rust."
readmeQualityOk: true
url: "https://github.com/gelenmedya/rustyfiles"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 62
forks: 8
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 6
createdAt: "2026-11-07T19:58:59Z"
lastCommitAt: "2026-11-09T11:59:51Z"
lastReleaseAt: "2026-11-09T02:32:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 80
undervaluedScore: 31
maintainers: ["gelenmedya", "callmejm"]
openGraphImageUrl: "https://opengraph.githubassets.com/69b59725986d0bf926a71c4e44cdb3216511546073ce31f9429c3afcd700a670/gelenmedya/rustyfiles"
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

Time from launching the app to the folder list settling, in a new window, with the folder
already in the OS file cache. Median of five runs.

| Folder | rustyfiles | File Explorer | [Files](https://files.community) |
|---|--:|--:|--:|
| 1,000 files | 93 ms | 1,113 ms | 2,640 ms |
| 10,000 files | 110 ms | 1,065 ms | 3,053 ms |
| 100,000 files | 168 ms | 1,186 ms | 11,342 ms |
| Memory after listing 10,000 files | ~40 MB | ~70 MB | ~250 MB |

Measured on one machine (Ryzen 7 9800X3D, NVMe SSD, Windows 11) on 2026-11-06. rustyfiles was
already running in the background; Explorer and Files each started a new process, and Files
loads its list…
