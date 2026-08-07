---
repo: "joshrotenberg/claude-wrapper"
name: "claude-wrapper"
description: "A type-safe Claude Code CLI wrapper for Rust"
readmeQualityOk: true
url: "https://github.com/joshrotenberg/claude-wrapper"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["agent", "ai", "claude", "llm"]
stars: 10
forks: 3
openIssues: 3
closedIssues: 334
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-09T20:52:03Z"
lastCommitAt: "2026-08-07T05:13:53Z"
lastReleaseAt: "2026-03-11T22:44:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 54
maintainers: ["joshrotenberg", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/62e7136df00d9dcfb5129dd0c126ffcab76b03aa53490fe3529d7eedcc3a2bc8/joshrotenberg/claude-wrapper"
---

# claude-wrapper

A type-safe Rust wrapper around the Claude Code CLI.

## Overview

`claude-wrapper` gives you a builder-pattern interface for the `claude`
CLI. Each subcommand is a typed builder that produces a typed output.
The design follows the same shape as
[`docker-wrapper`](https://crates.io/crates/docker-wrapper) and
[`terraform-wrapper`](https://crates.io/crates/terraform-wrapper).

Features:

- Full coverage of `claude -p` via `QueryCommand`
- Async (tokio) and blocking (`std::thread` + `wait-timeout`) APIs behind feature flags
- Long-lived `DuplexSession` for hosts (IDE backends, daemons, agent servers, chat UIs): one `claude` subprocess held open across turns, mid-turn interrupts, mid-turn permission decisions, broadcast event subscribers
- Transient `Session` for short-lived processes (CLIs, build scripts, batch jobs): subprocess-per-turn with `--resume` continuity, cumulative cost + history, optional `BudgetTracker` hard-stops, streaming
- `Conversation` for host-side history/cost/budget bookkeeping over a `DuplexSession`
- NDJSON streaming events (`stream_query` / `stream_query_sync`)
- Typed tool-permission patterns (`ToolPattern`)
- Read-side introspection of…
