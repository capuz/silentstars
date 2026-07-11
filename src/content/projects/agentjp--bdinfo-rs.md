---
repo: "agentjp/bdinfo-rs"
name: "bdinfo-rs"
description: "Memory-safe, zero-C-dependency Rust Blu-ray disc analyzer — a drop-in BDInfo report tool for BDMV folders and .iso images."
readmeQualityOk: true
url: "https://github.com/agentjp/bdinfo-rs"
homepage: "https://bdinfo.hyperslop.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
topics: ["bdinfo", "bdmv", "blu-ray", "cli", "dolby-vision", "hdr", "m2ts", "memory-safety", "no-unsafe", "rust"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 7
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-06-19T05:04:35Z"
lastCommitAt: "2026-07-11T05:58:10Z"
lastReleaseAt: "2026-07-11T04:56:31Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["agentjp", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/47edca48332ca250b70d70661742b3614d9245195d618310118be8b5f2d473a8/agentjp/bdinfo-rs"
---

# bdinfo-rs

**A memory-safe, cross-platform Blu-ray disc analyzer — the classic [BDInfo](https://github.com/UniqProject/BDInfo) report, reimplemented in Rust as a single static binary.**

<br>

[Features](#-features) · [Install](#-installation) · [Usage](#-usage) · [Performance](#-performance) · [Footprint](#-footprint) · [Library](#-library) · [Browser](#-in-the-browser-webassembly) · [Security](#-quality--security)

</div>

bdinfo-rs scans `BDMV` folders and `.iso` images — playlists, clips, M2TS demux — and
produces the same human-readable disc report as the classic BDInfo tool: per-stream
video/audio technical specs, including codecs, measured bitrates, resolution, and
HDR / Dolby Vision / HDR10+. It ships as **one small statically-linked binary**: no
runtime, no DLLs, no install — drop the file anywhere and it runs.

<details>
<summary><b>Table of contents</b></summary>

- [✨ Features](#-features)
- [🧪 Disclaimer](#-disclaimer)
- [📀 Owned discs only](#-owned-discs-only)
- [📦 Installation](#-installation)
  - [Package managers](#package-managers)
  - [Install script](#install-script)
  - [Prebuilt binaries](#prebuilt-binaries)
  - [Docker](#docker)
  - [Build from…
