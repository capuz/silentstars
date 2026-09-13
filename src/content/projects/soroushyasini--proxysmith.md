---
repo: "soroushyasini/proxysmith"
name: "proxysmith"
description: "A cross-platform proxy subscription tester — Android, Windows, Linux, and CLI — that fetches, tests, and ranks v2ray/xray proxy configs by real latency."
readmeQualityOk: true
url: "https://github.com/soroushyasini/proxysmith"
language: "Dart"
languages: ["Dart"]
languagePcts: [48]
stars: 62
forks: 2
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 9
createdAt: "2026-06-08T10:56:43Z"
lastCommitAt: "2026-09-13T08:29:04Z"
lastReleaseAt: "2026-07-04T11:08:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 51
undervaluedScore: 20
maintainers: ["soroushyasini"]
openGraphImageUrl: "https://opengraph.githubassets.com/790dfd3cfa0feaea1e4c96a8efde88bdcaac2582335f3bd683d08ee286ee3e16/soroushyasini/proxysmith"
---

# ProxySmith

ProxySmith downloads a proxy subscription, tests each supported configuration through a real Xray core, and returns the ten most reliable low-latency results. It includes an Android/Windows/Linux Flutter app, a Go pipeline used by desktop builds, and a fail-closed Linux server generator.

## What changed in 2.4

- Candidates are selected without first-completion or first-in-feed bias.
- Final ranking considers success rate, median latency, and jitter.
- Downloads are limited to 10 MiB, URLs are validated, duplicates are removed, and exact sample sizes are used.
- Desktop subscription and test URLs travel over standard input instead of appearing in process lists.
- Android uses a foreground service during a run and supports API 24 or newer.
- Theme, language, source, count, latency limit, concurrency, and test endpoint preferences persist locally.
- Results expose reliability and jitter and can be copied, selected, or displayed as QR codes.
- Source editing validates URLs and supports confirmed deletion with undo.
- CI checks Go, Flutter, Android, shell, and PowerShell code.

See [CHANGELOG.md](https://github.com/soroushyasini/proxysmith/blob/HEAD/CHANGELOG.md),…
