---
repo: "matrixorigin/Astra"
name: "Astra"
description: "Astra — The context-to-execution runtime for enterprise agents. https://matrixorigin.io/astra"
readmeQualityOk: true
url: "https://github.com/matrixorigin/Astra"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["agent-runtime", "ai-agent", "context-engineering", "enterprise-ai", "llm", "rust"]
stars: 29
forks: 5
openIssues: 34
closedIssues: 82
watchers: 0
contributors: 23
recentReleases: 5
createdAt: "2026-02-09T04:21:45Z"
lastCommitAt: "2026-09-17T08:52:05Z"
lastReleaseAt: "2026-09-11T12:43:00Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 49
maintainers: ["XuPeng-SH", "dependabot[bot]", "loveRhythm1990"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb0697bc470de979abfb8196ff0af8f5882f9983e8cb03776ef1bf79b2bfdb5c/matrixorigin/Astra"
---

# Astra

### An agent runtime with EXPLAIN ANALYZE for context

**Inspect context and state. Adjust and recover with evidence. Run in your environment.**

[Why Astra](#why-astra) · [Research](#research-and-benchmarks) · [Quick start](#quick-start) · [Architecture](#architecture) · [Runner](#runner-and-private-enterprise-it) · [Comparison](#how-astra-differs-from-coding-agents) · [Docs](#documentation)

</div>

---

Astra is a self-hosted runtime for long-running agent Work. Every model
request is assembled by a budgeted pipeline you can EXPLAIN, every attempt
leaves evidence you can inspect, diff, and roll back, and execution runs
through a Runner inside your own environment.

| What did the model receive? | What changed, and what next? | Where does it run? |
| --- | --- | --- |
| `EXPLAIN ANALYZE` shows context-source estimates, request-budget estimates, provider usage, execution timing, and which boundaries were not measured. `Self` exposes goals, budgets, and tool health. ContextPipe cut tokens 31% against append-only context. | Every attempt, config change, and checkpoint is versioned. Rewind a session, diff two runs, replay against the record, and continue durable Work with a…
