---
repo: "ccheever/exact2"
name: "exact2"
description: "Exact, restarted: rules and scope before code."
readmeQualityOk: true
url: "https://github.com/ccheever/exact2"
language: "Rust"
languages: ["Rust"]
languagePcts: [63]
stars: 15
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 13
recentReleases: 0
createdAt: "2026-08-27T11:51:51Z"
lastCommitAt: "2026-10-05T10:46:30Z"
status: "thriving"
tags: []
healthScore: 86
undervaluedScore: 42
maintainers: ["expo-tuft[bot]", "ccheever", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/aafc7e7b8cdc64b31293c0e9ce37bca0bbb6bf9f186b7788198c96c9dfa7c417/ccheever/exact2"
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
> app with `exact new`: a todo list where I can add items, check them off, delete them,
> and see how many are left. Put the view in Contract and keep the list in `app.ts`.
> Write an `app.test.contract`, pass it on web, macOS, and the iOS Simulator with
> `scripts/agent.mjs`, then open the app for me on all three.
> ```
>
> A fresh agent given this prompt on a clean clone (2026-10-04, Hermes already in the
> machine cache, Cargo's cache warm) finished in about 57 minutes, and its tests passed
> on all three platforms. About 25 of those minutes were the first macOS and iOS builds,
> roughly 13 minutes each; later builds take a minute or two. On a machine that has
> never built Hermes, that build comes first and adds time.

checkout. (The aurora behind the macOS and web versions is an optional GPU…
