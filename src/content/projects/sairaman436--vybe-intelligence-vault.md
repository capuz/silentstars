---
repo: "sairaman436/vybe-intelligence-vault"
name: "vybe-intelligence-vault"
description: "An auto-updating open-source vault for AI agents, RAG systems, MCP servers, prompts, tools, templates, and next-generation web development."
readmeQualityOk: true
url: "https://github.com/sairaman436/vybe-intelligence-vault"
homepage: "https://sairaman436.github.io/vybe-intelligence-vault/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [54, 38]
topics: ["ai", "ai-agents", "ai-engineering", "artificial-intelligence", "automation", "awesome-list", "developer-tools", "generative-ai", "knowledge-base", "langchain"]
stars: 22
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-11T09:11:36Z"
lastCommitAt: "2026-08-19T04:08:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 40
maintainers: ["sairaman436"]
openGraphImageUrl: "https://opengraph.githubassets.com/34187e3990127d7f23187d0b5c0c29766a87e3ce214e92eeb97cee8cbf0a7bd6/sairaman436/vybe-intelligence-vault"
---

# `vybe-intelligence-vault`

**Automated knowledge harvesting for AI engineers.**  
Scrapes. Scores. Commits. Every 3 hours. Zero manual effort.

[Overview](#-overview) · [How It Works](#-how-it-works) · [Architecture](#-architecture) · [Quick Start](#-quick-start) · [Vault Stats](#-vault-stats) · [Contributing](#-contributing)

</div>

---

## 📌 Overview

Most AI knowledge bases go stale the moment you stop updating them. Vybe Intelligence Vault doesn't — it runs itself.

A GitHub Actions pipeline wakes up every 3 hours, discovers emerging AI/ML resources, evaluates them with an LLM scoring engine, and commits the ranked results back into the repo. No human in the loop. No manual curation.

The result: a self-reinforcing knowledge graph of **154,634 indexed resources** spanning AI agents, RAG architectures, MCP servers, and modern web tooling — always current, always queryable by local agents via an HTTP gateway.

**Built for:** AI engineers who want a living knowledge base they can plug into agentic workflows, not a static awesome-list that someone forked two years ago.

---

## ⚙️ How It Works

```
Every 3 hours:

  GitHub Actions Cron
       │
       ▼
  evaluate_repo.py…
