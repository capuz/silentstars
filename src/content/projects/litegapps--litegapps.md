---
repo: "litegapps/litegapps"
name: "litegapps"
description: "The LiteGapps OpenSource Project Source Code"
readmeQualityOk: true
url: "https://github.com/litegapps/litegapps"
homepage: "https://ps2bios.dev"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [48, 42]
topics: ["gapps", "litegapps", "android"]
stars: 90
forks: 11
openIssues: 0
closedIssues: 6
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2021-04-22T07:05:49Z"
lastCommitAt: "2026-09-27T09:27:52Z"
lastReleaseAt: "2026-07-09T19:08:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 42
maintainers: ["wahyu6070"]
openGraphImageUrl: "https://opengraph.githubassets.com/e0140a43a13460edaa01b334bace3930b55b467261ca8006a21138b094e2d278/litegapps/litegapps"
---

# LiteGapps

**LiteGapps** is a custom Google Apps package for Android — a systemless,
open-source gapps focused on being small, efficient, and comprehensive.
It's flashed as a Magisk/Kopi module.

This repo is the **build tool**: shell scripts that package gapps files into
flashable zips. It is not the gapps files themselves — those are restored
from SourceForge (see [Building](#building) below).

Website: [litegapps.github.io](https://litegapps.github.io)

## Requirements

``zip`` ``tar`` ``xz-utils`` ``unzip`` ``bash`` ``brotli`` ``curl``

### Termux
```bash
apt update && pkg upgrade && pkg install zip tar xz unzip bash brotli curl
```

### Ubuntu / Debian
```bash
sudo apt update && sudo apt upgrade -y && sudo apt install -y zip tar xz-utils unzip bash brotli curl
```

## Cloning

```bash
# https
git clone https://github.com/litegapps/litegapps.git
# ssh
git clone git@github.com:litegapps/litegapps.git
```

## Repo layout

| Path | What it is |
|---|---|
| `build.sh` | CLI + dispatcher (`restore`/`make`/`clean`/`upload`/`update-gapps-server`). |
| `lib/litegapps.sh`, `lib/litegappsx.sh` | Per-product build logic (restore/make/clean). Builds `packages/` addons and stages modules…
