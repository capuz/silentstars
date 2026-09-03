---
repo: "pkgforge-dev/appimagetool"
name: "appimagetool"
description: "A Rust implementation of appimagetool for the Anylinux-AppImages project."
readmeQualityOk: true
url: "https://github.com/pkgforge-dev/appimagetool"
language: "Makefile"
languages: ["Makefile"]
languagePcts: [97]
stars: 13
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 6
createdAt: "2026-04-26T18:25:39Z"
lastCommitAt: "2026-09-03T08:14:56Z"
lastReleaseAt: "2026-09-01T21:36:28Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 43
maintainers: ["QaidVoid", "Samueru-sama", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aedfbffc0d9a466268b450683a157b53fc5e23e474880793b8fc900bc69c883/pkgforge-dev/appimagetool"
---

# appimagetool

A Rust implementation of `appimagetool` for the [Anylinux-AppImages](https://github.com/pkgforge-dev/Anylinux-AppImages) project.

It takes a prepared AppDir and produces a finished `.AppImage` using DWARFS compression and the [uruntime](https://github.com/pkgforge-dev/Anylinux-uruntime) AppImage runtime. Single binary, no Python, no C++ deps.

## Quick start

```sh
appimagetool ./AppDir
```

That's it. The tool will:

1. Validate the AppDir (checks for `AppRun`, `.DirIcon`, one `.desktop` file).
2. Download `mkdwarfs` and `uruntime` if they're not already cached.
3. Write `X-AppImage-*` metadata into the desktop entry.
4. Build the DWARFS image with the runtime embedded as the ELF header.
5. Generate a `.zsync` file when update info is set, plus an `appinfo` sidecar.

## Features

- DWARFS compression for small, delta-friendly AppImages.
- Drop-in uruntime integration with automatic download and ELF section patching.
- Optional profile-guided optimization (DWARFS hotness profiling) for faster launches.
- Built-in zsync generation, no `zsyncmake` shell-out.
- No central repository, no daemon, no extra runtime deps.

## Usage

### Typical build

```sh
appimagetool…
