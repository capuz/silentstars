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
stars: 125
forks: 6
openIssues: 1
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 10
createdAt: "2026-09-15T13:33:15Z"
lastCommitAt: "2026-10-26T20:59:51Z"
lastReleaseAt: "2026-09-30T03:29:49Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 94
undervaluedScore: 36
maintainers: ["Zakkaus", "Glassyiris", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c9b905be68283ed7ab05392b297d842fbecf31df2ce77b26532743a8ac69559/Zakkaus/doona"
discussionCount: 0
---

# doona

**Static web UI for the [daeuniverse](https://github.com/daeuniverse) engines: manage nodes, groups, rules and configuration in a browser.**

**[Live demo](https://demo.daeuniverse.org/)** / **[Documentation](https://zakkaus.github.io/doona-docs/en/)**

English / [简体中文](https://github.com/Zakkaus/doona/blob/HEAD/README.zh-CN.md) / [繁體中文](https://github.com/Zakkaus/doona/blob/HEAD/README.zh-TW.md)

[Try the demo](#try-the-demo) / [Install](#install) / [Backend protocols](#backend-protocols) / [Documentation](#documentation)

doona is a static web UI for managing a proxy backend. Real data requires a compatible running backend with its native API enabled; currently, doona supports [honk](https://github.com/daeuniverse/honk). dae is not supported yet; compatibility depends on a future implementation of the same API contract. honk or another web server can serve the UI.

Depending on the features exposed by your backend, doona lets you:

- Monitor traffic, connections, events and logs.
- Manage nodes and subscriptions, refresh subscriptions and inspect probe results.
- Manage groups, their members and node selection.
- Inspect routing and DNS rules, and edit rules in writable…
