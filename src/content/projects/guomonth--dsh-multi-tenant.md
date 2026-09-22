---
repo: "GuoMonth/dsh-multi-tenant"
name: "dsh-multi-tenant"
description: "Multi-tenant SaaS extension for DeepSeek Harness (DSH): tenant identity, session isolation, authorization, tenant-aware MCP, and audit."
readmeQualityOk: true
url: "https://github.com/GuoMonth/dsh-multi-tenant"
language: "JavaScript"
languages: ["JavaScript", "TypeScript"]
languagePcts: [55, 44]
topics: ["cordis", "deepseek-harness", "dsh-plugin", "multi-tenant", "saas", "ai-agents", "authorization", "tenant-isolation"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 29
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-14T07:11:21Z"
lastCommitAt: "2026-09-22T08:44:37Z"
lastReleaseAt: "2026-09-11T10:35:58Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 58
maintainers: ["GuoMonth"]
openGraphImageUrl: "https://opengraph.githubassets.com/11552787c6b214879285fa209e83fbd29826d6b738b032b6e10e0472d0ff597e/GuoMonth/dsh-multi-tenant"
---

# dsh-multi-tenant

OIDC, membership authorization, environment sessions and native DSH access, backed by Kubernetes Cells from [dsh-isolated-runtime](https://github.com/GuoMonth/dsh-isolated-runtime/blob/main/README.md).

[中文](https://github.com/GuoMonth/dsh-multi-tenant/blob/main/README.zh-CN.md)

**Cell MVP alpha.** Two-user and real-model regression passed. `0.9.0-alpha.1` uses npm `latest`, a default installation channel, not a stability promise. Breaking changes are allowed; historical compatibility, upgrades and seamless recovery are not promised.

## Fixed release boundary

DSH is exactly **0.1.5-rc.2**, source **`fb2c4b9e698e30edb738bca4cf0618587db7d203`**. Each release locks the publicly pullable Cell and Operator images by `@sha256` digest, with matching runtime source and DSH identity in `cell-release.json` (platform) / `release.json` (runtime). Pin the deployed platform image by digest too. npm `latest` selects a package at installation; it does not authorize moving image tags or a DSH version range at runtime.

Breaking updates are allowed: publish a new explicit combination, update configuration/state expectations as needed and validate the affected flow. No…
