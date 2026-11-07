---
repo: "zaewc/Lumen"
name: "Lumen"
description: "Storage intelligence for every device."
readmeQualityOk: true
url: "https://github.com/zaewc/Lumen"
homepage: "https://zaewc.github.io/Lumen/"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [71, 21]
topics: ["cross-platform", "desktop-app", "disk-cleaner", "disk-cleanup", "disk-space", "filesystem", "linux", "macos", "rust", "storage-management"]
stars: 15
forks: 3
openIssues: 7
closedIssues: 50
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-10-04T18:41:41Z"
lastCommitAt: "2026-11-07T10:36:38Z"
lastReleaseAt: "2026-10-31T09:01:41Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 97
undervaluedScore: 58
maintainers: ["zaewc", "junjuny0227", "LeeSangHyeok0731"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3d81c6893592f3f9e2f7bc6605cc308826d369fa557cbc266a7e1a77572bffe/zaewc/Lumen"
---

# Lumen

**Storage intelligence for every device.**

Lumen finds what is filling your disk, explains what each item is, and moves only
what is safe to remove, into a quarantine you can restore from.

[**Download**](https://zaewc.github.io/Lumen/en/) · [한국어](https://github.com/zaewc/Lumen/blob/HEAD/README.ko.md) · [How it works](https://github.com/zaewc/Lumen/blob/HEAD/ARCHITECTURE.md) · [Roadmap](https://github.com/zaewc/Lumen/blob/HEAD/docs/architecture/roadmap.md)

## What it does

- **Finds what takes space**, from Xcode's DerivedData and Gradle caches to app caches
  and old installers, by scanning without opening a single file.
- **Explains every decision.** Each item is kept, left for you to review, or proposed
  for clean-up, with the evidence behind it: who made it, whether it can be
  regenerated, and whether anything still uses it.
- **Never deletes on its own.** Clean-up moves items into a quarantine on the same
  drive; you can restore them, and they are removed for good only when you say so.
- **Knows when a tool should clean up after itself.** For the pnpm store, Xcode
  simulators and the like, Lumen shows the tool's own command instead of touching
  the files.
-…
