---
repo: "Team-Haruki/Haruki-Sekai-Asset-Updater"
name: "Haruki-Sekai-Asset-Updater"
description: "A high-performance game asset extractor & exporter with HTTP API for Project Sekai"
readmeQualityOk: true
url: "https://github.com/Team-Haruki/Haruki-Sekai-Asset-Updater"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 19
forks: 2
openIssues: 0
closedIssues: 0
watchers: 3
contributors: 13
recentReleases: 0
createdAt: "2025-02-22T14:40:24Z"
lastCommitAt: "2026-08-30T00:44:00Z"
lastReleaseAt: "2026-01-29T18:55:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 58
maintainers: ["MejiroRina", "storyxy3", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/211bcf8ca0c95c163217a4c827a18d3fdd9ffaf7c7980c216174fe4485a5b49a/Team-Haruki/Haruki-Sekai-Asset-Updater"
---

> [!Caution]
> This project was rewritten in Rust.  
> Go edition is not maintained anymore.   
> If you want to use Go edition, please go to [old go branch](https://github.com/Team-Haruki/Haruki-Sekai-Asset-Updater/tree/old-go).

# Haruki Sekai Asset Updater
**Haruki Sekai Asset Updater** is a companion project for [HarukiBot](https://github.com/Team-Haruki), it's a high performance game asset extractor and exporter of the game `Project Sekai`.

## Scope

- Loads v3 YAML config
- Exposes `GET /healthz`
- Exposes `POST /v2/assets/update`
- Exposes `GET /v2/jobs`
- Exposes `GET /v2/jobs/{id}`
- Exposes `POST /v2/jobs/{id}/cancel`
- Uses [`cridecoder`](https://crates.io/crates/cridecoder) as the codec backend
- Supports bundle download, deobfuscation, export post-processing, S3-compatible upload, and Git CLI chart sync
- Uses the Rust image backend for PNG/JPG/WebP output from AssetStudio RGBA payloads
- Uses the published [`unity-rs-core`](https://crates.io/crates/unity-rs-core)
  library directly. FFmpeg/rsmpeg FFI handles media;
  FFmpeg CLI remains available as a fallback where FFI is unavailable.

## Layout

- `crates/sekai-asset-pipeline/`: reusable, transport-neutral…
