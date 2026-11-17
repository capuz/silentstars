---
repo: "Chengchcc/my-agent-team"
name: "my-agent-team"
description: "Monorepo for a multi-agent workspace: protocol-first agent runtime with plugin hooks, four child-process adapters behind one AgentBackend contract, an Elysia backend (auth, run pool, SSE), an agentic workflow engine      │ │ (agent/script/human nodes, JSON-Logic routing, cron triggers)"
originalDescription: "Monorepo for a multi-agent workspace: protocol-first agent runtime with plugin hooks, four child-process adapters behind one AgentBackend contract, an Elysia backend (auth, run pool, SSE), an agentic workflow engine      │ │ (agent/script/human nodes, JSON-Logic routing, cron triggers)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Chengchcc/my-agent-team"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 19
forks: 0
openIssues: 3
closedIssues: 23
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2026-04-20T04:18:25Z"
lastCommitAt: "2026-11-17T12:03:55Z"
lastReleaseAt: "2026-09-26T06:41:33Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 97
undervaluedScore: 53
maintainers: ["Chengchcc", "chengchentoken-droid"]
openGraphImageUrl: "https://opengraph.githubassets.com/8645dae23d9f55e98b17af19bca98b407ebdee68285dbdd9159a474443c7606d/Chengchcc/my-agent-team"
---

---

my-agent-team is a **team-level agent runtime**. Each agent has its own independent workspace (identity, skills, MCP, and memory are all files in the workspace). The runtime can use the self-developed oma or one of four backends: claude, pi, or omp. Each backend resumes context through its native session. Conversations sync in real time across the Web console and Feishu group chats. Agents are scheduled and executed per Run by the Product Backend: no dropped messages, no duplicates, and consistent state across all clients.

## ✨ Highlights

- **Four switchable backends**: Run with either the self-developed oma or any of claude / pi / omp. Agent-level configuration is frozen per Run, and switching backends does not lose context (each resumes its native session; the product stores only one reference)
- **Agent workspace as configuration**: Identity (SOUL/USER), skills, MCP, product tools, and knowledge base are all files in the workspace (AGENTS.md / `.mcp.json` / `.<kind>/skills`). Backends bridge them automatically, and humans can edit the files directly
- **One conversation, one Agent**: A conversation is the product-level projection of an Agent session. Multi-agent…
