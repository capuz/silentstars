---
repo: "rokoucha/Mahiron"
name: "Mahiron"
description: "Yet another DVR Tuner Server for Japanese TV"
originalDescription: "Yet another DVR Tuner Server for Japanese TV"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/rokoucha/Mahiron"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 6
forks: 0
openIssues: 1
closedIssues: 9
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2025-04-06T07:15:22Z"
lastCommitAt: "2026-10-29T12:25:05Z"
lastReleaseAt: "2026-07-21T10:36:07Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 76
maintainers: ["rokoucha", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b457581e836581d8aa336afa92870b9a96b04fedffc95523420b033ab017b58/rokoucha/Mahiron"
---

# Mahiron 5

Yet another DVR Tuner Server for Japanese TV.

## Features

- Mirakurun-compatible API
- Written in Go and runs as a single binary
- Easy-to-understand dashboard
- Real-time program guide updates
- Integrates TS streams from multiple routes, such as cable TV retransmission
- High observability with OpenTelemetry
- Data broadcasting API
- Experimental support for ISDB-S3

## Setup

Download the latest version from [Releases](https://github.com/rokoucha/Mahiron/releases), or pull the [container image](https://github.com/rokoucha/Mahiron/pkgs/container/mahiron).

To try the latest build of the main branch, you can download the binary artifact from the [CI run history](https://github.com/rokoucha/Mahiron/actions/workflows/ci.yml). The container image can be pulled with `ghcr.io/rokoucha/mahiron:nightly`. There are also date-time tags `YYYY.MMDD.HHMMSS-nightly` and `sha-<short commit SHA>` tags that specify a particular commit directly.

For configuration, refer to the [samples](https://github.com/rokoucha/Mahiron/tree/main/config) and place the files in the `config` folder in the same directory as the executable. To use a different folder, specify the `-config-dir <path>`…
