---
repo: "heddles/agent-orca"
name: "agent-orca"
description: "Agent-orca orchestrates and manages AI agent workloads in Kubernetes, providing distributed execution, model routing, knowledge integration, and tool access through MCP and stdio tools."
readmeQualityOk: true
url: "https://github.com/heddles/agent-orca"
language: "Go"
languages: ["Go"]
languagePcts: [83]
stars: 91
forks: 6
openIssues: 15
closedIssues: 14
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2026-09-26T16:23:03Z"
lastCommitAt: "2026-11-05T08:04:52Z"
lastReleaseAt: "2026-11-03T23:46:40Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 89
undervaluedScore: 33
maintainers: ["floppyfish14", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/19c6a6b0e6dece53ca482b497a17ff9b0a2039ee7af14e6fca6a8e411afd5571/heddles/agent-orca"
fundingLinks: ["KO_FI:https://ko-fi.com/mattfisher40461", "BUY_ME_A_COFFEE:https://buymeacoffee.com/mfish551mfg"]
---

# Agent ORCAstrator

Agent orcastrator is a Kubernetes-native platform for deploying, managing, and running AI agents at scale. It lets you declaratively define agents, route them to the correct LLM, equip them with tools, and execute them as one-off jobs or long-running services with checkpoints, cost tracking, guardrails, and RAG built in.

> **Open source, Apache 2.0.** See [CONTRIBUTING.md](https://github.com/heddles/agent-orca/blob/HEAD/CONTRIBUTING.md) to get started,
> [CODE_OF_CONDUCT.md](https://github.com/heddles/agent-orca/blob/HEAD/CODE_OF_CONDUCT.md) for the community standard, and
> [SECURITY.md](https://github.com/heddles/agent-orca/blob/HEAD/SECURITY.md) for how to report vulnerabilities.

---

## Quick Start

**Quick-start prerequisites:**
>__NOTE__: You need to activate mise in your shell for this to work. Here is an zsh example: `echo 'eval "$(mise activate zsh)"' >> ~/.zshrc`
1. Install `mise` via Homebrew: `brew install mise`
1. Bootstrap the environment: `sudo mise install --system`
1. Ensure Docker is running.
1. Have an API key for at least one model provider (OpenAI, Anthropic, Google, or **Poolside**; providers are…
