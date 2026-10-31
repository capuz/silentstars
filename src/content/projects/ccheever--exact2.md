---
repo: "ccheever/exact2"
name: "exact2"
description: "Exact, restarted: rules and scope before code."
readmeQualityOk: true
url: "https://github.com/ccheever/exact2"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [53, 21]
stars: 42
forks: 5
openIssues: 11
closedIssues: 113
watchers: 0
contributors: 17
recentReleases: 1
createdAt: "2026-08-27T11:51:51Z"
lastCommitAt: "2026-10-31T19:01:21Z"
lastReleaseAt: "2026-10-23T19:58:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 40
maintainers: ["ccheever", "daehyeon-mun", "ide"]
openGraphImageUrl: "https://opengraph.githubassets.com/558e770821e4234159a061d79f0ed3f1cdea438bff5b26fb502a8da004a079be/ccheever/exact2"
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
