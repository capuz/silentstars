---
repo: "Proto-UI/Proto-UI"
name: "Proto-UI"
description: "A UI component generation solution that starts from the essence of interaction"
readmeQualityOk: true
url: "https://github.com/Proto-UI/Proto-UI"
homepage: "https://proto-ui.com"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [77]
topics: ["collaboration", "headlessui", "mit-license", "shadcn-ui", "ui-components", "web-components"]
stars: 37
forks: 15
openIssues: 87
closedIssues: 379
watchers: 2
contributors: 13
recentReleases: 2
createdAt: "2024-08-09T06:15:41Z"
lastCommitAt: "2026-11-19T04:07:59Z"
lastReleaseAt: "2026-09-20T10:28:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 96
undervaluedScore: 66
maintainers: ["cyjin-yl", "HyacinthHaru"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/840178061/ed4c286d-4603-4522-a0b0-d9cb1fc8730a"
discussionCount: 4
---

# Proto UI

**Proto UI is a framework-independent component interaction protocol and a toolchain for projecting the same prototype into different hosts.**

A Proto UI _prototype_ describes the identity and interaction semantics of a component. Adapters translate that protocol into React, Vue, Web Components, and, over time, other platforms. The goal is to make interaction logic explicit, testable, reusable, and portable across ecosystems.

English | [中文](https://github.com/Proto-UI/Proto-UI/blob/HEAD/README.zh-CN.md)

> **Status:** Proto UI is a v0 project. The exact `0.2.0` ecosystem release is available on npm under the stable `latest` channel. Stable publication on the 0.2 line does not imply a v1 compatibility promise; evaluate the current boundaries before production adoption.

## The core idea

Component implementations change across frameworks, but the interactive subject should remain recognizable. Proto UI separates those layers:

```text
Prototype protocol -> Adapter -> Host component instance
```
