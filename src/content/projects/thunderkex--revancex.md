---
repo: "thunderkex/revancex"
name: "revancex"
description: "Modern, high-performance Rust patcher & orchestrator for ReVanced, Morphe. Magisk and KernelSU modules with WebUI and dynamic config."
readmeQualityOk: true
url: "https://github.com/thunderkex/revancex"
homepage: "https://thunderkex.github.io/revancex/"
language: "Rust"
languages: ["Rust"]
languagePcts: [87]
topics: ["youtube", "youtube-music", "revanced", "morphe", "rvx", "revanced-extended", "magisk", "android", "apk-patcher", "kernelsu"]
stars: 388
forks: 16
openIssues: 0
closedIssues: 7
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2024-05-07T03:27:52Z"
lastCommitAt: "2026-11-13T05:42:54Z"
lastReleaseAt: "2024-08-09T16:05:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 38
maintainers: ["thunderkex", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/797017118/1314ac3d-b4a8-4c98-b8df-24ed784db434"
---

# Revancex

Automated Android APK patcher and module orchestrator written in Rust. Revancex fetches stock APKs, applies upstream ReVanced/Morphe patches, and packages standalone signed APKs as well as Magisk, KernelSU, and APatch modules with an embedded WebUI.

## Highlights

- **31 Pre-Configured Apps**: YouTube, YouTube Music, Reddit, MicroG, TikTok, Instagram, Facebook, Threads, X Piko, Pinterest, Gboard, Google Maps, Proton VPN, AdGuard, Lightroom, CapCut, Termius, and more.
- **Fast Rust CLI (`revancex`)**: Single prebuilt binary with minimal runtime requirements (Java JDK 17+ for patching; Rust 1.85+ if building from source).
- **Resilient APK Sourcing**: Multi-source fallback pipeline (GitHub, GitLab, Archive.org, Codeberg, apkeep, APKPure, APKMirror, Uptodown, Aptoide, APKFab, APKCombo) with integrity, signature, and patch-compatibility checks.
- **Root & Non-Root Output**: Build standalone signed APKs, single-app root modules, or categorized multi-app bundles.
- **Embedded WebUI**: Root modules include a Material 3 Expressive WebUI for inspecting and toggling mounted apps in KernelSU, APatch, and Magisk.
- **Built-in Diagnostics & CI**: Environment checks (`doctor`),…
