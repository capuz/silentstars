---
repo: "axisvela/praxo-core"
name: "praxo-core"
description: "MIT-licensed agent framework for the AxisVela ecosystem: governed agent loop, model/tool/memory/event primitives, plugins, sandboxing, and policy."
readmeQualityOk: true
url: "https://github.com/axisvela/praxo-core"
homepage: "https://axisvela.github.io/praxo-core/"
language: "Go"
languages: ["Go"]
languagePcts: [22]
topics: ["agent-framework", "agent-loop", "ai-agents", "go", "golang", "llm", "llm-agents", "memory", "mit-license", "multi-agent"]
stars: 12
forks: 11
openIssues: 8
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-18T02:03:25Z"
lastCommitAt: "2026-10-30T11:02:15Z"
lastReleaseAt: "2026-10-18T06:06:38Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 77
undervaluedScore: 63
maintainers: ["hanhuiwen"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad2e1e79982ab1de6a336b2e0a6e9dab10175ef1d3476d465ea1207369972154/axisvela/praxo-core"
discussionCount: 1
---

# PRAXO-CORE

[English](https://github.com/axisvela/praxo-core/blob/HEAD/README.md) | [简体中文](https://github.com/axisvela/praxo-core/blob/HEAD/README.zh-CN.md)

**An embeddable MIT-licensed agent framework with explicit policy controls,
checkpoints, and event tracing.**

Build governed agents inside your own product without rebuilding the agent
loop, model abstraction, tool contracts, or execution boundaries. Use your own
model providers and integrations. AxisVela products are not required.

[Documentation](https://axisvela.github.io/praxo-core/) |
[Quickstart](https://github.com/axisvela/praxo-core/blob/HEAD/docs/getting-started/quickstart.md) |
[Language Implementations](https://github.com/axisvela/praxo-core/blob/HEAD/docs/languages/index.md) |
[Examples](https://github.com/axisvela/praxo-core/blob/HEAD/examples)

## Start With Go

```bash
go get github.com/axisvela/praxo-core/v2@v2.5.2
```

Run the quickstart from a checkout using Ollama:

```bash
export PRAXO_BASE_URL=http://localhost:11434/v1
export PRAXO_MODEL=llama3.2
GOWORK=off go run ./examples/quickstart
```

Or connect an OpenAI-compatible endpoint:

```bash
export PRAXO_BASE_URL=https://api.openai.com/v1
export…
