---
repo: "ma6x9x/Lum1na"
name: "Lum1na"
description: "Next Gen iOS Jailbreak"
readmeQualityOk: true
url: "https://github.com/ma6x9x/Lum1na"
language: "Objective-C"
languages: ["Objective-C"]
languagePcts: [84]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-20T18:18:43Z"
lastCommitAt: "2026-10-21T17:31:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/fde2d42f7548ed38b8accb774dad066e277dd5818ca4e2ea2455065edbcadc08/ma6x9x/Lum1na"
---

Authorized testing only. Do not use this against devices you do not own.

## What this repo is

A SwiftUI/ObjC iOS app: motherboard UI, P007-style per-tap console, `+tap` catalog, and `Documents/lum1na_board.json` for pins and heap-leak candidates.

It is **not** a jailbreak. `hasKread` stays false until a kread of a known kernel string works. Dopamine 3.0.10 does not port here by bumping versions (A12/A13 26.0–26.0.1 only).

## Targets

| SKU | OS | Offset table |
| --- | --- | --- |
| iPhone 12 family `iPhone13,*` A14 | 26.5 **23F77** | `A14_23F77` via `LabOff()` |
| iPad Pro 2018 `iPad8,*` A12X | 26.6 **23G71** | `A12X_23G71` |

SKU is `hw.machine` + `kern.osversion`, not `UIDevice` “26.5”.

## Where to read

| File | For |
| --- | --- |
| [`AGENTS.md`](https://github.com/ma6x9x/Lum1na/blob/HEAD/AGENTS.md) | Compile contract (Xcode 16.4 IPA job) |
| [`docs/CHAIN.md`](https://github.com/ma6x9x/Lum1na/blob/HEAD/docs/CHAIN.md) | Honest chain map |
| [`docs/BOARD.md`](https://github.com/ma6x9x/Lum1na/blob/HEAD/docs/BOARD.md) | `lum1na_board.json` |
| [`docs/REPO_MAP.md`](https://github.com/ma6x9x/Lum1na/blob/HEAD/docs/REPO_MAP.md) | What each button runs |
|…
