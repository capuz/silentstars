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
languagePcts: [84]
topics: ["browser-engine", "cross-platform", "css", "dom", "experimental", "layout-engine", "rendering", "rust", "wasm", "webview"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-05-30T06:33:02Z"
lastCommitAt: "2026-10-11T10:14:36Z"
lastReleaseAt: "2026-10-10T16:11:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["leizongmin"]
openGraphImageUrl: "https://opengraph.githubassets.com/25ceb7c1a969bb28fb9d63fbb0fe5f3092e4356a0d036f49f547886c286a6d42/leizongmin/ZeroWeb"
---

# ZeroWeb

ZeroWeb is an experimental cross-platform browser project written in Rust. This repository is working on two things at once:

Website: [zeroweb.leizm.com](https://zeroweb.leizm.com)

- An embeddable, reusable `ZeroWebView` library
- A complete `ZeroBrowser` browser application

The project aims to keep the core code and dependency boundaries in its own hands, so the page engine is being built gradually on top of permissively licensed Rust components. The DOM, CSS, layout, rendering, navigation, and security boundaries are all being built out layer by layer in this repository.

This is also an AI-first engineering experiment: humans are responsible only for solution design, key decisions, and result verification, while nearly all code development is done autonomously by AI. We want to see how far AI can advance a complex system like this when architectural boundaries, tests, and acceptance criteria are clearly defined.

> [!IMPORTANT]
> This repository is still experimental, mainly used for learning, research, and engineering exploration. The core crates and tests already have a fair amount, but the browser shell, a complete page JavaScript runtime, and real-site…
