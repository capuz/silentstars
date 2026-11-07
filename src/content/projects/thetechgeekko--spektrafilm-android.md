---
repo: "thetechgeekko/Spektrafilm-android"
name: "Spektrafilm-android"
description: "Spectral film simulation for Android — a native C++/NDK port of the spektrafilm engine (negative → enlarger → print → scan), with a Jetpack Compose editor, RAW/DNG import, local masks, and 16/32-bit export. GPLv3."
readmeQualityOk: true
url: "https://github.com/thetechgeekko/Spektrafilm-android"
homepage: "https://discuss.pixls.us/t/spectral-film-simulations-from-scratch/48209"
language: "C++"
languages: ["C++", "Kotlin"]
languagePcts: [47, 39]
topics: ["android", "color-science", "film-emulation", "jetpack-compose", "kotlin", "photography", "android-ndk", "dng", "film-simulation", "gplv3"]
stars: 47
forks: 9
openIssues: 28
closedIssues: 91
watchers: 1
contributors: 5
recentReleases: 2
createdAt: "2026-05-29T13:54:25Z"
lastCommitAt: "2026-11-07T09:29:47Z"
lastReleaseAt: "2026-09-15T05:29:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 43
maintainers: ["thetechgeekko"]
openGraphImageUrl: "https://opengraph.githubassets.com/e623823358bd352bf945de16e185a64ce55810c81389e0698d62db66566cc43f/thetechgeekko/Spektrafilm-android"
---

# Spektrafilm for Android

**Spectral film simulation on your phone.** Not a colour LUT — a physically-based simulation of the
whole analog chain: negative, enlarger, print, scan.

*Film modeling powered by [spektrafilm](https://github.com/andreavolpato/spektrafilm).
Dedicated to the [pixls.us](https://pixls.us) community.*

> [!NOTE]
> **Related project — Latent.** Latent is a computational engine built around the manipulation of
> RAW images. Spektrafilm for Android is the editor: you bring it a photo or a RAW file and it runs
> the spectral film simulation over it. The two are developed by the same author and share the same
> interest in getting RAW data right, but this app stands on its own and is maintained here.
>
> Live engineering work and known gates are in the [execution index](https://github.com/thetechgeekko/Spektrafilm-android/blob/HEAD/docs/EXECUTION_INDEX.md).

---

## What it is

Most "film looks" are a colour LUT — a lookup table that nudges your pixels toward a mood. This is
not that. Spektrafilm runs your photo through a physically-based simulation of the actual analog
process: it reconstructs a spectrum for each pixel, exposes a virtual emulsion that has real…
