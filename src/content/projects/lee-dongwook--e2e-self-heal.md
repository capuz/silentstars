---
repo: "Lee-Dongwook/E2E-Self-Heal"
name: "E2E-Self-Heal"
description: "Automatically repair broken Playwright E2E tests. When a UI change renames or restructures an element and a test's selector breaks, the engine diagnoses the failure, patches the broken selector/wait, verifies the new selector against the live DOM, then re-runs the test until it passes (or a retry cap is hit) and writes the fix back"
readmeQualityOk: true
url: "https://github.com/Lee-Dongwook/E2E-Self-Heal"
homepage: "https://pypi.org/project/ai-driven-e2e/#description"
language: "Python"
languages: ["Python"]
languagePcts: [78]
topics: ["e2e-testing", "langgraph", "playwright", "test-automation", "pr-bot", "ai-agents", "llm", "python", "self-healing", "good-first-issue"]
stars: 9
forks: 32
openIssues: 25
closedIssues: 160
watchers: 1
contributors: 29
recentReleases: 3
createdAt: "2026-07-04T00:16:00Z"
lastCommitAt: "2026-10-10T10:04:27Z"
lastReleaseAt: "2026-09-22T02:07:06Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 75
maintainers: ["Lee-Dongwook", "kamleshkc2002", "snehaapratap"]
openGraphImageUrl: "https://opengraph.githubassets.com/f25f621301e5edf0a852e2ae672ce73113051aa50c387b1296d79a4880a4df36/Lee-Dongwook/E2E-Self-Heal"
discussionCount: 8
---

# AI-Driven E2E Test Self-Healing Engine

**English** · [한국어](https://github.com/Lee-Dongwook/E2E-Self-Heal/blob/HEAD/README.ko.md) · [日本語](https://github.com/Lee-Dongwook/E2E-Self-Heal/blob/HEAD/README.ja.md) · [简体中文](https://github.com/Lee-Dongwook/E2E-Self-Heal/blob/HEAD/README.zh-CN.md)

> **Using LLM APIs?** This project optionally supports
> [OrcaRouter](https://www.orcarouter.ai/ref/ref_210b976a004fb5022f5f): one API for 200+
> models with zero markup and cost-aware routing. Using this referral link supports the
> project with a 5% commission at no additional cost to you.

**OrcaRouter is an optional LLM provider for this project.** See
[Using OrcaRouter](#using-orcarouter) for the configuration.

A **self-healing** engine that automatically repairs broken **Playwright** E2E tests with an
**AI agent** built on **LangGraph**. When a UI change renames or restructures
an element and a test's selector breaks, the engine diagnoses the failure, patches the
broken selector/wait, **verifies the new selector against the live DOM**, then re-runs the
test until it passes (or a retry cap is hit) and writes the fix back — as a local **CLI** or
a **CI GitHub Action** that opens a patch…
