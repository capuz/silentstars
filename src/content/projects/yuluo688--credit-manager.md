---
repo: "yuluo688/credit-manager"
name: "credit-manager"
description: "Quota, billing, concurrency and API key management plugin for CLIProxyAPI."
originalDescription: "Quota, billing, concurrency and API key management plugin for CLIProxyAPI."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/yuluo688/credit-manager"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [59, 24]
topics: ["api-key-management", "api-proxy", "billing", "cliproxyapi", "codex", "golang", "openai", "quota-management"]
stars: 12
forks: 7
openIssues: 0
closedIssues: 9
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-08-14T06:52:32Z"
lastCommitAt: "2026-10-08T10:49:35Z"
lastReleaseAt: "2026-08-26T10:45:10Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 88
undervaluedScore: 65
maintainers: ["yuluo688"]
openGraphImageUrl: "https://opengraph.githubassets.com/b6d84c59a0191abf5adcf99156b52f845b850bd660230f3facdcb28efdbdf3ad/yuluo688/credit-manager"
---

# CPA Credit Manager

[English](https://github.com/yuluo688/credit-manager/blob/HEAD/README.en.md) | [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI) | [Project repository](https://github.com/yuluo688/credit-manager) | [Download latest release](https://github.com/yuluo688/credit-manager/releases/latest)

`credit-manager` is a native Go plugin for [CLIProxyAPI](https://github.com/router-for-me/CLIProxyAPI). It places plugin key authentication, quota pre-reservation, actual usage settlement, and usage analytics on the same request path, making it suitable for issuing independent, billable model access keys to teams, users, or automation tasks.

| Plugin ID | Runtime form |
|---|---|
| `credit-manager` | CGO `c-shared` dynamic library |

## What problem it solves

The host's upstream authentication, front-end `api-keys`, and usage callbacks may not reliably associate with the same caller under high concurrency. This plugin binds identity, pre-reservation, and settlement to the same `tk-...` key:

- Configure each key separately: total, daily, weekly, and monthly spending quotas, maximum concurrency, model access scope, and expiration time.
- Strictly pre-reserve quota…
