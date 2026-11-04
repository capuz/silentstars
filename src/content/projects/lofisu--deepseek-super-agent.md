---
repo: "LofiSu/deepseek-super-agent"
name: "deepseek-super-agent"
description: "Open-source DeepSeek Super-agent style multi-agent framework with a thin harness — Router/Worker, triggers, Watchdog (not an official DeepSeek product)."
readmeQualityOk: true
url: "https://github.com/LofiSu/deepseek-super-agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [100]
topics: ["agent-framework", "ai-agent", "deepseek", "multi-agent", "openai-compatible", "super-agent", "typescript", "watchdog"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-31T15:22:14Z"
lastCommitAt: "2026-11-04T11:27:15Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 49
maintainers: ["LofiSu"]
openGraphImageUrl: "https://opengraph.githubassets.com/4ba0dccbf797775250f97e37719930a0bb5037a4a5bbee52427cae5681d5a5bb/LofiSu/deepseek-super-agent"
---

# deepseek-super-agent

English | [简体中文](https://github.com/LofiSu/deepseek-super-agent/blob/HEAD/README.zh-CN.md)

CLI: `ds-agent`. License: MIT.

Thin TypeScript runtime. Custom Harness below. Domain engine on top.

Inspired by DeepSeek's public article and prototype. Independent implementation. No DeepSeek Harness, Cordis, or `@deepseek-ai/dsh*`.

Author: LofiSu. Co-written with Grokbot (CoderBot).

[Docs](https://github.com/LofiSu/deepseek-super-agent/blob/HEAD/docs/index.md) · [Inspiration](#inspiration) · [Features](#features) · [Architecture](#architecture) · [Quick start](#quick-start) · [Demo](#demo) · [Models](#models) · [Credits](#credits) · [License](#license)

Shorter pages, same facts: [install](https://github.com/LofiSu/deepseek-super-agent/blob/HEAD/docs/install.md), [architecture](https://github.com/LofiSu/deepseek-super-agent/blob/HEAD/docs/architecture.md), [safety](https://github.com/LofiSu/deepseek-super-agent/blob/HEAD/docs/safety.md). [中文](https://github.com/LofiSu/deepseek-super-agent/blob/HEAD/docs/zh/index.md).

## What this is

Two layers.

- **Harness.** Session log, async ReAct loop, OpenAI-compatible calls, tools by role, daemon.
- **Engine.** Intake…
