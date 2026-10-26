---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "Agentic Runtime"
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go"]
languagePcts: [90]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "llmops"]
stars: 42
forks: 15
openIssues: 3503
closedIssues: 10330
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-10-26T20:59:29Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 42
maintainers: ["anthony-chaudhary", "codex"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

# fak — useful local agents, accelerated automatically

**Fak is building the open runtime that makes useful local agents practical on your own machine.**

Start locally, give an agent real work, and keep useful context across turns.
Our first milestone combines native inference, speculative decoding, and reuse of
the work-so-far (agentic *KV caching*) so qualified acceleration is automatic.
A capability floor bounds what tools the agent may execute.

**Status:** automatic setup and cache reuse have specific model/backend limits today;
speculative decoding and physical GPU Direct paths are not yet default-on or
universally qualified. See the [local-agent milestone](https://github.com/anthony-chaudhary/fak/blob/HEAD/docs/local-agent-milestone.md)
and the [claims ledger](https://github.com/anthony-chaudhary/fak/blob/HEAD/CLAIMS.md) for what is real and what is not.

**Where it stands on speed** ([Qwen results](https://github.com/anthony-chaudhary/fak/blob/HEAD/docs/benchmarks/QWEN-PERFORMANCE-INDEX.md)):

- Mac (M3 Pro, Qwen3.8-27B): fak's Metal engine measured 43.8% faster prefill than
  its own per-op reference path (observed 2026-09-03). That is a component result, not a full…
