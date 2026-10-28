---
repo: "t8y2/dbx-store"
name: "dbx-store"
description: "Official plugin catalog and review metadata for DBX"
readmeQualityOk: true
url: "https://github.com/t8y2/dbx-store"
homepage: "https://github.com/t8y2/dbx"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [91]
topics: ["database-tools", "dbx", "marketplace", "plugins"]
stars: 14
forks: 56
openIssues: 5
closedIssues: 7
watchers: 0
contributors: 59
recentReleases: 6
createdAt: "2026-07-28T14:58:09Z"
lastCommitAt: "2026-10-28T09:56:54Z"
lastReleaseAt: "2026-09-14T04:09:10Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "fork_magnet"]
healthScore: 91
undervaluedScore: 66
maintainers: ["github-actions[bot]", "allran", "Ezreal-byte"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e9af65ad4b813a409e6ba4acb22aba3a08ef01767f5c9971400e3f238a5cd49/t8y2/dbx-store"
---

# DBX Store

Official plugin catalog, publisher records, and review metadata for [DBX](https://github.com/t8y2/dbx).

[English](https://github.com/t8y2/dbx-store/blob/HEAD/README.md) | [简体中文](https://github.com/t8y2/dbx-store/blob/HEAD/README.zh-CN.md)

DBX reads the generated catalog from:

```text
https://raw.githubusercontent.com/t8y2/dbx-store/main/catalog/index.json
```

## Start developing a plugin

To build your own DBX plugin, start with the official guide *Develop and Submit DBX Plugins*. It covers the project structure, manifest reference, frontend Host API, sidecar SDKs, packaging, local debugging, and the full official-store submission flow:

- English: https://dbxio.com/en/docs/plugin-development
- 简体中文: https://dbxio.com/cn/docs/plugin-development

The development CLI installs without cloning or compiling DBX:

```bash
npm install --global @dbx-app/plugin-cli
```

## Repository layout

```text
dbx-store/
├── plugins/                 # one reviewed plugin metadata file per plugin
├── publishers/              # publisher identity and review records; no private trust material
├── signing-keys.json        # DBX Store repository signing-key history
├── catalog/index.json…
