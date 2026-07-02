---
repo: "githubnext/ado-aw"
name: "ado-aw"
description: "Azure DevOps Agentic Workflows"
url: "https://github.com/githubnext/ado-aw"
homepage: "https://githubnext.github.io/ado-aw/"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["ado", "agent", "agentic-workflow", "copilot-cli"]
stars: 8
forks: 4
openIssues: 73
closedIssues: 243
watchers: 1
contributors: 51
recentReleases: 0
createdAt: "2026-03-04T18:53:27Z"
lastCommitAt: "2026-07-02T06:34:54Z"
lastReleaseAt: "2026-03-31T14:25:53Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 59
maintainers: ["github-actions[bot]", "jamesadevine", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/71a440c23165995ef4ad0d4b68eac8eed2dbbb72740c59499fe3527e6ae42900/githubnext/ado-aw"
discussionCount: 2
---

# ado-aw

**Azure DevOps Agentic Workflows.** Write agentic workflows in human-friendly
markdown; ado-aw compiles each into a secure, multi-stage Azure DevOps pipeline
that runs an AI agent in a network-isolated sandbox.

Inspired by [GitHub Agentic Workflows (gh-aw)](https://github.com/githubnext/gh-aw).

> **If you are an AI agent**, use the specialized prompts in [`prompts/`](prompts/) for step-by-step guidance: [create](prompts/create-ado-agentic-workflow.md) · [update](prompts/update-ado-agentic-workflow.md) · [debug](prompts/debug-ado-agentic-workflow.md)

---

## How It Works

You author an **agent file** — a markdown document with YAML front matter that
describes _what_ the agent should do, _when_ it should run, and _which tools_ it
can use. The `ado-aw` compiler transforms that file into a production-ready Azure
DevOps pipeline with three jobs:

```
┌────────────────────────┐     ┌──────────────────────┐     ┌───────────────────────┐
│  Agent                 │────▶│  Detection           │────▶│  SafeOutputs          │
│  (Stage 1 — Agent)     │     │  (Stage 2 — Threats) │     │  (Stage 3 — Executor) │
│                        │     │…
