---
repo: "derekross/omarchy-mobile"
name: "omarchy-mobile"
description: "Omarchy Mobile: native Omarchy on mobile phones. Arch Linux ARM, Hyprland and Omarchy on a mainline kernel (work in progress)"
readmeQualityOk: true
url: "https://github.com/derekross/omarchy-mobile"
homepage: "https://omamobile.org"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [42, 27]
topics: ["linux", "omarchy"]
stars: 373
forks: 67
openIssues: 40
closedIssues: 22
watchers: 4
contributors: 26
recentReleases: 0
createdAt: "2026-10-12T02:03:22Z"
lastCommitAt: "2026-11-07T16:13:17Z"
status: "newborn"
tags: []
healthScore: 84
undervaluedScore: 23
maintainers: ["derekross", "W4HO-ham", "Somnius"]
openGraphImageUrl: "https://opengraph.githubassets.com/46cd4037fb5d2fcb3677f5b5e2bf154ea31eb9a33d9ab2bdbebb6ce0d2ab0446/derekross/omarchy-mobile"
---

# Omarchy Mobile

Native Omarchy on mobile devices: Arch Linux ARM, Hyprland and Omarchy's own packages running directly on the device with a mainline kernel, with Android apps in Waydroid as a later goal. The reference device is the Pixel 7 Pro (cheetah, gs201); community ports cover more Pixels, and the first non-Pixel ports are in review ([docs/DEVICES.md](https://github.com/derekross/omarchy-mobile/blob/HEAD/docs/DEVICES.md)).

What works on each phone, and the notes behind it: [docs/DEVICES.md](https://github.com/derekross/omarchy-mobile/blob/HEAD/docs/DEVICES.md). What's next: [docs/ROADMAP.md](https://github.com/derekross/omarchy-mobile/blob/HEAD/docs/ROADMAP.md).

## Quick start

**Installing a release?** Follow [docs/INSTALL.md](https://github.com/derekross/omarchy-mobile/blob/HEAD/docs/INSTALL.md): it installs a downloaded, signed release bundle, with no build and no checkout of this repository. The steps below build everything yourself.

The installer is new: expect rough edges. You need a Pixel 7 Pro with an unlocked bootloader, an Omarchy (Arch) laptop with Docker, `android-tools` and `e2fsprogs`, and Google's factory image for the phone. Stock Android stays on slot A…
