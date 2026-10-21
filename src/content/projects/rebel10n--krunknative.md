---
repo: "rebel10n/KrunkNative"
name: "KrunkNative"
description: "Krunker.io - except it's awesome."
readmeQualityOk: true
url: "https://github.com/rebel10n/KrunkNative"
language: "C"
languages: ["C"]
languagePcts: [82]
stars: 14
forks: 6
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-04-19T23:22:58Z"
lastCommitAt: "2026-10-21T23:36:29Z"
lastReleaseAt: "2026-10-12T04:59:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 61
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/4258986402b3794f5114252a6f55a7bccf76b29cd8db7b417990f15411c2e60f/rebel10n/KrunkNative"
---

# Krunker Box Office

Krunker.io - except it's awesome. A rewrite of the game in native C using minimal libraries, focused on freedom and performance.

Krunker Box Office was formerly called KrunkNative. The repository, the binaries' file names (`client_bin`, `server_bin`), the `KRUNKNATIVE_*` environment variables and the `kn_*` targets keep that name. The client's launcher is `BoxOffice` and its release packages are `BoxOffice-<platform>.tar.gz` / `.zip` (flat: the launcher at the top, the game in `runtime/`). The app icons are krunker.io's current ones, pinned in `tools/branding/branding.lock` (`make branding`).

| In game (Kanji) | Object Manager (F1) | Bot navmesh (`show_navmeshes`) |
|---|---|---|
|  |  |  |

# Building

The client, server and tests build with CMake, driven by the Makefile (`make help`). Everything is C11 and vendored (GLFW, GLAD, FreeType, Lexbor, cJSON, replxx), including the in-house HTML/CSS engine that renders the menu and HUD; platform-specific instructions below.

## Windows

CMake + w64devkit/MinGW should work out of the box

## Linux

Please install the following Debian packages to build GLFW:

- libwayland-dev
- wayland-protocols
- pkg-config
-…
