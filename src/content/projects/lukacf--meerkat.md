---
repo: "lukacf/meerkat"
name: "meerkat"
description: "Meerkat - an operational agent platform."
readmeQualityOk: true
url: "https://github.com/lukacf/meerkat"
language: "Rust"
languages: ["Rust", "TLA"]
languagePcts: [53, 29]
topics: ["agentic", "ai", "ai-agents", "claude", "claude-code", "cli", "codex", "codex-cli", "gemini", "gemini-cli"]
stars: 24
forks: 7
openIssues: 77
closedIssues: 180
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-01-22T12:38:43Z"
lastCommitAt: "2026-11-07T13:55:02Z"
lastReleaseAt: "2026-03-15T14:50:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 52
maintainers: ["lukacf", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/51f767e77e558f33e210bda4b8590a6ea78b07f910c150eec41421f44a6808f8/lukacf/meerkat"
---

Meerkat is an open-source, provider-agnostic platform for AI agents. Run an
agent from the command line, embed agents in your application, or operate a
coordinated system of agents that works over time. One Rust runtime owns agent
execution, typed events, providers, tools, persistence, runtime control and
multi-agent orchestration, and every surface and product builds on its
contracts.

This repository holds the whole platform in one Cargo workspace: the Core
runtime and the products built around it. Core, Meta and Connect release
together under one Meerkat version, each through its own release path. Meta
Forge keeps a version line of its own. See [Releases](#releases).

## Products

| Product | Directory | What it does | Get started | Docs | Release tag |
|---------|-----------|--------------|-------------|------|-------------|
| **Meerkat Core** | [`crates/`](https://github.com/lukacf/meerkat/blob/HEAD/crates), [`sdks/`](https://github.com/lukacf/meerkat/blob/HEAD/sdks) | The agent runtime, with the `rkat` CLI, the REST, JSON-RPC and MCP servers, and the Rust, Python, TypeScript and Web SDKs | [Quick start](#quick-start) | [Core docs](https://docs.rkat.ai/introduction) |…
