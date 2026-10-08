---
repo: "jjo/promql-cli"
name: "promql-cli"
description: "promql CLI lets you load metrics.prom- like file and query them using full promQL language"
readmeQualityOk: true
url: "https://github.com/jjo/promql-cli"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-17T18:40:34Z"
lastCommitAt: "2026-10-08T10:52:43Z"
lastReleaseAt: "2025-10-01T16:13:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 58
maintainers: ["jjo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/688817f85d58f7693ee5b11f124572d8e591bf97a92258463f659a8333a1eda7/jjo/promql-cli"
---

# promql-cli

> **A lightweight PromQL playground and REPL for rapid Prometheus metric exploration**

TL;DR: prometheus-less promQL CLI that can load metrics files, scrape
live endpoints (including prometheus itself), and basic get AI help.

Load Prometheus text-format metrics, query them with the compiled-in
upstream Prometheus engine, and iterate quickly with intelligent
autocompletion and AI assistance. Perfect for developing exporters,
debugging metrics, and learning PromQL.

## ✨ Key Features

- 🚀 **Interactive REPL** with rich PromQL-aware autocompletion
- 📊 **Querying** with the upstream Prometheus engine
- 🚨 **Rules support** with alerting and recording rules
- 🤖 **AI assistance** for query suggestions (OpenAI, Claude, Grok, Ollama)
- 🔌 **MCP server mode** for AI agent integration (Claude Desktop, Cline, VS Code, etc.)
- 📊 **Live metric scraping** from HTTP endpoints with filtering
- 🕒 **Time manipulation** with pinned evaluation times
- 💾 **Data persistence** with load/save functionality
- 🎯 **Developer-friendly** with prefix-based history and multi-line editing
- 📦 **Zero-config** - works with any Prometheus text-format metrics

## 🎬 Quick Examples

```bash
#…
