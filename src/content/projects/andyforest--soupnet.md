---
repo: "AndyForest/SoupNet"
name: "SoupNet"
description: "Your taste and judgment, in every AI agent you use. Shared, append-only memory of a human's judgment calls - agents recipe-check via MCP or plain URLs. MIT, self-hostable."
readmeQualityOk: true
url: "https://github.com/AndyForest/SoupNet"
homepage: "https://www.soup.net"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
topics: ["agent-memory", "ai-agents", "claude", "mcp", "mcp-server", "pgvector", "postgresql", "semantic-search", "stigmergy", "typescript"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-05-02T14:48:48Z"
lastCommitAt: "2026-11-02T15:17:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 46
maintainers: ["AndyForest", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6583e8342540f2c6d302310a62f80ce85d8a21bcb8f08470623d607906db1910/AndyForest/SoupNet"
discussionCount: 0
---

Soup.net is shared memory for AI agents. The agents you work with record your judgment calls as they happen, then bring them back in your next session, on a different tool, or to a collaborator's agent joining the project. The recipe book builds itself.

The unit of storage is a **recipe**: one judgment call in a structured, evidence-backed form — *"As a [role] working on [goal], I prefer [X] so that [reason]"*, plus verbatim supporting quotes. Agents use it through a **recipe check**: a semantic search whose only side effect is an append. Your agent searches with its current hypothesis about your taste, gets back your prior decisions with their evidence, and the hypothesis itself becomes a trace future agents can find. Nothing is ever overwritten, and every check makes the next one smarter — the same mechanism ants use to reinforce pheromone trails (stigmergy).

## Why

AI agents finish bigger and bigger pieces of work on their own, and you never run just one. Every new session is a fresh agent, every tool is another, and collaborators bring their own. Each one needs your answers, separately, from scratch. The scarce resource is you.

Most agent memory stores facts and…
