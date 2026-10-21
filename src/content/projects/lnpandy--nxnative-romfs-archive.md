---
repo: "LNPANDY/nxnative-romfs-archive"
name: "nxnative-romfs-archive"
description: "nxnative + RomFS archive: pack a Switch RomFS into ~100 files so large games can be installed on iOS"
readmeQualityOk: true
url: "https://github.com/LNPANDY/nxnative-romfs-archive"
language: "C"
languages: ["C", "Objective-C"]
languagePcts: [45, 30]
topics: ["custom-format", "homebrew", "ios", "ipad", "iphone", "metal", "nintendo-switch", "romfs"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-20T18:16:07Z"
lastCommitAt: "2026-10-21T17:31:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 32
maintainers: ["LNPANDY"]
openGraphImageUrl: "https://opengraph.githubassets.com/3adc71485f25b404d8c9b2a48725f22476cb5b458a0c8b765a25a3ff787640be/LNPANDY/nxnative-romfs-archive"
---

# nxnative + RomFS Archive

Run your own Nintendo Switch games natively on iPhone and iPad — and ship games whose resource
files are too large (or too numerous) for a normal iOS install.

This repository is **[nxnative](https://github.com/seedds/nxnative) with one new subsystem: a RomFS
archive**. Everything about running the game — the NSO rewriter, the Horizon host, the NVN-on-Metal
layer, the per-game profiles — is upstream work. What is new here is a way to pack a RomFS tree into
~100 files and have the app read it directly, which makes large games installable and their files
copyable in one operation.

English | [简体中文](https://github.com/LNPANDY/nxnative-romfs-archive/blob/HEAD/README.zh-CN.md)

---

## The problem

A RomFS like Tears of the Kingdom's is **304,243 files / 15.9 GiB**. Two things break:

- **The IPA does not install.** A 16.6 GB package with 372,660 entries fails on iOS with
  `PackageExtractionFailed (Could not extract archive)`. The install daemon's extractor gives up —
  one directory holds 75,941 files and the ZIP64 central directory starts at 17.8 GB.
- **Copying the tree to the phone takes hours.** The Files app and Finder do one round trip per
  file.…
