---
repo: "benz-ai-x/dsh-research-graph"
name: "dsh-research-graph"
description: "DSH Research Graph · 研图 — DeepSeek Harness plugin for research topics, traceable knowledge cards, and reusable AI discussions."
readmeQualityOk: true
url: "https://github.com/benz-ai-x/dsh-research-graph"
homepage: "https://www.npmjs.com/package/@benz-ai-x/dsh-client-ui-session-graph"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [92]
topics: ["agent-workflow", "ai-agents", "conversation-ui", "cordis", "deepseek", "deepseek-harness", "dsh", "dsh-plugin", "multi-agent", "react"]
stars: 8
forks: 0
openIssues: 1
closedIssues: 21
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-28T08:25:55Z"
lastCommitAt: "2026-10-24T08:20:07Z"
lastReleaseAt: "2026-09-12T05:01:38Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 63
maintainers: ["benz-ai-x"]
openGraphImageUrl: "https://opengraph.githubassets.com/7db76e6509153ada900180bc3d5b8d332b12f988d7e1f6f6d5237c04bad4c843/benz-ai-x/dsh-research-graph"
---

---
description: "A DeepSeek Harness Web plugin for AI conversation graphs, research topics, and source-linked Knowledge Cards. Explore capabilities, check compatibility, and install the research workbench."
kind: "package-bundle"
---

# DSH Research Graph

**English** | [简体中文](https://github.com/benz-ai-x/dsh-research-graph/blob/HEAD/README.zh.md)

An independently maintained, open-source **AI research workbench plugin** for [DeepSeek Harness (DSH)](https://github.com/deepseek-ai/deepseek-harness), running inside **DSH Web**. Organize conversations into research topics and traceable Knowledge Cards for product research, technical research, and ongoing knowledge management.

## Capability map

```mermaid
---
config:
  flowchart:
    nodeSpacing: 16
    rankSpacing: 32
---
flowchart LR
  G["DSH Research Graph"] --> O["Organize research"] & K["Capture knowledge"] & R["Extend research"]
  O --> O1["Cross-workspace topics"] & O2["Conversation graph<br/>Branches · Merges<br/>Subagent records"]
  K --> K1["History search<br/>Sources · Digests"] & K2["Knowledge Cards<br/>AI extraction · Review · Revisions"]
  R --> R1["Synthesis · Frozen materials"] & R2["Follow-up…
