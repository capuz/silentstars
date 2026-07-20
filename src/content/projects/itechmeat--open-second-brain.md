---
repo: "itechmeat/open-second-brain"
name: "open-second-brain"
description: "Local-first 🧠 memory for Hermes Agent that lives in your Obsidian vault and remembers project context. Nightly 😴 dream passes turn repeat corrections into confirmed preferences with measurable confidence. Adapters ship for Claude Code, Codex, and OpenClaw, with an MCP server for anything else."
readmeQualityOk: true
url: "https://github.com/itechmeat/open-second-brain"
homepage: "https://dark-factory.techmeat.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [97]
stars: 130
forks: 10
openIssues: 1
closedIssues: 4
watchers: 1
contributors: 10
recentReleases: 10
createdAt: "2026-05-06T07:40:41Z"
lastCommitAt: "2026-07-20T06:34:31Z"
lastReleaseAt: "2026-05-07T20:15:13Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 95
undervaluedScore: 36
maintainers: ["solaitken", "itechmeat", "im-khang"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1230655525/a88b2a1d-322b-404c-bf15-f8f3c09d5a40"
---

# Open Second Brain

> An [Obsidian](https://obsidian.md)-native memory layer for your AI agent. Plain Markdown you own, in the same vault you already use.

Open Second Brain plugs into [Hermes Agent](https://github.com/NousResearch/hermes-agent) and turns your Obsidian vault into a memory layer the agent reads and writes through deterministic CLI / MCP tools. Preferences, signals, evidence, and audit trails are real `.md` files under `Brain/` in the vault you already open in Obsidian every day. You can grep them, version them with git, search them in Obsidian, edit them by hand. No daemon, no vector black box, no hidden state outside the vault.

## What is new

Open Second Brain 1.37.0 is a retrieval quality and context delivery release. Search now answers relationship questions natively: a typed-edge relational arm (opt-in, vocabulary-driven, bounded depth 2) joins hybrid RRF, query plans route summary-shaped questions to the summary surface deterministically, and dedup plus search respect composite owner/session/project scopes so identical text in two contexts is never wrongly collapsed. Retrieval also explains itself: `o2b search rerank-fit` tells you when a reranker is…
