---
repo: "everruns/everruns"
name: "everruns"
description: "Headless durable agentic harness engine. Run durable AI agents reliably and scalably."
readmeQualityOk: true
url: "https://github.com/everruns/everruns"
homepage: "https://everruns.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
topics: ["agents", "ai", "ai-agents", "harness"]
stars: 33
forks: 0
openIssues: 0
closedIssues: 11
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-12-14T00:12:17Z"
lastCommitAt: "2026-07-04T22:53:44Z"
lastReleaseAt: "2026-03-12T15:05:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 45
maintainers: ["chaliy", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5de24b03031f3e01fe2055cc07bc4faca5a848479824b5b5246e01e227e6835/everruns/everruns"
---

# Everruns

> **Note:** Everruns is under active development. Expect rapid changes and experimental features.

**Everruns is an open-source platform for building, deploying, and operating durable AI agents.**

Define agents and their tools, compose them into reusable harnesses, then ship them to real users through Slack, web chat, scheduled jobs, webhooks, A2A, MCP, or a plain HTTP API — backed by a Rust + PostgreSQL durable execution engine that survives restarts and scales horizontally.

## Why Everruns

- **Durable by default** — every session is a PostgreSQL-backed workflow that survives restarts, worker crashes, and network partitions. No lost runs, no in-memory state to babysit.
- **One agent, every channel** — define a harness once, then [publish](https://docs.everruns.com/features/apps/) it to Slack, web chat, A2A, webhooks, cron schedules, voice, or a plain HTTP/[MCP](https://docs.everruns.com/features/mcp/) API.
- **Open and provider-neutral** — implements the [Open Responses](https://www.openresponses.org/) spec across OpenAI, Anthropic, Gemini, and Azure; register remote MCP servers as tools. MIT-licensed and self-hostable.
- **Built for production** — multi-tenant…
