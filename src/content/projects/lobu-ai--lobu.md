---
repo: "lobu-ai/lobu"
name: "lobu"
description: "Build AI teammates programmatically"
readmeQualityOk: true
url: "https://github.com/lobu-ai/lobu"
homepage: "https://lobu.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [95]
topics: ["agent", "chatbot", "clawdbot", "openclaw", "personal-assistant"]
stars: 189
forks: 25
openIssues: 21
closedIssues: 241
watchers: 0
contributors: 40
recentReleases: 0
createdAt: "2025-07-27T03:49:12Z"
lastCommitAt: "2026-07-31T06:30:31Z"
lastReleaseAt: "2026-02-20T04:51:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 42
maintainers: ["buremba", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7c3d66551ad9c6f3ef0e3f5b2940536fda5f43dc6bebcd1df47de294ac17301/lobu-ai/lobu"
discussionCount: 0
---

# Lobu — Open-source backend for AI teammates

**Lobu** is open-source infrastructure for autonomous agents that **watch**, **remember**, and **act** where your team already works. Connect company tools, build living memory, and let agents run on schedules, in Slack threads, or over MCP — with sandboxed execution per user or channel and credentials agents never see.

Under the hood, workers run Lobu's Pi-based agent loop (bash, files, MCP tools, skills) inside an isolated sandbox per conversation. One Node process serves many agents and channels; shared memory and connectors live in Postgres (pgvector). Embed agents in your product, or give your team their own without running a separate instance per person.

https://github.com/user-attachments/assets/d72a9286-0325-4b8b-afc0-c1efe9c96f4e

## Three ways in

Lobu is not a harness you have to build on. It is the data layer your agents
work against — a durable event log and a typed ontology over your org's tools.
Bring your own agent and reach it over MCP, the CLI, or the TypeScript SDK; or
run Lobu's own agents on top. The same org-scoped graph backs all of them.

### 1. Full agent — Slack, Telegram, behaviors, connectors

Scaffold…
