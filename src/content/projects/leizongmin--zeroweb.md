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
languagePcts: [83]
topics: ["browser-engine", "cross-platform", "css", "dom", "experimental", "layout-engine", "rendering", "rust", "wasm", "webview"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 7
createdAt: "2026-05-30T06:33:02Z"
lastCommitAt: "2026-10-27T12:40:00Z"
lastReleaseAt: "2026-10-17T13:57:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 59
maintainers: ["leizongmin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/71e36c4bc617c773edd65796ca16841b5f344f34f5b06d7dd25d823597dac72c/leizongmin/ZeroWeb"
---

# ZeroWeb

ZeroWeb is an experimental cross-platform browser written in Rust from scratch. It supports macOS, Linux, Windows, and Android. It delivers two things:

- **`ZeroWebView`**: a web rendering library that can be embedded in other applications
- **`ZeroBrowser`**: a full browser application built on the same engine

DOM, CSS, layout, rendering, JavaScript bindings, networking, and security boundaries are all implemented in this repository, mainly relying on permissively licensed Rust components.

This is also an AI-first engineering experiment. Humans are only responsible for solution design, key decisions, and result verification, and nearly all of the code is written by AI. We want to see how far AI can advance a complex system like a browser when architectural boundaries, tests, and acceptance criteria are clearly defined.

> [!IMPORTANT]
> The project is experimental and **is not a browser suitable for everyday use**. It is suited for learning, research, and engineering exploration. For commercial or production use, evaluate the features, security, compatibility, performance, and license risks yourself.

## Why this project

- **Embedding first**: Besides the browser…
