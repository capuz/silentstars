---
repo: "tanaton/mendo"
name: "mendo"
description: "A Markdown viewer that renders directly with Direct2D/DirectWrite. It aims for fast operation."
originalDescription: "Direct2D/DirectWriteで直接描画するMarkdownビュアーです。高速な動作を目指しています。"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/tanaton/mendo"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 8
forks: 3
openIssues: 3
closedIssues: 103
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-15T17:15:07Z"
lastCommitAt: "2026-11-05T11:24:33Z"
lastReleaseAt: "2026-04-01T16:53:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 63
maintainers: ["tanaton"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c3349c24fc60ed1331cb27bc87ea464309dc37b65df3ee8271ea99adb177aff/tanaton/mendo"
---

# mendo - Fast and Easy Markdown Viewer

A Markdown viewer that renders directly with Direct2D/DirectWrite. It runs fast and uses little memory.

**Japanese** | [English](https://github.com/tanaton/mendo/blob/HEAD/docs/README.en.md) | [简体中文](https://github.com/tanaton/mendo/blob/HEAD/docs/README.zh-CN.md) | [繁體中文](https://github.com/tanaton/mendo/blob/HEAD/docs/README.zh-TW.md) | [한국어](https://github.com/tanaton/mendo/blob/HEAD/docs/README.ko.md)

## Installation

You can install it with [winget](https://learn.microsoft.com/windows/package-manager/winget/).

```
winget install tanaton.mendo
```

### Recommended way to launch

Type `mendo` in the address bar of File Explorer and press the Enter key.

## Features

- **Fast startup** — Starts quickly by parallelizing window creation and file processing.
- **Low memory usage** — Does not use a browser to render Markdown; renders directly with Direct2D + DirectWrite.
- **Live reload** — Detects changes to the file being displayed and updates the display automatically. It also scrolls automatically to the changed position.
- **Mermaid** — Displays `mermaid` code blocks as diagrams. ([pele](https://pele.run/) running on…
