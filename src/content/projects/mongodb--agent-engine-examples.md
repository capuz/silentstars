---
repo: "mongodb/agent-engine-examples"
name: "agent-engine-examples"
description: "MongoDB Agentic Platform "
readmeQualityOk: true
url: "https://github.com/mongodb/agent-engine-examples"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [52, 47]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 91
recentReleases: 0
createdAt: "2026-05-07T16:02:30Z"
lastCommitAt: "2026-10-29T21:24:13Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 15
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/ab5cbbcc1cccb6498449846f9fe45f07382f28d8115c6d4549572d14002c8b53/mongodb/agent-engine-examples"
---

# Atlas Agent Engine Templates

Public starter templates for Atlas Agent Engine. Create a local agent
with the [`agentengine` CLI](https://github.com/mongodb/agent-engine-client-libraries/releases),
choose an LLM connection, and run it with `agentengine dev up`.

## Quick Start

Prerequisites:

- The `agentengine` CLI.
- Docker or another container runtime supported by `agentengine dev up`.
- An API key from the LLM provider you want to use.

```bash
agentengine create --template hello-world-agent --name "My First Agent"
cd my-first-agent/agents/my-first-agent
agentengine dev up
```

`agentengine create` configures the selected client and saves its credential as
`LLM_API_KEY` in `.env`. Review the
generated README before starting the agent to customize its model, optional
memory, or deployment configuration.

## Templates

| Template | Use when |
| --- | --- |
| `hello-world-agent` | You want a minimal Python agent with optional memory. |
| `hello-world-agent-ts` (`templates/hello-world-agent-langgraph-ts/`) | You want a minimal TypeScript agent. |
| `hello-world-agent-openai` | You want a minimal Python agent on the OpenAI Agents SDK with optional memory (experimental). |
|…
