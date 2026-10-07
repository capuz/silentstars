---
repo: "corticalstack/awesome-foundry-nextgen"
name: "awesome-foundry-nextgen"
description: "Hands-on labs for Microsoft Foundry - Azure's unified PaaS for enterprise AI. Notebooks + Bicep covering provisioning, agents (incl. hosted Copilot SDK + REST), MCP, Foundry IQ knowledge bases, guardrails, red-teaming, and fine-tuning."
readmeQualityOk: true
url: "https://github.com/corticalstack/awesome-foundry-nextgen"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [76]
topics: ["agentic-ai", "ai-agents", "awesome-list", "azure", "azure-ai-foundry", "bicep", "fine-tuning", "foundry-iq", "guardrails", "jupyter-notebooks"]
stars: 27
forks: 11
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-05-15T08:07:54Z"
lastCommitAt: "2026-10-07T10:32:00Z"
lastReleaseAt: "2026-05-27T09:44:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 82
undervaluedScore: 37
maintainers: ["corticalstack"]
openGraphImageUrl: "https://opengraph.githubassets.com/765b67989f6bb772ce7e34c214b42c614720a600192ecf59a341281996b292a4/corticalstack/awesome-foundry-nextgen"
---

# Awesome Foundry Nextgen [](https://awesome.re)

A hands-on lab series for **Microsoft Foundry NextGen** - Azure's unified PaaS for enterprise AI
operations, model builders, and application development. Each lab demonstrates a specific Foundry pattern:
provisioning, agents, hosted Copilot SDK agents, MCP tools, knowledge bases, fine-tuning, guardrails, red-teaming,
observability, and more.

Foundry unifies agents, models, and tools under one Azure resource provider namespace
with built-in tracing, monitoring, evaluations, and a single RBAC/networking/policy
surface. These labs put that platform through its paces end-to-end.

## Prerequisites

- **Azure CLI** v2.60+ - [install](https://learn.microsoft.com/en-us/cli/azure/install-azure-cli)
- **`cognitiveservices` CLI extension** - `az extension add -n cognitiveservices`
- **`uv`** Python package manager - [install](https://docs.astral.sh/uv/getting-started/installation/)
- Signed in: `az login`

## Quick start

```bash
git clone https://github.com/corticalstack/awesome-foundry-nextgen.git
cd awesome-foundry-nextgen
cp .env.example .env             # then fill in your values
uv sync
uv run jupyter notebook
```

Auth is…
