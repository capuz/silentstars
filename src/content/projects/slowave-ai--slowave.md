---
repo: "slowave-ai/slowave"
name: "slowave"
description: "A living local memory layer for your coding agents and AI tools."
readmeQualityOk: true
url: "https://github.com/slowave-ai/slowave"
homepage: "https://www.slowave.ai"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["agent-memory", "ai-memory", "coding-agent-memory", "claude-code", "cline", "codex", "cursor", "opencode", "mcp", "ai-agents"]
stars: 25
forks: 2
openIssues: 4
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-06-08T09:54:04Z"
lastCommitAt: "2026-11-07T13:50:41Z"
lastReleaseAt: "2026-06-23T12:25:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 37
maintainers: ["mrsalty", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/56db9798d1412f22bd07d7f5bd55116ff52a917e09c1ceb0f1cef19adb468143/slowave-ai/slowave"
---

---

Slowave is a local MCP memory server that carries your decisions, constraints, and procedures across your coding sessions and AI tools.

Slowave adapts as you use it, building reusable context over time so your agent can learn from past experience.

It runs on your machine and requires no LLM API key for memory maintenance. 

The local dashboard lets you inspect your memories and how they support your agent in your day to day work.

---

https://github.com/user-attachments/assets/2d4eeb4e-419f-46fa-b23e-cf501a715d1e

---

At the core Slowave is built around a simple concept:

> **Reasoning and memory feed each other in a continuous loop.**

```mermaid
graph LR
    LLM["Reasoning<br/>(Claude, Codex, Copilot, etc.)"]
    MEM["Memory<br/>(Slowave)"]
    
    LLM -->|Feedback| MEM
    MEM -->|Retrieve| LLM
    MEM -->|Adapt| MEM
```

Slowave retains what helps agents achieve their goals, weakens what does not, and continuously adapts based on use. It does this through a continuous feedback loop between your agent and its memory. It works on 5 simple MCP endpoints:

> **activate → remember → recall → feedback → commit**

Memory is continuously reshaped by use rather than a static…
