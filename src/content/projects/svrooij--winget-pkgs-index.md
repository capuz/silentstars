---
repo: "svrooij/winget-pkgs-index"
name: "winget-pkgs-index"
description: "Open-source index of https://github.com/microsoft/winget-pkgs"
readmeQualityOk: true
url: "https://github.com/svrooij/winget-pkgs-index"
homepage: "https://wintuner.app/docs/related/winget-package-index"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["intune", "winget"]
stars: 26
forks: 3
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-09-20T12:48:00Z"
lastCommitAt: "2026-09-24T08:41:49Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 90
undervaluedScore: 59
maintainers: ["svrooij"]
openGraphImageUrl: "https://opengraph.githubassets.com/57c95fb6f05c713a55d85f1208dff550262dcb0caa56c42fbe4e0d04bf6344a9/svrooij/winget-pkgs-index"
fundingLinks: ["GITHUB:https://github.com/svrooij"]
discussionCount: 2
---

# winget-pkgs-index

Open-source package index of [Windows Package Manager repository](https://github.com/microsoft/winget-pkgs)

Documentation: [wintuner.app/docs/related/winget-package-index/](https://wintuner.app/docs/related/winget-package-index/)

## Why?

[WingetIntune](https://github.com/svrooij/wingetintune) uses winget to search the correct installer to publish to Intune. It had a dependency on winget (thus making it platform dependent) and it was slow. This project is a simple index of all packages in the winget repository. It is updated every 4 hours through a [github action](https://github.com/svrooij/winget-pkgs-index/actions/workflows/refresh.yml).

## Usage

| Kind | Online link | Download URL |
| ---- | ----------- | ------------ |
| CSV v2 | [index.v2.csv](https://github.com/svrooij/winget-pkgs-index/blob/main/index.v2.csv) | `https://github.com/svrooij/winget-pkgs-index/raw/main/index.v2.csv` |
| JSON v2 | [index.json](https://github.com/svrooij/winget-pkgs-index/blob/main/index.v2.json) | `https://github.com/svrooij/winget-pkgs-index/raw/main/index.v2.json` |
| CSV | [index.csv](https://github.com/svrooij/winget-pkgs-index/blob/main/index.csv) |…
