---
repo: "hunmer/agent-spaces"
name: "agent-spaces"
description: "Multi-agent collaboration platform"
originalDescription: "多agents协作平台"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hunmer/agent-spaces"
homepage: "https://hunmer.github.io/agent-spaces/"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [57, 36]
topics: ["agents", "ai", "coding"]
stars: 55
forks: 24
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-05-02T08:08:01Z"
lastCommitAt: "2026-11-05T11:23:56Z"
lastReleaseAt: "2026-05-16T19:46:04Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 35
maintainers: ["makisekurisu2000"]
openGraphImageUrl: "https://opengraph.githubassets.com/2397ca079e3fa50a92ae92a3ca76f778b5c5e1a07164d01e08a7ef7e01dc9938/hunmer/agent-spaces"
---

# Agent Spaces

A visual workflow platform. Use a DAG to drag-and-drop orchestrate workflows, mixing AI Agent, code, database, knowledge base, human-interaction, and Mini App UI nodes, and turn repetitive AI tasks into reusable, triggerable, and observable automated processes. A workflow can be triggered by scheduled tasks, Webhooks, HTTP API, Issue events, or Agent tool calls, and can also be nested into other workflows as a sub-workflow.

The core is a **node-based visual workflow engine**: AI collaboration, code execution, and Mini App UI are just one type of node within a workflow, not standalone products.

## Features

### Workflow Engine (Core)

- **Visual DAG orchestration** — @xyflow/react topology editor. Drag nodes and connect lines to define execution flow, replacing hard-coded pipelines
- **40+ built-in nodes across 9 categories**:
  - **Flow control** — start / end / switch branch / loop+loop_body loop (supports concurrency) / variable_aggregate aggregation / set·get·delete_variable / run_code (JS) / run_python / loop_break
  - **AI** — agent_run invokes an Agent (six roles × six runtimes, including permission modes…
