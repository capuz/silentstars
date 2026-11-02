---
repo: "lobu-ai/lobu"
name: "lobu"
description: "Open-source control plane and runtime for organisational agents: shared company context & brain"
readmeQualityOk: true
url: "https://github.com/lobu-ai/lobu"
homepage: "https://lobu.ai"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["agent", "chatbot", "clawdbot", "openclaw", "personal-assistant", "agent-infrastructure", "agent-memory", "ai-agents", "event-sourcing", "knowledge-graph"]
stars: 233
forks: 32
openIssues: 54
closedIssues: 353
watchers: 0
contributors: 41
recentReleases: 0
createdAt: "2025-07-27T03:49:12Z"
lastCommitAt: "2026-11-02T13:38:48Z"
lastReleaseAt: "2026-02-20T04:51:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 42
maintainers: ["buremba", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/1d4d57648ca502bc0b7540565ad4f432ed57794e68ac32aafbffb8801633eb30/lobu-ai/lobu"
discussionCount: 3
---

# Lobu — Give every agent a live model of your world

**Lobu is an open-source, event-sourced context layer for AI agents.** Every tool call, data
change, device signal, API event, and conversation becomes an event, linked to the entities and
identities it belongs to — a person, a project, a customer, a home, a company. That gives agents
a live, queryable model of your world instead of a transcript they forget when the session ends.

ChatGPT, Claude, Codex, and your own agents read and write that same permission-aware history and
current context, whether you're wiring up your own accounts or an entire company's stack. When a
responsibility should outlive one chat, any agent can discover and hand it to a persistent Lobu
specialist over MCP.

Connect your tools once. Every agent resumes from the same live context.

```text
WITHOUT LOBU                         WITH LOBU

Agent A -> Slack / GitHub / CRM      Slack  GitHub  CRM  DBs  Devices
Agent B -> Slack / GitHub / CRM         \      |     |    |     /
Agent C -> Slack / GitHub / CRM          +-----+-----+----+----+
                                                     |
Each agent re-fetches.                               v
Each…
