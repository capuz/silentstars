---
repo: "bajutsu-e2e/bajutsu"
name: "bajutsu"
description: "Natural-language-driven E2E (end-to-end) testing built on a backend-agnostic driver: one scenario format and one deterministic runner, where a platform is just a backend behind that one interface."
readmeQualityOk: true
url: "https://github.com/bajutsu-e2e/bajutsu"
homepage: "https://bajutsu-e2e.github.io/bajutsu/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 5
forks: 0
openIssues: 22
closedIssues: 283
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-03T15:46:39Z"
lastCommitAt: "2026-09-11T08:15:38Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 98
undervaluedScore: 58
maintainers: ["0x0c", "claude", "bajutsu-automation-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f03b23d433d6aaecaaf8ab402a53035e9343b3c0203c627b3e96e99d247d41e8/bajutsu-e2e/bajutsu"
---

**English** · [日本語](https://github.com/bajutsu-e2e/bajutsu/blob/HEAD/README.ja.md)

</p>

# Bajutsu

> Natural-language-driven E2E (end-to-end) testing built on a **backend-agnostic driver**: one
> scenario format and one deterministic runner, where **a platform is a backend** behind that
> one interface. Swap the backend and the same scenarios run on a different target — the iOS
> Simulator (XCUITest), a web (Playwright) backend, and an Android (adb) backend are all
> landed; Flutter apps run on those same iOS/Android backends unchanged, needing no new backend
> ([BE-0008](https://github.com/bajutsu-e2e/bajutsu/blob/HEAD/roadmaps/BE-0008-flutter-support/BE-0008-flutter-support.md)).
> **Status: pre-alpha.** The deterministic core, the AI authoring loop (`record` / `crawl`),
> the evidence subsystem, codegen, and self-healing triage are all implemented and
> unit-tested (no Simulator needed). The iOS **XCUITest backend** is **validated
> end-to-end on a real Simulator** — scenarios, evidence capture, and the triage self-heal loop
> all run on-device. The **web (Playwright) backend** runs a deterministic `run` against a
> browser on the Linux gate…
