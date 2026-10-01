---
repo: "leizongmin/ZeroWeb"
name: "ZeroWeb"
description: "An experimental cross-platform browser project written in Rust."
originalDescription: "一个用 Rust 写的实验性跨平台浏览器项目。"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/leizongmin/ZeroWeb"
homepage: "https://zeroweb.leizm.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
topics: ["browser-engine", "cross-platform", "css", "dom", "experimental", "layout-engine", "rendering", "rust", "wasm", "webview"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 8
createdAt: "2026-05-30T06:33:02Z"
lastCommitAt: "2026-10-01T10:24:15Z"
lastReleaseAt: "2026-09-30T02:21:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["leizongmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/24978452d461add63fdd471cf9c19278dfdc72c6075dbdacd661be85539b7151/leizongmin/ZeroWeb"
---

# ZeroWeb

ZeroWeb is an experimental cross-platform browser project written in Rust. This repository is doing two things at the same time:

Official website: [zeroweb.leizm.com](https://zeroweb.leizm.com)

- An embeddable and reusable `ZeroWebView` library
- A complete `ZeroBrowser` browser application

The project's main line tries to keep the core code and dependency boundaries in its own hands, so the page kernel is mainly built up gradually from Rust components with permissive licenses. DOM, CSS, layout, rendering, navigation, and security boundaries are all added layer by layer in this repository.

This is also an AI-first engineering experiment: humans are only responsible for architecture design, key decisions, and result verification, with code development almost entirely completed independently by AI. We want to see how far AI can push this kind of complex system under the premise that architecture boundaries, tests, and acceptance criteria are all written clearly.

> [!IMPORTANT]
> This repository is still in the experimental phase, mainly used for learning, research, and engineering exploration. The core crate and tests already have quite a lot of content, but the…
