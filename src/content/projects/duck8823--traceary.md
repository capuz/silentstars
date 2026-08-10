---
repo: "duck8823/traceary"
name: "traceary"
description: "Local-first session log and audit trail for AI coding agents (Claude Code, Codex, Gemini)"
readmeQualityOk: true
url: "https://github.com/duck8823/traceary"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 5
forks: 0
openIssues: 62
closedIssues: 845
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-04-02T07:26:04Z"
lastCommitAt: "2026-08-10T05:05:25Z"
lastReleaseAt: "2026-04-08T19:58:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 54
maintainers: ["duck8823"]
openGraphImageUrl: "https://opengraph.githubassets.com/81ea15d35ae94244a933ba0d5b4eef4a36c8ba5f371231eb49163d7bff89052f/duck8823/traceary"
---

# Traceary

[日本語](https://github.com/duck8823/traceary/blob/HEAD/README.ja.md)

</p>

Traceary is a local-first CLI and MCP server for recording and searching AI agent work logs, session boundaries, and shell command audits.

Install the CLI first, then add the plugin for your AI agent host to enable automatic recording.

## Why Traceary

AI-assisted development gets messy quickly when:

- session context disappears after `clear` or `compact`
- Git history explains what changed, but not always why
- shell command output is hard to connect back to the right agent or session
- work is split across Claude, Codex, Antigravity (Gemini CLI for legacy installs), and manual terminal steps
- multiple sessions and worktree moves make the timeline harder to follow

Traceary keeps those records in one local SQLite store so the same history can be reused from the CLI, hooks, and MCP clients.

## Three-layer model

Traceary is no longer just a local event log. `v0.5.0` organizes the product around three layers that map to how agent workflows actually need context.

| Layer | What lives there | How it is fed |
|---|---|---|
| Audit / Archive | raw events (prompts, transcripts, command audits),…
