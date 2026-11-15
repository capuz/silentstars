---
repo: "alesimula/project-churro"
name: "project-churro"
description: "Scripts that convert an official Googlebook OS recovery image into a bootable, installable image for generic x86 UEFI PCs, built locally from your own copy of the image (no ported image is distributed). Inspired by Project Croissant (chromefy)."
readmeQualityOk: true
url: "https://github.com/alesimula/project-churro"
language: "Shell"
languages: ["Shell", "C"]
languagePcts: [52, 34]
stars: 35
forks: 6
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-14T17:32:37Z"
lastCommitAt: "2026-11-15T11:18:39Z"
status: "thriving"
tags: []
healthScore: 79
undervaluedScore: 29
maintainers: ["alesimula", "sostk"]
openGraphImageUrl: "https://opengraph.githubassets.com/99a25252db73969320fa205c212065f4ed32ec966914899a281085f237f11815/alesimula/project-churro"
---

# Project Churro

Make **Googlebook OS** (Android 17 "android-desktop" / Aluminium) recovery images bootable and
installable on generic x86_64 UEFI PCs, by *converting* Google's official image locally instead
of redistributing a ported one (same idea as Project Croissant / chromefy for ChromeOS).

> Status: **experimental** — boots to a usable Googlebook OS desktop on real hardware from USB:
> Arrow Lake laptop (Intel iGPU or NVIDIA via nouveau; Wi-Fi, audio, touchpad, Play Store / app
> installs), and older machines down to Haswell (Tiger Lake, Broadwell, Haswell) through
> an in-kernel emulator for the newer CPU instructions the image is compiled for — slower there.
> CPU floor: Haswell (AVX2). See [`docs/`](https://github.com/alesimula/project-churro/blob/HEAD/docs/) and the hardware matrix in docs/05.

## Getting the recovery image

Download the official recovery image of a Googlebook from
[aluminium-os.com/googlebookos](https://aluminium-os.com/googlebookos/) (lists every model and
build) and unzip it: the `recovery.zip` (~7.8 GB) contains
`android-desktop_signed_recovery_image.bin` (~19 GB). Churro is developed on the Lenovo Googlebook
15 (`ruby`); other models are untested.…
