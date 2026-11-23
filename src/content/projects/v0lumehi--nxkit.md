---
repo: "v0lumehi/nxkit"
name: "nxkit"
description: "Run your own Switch games natively on Apple silicon Macs. Rust build tool and runtime: its own Horizon kernel, system services and NVN on Metal 4."
readmeQualityOk: true
url: "https://github.com/v0lumehi/nxkit"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 11
forks: 7
openIssues: 10
closedIssues: 10
watchers: 0
contributors: 9
recentReleases: 10
createdAt: "2026-11-05T12:21:50Z"
lastCommitAt: "2026-11-23T10:19:02Z"
lastReleaseAt: "2026-11-06T13:45:51Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 90
undervaluedScore: 59
maintainers: ["v0lumehi", "b4f8abbb24dbf56a7d0280f296e16eeb"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac5c1533ed01f1e0b17db6b5cf484ad26241461de4995d6290bbeb9255030621/v0lumehi/nxkit"
---

# nxkit

nxkit runs Switch and Switch 2 games natively on the Mac. It is a Rust monorepo with two parts:

- **The build tool `nxb`.** It changes a game package that you own into a Mac app. It extracts the game data, rewrites the
  game code for the Mac, translates the shaders to Metal, compiles them and makes the pipeline archive, and packs and signs the app.
- **The runtime.** The app runs the game code on the CPU as it is. The runtime gives the game what the console gives it:
  a Horizon kernel, the system services and an NVN graphics driver on Metal 4.

Use nxkit only with games that you own. No game data, keys or shaders are in this repository.

## Status

The current release is [0.16.3](https://github.com/v0lumehi/nxkit/releases/tag/v0.16.3) (2026-11-23). It is early
software. The apps run on Macs with Apple silicon. The libraries are built for the Mac's own macOS version, so on
macOS 26 build the app on macOS 26. The release ZIP holds `nxb` and `nxkit-host` for macOS 26 and newer (see "Install a release"). `nxb` also builds on Windows (x86-64), where `nxb extract` runs.
