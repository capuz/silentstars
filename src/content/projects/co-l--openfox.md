---
repo: "co-l/openfox"
name: "openfox"
description: "Local-LLM-first agentic coding assistant, with everything you need out of the box."
readmeQualityOk: true
url: "https://github.com/co-l/openfox"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 275
forks: 50
openIssues: 30
closedIssues: 60
watchers: 6
contributors: 23
recentReleases: 10
createdAt: "2026-03-11T08:03:23Z"
lastCommitAt: "2026-08-31T09:50:39Z"
lastReleaseAt: "2026-07-17T17:07:48Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 91
undervaluedScore: 29
maintainers: ["co-l", "JamesDAdams", "digitalsolutionscx"]
openGraphImageUrl: "https://opengraph.githubassets.com/233cd989e2365b88758514dfb3780c7d7e88b022bca0d5824e2d96d76792623c/co-l/openfox"
discussionCount: 18
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
