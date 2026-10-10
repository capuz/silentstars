---
repo: "official-kryo-to/kryoto-desktop"
name: "kryoto-desktop"
description: "kryo.to as an app"
readmeQualityOk: true
url: "https://github.com/official-kryo-to/kryoto-desktop"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [49, 46]
stars: 21
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-09-28T13:40:57Z"
lastCommitAt: "2026-10-10T10:05:25Z"
lastReleaseAt: "2026-10-10T08:28:20Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 84
undervaluedScore: 45
maintainers: ["official-kryo-to", "claude", "ParanoidKryoTo"]
openGraphImageUrl: "https://opengraph.githubassets.com/d15565c3c2a963aa3d53bf7046426d84b436a75619e6bee8cf4866083ebfcbff/official-kryo-to/kryoto-desktop"
---

# Kryoto Desktop

Kryoto Desktop is an app where you manage everything on Kryoto in one place: find a game, download it and play it. Runs on Windows and Linux.

**It is open source.** Read exactly what runs on your PC, build it yourself, report a bug or send a fix. If you like it, a star helps other people find it.

| | |
|---|---|
|  |  |
|  |  |
|  | |

## Get it

Download the newest version from [kryo.to/desktop](https://kryo.to/desktop) or
[Releases](https://github.com/official-kryo-to/kryoto-desktop/blob/HEAD/../../releases/latest): the Windows installer, or an AppImage or a
.deb for Linux. Once installed it updates itself: it checks on launch, and
Help > About has Check for updates.

## Run it

```text
pnpm install
pnpm app:dev      # the app
pnpm dev          # the UI alone in a browser, on sample data (http://localhost:1421)
pnpm app:build    # the installer (NSIS on Windows, AppImage/.deb on Linux)
```

`app:build` remaps the build machine's paths out of the binary and refuses to
finish if the home folder is still in it.

Debug builds run as `to.kryo.desktop.dev`, next to an installed copy without
sharing its data, and never send error reports.

Native tests run with…
