---
repo: "skthewimp/karthik-data-visualization-skill"
name: "karthik-data-visualization-skill"
description: "Public data visualization skill for Codex and Claude"
readmeQualityOk: true
url: "https://github.com/skthewimp/karthik-data-visualization-skill"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-24T04:42:09Z"
lastCommitAt: "2026-09-29T08:10:19Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 46
maintainers: ["skthewimp"]
openGraphImageUrl: "https://opengraph.githubassets.com/e95fab74374fafee45bb0bd2ade9493091e602308fda3634759e1e8223bdf6aa/skthewimp/karthik-data-visualization-skill"
---

# Karthik Data Visualization Skills

Public data visualization skills for Codex and Claude, with a local MCP layer for exact-artifact rendering and inspection.

## Start here: agents and LLMs

If you have been pointed at this repository and asked to create or repair a chart, do not begin with the MCP implementation. Start with the skill that owns the judgement, then use MCP for the mechanical stages it supports.

**For a new chart:**

1. Read the `SKILL.md` for your client under `dataviz-orchestrator/{codex,claude}/`.
2. Follow only the handoffs the task needs. Do not add evaluation or case logging to a normal repair.
3. Use `render_and_inspect_chart` for static repairs when available. Inspect the exact export once, then return the best valid artifact; MCP or review failures must not suppress it.

**For an existing chart:**

1. Read `dataviz-fix/{codex,claude}/SKILL.md`.
2. Build and inspect one real artifact.
3. Return the best valid version; use `dataviz-eval` or the case manager only when an audited workflow is needed.

The architecture has one firm boundary:

```text
skills and agent    question, evidence, chart choice, visual judgement, release decision
MCP capabilities…
