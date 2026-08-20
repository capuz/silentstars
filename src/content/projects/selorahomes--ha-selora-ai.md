---
repo: "SeloraHomes/ha-selora-ai"
name: "ha-selora-ai"
description: "Your smart assistant to manage and maintain your home."
readmeQualityOk: true
url: "https://github.com/SeloraHomes/ha-selora-ai"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [58, 42]
topics: ["hacs", "home-assistant", "mcp"]
stars: 80
forks: 2
openIssues: 2
closedIssues: 0
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-03-12T03:19:59Z"
lastCommitAt: "2026-08-20T04:08:17Z"
lastReleaseAt: "2026-04-04T23:35:09Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 69
undervaluedScore: 23
maintainers: ["lafoush"]
openGraphImageUrl: "https://opengraph.githubassets.com/172df0fa76b95db8f3ef2eb898a55e4911f5e26eccbab2bde94bbb8bd652b4a7/SeloraHomes/ha-selora-ai"
---

# Selora AI — Home Assistant Integration

Selora AI is a smart-home AI butler for Home Assistant. It connects to an LLM backend — **Selora AI Local** (our own on-device model), Anthropic Claude, OpenAI, Google Gemini, or Ollama — learns your home's patterns, and proactively generates automations, all while keeping you in full control.

**[Documentation](https://selorahomes.com/docs/selora-ai/)**

---

## Features

| Feature | Description |
|---|---|
| **AI Automation Suggestions** | Analyzes device states and history, then writes draft automations (disabled, prefixed `[Selora AI]`) for your review. |
| **Pattern Detection** | Detects time-based routines, device correlations, and usage sequences — then converts them into automation suggestions with confidence scoring. |
| **Natural Language Commands** | Send plain-English commands via the Selora AI panel or Home Assistant Assist. |
| **Automation Versioning** | Full version history for every Selora AI automation, with diff viewer in the panel. |
| **Stale Automation Detection** | Flags automations referencing unavailable entities or that haven't triggered in a while. |
| **MCP Server** | Exposes a [Model Context…
