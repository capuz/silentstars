---
repo: "ccheever/exact2"
name: "exact2"
description: "Exact, restarted: rules and scope before code."
readmeQualityOk: true
url: "https://github.com/ccheever/exact2"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [55, 21]
stars: 21
forks: 5
openIssues: 5
closedIssues: 110
watchers: 0
contributors: 17
recentReleases: 0
createdAt: "2026-08-27T11:51:51Z"
lastCommitAt: "2026-10-23T08:46:03Z"
status: "thriving"
tags: []
healthScore: 98
undervaluedScore: 46
maintainers: ["ccheever", "expo-tuft[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c612c60c398e6df4529f779e96cf8db0adb6781fd7e10dd18ddf0c3baf6ddda7/ccheever/exact2"
---

# Exact

**Write an app once. It runs natively on the web, macOS, iOS, and Linux, and an AI
agent can build it, run it, see it, and test it on every one of them.**

> [!TIP]
> **Try it with a coding agent.** On a Mac with Xcode, Rust, Bun, and Chrome installed,
> give Claude Code this prompt:
>
> ```text
> Clone https://github.com/ccheever/exact2 and follow its README to make a new Exact
> app with `exact new`. Run `bun scripts/exact.mjs setup` once first. Make a todo
> list where I can add items, check them off, delete them,
> and see how many are left. Put the view in Contract and keep the list in `app.ts`.
> Write an `app.test.contract`, pass it on web, macOS, and the iOS Simulator with
> `scripts/agent.mjs`, then open the app for me on all three.
> ```
>
> A fresh agent given the earlier version of this prompt on a clean clone (2026-10-04, Hermes already in the
> machine cache, Cargo's cache warm) finished in about 57 minutes, and its tests passed
> on all three platforms. About 25 of those minutes were the first macOS and iOS builds,
> roughly 13 minutes each; later builds take a minute or two. On a machine that has
> lacked Hermes, its source build came first and added time.…
