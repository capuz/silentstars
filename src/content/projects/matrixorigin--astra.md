---
repo: "matrixorigin/Astra"
name: "Astra"
description: "Astra — The context-to-execution runtime for enterprise agents. https://matrixorigin.io/astra"
readmeQualityOk: true
url: "https://github.com/matrixorigin/Astra"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["agent-runtime", "ai-agent", "context-engineering", "enterprise-ai", "llm", "rust"]
stars: 36
forks: 14
openIssues: 41
closedIssues: 180
watchers: 0
contributors: 25
recentReleases: 5
createdAt: "2026-02-09T04:21:45Z"
lastCommitAt: "2026-10-28T09:57:38Z"
lastReleaseAt: "2026-09-11T12:43:00Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 54
maintainers: ["XuPeng-SH", "loveRhythm1990", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1153239447/dafac27c-ef2b-4acc-a0a1-1424dd08622e"
---

### An agent runtime with native Jev judgments and EXPLAIN ANALYZE for context

**Inspect context and state. Adjust and recover with evidence. Run in your environment.**

[Why Astra](#why-astra) · [Jev integration](#jev-agent-integration) · [Research](#research-and-benchmarks) · [Quick start](#quick-start) · [Architecture](#architecture) · [Runner](#runner-and-private-enterprise-it) · [Comparison](#how-astra-differs-from-coding-agents) · [Docs](#documentation)

---

Astra is a self-hosted runtime for long-running agent Work. Every model
request is assembled by a budgeted pipeline you can EXPLAIN, every attempt
leaves evidence you can inspect, diff, and roll back, and execution runs
through a Runner inside your own environment.

**[Current capability status](https://github.com/matrixorigin/Astra/blob/HEAD/docs/reference/capabilities.md)** — supported profiles, defaults, dependencies, verification lanes and known limits for this source version.

### Jev agent integration

Astra integrates **Jev (TypeSafe AI's System One model)** at the agent-runtime
level: an optional judgment layer for AI agents, configured separately from the
main generation model. Its structured answers feed four…
