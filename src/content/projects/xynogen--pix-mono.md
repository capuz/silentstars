---
repo: "xynogen/pix-mono"
name: "pix-mono"
description: "Monorepo of Pix, Distro of PI Coding Agent"
readmeQualityOk: true
url: "https://github.com/xynogen/pix-mono"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 23
forks: 2
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-06-09T18:15:30Z"
lastCommitAt: "2026-07-10T06:55:07Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 40
maintainers: ["xynogen"]
openGraphImageUrl: "https://opengraph.githubassets.com/e9e51b4e95b6a2f9c55a75a0aea4ec4bec81244038e27ce68e89577501a23f72/xynogen/pix-mono"
---

# pix-mono

Monorepo of Pix, a distro of [Pi Coding Agent](https://github.com/badlogic/pi-mono).

> **⚠ Expect breaking changes.** This project is under active development. Packages are regularly split, merged, renamed, or removed. The recommended upgrade path is to **uninstall then reinstall** the distro rather than incrementally updating individual packages. When in doubt, run the uninstall script first.

> **🐧 Linux only.** This project has only been tested on Linux. macOS and Windows are **not tested** and may not work correctly.

> **🤖 Claude-tested only.** Agent behavior is mostly tested against Claude models. I don't currently have access to GPT models, so usage and compatibility with OpenAI models is untested. Feel free to submit issues if a model consistently misuses tools (e.g. Claude found `rtk find` hard to use and failed consistently).

## Packages

### Core bundle

Bundled together by [`@xynogen/pix-core`](https://github.com/xynogen/pix-mono/blob/HEAD/packages/pix-core) — a single `pi install npm:@xynogen/pix-core` pulls and activates all of these.

**Libraries**

Shared dependencies pulled in automatically — install directly only if you need them standalone.

|…
