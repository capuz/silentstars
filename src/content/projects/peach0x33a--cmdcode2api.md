---
repo: "peach0x33a/cmdcode2api"
name: "cmdcode2api"
description: "Command Code Go gateway / OpenAI-compatible proxy"
readmeQualityOk: true
url: "https://github.com/peach0x33a/cmdcode2api"
language: "Go"
languages: ["Go"]
languagePcts: [81]
stars: 61
forks: 18
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2026-05-26T00:07:03Z"
lastCommitAt: "2026-11-16T04:23:31Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 38
maintainers: ["peach0x33a", "xnqycs", "HardeNNN"]
openGraphImageUrl: "https://opengraph.githubassets.com/3bf2f6f03df8b045536a0255b8500a98e171c57b0d101fb4ad02869090cc6d7b/peach0x33a/cmdcode2api"
---

# cmdcode2api

[中文说明](https://github.com/peach0x33a/cmdcode2api/blob/HEAD/README.zh-CN.md)

`cmdcode2api` is a small OpenAI-compatible gateway for [Command Code](https://commandcode.ai/). OpenAI-style clients call the familiar `/v1/chat/completions` and `/v1/models` endpoints, and the gateway forwards requests to Command Code — rotating across multiple accounts, tracking usage, and serving a built-in admin WebUI.

## Features

- OpenAI-compatible `POST /v1/chat/completions` (streaming and non-streaming) and `GET /v1/models`
- Multiple Command Code accounts with round-robin rotation and automatic failover (`401`/`403`/`429`/5xx), including per-account 429 cooldown
- Multiple local client API keys with per-key request and token accounting
- Command Code quota dashboard: 5-hour / weekly / estimated monthly progress bars, credit balances, plan and billing period, refreshed in the background every 5 minutes
- Embedded single-file WebUI: usage dashboard, account/key management, model exposure editor, live settings, and log tail
- Browser OAuth helper for obtaining a Command Code API key (CLI or WebUI); each OAuth run adds an account
- Local bearer-token auth for clients, separate admin…
