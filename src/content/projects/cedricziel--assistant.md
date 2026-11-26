---
repo: "cedricziel/assistant"
name: "assistant"
description: "Minimalist self-improving personal AI assistant — Ollama-powered, Agent Skills native, MCP server"
readmeQualityOk: true
url: "https://github.com/cedricziel/assistant"
language: "Rust"
languages: ["Rust", "Dart"]
languagePcts: [61, 36]
stars: 6
forks: 1
openIssues: 14
closedIssues: 51
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-21T12:21:35Z"
lastCommitAt: "2026-11-26T15:10:27Z"
lastReleaseAt: "2026-02-26T00:09:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "under_pressure"]
healthScore: 95
undervaluedScore: 64
maintainers: ["cedricziel"]
openGraphImageUrl: "https://opengraph.githubassets.com/c60dd24458961265650e6b81158fed690e8317898f66d49be68c791fccd7167b/cedricziel/assistant"
fundingLinks: ["GITHUB:https://github.com/cedricziel"]
---

# assistant

A minimalist, self-improving personal AI assistant written in Rust.

- **Local-first** — runs entirely on your machine via [Ollama](https://ollama.com)
- **Agent Skills native** — skills are portable `SKILL.md` directories following the [agentskills.io](https://agentskills.io) open standard
- **Self-improving** — proposes SKILL.md refinements for human review (see [Self-improvement](#self-improvement))
- **MCP server** — exposes skills via the [Model Context Protocol](https://modelcontextprotocol.io) so Claude Code and other tools can discover and invoke them
- **Multi-interface** — single `assistant` binary runs orchestrator, workers, web UI, MCP, and chat interfaces via subcommands
- **Ambient skills** — active interfaces register their capabilities (e.g. `slack-post`) into the skill executor so the Persona can use them from any context

## Domain model terms

- **Persona** — long-lived assistant context with its own memory and workspace scope.
- **Subagent Process** — ephemeral delegated task execution unit.
- **A2A Profile** — Persona-attached external protocol contract (discovery + auth + interfaces).
