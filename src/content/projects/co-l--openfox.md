---
repo: "co-l/openfox"
name: "openfox"
description: "Local-LLM-first agentic coding assistant, with everything you need out of the box."
url: "https://github.com/co-l/openfox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 58
forks: 6
openIssues: 1
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-11T08:03:23Z"
lastCommitAt: "2026-07-03T12:43:06Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 33
maintainers: ["co-l"]
openGraphImageUrl: "https://opengraph.githubassets.com/966fa42f2ddaa509d3a53c1ec49d356604df52407eb16341b391e842a3e18fc4/co-l/openfox"
discussionCount: 2
---

# OpenFox

**Local-LLM-first agentic coding assistant**

Autonomous coding agent for local LLMs with contract-driven execution.

_Session — Criteria tracking, tool calls, and streaming responses_

_Providers — Local LLM backend configuration_

_Workflows — Contract-driven execution pipeline_

## Quick Start

```bash
npm i -g openfox
openfox
```

On first run, OpenFox automatically detects your local LLM backend (vLLM, sglang, ollama, llamacpp) and configures itself.

## What's New in 2.0

- **Multi-Turn Agent Engine** — Completely rewritten agent loop with EventStore as single source of truth. All modes (builder, planner, verifier, sub-agents, compaction) run through the same unified loop.
- **Provider Dialog** — Comprehensive provider configuration UI with thinking mode (`reasoningEffort`), editable kwargs, profile defaults, and preset management.
- **Auto-Retry Patterns** — Replace the old XML protection toggle with configurable pattern matching. Define your own retry triggers in settings.
- **Unified Image Handling** — Automatic vision model fallback for non-vision models. Images are described before each turn so any model can "see" them.
- **Session Metadata** — Unified…
