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
languagePcts: [48, 33]
stars: 13
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-21T11:18:23Z"
lastCommitAt: "2026-11-04T11:10:34Z"
lastReleaseAt: "2026-10-23T03:09:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 48
maintainers: ["jebbranch"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbf1ad64e54845dc482366df49066e69ad006cefd5e64d0b3174ccaaac908335/jebbranch/ios-port-marble"
discussionCount: 0
---

# marble XNU —— iOS 16 kernel running on Redmi Note 12 Turbo

> **Must-read for audio/SMMU takeover:** [`docs/smmu-dead-ends.md`](https://github.com/jebbranch/ios-port-marble/blob/HEAD/docs/smmu-dead-ends.md) ——
> SMMU approaches already proven wrong, the correct register map, and the discipline of "stop using DATA_BUFFER as a probe".
>
> **Must-read for GPU takeover:** [`docs/gpu-probe.md`](https://github.com/jebbranch/ios-port-marble/blob/HEAD/docs/gpu-probe.md) (all on-device readings for v1–v30 and vendor kprobe traces), [`docs/gpu-gpt-question.md`](https://github.com/jebbranch/ios-port-marble/blob/HEAD/docs/gpu-gpt-question.md) (external Q&A draft), [`docs/gpu-feasibility.md`](https://github.com/jebbranch/ios-port-marble/blob/HEAD/docs/gpu-feasibility.md) (feasibility inventory).
> Device-specific handover and failure lists are maintained locally only and are not included in this repository.

Port Apple's open-source **XNU 8796.141.3** (the iOS 16 contemporary kernel) to **Redmi Note 12 Turbo (marble / SM7475 / Snapdragon 7+ Gen 2)**.
The boot method is **shim + `fastboot boot`, pure RAM execution**: no flashing `boot`, no writing to `userdata`, no modifying GPT. When the…
