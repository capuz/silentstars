---
repo: "bradrlaw/ai-server"
name: "ai-server"
description: "Personal headless AI server — docs, ADRs, and operational scripts"
readmeQualityOk: true
url: "https://github.com/bradrlaw/ai-server"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [65, 27]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 4
createdAt: "2026-07-02T05:03:50Z"
lastCommitAt: "2026-08-08T04:34:17Z"
lastReleaseAt: "2026-08-05T05:03:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 53
maintainers: ["bradrlaw"]
openGraphImageUrl: "https://opengraph.githubassets.com/21f193eb5a01e98dc26d1f124c232acd4d3a2ac66ddf7d52d7f8d3c93fade0fc/bradrlaw/ai-server"
discussionCount: 0
---

# Headless AI Server (For home or small business)

Configuration, operational scripts, and design docs for a personal headless AI
server (development + AI workloads for me and my family). The box serves local LLMs,
speech-to-text, embeddings/RAG, image generation, and long-running agents behind a
single OpenAI-compatible API. The same setup scales naturally to a **small office or
workgroup** — a handful of people (and their editors, chat apps, and agents) can share
one private endpoint instead of paying per-seat for a cloud API.

> This repo tracks **docs** and **scripts** only. Large/local artifacts — models,
> Python venvs, source checkouts, datasets, and per-service data — live on the box
> under `/srv/ai/` and are intentionally git-ignored.

## Contents

- [What it does](#what-it-does)
- [Hardware](#hardware)
- [Build cost](#build-cost)
- [Power usage](#power-usage)
- [Retrospective — what I'd do differently](#retrospective--what-id-do-differently)
- [Layout](#layout)
- [Notable components & scripts](#notable-components--scripts)
- [Documentation](#documentation)
- [Conventions](#conventions)
- [Attribution](#attribution)
- [License](#license)

## What it does

This is the…
