---
repo: "sairaman436/vybe-intelligence-vault"
name: "vybe-intelligence-vault"
description: "An auto-updating open-source vault for AI agents, RAG systems, MCP servers, prompts, tools, templates, and next-generation web development."
readmeQualityOk: true
url: "https://github.com/sairaman436/vybe-intelligence-vault"
homepage: "https://sairaman436.github.io/vybe-intelligence-vault/"
language: "JavaScript"
languages: ["JavaScript", "Python"]
languagePcts: [53, 38]
topics: ["ai", "ai-agents", "ai-engineering", "artificial-intelligence", "automation", "awesome-list", "developer-tools", "generative-ai", "knowledge-base", "langchain"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-11T09:11:36Z"
lastCommitAt: "2026-07-28T15:01:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["sairaman436"]
openGraphImageUrl: "https://opengraph.githubassets.com/9249e0cbadebf031a256e1990e807d4379403187c07a61a373826266315be970/sairaman436/vybe-intelligence-vault"
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

The result: a self-reinforcing knowledge graph of **125,508 indexed resources** spanning AI agents, RAG architectures, MCP servers, and modern web tooling — always current, always queryable by local agents via an HTTP gateway.

**Built for:** AI engineers who want a living knowledge base they can plug into agentic workflows, not a static awesome-list that someone forked two years ago.

---

## ⚙️ How It Works

```
Every 3 hours:

  GitHub Actions Cron
       │
       ▼
  evaluate_repo.py…
