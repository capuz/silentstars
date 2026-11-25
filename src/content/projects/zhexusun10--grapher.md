---
repo: "zhexusun10/grapher"
name: "grapher"
description: "A local coding-agent workbench that turns complex work into inspectable execution graphs."
readmeQualityOk: true
url: "https://github.com/zhexusun10/grapher"
homepage: "https://github.com/zhexusun10/grapher#readme"
language: "Rust"
languages: ["Rust", "TypeScript", "JavaScript"]
languagePcts: [51, 26, 20]
topics: ["agentic-ai", "coding-agent", "deterministic-runtime", "developer-tools", "multi-agent", "graph-engineering", "ai-coding", "local-first", "rust", "loop-engineering"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-12T06:52:24Z"
lastCommitAt: "2026-11-25T03:17:44Z"
lastReleaseAt: "2026-10-20T05:47:35Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 66
maintainers: ["zhexusun10"]
openGraphImageUrl: "https://opengraph.githubassets.com/15efe43bb0e7113fac8327f80517be22fece8513e1a3b38483d5d1070ec0ba6b/zhexusun10/grapher"
---

Stop losing code in multi-agent chat loops. Turn complex engineering goals into inspectable execution graphs—powered by a deterministic Rust runtime and Git state inheritance.

  Local-first coding-agent workbench built on <a href="https://github.com/earendil-works/pi">Pi</a>

---

## Stop Playing Multi-Agent Telephone

Most multi-agent frameworks trap your work inside a fragile conversation loop: a "Supervisor LLM" summarizes instructions, chats with sub-agents, interprets their replies, and decides what to do next. With every handoff, technical constraints degrade, tokens burn, and context gets **lost in translation**.

**Grapher compiles the workflow out of the conversation.**

```text
Typical multi-agent systems (Conversational orchestration)

Goal → Supervisor LLM → Agent → Supervisor LLM → Agent → ...
             ↑ scheduling & state live inside a lossy chat loop

Grapher (Compiled execution graph)

Goal → Planner → Compiled Graph → Deterministic Rust Runtime
                                      ├── Agent A ──┐
                                      ├── Agent B ──┼──→ Agent D ──→ Git Publish
                                      └── Agent C ──┘
```
