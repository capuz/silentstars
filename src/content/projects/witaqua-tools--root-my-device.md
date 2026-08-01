---
repo: "WitAqua-tools/Root-My-Device"
name: "Root-My-Device"
description: "KSU installer for supported firmware with CVE-2026-43499"
readmeQualityOk: true
url: "https://github.com/WitAqua-tools/Root-My-Device"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [94]
stars: 7
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 1
createdAt: "2026-07-28T10:17:18Z"
lastCommitAt: "2026-08-01T06:14:39Z"
lastReleaseAt: "2026-07-30T04:51:26Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 54
maintainers: ["BuSung-dev", "soralis0912"]
openGraphImageUrl: "https://opengraph.githubassets.com/3361ae2c29d1cd89500f59bc2172eee22c3bf162df5a5b42f26e2e2ee8585801/WitAqua-tools/Root-My-Device"
---

# Root My Device

A fork of [BuSung-dev/Root-My-Galaxy](https://github.com/BuSung-dev/Root-My-Galaxy),
the work of [BuSung-dev](https://github.com/BuSung-dev). This repository keeps
the original Apache License 2.0 — see [LICENSE](https://github.com/WitAqua-tools/Root-My-Device/blob/HEAD/LICENSE). The payload side is a
fork of [BuSung-dev/Root-My-Galaxy-Payloads](https://github.com/BuSung-dev/Root-My-Galaxy-Payloads).

Root My Device is a one-click installer for explicitly
supported firmware builds. The application itself is kept separate
from device offsets, native exploit payloads, and KernelSU build artifacts.

[Latest release](https://github.com/Witaqua-tools/Root-My-Device/releases)

The device feed and native payloads are maintained in
[Root-My-Device-Payloads](https://github.com/Witaqua-tools/Root-My-Device-Payloads).
Every push to its `main` branch builds the payloads and publishes them as a
GitHub release under a tag unique to that run. The app resolves that
repository's `releases/latest`, reads the `targets-v2.json` asset from it, and
downloads every artifact named in it — so the set of payloads it installs is
immutable once published, and nothing is committed as a…
