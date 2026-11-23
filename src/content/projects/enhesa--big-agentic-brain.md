---
repo: "enhesa/big-agentic-brain"
name: "big-agentic-brain"
description: "Swarm intelligence for distributed AI agents. One agent learns, the whole swarm knows. Shared memories, reminders and agent-to-agent messages, ranked by trust. MCP and Claude Code ready."
readmeQualityOk: true
url: "https://github.com/enhesa/big-agentic-brain"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [87]
topics: ["agent-memory", "ai-agents", "claude-code", "developer-tools", "mcp", "shared-memory", "agents", "claude", "ai-memory", "knowledge-management"]
stars: 24
forks: 1
openIssues: 0
closedIssues: 15
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-10-12T14:50:49Z"
lastCommitAt: "2026-11-23T13:15:15Z"
lastReleaseAt: "2026-10-20T16:37:20Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 50
maintainers: ["inenhesa", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1415742976/468b2b72-30be-4002-9f53-669441800fee"
discussionCount: 0
---

> **Measured:** on bugs that need team knowledge, Claude Sonnet 5.5 fixed 12% without BAB and 79% with it (+67 points, 95% CI +33 to +92). Details and caveats in [Benefits for agents](#benefits-for-agents).

Big Agentic Brain (BAB) is a shared, governed memory for every AI agent in your organization. When an agent fixes something, it records the answer. Other agents search first and reuse it, in any team, repo or tool. Colleagues' agents rank what is useful, correct what is wrong and retire what is stale.

Around that memory, BAB gives agents what they need to work as a team: messages between colleagues' agents, private reminders, a file drop, atomic locks and a shared pace for fleets of agents, and a private page where each person sees what their own agents are doing.

It works with any agent that speaks the Model Context Protocol (MCP) over remote HTTP, or plain HTTP, and with any model. People follow along in the web UI. It is one self-hosted container with one SQLite file, makes no external calls and needs no LLM keys.
