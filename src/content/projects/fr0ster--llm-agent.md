---
repo: "fr0ster/llm-agent"
name: "llm-agent"
description: "Framework for building LLM agents, AI pipelines, multi-agent systems, MCP integrations, RAG workflows, planners, controllers and tool-driven orchestration across multiple LLM providers."
readmeQualityOk: true
url: "https://github.com/fr0ster/llm-agent"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [99]
stars: 12
forks: 3
openIssues: 11
closedIssues: 128
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-11-06T09:48:34Z"
lastCommitAt: "2026-10-25T09:01:53Z"
lastReleaseAt: "2026-03-15T15:39:30Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 69
maintainers: ["fr0ster"]
openGraphImageUrl: "https://opengraph.githubassets.com/61a72ab8672e66577e86d13b2601f1a8e221e7f4be8943c7062a26c3062f3587/fr0ster/llm-agent"
---

# SmartAgent — a composable framework for LLM pipelines

**Build an LLM pipeline of any shape — from a single ReAct tool-loop to a
plan-first controller with durable, resumable state — by composing interfaces
rather than writing glue.** Every variation point the consumer should own is a
strategy they can swap; every backend is a factory they can register.

It ships two ways:

- **As a server.** `llm-agent` is an OpenAI- and Anthropic-compatible HTTP
  endpoint. Point Claude CLI, Cline, Goose, or anything that speaks
  `/v1/chat/completions` at it, and it answers with the whole pipeline behind it
  — no client changes.
- **As libraries.** Embed `SmartAgentBuilder` in your own process, or take only
  the interface package and implement the seams yourself.

## What it does

### Pipelines are plugins, selected by name

The shape of the run is configuration, not code. `pipeline: { name, config }`
resolves against a plugin registry; six pipelines are built in, and a deployment
adds its own by exporting an `IPipelinePlugin` instance, or a factory under
`pipelinePluginFactories` when it takes settings (a name collision with a built-in
fails loud at startup rather than shadowing it).

|…
