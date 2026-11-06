---
repo: "ahandsomeboy6666/dsh-qq-cookbook"
name: "dsh-qq-cookbook"
description: "Best practices for connecting DeepSeek Harness (DSH) to QQ: protocol-side selection, agent bridging, persona card design, and a collaboration spec with red/green acceptance testing"
originalDescription: "DeepSeek Harness 接入 QQ 的最佳实践：协议端选型、agent 桥接、人格卡设计、可红绿验收的协作规范"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ahandsomeboy6666/dsh-qq-cookbook"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-26T14:46:06Z"
lastCommitAt: "2026-11-06T12:16:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 45
maintainers: ["ahandsomeboy6666"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c6eabee7f349c066f67083af1b7502b9ceb4947db9f4277d8b671a3b34e827d/ahandsomeboy6666/dsh-qq-cookbook"
---

# dsh-qq-cookbook

Selection and deployment assets for **connecting DeepSeek Harness (DSH) to QQ**: which path to take, how to accept it, and which pitfalls others have already hit.

**The sole standard: it should feel like a real person in QQ.** Not "the feature is connected," but "send a message, get a response within seconds, you can interrupt it, the group isn't flooded, and errors are explained in plain language." Metrics are in the [UX spec](https://github.com/ahandsomeboy6666/dsh-qq-cookbook/blob/HEAD/docs/07-ux-spec.md).

> **Current plan (decided):** `cheems135/dsh-qq-bridge` plugin + NapCat secondary account. This repo handles **selection, configuration, and acceptance**, and does not write its own bridge. See [current plan](https://github.com/ahandsomeboy6666/dsh-qq-cookbook/blob/HEAD/docs/10-current-plan.md).
>
> No code relationship with [qq-bridge](https://github.com/Derpyu520/qq-bridge); it is referenced only as a source of verified conclusions, serving as a factual baseline.
>
> Voice (**optional, not connected by default = no voice feature**): if you want voice, choose a solution later. The best result is **Volcano Engine Doubao Voice** (cloned voice + emotion,…
