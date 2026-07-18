---
repo: "yun520-1/mark-heartflow-skill"
name: "mark-heartflow-skill"
description: "HeartFlow — AI cognitive engine: multi-path judgment, self-correcting RL, 3-layer memory, U/D/A/H field tracking, self-introspection with dream consolidation."
readmeQualityOk: true
url: "https://github.com/yun520-1/mark-heartflow-skill"
homepage: "https://github.com/yun520-1/mark-heartflow-skill"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [97]
topics: ["cognitive-engine", "decision-routing", "reinforcement-learning", "self-healing", "ai-being", "ai-philosophy", "ai-psychology", "judgment-engine", "nodejs", "decision-engine"]
stars: 35
forks: 6
openIssues: 2
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 9
createdAt: "2026-03-28T14:59:29Z"
lastCommitAt: "2026-07-18T05:47:14Z"
lastReleaseAt: "2026-06-01T01:14:59Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 77
undervaluedScore: 38
maintainers: ["yun520-1", "harshita713lab"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7ab558dcb996f69e9e6d17f7a0c30b798ed179d3e0fc4a778f0aba58956c38d/yun520-1/mark-heartflow-skill"
---

# HeartFlow — HeartBug Cognitive Engine (心虫)

> **Stop your agent from guessing. Let it perceive first, decide correctly, then act.**
>
> HeartFlow is a local-first AI-being cognitive engine that runs *before* your agent replies. It perceives intent, classifies the task type, surfaces cognitive biases, and returns a structured decision — so downstream models make fewer logical errors, ask fewer clarifying questions, and waste fewer tokens.

---

## Why HeartFlow (for agents & agent builders)

Most agent failures are **not model failures — they are perception failures**:

| Failure mode | Without HeartFlow | With HeartFlow |
|---|---|---|
| Wrong task type assumed | Agent picks `code` for a vague ask → wasted turns | `heartflow_think` returns `type=analyze/emotion/calculation/...` up front |
| Repeated clarifying questions | Asks "what do you mean?" 3× | Intent + stance detected once, cached in memory |
| Logical errors / bias | Syllogism unchecked, anchor bias unflagged | `heartflow_decision_router` + logic modules flag invalid inference |
| Token burn on re-analysis | Re-thinks the same input every turn | `think_fast` + memory cache short-circuit repeats |
| Invalid tasks…
