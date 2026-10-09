---
repo: "HanZijie/agentos-android"
name: "agentos-android"
description: "AgentOS for Android — system-level Agent runtime, AOSP integration, ROM and device support. One root, and turn your phone into a “Doubao Phone”!"
originalDescription: "AgentOS for Android — system-level Agent runtime, AOSP integration, ROM and device support. 一个Root，让你的手机变身为“豆包手机”！"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/HanZijie/agentos-android"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [78]
stars: 17
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 1
createdAt: "2026-09-27T12:35:50Z"
lastCommitAt: "2026-10-09T10:50:48Z"
lastReleaseAt: "2026-10-09T08:09:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 41
maintainers: ["HanZijie"]
openGraphImageUrl: "https://opengraph.githubassets.com/24226f1f9e69a7e2a45f1aa7571a8513238f71a6bd367981a7e8c75076de7b9c/HanZijie/agentos-android"
---

Multiple apps share the same Agent runtime, so each one doesn't have to bundle a full Agent.</p>

---

## Core Capabilities

The same app can play both of these roles at once. Users can start a task right inside the app they're already using, without first going to a unified chat entry point.

> [!NOTE]
> This is currently a **prototype**, deployed as a Magisk / KernelSU module on rooted Android phones, with no ROM replacement required. Root is the current means of deployment and process supervision, not the project's core claim. Both integration paths have been demonstrated on real devices, but the sample apps are provided by this project, and permission controls for third-party apps are still coarse; see [Current status and boundaries](#当前状态与边界).

---

## Demo

Two on-device demos, each corresponding to one of the two integration relationships above.

### Main demo: App → Agent

Notes is a sideloaded app. It contains a memo; tapping a button hands the text to AgentOS, and the Agent reads out the time and creates a calendar event and an alarm. Notes itself has no calendar or alarm permissions and no model key.

Key frames, left to right: after tapping the AgentOS button, confirm…
