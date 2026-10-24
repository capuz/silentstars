---
repo: "ELY-Open-Source/CrychicUI"
name: "CrychicUI"
description: "1500 components for MyGo native UI, in MyGo's own look, with motion and sound."
originalDescription: "1500 components for MyGo native UI, in MyGo's own look, with motion and sound."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/ELY-Open-Source/CrychicUI"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 14
forks: 0
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-19T23:04:23Z"
lastCommitAt: "2026-10-24T00:14:44Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 33
maintainers: ["Raiden-MeixElysia"]
openGraphImageUrl: "https://opengraph.githubassets.com/adb870208a2450fb6a30b1f81d25692318d19290266b5d3822d53f1675ff8746/ELY-Open-Source/CrychicUI"
---

# CrychicUI

A Go component library for MyGo's native UI. It keeps MyGo's own look: a zinc gray background, the system accent color, 6 DIP corner radius, a 4 DIP spacing unit, and the system font. Every component moves, and every interactive component has a synthesized sound effect.

The interface is drawn by MyGo on the GPU, without HTML, JavaScript, or WebView.

## Installation

```sh
go get github.com/ELY-Open-Source/CrychicUI
```

Requires Go 1.27.1 and MyGo v0.5.5.

## Sound

Interactive components play a sound effect on action, enabled by default.

```go
sound.SetEnabled(false) // mute all
```

## Gallery

```sh
go run ./cmd/gallery
```

The same program compiled to WebAssembly is the website: https://crychicui.zhangyanghaha0407.workers.dev

## License

MIT. Third-party notices are in [THIRD_PARTY_NOTICES.md](https://github.com/ELY-Open-Source/CrychicUI/blob/HEAD/THIRD_PARTY_NOTICES.md).
