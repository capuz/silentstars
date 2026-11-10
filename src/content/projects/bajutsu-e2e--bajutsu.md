---
repo: "bajutsu-e2e/bajutsu"
name: "bajutsu"
description: "Natural-language-driven E2E (end-to-end) testing built on a backend-agnostic driver: one scenario format and one deterministic runner, where a platform is just a backend behind that one interface."
readmeQualityOk: true
url: "https://github.com/bajutsu-e2e/bajutsu"
homepage: "https://bajutsu-e2e.github.io/bajutsu/"
language: "Python"
languages: ["Python"]
languagePcts: [91]
stars: 6
forks: 0
openIssues: 50
closedIssues: 357
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-06-03T15:46:39Z"
lastCommitAt: "2026-11-10T14:49:23Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["0x0c", "claude", "bajutsu-automation-bot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/899e41c55053180595e2c0ab9ea347f3b76e14455c2fd39f2145f8e3446fce70/bajutsu-e2e/bajutsu"
---

**English** · [日本語](https://github.com/bajutsu-e2e/bajutsu/blob/HEAD/README.ja.md)

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
