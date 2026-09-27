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
stars: 10
forks: 2
openIssues: 10
closedIssues: 871
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2026-04-07T10:44:46Z"
lastCommitAt: "2026-09-27T09:28:12Z"
lastReleaseAt: "2026-07-17T20:28:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["Sinity"]
openGraphImageUrl: "https://opengraph.githubassets.com/5b4b0197101689333c7e7b4a7de1a67f675470dc7760da0716387b4ed7d1ab7f/Sinity/polylogue"
---

# Polylogue

</p>

Polylogue is a local flight recorder for AI work: a cross-provider system of
record where sessions, tool receipts, lineage, usage, and costs remain tied to
their source evidence. It imports supported histories from ChatGPT, Claude and
Claude Code, Codex, Gemini, Hermes, and other sources, then makes that archive
available through a CLI, Python API, local HTTP reader, and MCP server.

By default, the archive stays on your machine.

[Getting started](https://github.com/Sinity/polylogue/blob/HEAD/docs/getting-started.md) | [Live documentation](https://sinity.github.io/polylogue/) | [Demo](https://github.com/Sinity/polylogue/blob/HEAD/docs/demos.md) | [Published finding](https://sinity.github.io/polylogue/findings/claim-vs-evidence/) | [Architecture](https://github.com/Sinity/polylogue/blob/HEAD/docs/architecture.md) | [CLI reference](https://github.com/Sinity/polylogue/blob/HEAD/docs/cli-reference.md)

## Try it without importing personal data

Run the tour in a throwaway archive:

```bash
uvx polylogue demo tour
```

The command is complete when the terminal prints `Polylogue demo tour:
passed`. It writes a report, transcript, command outputs, and recording source…
