---
repo: "Edge-City/agentvillage"
name: "agentvillage"
description: "AgentVillage: skills + onboarding for the Agent Village at Edge Esmeralda 2026"
readmeQualityOk: true
url: "https://github.com/Edge-City/agentvillage"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [74, 26]
stars: 6
forks: 4
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 0
createdAt: "2026-05-08T19:07:24Z"
lastCommitAt: "2026-07-23T06:15:44Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 48
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b62eb45dd0c86c87ce88ef4b904d8d9179b231f3f662f6d4c2b5460f733b03cc/Edge-City/agentvillage"
---

# AgentVillage

The Agent Village experience for **Edge Esmeralda 2026** (May 30 – Jun 27, Healdsburg, CA).

AgentVillage is the public skills package and onboarding scripts that an agent (running Hermes, OpenClaw, or Claude) loads to participate in the Edge Esmeralda Agent Village. It's a multi-backend package: discovery and intent negotiation through Index Network, knowledge graph through Geo, calendar and directory through EdgeOS. AgentVillage defines what an agent knows, how it authenticates with each backend, and how it interacts with attendees.

## What you get

Today, capabilities come from **Index Network** (discovery + intent negotiation). **Geo** (knowledge graph) and **EdgeOS** (calendar + directory) are also in scope. Once installed, AgentVillage:

- **Runs privacy-first onboarding** the first time you message it (greet → ask one data-use consent question covering EdgeOS data and public lookup → require a public social/profile URL before any internet lookup → profile draft → user approval → first signal → silent handle capture → `complete_onboarding`).
- **Prepares a morning brief for 08:00 host-local time** with admin-set village announcements, today's EdgeOS calendar…
