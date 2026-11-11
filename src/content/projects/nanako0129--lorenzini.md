---
repo: "Nanako0129/lorenzini"
name: "lorenzini"
description: "Claude Code skills that wait for a third-party PR reviewer and decide whether its verdict actually means pass"
readmeQualityOk: true
url: "https://github.com/Nanako0129/lorenzini"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
stars: 17
forks: 1
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 8
createdAt: "2026-09-19T02:17:03Z"
lastCommitAt: "2026-11-11T11:17:07Z"
lastReleaseAt: "2026-11-11T11:17:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 45
maintainers: ["Nanako0129"]
openGraphImageUrl: "https://opengraph.githubassets.com/da0903687ae6acad150cce99ca9b2422480776c540125fe71cc38b1822a0787e/Nanako0129/lorenzini"
---

# lorenzini

[English](https://github.com/Nanako0129/lorenzini/blob/HEAD/README.md) · [繁體中文](https://github.com/Nanako0129/lorenzini/blob/HEAD/README.zh-TW.md)

Claude Code skills that poll third-party pull request reviewers—CodeRabbit, GitHub Copilot, and Codex—and adjudicate whether their verdicts actually permit a merge.

They do not review source code; they adjudicate what the reviewer reported.

A shark's ampullae of Lorenzini are electroreceptors that locate prey buried in sand where eyes see nothing. That is the job here. Every automated reviewer observed across these repositories has reported findings inside collapsed sections, uncounted comments, or separate threads that its own top-level summary ignored. Every bug in this repository has made the identical error: assuming silence means clean code.

## The one rule

Never infer a pass from absence.

A verdict requires an explicit positive completion marker. Without one, keep polling. Silence is not approval, and an empty finding list does not mean zero issues. Every gate failure in this project failed *open*: it reported success when none was earned.

The record of every missed finding lives in…
