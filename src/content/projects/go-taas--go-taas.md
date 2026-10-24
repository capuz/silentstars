---
repo: "go-taas/go-taas"
name: "go-taas"
description: "Open-source Token as a Service (TaaS) platform on Kubernetes — deploy LLMs, price by model × GPU, and meter/bill usage via an OpenAI-compatible API."
readmeQualityOk: true
url: "https://github.com/go-taas/go-taas"
homepage: "https://go-taas.com"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [61, 23]
topics: ["ai", "ai-infra", "taas"]
stars: 93
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-08-30T13:56:36Z"
lastCommitAt: "2026-10-24T08:08:36Z"
lastReleaseAt: "2026-09-24T18:24:00Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 40
maintainers: ["sanmuny", "semantic-release-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/78996447993d310312f785f61035f8d57d3f2500ca40ea923d15fc0269e13cdb/go-taas/go-taas"
discussionCount: 2
---

# Go TaaS

**Token as a Service — an open-source LLM inference and metering/billing platform for AI agents and applications, built on Kubernetes**

**Go TaaS** is an open-source platform for serving and billing large language models on Kubernetes. Administrators deploy open-source models (Qwen, DeepSeek, LLaMA, etc.) on a range of heterogeneous accelerators and price them per model and card type. Agents and SDKs consume the models through an OpenAI-compatible API, with per-API-Key isolation, token metering, and settlement.

> **Status**: Enterprise-ready and production-proven. All 50 backlog feature points (rows 1–51; model fine-tuning, row 39, was descoped by the product owner) are implemented across both consoles, with unit + FVT suites and 50 Nightwatch end-to-end suites green on the Docker Compose stack. See the [roadmap](#roadmap) for what shipped in each phase.

**English | [简体中文](https://github.com/go-taas/go-taas/blob/HEAD/README.zh-cn.md)**

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Documentation](#documentation)
- [Roadmap](#roadmap)
-…
