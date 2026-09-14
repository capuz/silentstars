---
repo: "is7Qin/c3api"
name: "c3api"
description: "A lightweight AI gateway, very high performance"
readmeQualityOk: true
url: "https://github.com/is7Qin/c3api"
homepage: "https://t.me/c3api"
language: "Go"
languages: ["Go"]
languagePcts: [88]
stars: 35
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 6
createdAt: "2026-08-12T08:55:51Z"
lastCommitAt: "2026-09-14T09:11:47Z"
lastReleaseAt: "2026-09-10T07:08:53Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 43
maintainers: ["is7Qin", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d4d843a80309c5c865aa194e047c8eaaa7a2b4c6a09716f5843ce7ebc3e6c02/is7Qin/c3api"
discussionCount: 0
---

# ⚡ c3api

**A lightweight AI gateway** — one entry point for the OpenAI Responses API, the Anthropic Messages API, and the OpenAI Chat Completions API, with a built-in admin console, usage tracking, and billing.

[English](https://github.com/is7Qin/c3api/blob/HEAD/README.md) | [中文](https://github.com/is7Qin/c3api/blob/HEAD/README_zh.md)

</div>

**c3api** is a self-hosted AI gateway that fronts multiple upstream providers with one unified entry point. It speaks all six request formats — OpenAI Responses API (including its WebSocket variant), Anthropic Messages API, OpenAI Chat Completions API, OpenAI Images API, Codex web search, and an OpenAI-compatible model list — and maps them onto your configured upstream accounts with model routing, quotas, usage accounting, and an embedded admin console.

## Status: Beta

c3api is in **beta**: feature-complete, but breaking changes are free to happen.

- **Not backward-compatible** — database schemas and configuration are **not** backward-compatible across versions, and **no migration path** is provided.
- **Upgrade = fresh setup** — upgrading from an earlier version means provisioning a brand-new database and re-checking your…
