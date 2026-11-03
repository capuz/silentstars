---
repo: "hZsFN/jlu-drcom-ng"
name: "jlu-drcom-ng"
description: "Jilin University campus network Dr.COM authentication client (Python + Flet, HUD interface): self-healing on port conflicts, plain-language error codes, bundled dependencies for offline packaging"
originalDescription: "吉大校园网 Dr.COM 认证客户端（Python + Flet，HUD 界面）— 端口冲突自愈、错误码说人话、自带依赖可离线打包"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hZsFN/jlu-drcom-ng"
language: "Python"
languages: ["Python", "Dart"]
languagePcts: [59, 26]
topics: ["campus-network", "drcom", "flet", "jilin-university", "python", "windows"]
stars: 13
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-09-24T13:14:22Z"
lastCommitAt: "2026-11-03T11:14:40Z"
lastReleaseAt: "2026-11-02T15:06:43Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 78
undervaluedScore: 43
maintainers: ["hZsFN"]
openGraphImageUrl: "https://opengraph.githubassets.com/8addb5ec98650c389cf1e0a2633e6d5ecabbb44f303fc11bea27ee2a583131ad/hZsFN/jlu-drcom-ng"
---

# JLU DrCOM NG

Jilin University campus network authentication client, rewritten in Python. The interface is a **HUD (heads-up display) style** panel built on Flet.

It does the same job as the original Qt client: challenge, login, keepalive. But the interface is clearer, failures explain their cause, and when the port is occupied it finds its own way around.

> **Dart edition archived**: `drcom_dart/` + `desktop/` (the Dart authentication core and Flutter desktop client) are the output of last year's rewrite. They take 10 MB and don't require Python, but have fewer features than the Python edition (no headless CLI, no local HTTP status interface, no traffic statistics, no high-contrast/reduced-motion options). **Its installer is no longer published.** The code stays in place and can be consulted at any time, with its state fixed at [tag `dart-2.0.0-archive`](https://github.com/hZsFN/jlu-drcom-ng/tree/dart-2.0.0-archive). For daily use, install the Python edition below.
>
> English documentation: [README_EN.md](https://github.com/hZsFN/jlu-drcom-ng/blob/HEAD/README_EN.md)
>
> **Android edition**: the port that moves the same authentication core onto phones is at…
