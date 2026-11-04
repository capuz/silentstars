---
repo: "higress-group/HiRoute"
name: "HiRoute"
description: "Make Codex and Claude Code subscriptions go further: a local model router that gives routine agent work to economical models and keeps your strongest model for the hard parts."
readmeQualityOk: true
url: "https://github.com/higress-group/HiRoute"
homepage: "https://hiroute.ai"
language: "Rust"
languages: ["Rust"]
languagePcts: [77]
topics: ["model-routing", "task-routing", "ai-agents", "ai-gateway", "claude-code", "codex", "coding-agent", "cost-optimization", "deepseek", "llm-gateway"]
stars: 386
forks: 41
openIssues: 23
closedIssues: 111
watchers: 2
contributors: 13
recentReleases: 6
createdAt: "2026-09-12T03:28:58Z"
lastCommitAt: "2026-11-04T07:40:30Z"
lastReleaseAt: "2026-11-02T23:53:09Z"
status: "newborn"
tags: ["solo_builder", "release_machine"]
healthScore: 96
undervaluedScore: 30
maintainers: ["johnlanni", "Aias00"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1366906256/8be17e1f-529d-4270-abf5-8d507da50430"
---

Economical models handle routine turns; your primary model takes the complex work<br>
  and steps in when an economical model falls short.<br>
  Keep using Codex, Claude Code and other Agents with your subscriptions, APIs and local models.

## Real-world cost savings

In a real research and architecture-review task, Qwen 3.8 Flash did the research and GPT-6 Astra
made the critical decision. At the same acceptance standard, the task cost **about 90% less**
than running everything on Astra.

### Switching models keeps the savings

HiRoute changes models only at clear boundaries: a new user message, or context compaction and
rebuild. Tool calls within a turn stay on the same model. A switch misses the cache once, then
later calls hit it again, so cache loss does not eat into the savings.
[Switching Models Loses Cache, Not the Savings](https://hiroute.ai/en/news/routing-cache-cost/)

## Familiar Agents, more model choices

Keep working in **Codex, Claude Code, Qoder, Pi, OpenCode, Hermes or DeepSeek Harness**.
HiRoute runs locally and brings supported subscriptions, API connections and local models
into one place. For example, combine an economical API model with your Codex…
