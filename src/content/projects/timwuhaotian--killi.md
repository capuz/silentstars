---
repo: "timwuhaotian/killi"
name: "killi"
description: "Fast, tiny AI coding agent for the terminal, written in Rust. One small native binary for Apple Silicon Macs. Works with OpenAI, Anthropic and compatible LLMs; MCP, subagents, plan mode, prompt-cache-friendly."
readmeQualityOk: true
url: "https://github.com/timwuhaotian/killi"
homepage: "https://github.com/timwuhaotian/killi#readme"
language: "Rust"
languages: ["Rust"]
languagePcts: [91]
topics: ["agentic-coding", "agents-md", "ai-agent", "ai-coding-agent", "anthropic", "apple-silicon", "claude-code", "cli", "coding-agent", "command-line"]
stars: 45
forks: 9
openIssues: 0
closedIssues: 0
watchers: 8
contributors: 2
recentReleases: 1
createdAt: "2026-10-21T16:28:28Z"
lastCommitAt: "2026-11-07T13:54:44Z"
lastReleaseAt: "2026-10-31T09:06:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 37
maintainers: ["timwuhaotian"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bb893f1223fc7f3ecdc3c516f50787085eba5f70a15aae2f0f5c4448900c1b0/timwuhaotian/killi"
---

**killi is a fast, tiny AI coding agent for your terminal**, written in Rust (one small native
binary, no runtime). Like Claude Code, Codex CLI, opencode or Kimi Code, it reads your code, runs
commands and edits files, but it works with any OpenAI-compatible, Anthropic-compatible or
OpenAI Responses LLM, and it supports MCP servers, subagents, plan mode, skills, hooks and
`AGENTS.md`. It is built around one idea: send the model as little as possible, and send it
the same way every time, so the provider's prompt cache keeps hitting. It is the sibling of the
[Kil](https://github.com/timwuhaotian/kil) terminal and the
[Kiled](https://github.com/timwuhaotian/kiled) editor.

How these were measured: [Size and memory](#size-and-memory) · [Capability tests](#capability-tests).

> **Status: early.** Apple silicon Macs only. Used daily by its author; expect rough edges.

## Features

- **Small and quick.** One 6 MB binary with no runtime to install. It starts in under 20 ms and
  uses about 15 MB of memory running a prompt, where Kimi Code uses 408 MB, Claude Code 324 MB
  and opencode 2 332 MB.
- **Few tokens.** The system prompt and every tool together come to about 2,600 tokens, plus…
