---
repo: "knacklabs/gantry"
name: "gantry"
description: "Self-hosted, provider-neutral agent runtime for teams: governed tools and permissions, Slack/Telegram/Teams channels, scheduled jobs, memory, Node SDK and APIs, audit-first on Postgres."
readmeQualityOk: true
url: "https://github.com/knacklabs/gantry"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [90]
stars: 30
forks: 7
openIssues: 26
closedIssues: 33
watchers: 0
contributors: 14
recentReleases: 0
createdAt: "2026-04-13T14:16:21Z"
lastCommitAt: "2026-09-09T08:19:27Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 38
maintainers: ["kl-ashirwad", "vrknetha"]
openGraphImageUrl: "https://opengraph.githubassets.com/377cbb4e5538449cbe4d9e2a9ca1b96a7c2f6c6874509d3d9e7949758e95ef5f/knacklabs/gantry"
---

# Gantry

**Onboard AI employees like real ones.** Give them a seat in Teams or Slack,
only the access they need, a full audit trail, and offboarding in one command.
Self-hosted, any model.

Gantry is the open-source runtime that lets IT onboard AI agents the way it
onboards people — provision a seat in the channels where the team already works
(or inside your own product via SDK and API), grant scoped access, log every
action, revoke in one command. It gives agents a controlled host process,
durable state, approved tools, channel adapters, memory, and audit records
without tying application code to one model provider or chat surface.

Gantry is not a chatbot wrapper and not a personal assistant that staff install
on their own laptops. It is the runtime boundary between:

- human channels such as Slack, Microsoft Teams, Telegram, Discord, and
  web/SDK clients;
- application events, SDK calls, and scheduled jobs;
- approved tools, local CLIs, browser automation, skills, and MCP servers;
- Postgres-backed runtime state, artifacts, settings, credentials, and audit.

What that buys a team in practice:

- **Governed autonomy.** Capability grants, declarative per-agent `tool_rules`,…
