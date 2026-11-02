---
repo: "mongodb/agents"
name: "agents"
description: "MongoDB AI agent templates"
readmeQualityOk: true
url: "https://github.com/mongodb/agents"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2026-08-31T22:48:13Z"
lastCommitAt: "2026-11-02T17:56:43Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 43
maintainers: ["mongodben", "dylan-good-e"]
openGraphImageUrl: "https://opengraph.githubassets.com/6550dee66f47ef64750577526037922240123427be54bb162311b83da8dfa9e1/mongodb/agents"
---

# MongoDB Agents

Agent templates for MongoDB Atlas that you can deploy to
[MongoDB Atlas Agent Engine](https://www.mongodb.com/docs/agentengine/).

Each template already includes what an Atlas agent needs beyond a prompt:
credential handling, access scoping, tool orchestration, and approval flows. The
templates are built on the
[MongoDB MCP Server](https://www.mongodb.com/docs/mcp-server/) and
[MongoDB Agent Skills](https://www.mongodb.com/docs/agent-skills). You bring a
model API key, choose what the agent can access, and deploy it.

> [!NOTE]
> Atlas Agent Engine is in Public Preview. Review the
> [Agent Engine limitations](https://www.mongodb.com/docs/agentengine/reference/limitations/)
> before you deploy an agent against a production workload.

## Agents

| Agent | What it does | Status |
| --- | --- | --- |
| [MongoDB Atlas Explorer](#mongodb-atlas-explorer) | A conversational agent for questions and everyday workflows across your Atlas environment, such as clusters, alerts, schemas, and data. | Available |
| [MongoDB Atlas Query Insights](#mongodb-atlas-query-insights) | A workflow agent that produces a slow-query report for an Atlas cluster, based on Performance Advisor.…
