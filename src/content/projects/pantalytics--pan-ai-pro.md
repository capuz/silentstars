---
repo: "pantalytics/pan_ai_pro"
name: "pan_ai_pro"
description: "Use Claude (Anthropic) as your Odoo 19 AI provider — agents, tool calling, RAG, and web search."
readmeQualityOk: true
url: "https://github.com/pantalytics/pan_ai_pro"
homepage: "https://apps.odoo.com"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai", "anthropic", "claude", "erp", "odoo", "odoo-19", "agents", "llm", "odoo-module", "python"]
stars: 6
forks: 1
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 3
recentReleases: 3
createdAt: "2026-03-02T12:23:50Z"
lastCommitAt: "2026-10-20T08:49:46Z"
lastReleaseAt: "2026-10-19T19:55:40Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 79
undervaluedScore: 65
maintainers: ["claude", "rutgerhofste"]
openGraphImageUrl: "https://opengraph.githubassets.com/aa10ba2ba53e3537d7c738c27d0fd1856d74e52edf9ae6ca6b2f992df729e13e/pantalytics/pan_ai_pro"
---

# AI Pro for Odoo

Pydantic AI agents and AI fields inside your Odoo, on your own OpenRouter
key, with any model. Odoo 19 and 20, Community and Enterprise, one module.

- **Chat** in Odoo's own chat window, bottom right: streaming answers, tool
  calls you can see, approvals before anything is created or changed, Stop.
  The sparkle top right, or Ctrl+K "Ask AI".
- **Agents are identities.** An agent runs as the person who asks, or as a
  dedicated Odoo user you set up. Its groups, record rules and roles are the
  agent's reach. Every tool runs through the ORM; nothing is sudo'ed.
- **Runs on a schedule, on a rule, or continuously.** The server action
  "Run AI agent" works in automation rules and scheduled actions. A
  continuous thread watches a model and wakes up when records change.
- **AI fields.** Write a prompt on any stored field; the agent fills it.
  Auto fill for empty records, auto update nightly for values whose inputs
  changed, a value a person typed is left alone.
- **Open source** (LGPL-3). A connection to Pantalytics is required to run
  (Settings > AI Pro > Connect to Pantalytics), the same pairing as Mail Pro.

## Install

1. Put `pan_ai_pro` (and…
