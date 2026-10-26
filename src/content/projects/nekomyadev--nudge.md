---
repo: "NekomyaDev/nudge"
name: "nudge"
description: "A typed, replayable, budget-aware programming language for LLM agents. Compiles to Python & TypeScript."
readmeQualityOk: true
url: "https://github.com/NekomyaDev/nudge"
homepage: "https://github.com/NekomyaDev/nudge"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["a2a", "agent-framework", "ai-agents", "compiler", "deterministic-replay", "llm", "llm-agents", "llm-observability", "mcp", "model-context-protocol"]
stars: 18
forks: 12
openIssues: 120
closedIssues: 42
watchers: 3
contributors: 6
recentReleases: 6
createdAt: "2026-07-16T14:53:04Z"
lastCommitAt: "2026-10-26T09:18:13Z"
lastReleaseAt: "2026-09-27T03:34:50Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 85
undervaluedScore: 53
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/1302905767/ef465b72-1540-41f6-99d3-fc24e29b7784"
discussionCount: 6
---

A typed, replayable, budget-aware programming language for AI agents.<br>
  Native bytecode runtime and standalone compiler. Compiles to Python and TypeScript.

---

---

## Why Nudge?

Production agents are still held together with glue code: prompt chains parsed by hand, tool calls wrapped in try/except blocks, missing replayability, unpredictable costs, and no regression tests. Libraries patch symptoms after they happen. **Nudge fixes the layer where the problem actually lives: the language.**

| Pain Point | Libraries | Nudge |
|:---|:---|:---|
| Untyped LLM output | Validate at runtime | Schema is a first-class language type, verified at compile time |
| Hidden side effects | Invisible | 10 explicit typed effects declared in signatures (`uses LLM, Tool, IO, ...`) |
| No regression testing | Record and replay bolted on | Every run writes an NTF trace, and every trace is a deterministic $0 test |
| Cost surprises | Monitored after the bill arrives | Budget is a hard contract enforced by compiler and runtime |
| Concurrency spaghetti | Manual async loops | Native `par map / race / all` with compile-time race safety |

## A Taste of Nudge

```nudge
type Finding = { claim: string,…
