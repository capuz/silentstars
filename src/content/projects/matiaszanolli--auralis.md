---
repo: "matiaszanolli/Auralis"
name: "Auralis"
description: "🎚️ Open Source Media Player with Mastering on the Go"
readmeQualityOk: true
url: "https://github.com/matiaszanolli/Auralis"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 29]
topics: ["matchering", "music-player", "remastering", "python", "adaptive-remastering"]
stars: 12
forks: 5
openIssues: 189
closedIssues: 6268
watchers: 0
contributors: 10
recentReleases: 0
createdAt: "2022-09-03T03:49:38Z"
lastCommitAt: "2026-11-23T13:25:56Z"
lastReleaseAt: "2025-11-07T01:18:51Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 77
maintainers: ["matiaszanolli", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/31df54ac146be68c95095f48cd2ddead2322dfa674ae3be7f28d9b590bb0f11a/matiaszanolli/Auralis"
fundingLinks: ["CUSTOM:https://t.me/tribute/app?startapp=de85"]
---

# 🎵 Auralis - Your Music Player with Magical Audio Enhancement

**A beautiful music player that makes your music sound better - automatically.**

Simple like iTunes. Smart like a mastering studio. No complicated settings.

## 🚧 Recovery in progress: v1.5.1

> **Not yet release-ready.** v1.5.1 is an unreleased recovery milestone on `master`.
> It has not been tagged, built, or published. The version number marks the workstream; it is
> not a claim that the application is currently working end to end.

The [working-state recovery audit](https://github.com/matiaszanolli/Auralis/blob/HEAD/docs/audits/AUDIT_RECOVERY_2026-07-24.md) found that the
backend can boot and the frontend can build, but the supported full-app launch path and three
core product flows had release-blocking defects. The three product defects (fingerprint
persistence, mono enhancement, rapid track selection) are fixed and were re-verified on
2026-11-22; the launcher and installed-artifact validation remain. The goal is deliberately
smaller than “finished”: one truthful launcher on top of those repaired flows.
