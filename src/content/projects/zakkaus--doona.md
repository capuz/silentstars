---
repo: "Zakkaus/doona"
name: "doona"
description: "Web UI for the daeuniverse engines (honk today, dae next). Live demo: https://demo.daeuniverse.org"
readmeQualityOk: true
url: "https://github.com/Zakkaus/doona"
homepage: "https://zakkaus.github.io/doona-docs/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["dae", "daeuniverse", "honk", "react", "web-ui"]
stars: 63
forks: 4
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-15T13:33:15Z"
lastCommitAt: "2026-10-04T10:02:10Z"
lastReleaseAt: "2026-09-30T03:29:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 33
maintainers: ["Zakkaus"]
openGraphImageUrl: "https://opengraph.githubassets.com/1bbcc094baa0e0f8035e02213c4c0c3c25e3ed1f812870596b3b4fa5214ff2fa/Zakkaus/doona"
discussionCount: 0
---

# doona

**Web UI for the [daeuniverse](https://github.com/daeuniverse) engines: manage nodes, groups, rules and configuration in a browser.**

**[Live demo](https://demo.daeuniverse.org/)** / **[Documentation](https://zakkaus.github.io/doona-docs/en/)**

English / [简体中文](https://github.com/Zakkaus/doona/blob/HEAD/README.zh-CN.md) / [繁體中文](https://github.com/Zakkaus/doona/blob/HEAD/README.zh-TW.md)

[Install](#install) / [Documentation](#documentation) / [Development](#development)

doona is a static web UI for the native API shared by daeuniverse engines. It shows engine state and manages nodes, groups, routing rules and configuration files. It supports honk; dae can use it once it implements the same contract. The engine or any web server can serve it.

[Try the demo with sample data](https://demo.daeuniverse.org/). To see the error states, open it with [`?scenario=faults`](https://demo.daeuniverse.org/?scenario=faults); `?scenario=` returns to the healthy demo.

## Install

Download `doona-<version>.tar.gz` from the [releases page](https://github.com/Zakkaus/doona/releases).
Extract it into the directory that honk's `native_api` block names in `ui`; honk serves doona at `/ui/`.…
