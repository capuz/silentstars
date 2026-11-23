---
repo: "aai-labs/agent-barn"
name: "agent-barn"
description: "Open-source control plane for AI agents on your own Kubernetes infrastructure, with per-agent costs, access controls, and audit logs."
readmeQualityOk: true
url: "https://github.com/aai-labs/agent-barn"
homepage: "https://agentbarn.dev"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [70, 28]
topics: ["agent", "agent-skills", "agentic-ai", "helm", "helm-charts", "kubernetes", "python", "cli", "cli-tool"]
stars: 112
forks: 7
openIssues: 8
closedIssues: 6
watchers: 0
contributors: 13
recentReleases: 4
createdAt: "2026-05-05T14:30:13Z"
lastCommitAt: "2026-11-23T09:21:08Z"
lastReleaseAt: "2026-09-08T16:32:14Z"
status: "thriving"
tags: []
healthScore: 87
undervaluedScore: 35
maintainers: ["dominykas-aai-labs", "AnaniyaT", "ddlaurin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1229946638/86f3e469-7d92-4805-ae95-b4a638387c64"
discussionCount: 0
---

# Agent Barn

**AI coworkers in Slack, Microsoft Teams, Telegram, and Discord, running on your infrastructure.**

[Website](https://agentbarn.dev) · [Docs](https://agentbarn.dev/guides) · [Recipes](https://agentbarn.dev/recipes) · [Discord](https://discord.gg/A3vJF5ZKnu)

---

Agent Barn is an open-source control plane for AI agents. Define an agent once,
connect it to the tools your team already uses, and run it in your own
Kubernetes cluster. No seat licence, no second workspace to check.

- **Talk to your tools.** Agents live in Slack, Microsoft Teams, Telegram, and Discord.
- **A model per agent.** Each gets its own virtual key on a LiteLLM proxy in your namespace.
- **See what it costs.** Per-agent token and spend attribution, not one opaque monthly number.
- **Multi-tenant from the start.** Organisation roles and per-agent access roles, isolated in the data layer.
- **Audit what happened.** Conversation history, a tool-call log, and a domain-event trail.
- **Self-host it.** Helm charts, Helmfile, PostgreSQL, your cluster.
