---
repo: "Sinity/polylogue"
name: "polylogue"
description: "A local evidence system for AI work—unifying ChatGPT, Claude, Codex, Gemini, and agent histories into one searchable, auditable archive."
readmeQualityOk: true
url: "https://github.com/Sinity/polylogue"
homepage: "https://sinity.github.io/polylogue/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["ai-agents", "ai-observability", "audit-trail", "chatgpt", "claude", "codex", "conversation-history", "digital-archive", "full-text-search", "gemini"]
stars: 8
forks: 1
openIssues: 10
closedIssues: 871
watchers: 1
contributors: 3
recentReleases: 2
createdAt: "2026-04-07T10:44:46Z"
lastCommitAt: "2026-08-26T04:19:25Z"
lastReleaseAt: "2026-07-17T20:28:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 62
maintainers: ["Sinity"]
openGraphImageUrl: "https://opengraph.githubassets.com/da196d2b1e526f6215d31408b6c5517cd52af1135a822254733c62842a8c8c4d/Sinity/polylogue"
---

# Polylogue

</p>

Polylogue archives AI conversations and coding-agent runs from multiple tools in
one searchable local archive. It imports supported histories from ChatGPT,
Claude and Claude Code, Codex, Gemini, Hermes, and other sources, then exposes
sessions, messages, tool calls and results, branches, subagents, usage, and costs
through a CLI, Python API, local HTTP reader, and MCP server.

By default, the archive stays on your machine.

[Getting started](https://github.com/Sinity/polylogue/blob/HEAD/docs/getting-started.md) | [Live documentation](https://sinity.github.io/polylogue/) | [Demo](https://github.com/Sinity/polylogue/blob/HEAD/docs/demos.md) | [Architecture](https://github.com/Sinity/polylogue/blob/HEAD/docs/architecture.md) | [CLI reference](https://github.com/Sinity/polylogue/blob/HEAD/docs/cli-reference.md)

## Try it without importing personal data

Run the tour in a throwaway archive:

```bash
nix run github:Sinity/polylogue -- demo tour
```

The tour imports sample files for the supported providers, queries structured
tool results, and reconstructs a parent session with its child branch while
preserving source references. It does not require a provider…
