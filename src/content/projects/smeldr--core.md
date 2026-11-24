---
repo: "Smeldr/core"
name: "core"
description: "Keeps decisions coherent when people and AI agents move fast. A searchable graph of your decisions: who decided, what is in force, what builds on what. Rights set per domain and area, MCP-native, optional merge gates. Self-hosted and open source, with nothing to install beside it."
readmeQualityOk: true
url: "https://github.com/Smeldr/core"
homepage: "https://smeldr.dev"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["go", "golang", "open-source", "ai-agents", "mcp", "smeldr", "model-context-protocol", "state-machine", "audit-trail", "governance"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2026-02-28T10:05:50Z"
lastCommitAt: "2026-11-24T14:04:33Z"
lastReleaseAt: "2026-03-15T20:20:20Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 61
maintainers: ["xxwink"]
openGraphImageUrl: "https://opengraph.githubassets.com/16668354977be9912eb748e7f6cf3eeef2005e6ac14dbf1547e33dd892a33777/Smeldr/core"
discussionCount: 1
---

# Smeldr

**Keeps decisions coherent when people and AI agents move fast.**

A searchable graph of your decisions: who decided, what is in force, and what builds on what. Kept apart from the context the reasoning came from.

Governance is set per domain and area: a domain's people ratify its decisions, an area's people approve changes to its files. Made for software teams that work with AI agents. Enforceable as merge gates when you want it.

Self-hosted. Open source. Nothing to install beside it: SQLite is built in (pure Go, [modernc.org/sqlite](https://gitlab.com/cznic/sqlite)).

- **Decide.** Propose a Decision. Someone with the right ratifies it. It is never edited, only replaced, and the old one stays on record.
- **Know.** Every action records who did it: a person, an AI agent or a job. Ask what is in force and what rests on it.
- **Enforce.** Tie a Decision to the files it governs. A pull request shows the Decisions that apply and waits for the answer.

**v1.195.0: stable.** Public APIs are stable within v1.
See [CHANGELOG.md](https://github.com/Smeldr/core/blob/HEAD/CHANGELOG.md).

## Start in three minutes

**1. Run the server.**
