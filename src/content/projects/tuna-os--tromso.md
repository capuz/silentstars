---
repo: "tuna-os/tromso"
name: "tromso"
description: "A BuildStream-based KDE Linux distribution"
readmeQualityOk: true
url: "https://github.com/tuna-os/tromso"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [35, 25]
stars: 9
forks: 2
openIssues: 16
closedIssues: 78
watchers: 2
contributors: 4
recentReleases: 0
createdAt: "2026-04-19T18:07:46Z"
lastCommitAt: "2026-08-20T04:07:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 50
maintainers: ["hanthor", "hanthor-hive-agent[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/abef213089fe742beb718ee5e76312e522ab6dd2182a67e62a17c38d8d8508d9/tuna-os/tromso"
---

# Aurora Tromso — KDE Linux OCI/bootc Image

**Aurora Tromso** is a BuildStream-based KDE Linux OCI/bootc image, modeled on Project Bluefin's
[`projectbluefin/dakota`](https://github.com/projectbluefin/dakota). It builds KDE Plasma 6 on top
of freedesktop-sdk and publishes a bootable OCI image to `ghcr.io/tuna-os/tromso`.

**Status: Builds successfully and boots to a working KDE Plasma 6 Wayland desktop.**

## Architecture

Aurora Tromso is a single repo — all KDE/Plasma/freedesktop-sdk `.bst` elements
live directly in `elements/`, consolidated in from the former `tuna-os/kde-build-meta`
junctioned repo (now archived) to remove a class of junction-nesting bugs and
separate-repo staleness tracking:

```
tuna-os/tromso
├── elements/
│   ├── kde/                  qt6 (~30), frameworks (~70), libs (~17), plasma (~41), apps (~9)
│   ├── kde-linux-deps/       KDE-Linux-specific system dependencies
│   ├── kde-linux-system/     image/initramfs/repart config
│   ├── core-deps/, core/     shared core OS dependencies
│   ├── freedesktop-sdk.bst   external junction (still a real junction — freedesktop-sdk
│   │                         is genuinely upstream, unlike the retired kde-build-meta…
