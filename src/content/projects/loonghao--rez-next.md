---
repo: "loonghao/rez-next"
name: "rez-next"
description: "Experimental Rust rewrite of Rez package manager core components. Not for production use."
readmeQualityOk: true
url: "https://github.com/loonghao/rez-next"
language: "Rust"
languages: ["Rust"]
languagePcts: [85]
stars: 25
forks: 2
openIssues: 8
closedIssues: 8
watchers: 1
contributors: 1
recentReleases: 2
createdAt: "2025-05-25T14:52:02Z"
lastCommitAt: "2026-07-15T05:53:38Z"
lastReleaseAt: "2026-05-17T15:55:36Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 60
maintainers: ["loonghao", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/e1f627041476f39b7210290f470a33ad8d303e4d3210940895cf208878c05763/loonghao/rez-next"
---

# rez-next

> ⚠️ **Experimental project.** rez-next is a Rust experiment exploring what a full rewrite of the [Rez](https://github.com/AcademySoftwareFoundation/rez) package manager could look like. It is **not** production-ready, **not** an official AcademySoftwareFoundation project, and APIs may change without notice. Use it for evaluation, benchmarking, and research — not for studio-critical pipelines.

An experimental Rust implementation of the [Rez](https://github.com/AcademySoftwareFoundation/rez) package manager with Python bindings and growing compatibility coverage. Many common workflows already work with `import rez_next`, but it is not yet a seamless drop-in switch for every API surface.

[English](https://github.com/loonghao/rez-next/blob/HEAD/README.md) | [中文](https://github.com/loonghao/rez-next/blob/HEAD/README_zh.md)

---

## Installation

### Linux / macOS

```bash
curl -fsSL https://raw.githubusercontent.com/loonghao/rez-next/main/install.sh | sh
```

Or with a specific version:

```bash
REZ_NEXT_VERSION=0.3.1 curl -fsSL https://raw.githubusercontent.com/loonghao/rez-next/main/install.sh | sh
```

Environment variables:

| Variable | Description | Default |…
