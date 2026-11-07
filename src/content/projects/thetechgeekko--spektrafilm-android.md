---
repo: "thetechgeekko/Spektrafilm-android"
name: "Spektrafilm-android"
description: "Spectral film simulation for Android — a native C++/NDK port of the spektrafilm engine (negative → enlarger → print → scan), with a Jetpack Compose editor, RAW/DNG import, local masks, and 16/32-bit export. GPLv3."
readmeQualityOk: true
url: "https://github.com/thetechgeekko/Spektrafilm-android"
homepage: "https://discuss.pixls.us/t/spectral-film-simulations-from-scratch/48209"
language: "C++"
languages: ["C++", "Kotlin"]
languagePcts: [44, 43]
topics: ["android", "color-science", "film-emulation", "jetpack-compose", "kotlin", "photography", "android-ndk", "dng", "film-simulation", "gplv3"]
stars: 47
forks: 9
openIssues: 22
closedIssues: 123
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-05-29T13:54:25Z"
lastCommitAt: "2026-11-07T22:50:42Z"
lastReleaseAt: "2026-09-15T05:29:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 44
maintainers: ["thetechgeekko"]
openGraphImageUrl: "https://opengraph.githubassets.com/2744d2be43ac04e04b90846df64673fe213b1903d4e6a6f7eb124ccd13425574/thetechgeekko/Spektrafilm-android"
---

# Spektrafilm for Android

**Spectral film simulation on your phone.** Not a colour LUT: a physically based simulation of the
whole analog chain, from negative to enlarger to print to scan.

Dedicated to the [pixls.us](https://pixls.us) community.</sub>

## What you can do

      28 film and paper profiles (colour negative, slide, motion picture, print film and RGB
      papers), each with its ISO, colour balance and era. Any film prints on any paper.
      27 built-in presets cover researched film and print pairings. Tap one to apply it, then
      save your own and share them as files.
      Exposure and metering, DIR couplers, halation and scatter, diffusion filters, the
      enlarger's dichroic filters, grain with sublayers, and the scanner.
      Tone curves (master and per channel), contrast, saturation and vibrance, plus radial,
      gradient and colour range masks. Local edits sit on top of the film render.
      RAW and DNG decode through a pinned LibRaw. Edits live in a sidecar keyed to the source,
      so the original file is never touched.
      JPEG, PNG 8/16 and TIFF 16/32F in six output spaces with ICC tags, a scene-linear TIFF for
      grading elsewhere, and…
