---
repo: "Knuckles-Team/meristem"
name: "meristem"
description: "An agent factory leveraging Pydantic AI and  Pydantic AI Harness"
readmeQualityOk: true
url: "https://github.com/Knuckles-Team/meristem"
homepage: "https://knuckles-team.github.io/meristem/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["a2a", "agents", "embeddings", "mcp", "pydantic-ai", "python", "skills"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-02-22T04:57:47Z"
lastCommitAt: "2026-10-25T22:11:09Z"
lastReleaseAt: "2026-02-26T00:08:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 71
maintainers: ["Knucklessg1", "codex"]
openGraphImageUrl: "https://opengraph.githubassets.com/855050396afbd91c082541c0894e8041d1aa465cec51578abd5f97a4fab99f53/Knuckles-Team/meristem"
---

# Meristem

**The in-run agent harness.** Meristem supports and guides agent execution
through explicit dependency DAGs and received ordered plans. Inspired by
espalier-trained growth, it provides structure for execution, not model-weight
training. It applies the decisions it is given; it does not store, decide,
serve or connect on its own.

Meristem is distributed as `agent-utilities` and imported as `agent_utilities`.
The repository is `meristem`. Package, CLI and API identifiers remain unchanged.

*Version: 4.0.0*

## What it contains

| Module | What it does inside one run |
|---|---|
| `agent_utilities.graph` | Applies a received ordered plan or dependency DAG. It enforces task slots and shared budgets, and emits ordered execution events. |
| `agent_utilities.rlm` | Runs recursive model queries with shared request and tool limits and bounded concurrent model requests. |
| `agent_utilities.harness.edit_engine` | Parses model-proposed edits (search/replace blocks, unified diffs), applies them with graduated matching, and re-prompts on malformed or unmatched edits. |
| `agent_utilities.harness.contract_validator` | Checks a tool call's pre-conditions and its output's schema and…
