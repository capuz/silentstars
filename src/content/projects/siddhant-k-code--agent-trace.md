---
repo: "Siddhant-K-code/agent-trace"
name: "agent-trace"
description: "Local evidence and replay for coding agents: replay what happened, see what the trace could not prove, and attach safe evidence to review. Claude Code, Codex, Copilot CLI, Gemini CLI, Cursor, MCP."
readmeQualityOk: true
url: "https://github.com/Siddhant-K-code/agent-trace"
homepage: "https://siddhantkhare.com/writing/agent-observability-gap"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["agent-trace", "agents", "strace", "agent-traces", "agent-observability", "ai-agents", "cli", "developer-tools", "llm-tools", "observability"]
stars: 108
forks: 10
openIssues: 4
closedIssues: 117
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-03-15T08:09:45Z"
lastCommitAt: "2026-11-19T11:55:39Z"
lastReleaseAt: "2026-03-28T17:18:26Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 99
undervaluedScore: 39
maintainers: ["Siddhant-K-code"]
openGraphImageUrl: "https://opengraph.githubassets.com/120bd8eec79e4c4d145fbee84fd2644df26754a582e5fefd01fe5bf6bf5e3b54/Siddhant-K-code/agent-trace"
fundingLinks: ["GITHUB:https://github.com/Siddhant-K-code", "BUY_ME_A_COFFEE:https://buymeacoffee.com/siddhantkhare"]
discussionCount: 0
---

# agent-trace

**Local evidence and replay for coding agents.**

`agent-strace` records what a coding agent did in a session (prompts, tool calls, file operations, commands, failures) as local files, then does three jobs:

1. **Replay what happened.** [`replay`](https://github.com/Siddhant-K-code/agent-trace/blob/HEAD/docs/commands.md#replay) shows the session in order. [`explain`](https://github.com/Siddhant-K-code/agent-trace/blob/HEAD/docs/commands.md#explain) summarizes it in phases.
2. **See what the trace could not prove.** [`health`](https://github.com/Siddhant-K-code/agent-trace/blob/HEAD/docs/evidence-health.md) rates the evidence `healthy`, `partial`, `unknown`, or `invalid`, with observed gaps and known provider capture limits.
3. **Attach safe evidence to review.** [`review`](https://github.com/Siddhant-K-code/agent-trace/blob/HEAD/docs/review.md) checks a PR's reviewability from its authoring session. [`share`](https://github.com/Siddhant-K-code/agent-trace/blob/HEAD/docs/commands.md#share) writes a privacy-minimized HTML evidence packet; `share --dry-run` previews what it would disclose.
