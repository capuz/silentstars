---
repo: "anoni-net/docs"
name: "docs"
description: "Source for anoni.net/docs: guides to anonymity and privacy, from concepts and tools to preparing for different situations, plus network measurement and related laws in Taiwan."
originalDescription: "anoni.net/docs 的文件原始碼。從概念、工具到各種處境的準備，整理匿名網路與隱私的知識，也追蹤台灣的網路觀測與相關法規。 Source for anoni.net/docs: guides to anonymity and privacy, from concepts and tools to preparing for different situations, plus network measurement and related laws in Taiwan."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/anoni-net/docs"
homepage: "https://anoni.net/docs/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [68, 31]
topics: ["censorship", "network-circumvention", "network-measurement", "ooni", "research", "tails", "tor", "anonymity", "mkdocs", "privacy"]
stars: 52
forks: 6
openIssues: 23
closedIssues: 42
watchers: 5
contributors: 9
recentReleases: 2
createdAt: "2023-10-16T05:34:30Z"
lastCommitAt: "2026-11-23T10:27:14Z"
lastReleaseAt: "2026-09-20T16:23:36Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 56
maintainers: ["toomore", "wu858430049", "fumin"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec077de7fa456f3a1dc249bfa18e8c43409128c084bf6b6427b8b9efb1bfefc6/anoni-net/docs"
---

# Anonymous Network Community Docs | anoni.net Docs

> Promoting and translating the anonymous network tools Tor, Tails, and the OONI measurement tool

The core documentation system of the “Anonymous Network Community anoni.net.” The repository has two directories: the public multilingual documentation site, and the shared scripts and CI checks that support it.

## 📚 Project Structure

```
anoni-net-docs/
├── docs/           # MkDocs multilingual documentation site (zh-TW, zh-CN, en)
└── tools/          # Shared scripts: editorial standard scanning, frontend tests, data generation, deployment
```

The two directories are licensed differently; see the “License” section below.

In 2026-10, the two tools used by the documentation site’s measurement page were split into separate repos, with their commit history carried over:

| Tool | Repo | License |
|------|------|---------|
| Pulse: Tor relay monitoring system, providing the API for the measurement page charts | [`anoni-net/pulse`](https://github.com/anoni-net/pulse) | MIT |
| ASN Coverage: CLI for ASN coverage analysis of OONI measurement data | [`anoni-net/asn-coverage`](https://github.com/anoni-net/asn-coverage) | GPL-3.0 |
