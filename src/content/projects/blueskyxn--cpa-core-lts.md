---
repo: "BlueSkyXN/CPA-Core-LTS"
name: "CPA-Core-LTS"
description: "CLIProxyAPI LTS distribution with usage statistics retained."
readmeQualityOk: true
url: "https://github.com/BlueSkyXN/CPA-Core-LTS"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["cliproxyapi", "cpa", "lts", "usage-statistics", "api-proxy", "go"]
stars: 9
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 184
recentReleases: 9
createdAt: "2026-05-09T01:48:23Z"
lastCommitAt: "2026-07-11T05:55:44Z"
lastReleaseAt: "2026-07-10T08:56:53Z"
status: "thriving"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["BlueSkyXN", "luispater", "LTbinglingfeng"]
openGraphImageUrl: "https://opengraph.githubassets.com/b125278d61e151b4da1b4eee7b6754fbe5c2c74923c4742e99d0938e3b38ac82/BlueSkyXN/CPA-Core-LTS"
fundingLinks: ["GITHUB:https://github.com/router-for-me"]
discussionCount: 0
---

# CPA Core LTS

English | [中文](https://github.com/BlueSkyXN/CPA-Core-LTS/blob/HEAD/README_CN.md) | [日本語](https://github.com/BlueSkyXN/CPA-Core-LTS/blob/HEAD/README_JA.md)

CPA Core LTS is a long-term-maintained fork of `router-for-me/CLIProxyAPI`.

- LTS baseline: `v6.9.49`
- Baseline commit: `b8bba053fcdafd80abc2152c88c78f4e7713c05a`
- Upstream source: <https://github.com/router-for-me/CLIProxyAPI>
- LTS repository: <https://github.com/BlueSkyXN/CPA-Core-LTS>
- Companion Web UI: <https://github.com/BlueSkyXN/CPA-Panel-LTS>
- Default panel release source: `https://github.com/BlueSkyXN/CPA-Panel-LTS`

## Maintenance Model

This fork exists because upstream releases after the selected baseline changed or removed the full usage statistics flow. The goal of this repository is to keep the CLI proxy core maintainable while preserving the statistics behavior that existed at `v6.9.49`.

Maintenance rules:

- `main` is the only CPA-Core-LTS product line. Do not create a separate "statistics branch" for normal maintenance.
- CPA-Core-LTS tracks `router-for-me/CLIProxyAPI` by operator-driven protected full-sync merge PRs, usually prepared by AI agents when maintainers request a sync.
-…
