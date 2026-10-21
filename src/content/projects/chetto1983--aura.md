---
repo: "chetto1983/Aura"
name: "Aura"
description: "Self-hosted AI agent in Go with temporal graph memory, scheduled jobs, MCP tools and Telegram/WhatsApp channels. Docker Compose appliance, MIT."
readmeQualityOk: true
url: "https://github.com/chetto1983/Aura"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [71, 20]
topics: ["autonomous-agents", "arcadedb", "llama-cpp", "local-first", "ollama", "golang", "mcp", "mcp-client", "self-hosted", "agent-memory"]
stars: 33
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 5
recentReleases: 2
createdAt: "2026-04-29T19:58:29Z"
lastCommitAt: "2026-10-21T17:32:08Z"
lastReleaseAt: "2026-10-08T13:42:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["chetto1983", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e040da903f03cd769a73ecc9be6b13d2c29c1f8fc191491e67a77f46cb3bbc7/chetto1983/Aura"
---

# Aura

**A local-first, provider-neutral AI agent platform — in Go.**

An agent for ongoing work: tools, document retrieval, temporal memory, scheduled
jobs, and a web cockpit on infrastructure you control.

[What is Aura?](#what-is-aura) · [What it does](#what-it-does) · [Architecture](#architecture) · [Quick Start](#quick-start) · [Docs](#documentation) · [Development](#development)

---

## What is Aura?

Aura is a self-hosted, multi-user AI agent. Its Go binary hosts the runtime, tools,
CLI, Telegram gateway, and embedded web cockpit; each person signs in to their own
identity, with their own memory database, workspace and sandbox. Docker Compose runs
Postgres, ArcadeDB, Garage, embedding, ingestion, web search, voice and the bundled
integrations alongside it.

The model is chosen in the cockpit settings: OpenRouter (the default route), a
ChatGPT plan, the bundled local llama.cpp server, or Ollama. Local storage does not
make cloud inference offline: a cloud provider receives the context sent to its
model; with a local server nothing leaves the host for inference.

> **Hardware:** a mini PC with 16 GB of RAM is enough. The default stack measured
> 7 GB with speech-to-text and…
