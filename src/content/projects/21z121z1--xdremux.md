---
repo: "21Z121Z1/XDRemux"
name: "XDRemux"
description: "A conversion and analysis tool that converts ProXDR HEIC photos shot on OPPO/OnePlus/realme devices to ISO 21496-1 HDR HEIC."
originalDescription: "一个将 OPPO/OnePlus/realme 设备拍摄的 ProXDR HEIC 转换为 ISO 21496-1 HDR HEIC 的转换与分析工具。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/21Z121Z1/XDRemux"
language: "Rust"
languages: ["Rust"]
languagePcts: [74]
topics: ["gain-map", "hdr", "heic", "heif", "image-processing", "motion-photo", "swift", "iso-21496", "proxdr"]
stars: 29
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 4
createdAt: "2026-04-26T06:32:44Z"
lastCommitAt: "2026-09-20T08:45:15Z"
lastReleaseAt: "2026-08-31T15:27:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 49
maintainers: ["21Z121Z1"]
openGraphImageUrl: "https://opengraph.githubassets.com/99c1a0d433431b656ba3d6c6695052d851b8f097cbdc130140a6de90c9a6e1b6/21Z121Z1/XDRemux"
---

# XDRemux

[English](https://github.com/21Z121Z1/XDRemux/blob/HEAD/README.en.md) | 简体中文

XDRemux converts supported manufacturer HDR photos to ISO/TS 21496-1 HDR HEIC, and converts supported Android Motion Photos to Apple Live Photos.

The product has only one entry point: the Rust `xdremux` CLI. Input type, source generation, HDR / Gain Map structure, and Motion Photo routing are all automatically identified by the program.

## What It Can Do

| Input / Intent | Result |
| --- | --- |
| ProXDR Photos | ISO/TS 21496-1 HDR HEIC |
| Supported Motion Photos | Apple Live Photo HEIC + MOV |
| `--oppo-compatible` | ProXDR output for OPPO Gallery |
| `categorize` / `batch --categorize` | Categorize by asset type and capture mode |
| `inspect` / `validate` | Inspect source files and independently validate output |

Normal conversion does not require users to select device generation, codec, Gain Map layout, camera tail, or routing. These are all implementation details automatically determined by the program based on input facts and expected results.

## Building

The cross-platform conversion stack requires the current Rust toolchain and libheif with HEVC support.

```bash
git clone…
