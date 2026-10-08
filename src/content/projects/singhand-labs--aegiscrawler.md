---
repo: "singhand-labs/AegisCrawler"
name: "AegisCrawler"
description: "Record once, replay forever — a production-grade browser data-collection platform. A PageResearch Agent extension turns real interactions into humanized DSL rules, a Go server schedules lease-based tasks, and ScriptCat workers execute them in real browsers. Optional LLM rule enhancement with security scan + human diff review."
readmeQualityOk: true
url: "https://github.com/singhand-labs/AegisCrawler"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [50, 48]
topics: ["anthropic", "browser-automation", "browser-extension", "chrome-extension", "data-collection", "dsl", "golang", "llm", "openai", "react"]
stars: 16
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 1
createdAt: "2026-09-20T10:01:54Z"
lastCommitAt: "2026-10-08T10:51:51Z"
lastReleaseAt: "2026-09-20T12:48:33Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 28
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/c7592c55cd7b56f638061443f275f9254aee8952de8a1ab9efcd15b6d06529c8/singhand-labs/AegisCrawler"
---

# AegisCrawler PageResearch Agent Service

**English** | [简体中文](https://github.com/singhand-labs/AegisCrawler/blob/HEAD/README.zh-CN.md)

A production-grade browser data-collection platform built around one idea:
**a recording becomes a rule, and a rule becomes a scheduled task.**

> Design philosophy: PageResearch Agent exists to **prototype rules fast**; ScriptCat +
> the server deliver **long-term stable, schedulable, observable collection**.

*(UI captions are in Chinese; an English UI is on the roadmap.)*

## Why AegisCrawler?

- **Record → DSL → Task, no code.** The PageResearch Agent extension records clicks,
  typing, scrolling, and drags on a real page and turns them into an
  executable YAML/JSON DSL rule.
- **Humanized action DSL** covering the full browser surface: `click`, `type`,
  `scroll`, `drag`, `slide`, `upload`, `hover`, `wait`, `evaluate`, `loop`,
  `if`, `extract`, and more.
- **Production task lifecycle.** Lease-based claiming, heartbeat renewal,
  sweeper recovery with retries, and a dead-letter queue.
- **ScriptCat worker** executes rules in a real browser tab and streams
  results, logs, and status back to the server.
- **Optional LLM rule enhancement.**…
