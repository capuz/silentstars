---
repo: "jebbranch/ios-port-marble"
name: "ios-port-marble"
description: "ios16 xnu for POCO F5(marble)"
originalDescription: "ios16 xnu for POCO F5(marble)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/jebbranch/ios-port-marble"
language: "Shell"
languages: ["Shell", "C"]
languagePcts: [50, 34]
stars: 12
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-21T11:18:23Z"
lastCommitAt: "2026-11-02T15:17:45Z"
lastReleaseAt: "2026-10-23T03:09:17Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 50
maintainers: ["jebbranch"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4bcac766de253ed332cd8301b3c0aaa9e3c73d4d18e3054e4a8719fbb5982ae/jebbranch/ios-port-marble"
discussionCount: 0
---

# marble XNU — iOS 16 kernel running on Redmi Note 12 Turbo

> **Required reading for the audio/SMMU work:** [`docs/smmu-dead-ends.md`](https://github.com/jebbranch/ios-port-marble/blob/HEAD/docs/smmu-dead-ends.md) — SMMU approaches that have already been disproven, the correct register map, and the discipline of "stop using DATA_BUFFER as a probe."
>
> **Required reading for the GPU work:** [`docs/gpu-probe.md`](https://github.com/jebbranch/ios-port-marble/blob/HEAD/docs/gpu-probe.md) (all v1–v30 on-device readings and vendor kprobe traces), [`docs/gpu-gpt-question.md`](https://github.com/jebbranch/ios-port-marble/blob/HEAD/docs/gpu-gpt-question.md) (external Q&A draft), [`docs/gpu-feasibility.md`](https://github.com/jebbranch/ios-port-marble/blob/HEAD/docs/gpu-feasibility.md) (feasibility inventory).
> Device-specific handoff notes and failure checklists are maintained only locally and are not part of this repository.

This project runs Apple's open-source **XNU 8796.141.3** (the kernel contemporary with iOS 16) on the **Redmi Note 12 Turbo (marble / SM7475 / Snapdragon 7+ Gen 2)**.
It launches via **shim + `fastboot boot`, running purely from RAM**: it does not flash boot, does…
