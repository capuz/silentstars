---
repo: "timwuhaotian/killi"
name: "killi"
description: "Open-source AI coding agent for your terminal, written in Rust. One 7 MB native binary for Apple Silicon Macs, ~18 MB RAM, 70–90% prompt-cache hits. Works with OpenAI, Anthropic and any compatible LLM; MCP, subagents, plan mode, skills, hooks, AGENTS.md. A lightweight Claude Code / Codex CLI alternative."
readmeQualityOk: true
url: "https://github.com/timwuhaotian/killi"
homepage: "https://timwuhaotian.github.io/killi/"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["agentic-coding", "ai-agent", "ai-coding-agent", "anthropic", "apple-silicon", "claude-code", "cli", "coding-agent", "developer-tools", "llm"]
stars: 55
forks: 12
openIssues: 1
closedIssues: 1
watchers: 8
contributors: 4
recentReleases: 1
createdAt: "2026-10-21T16:28:28Z"
lastCommitAt: "2026-11-24T14:09:10Z"
lastReleaseAt: "2026-11-24T12:09:29Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 36
maintainers: ["timwuhaotian", "KGKallasmaa"]
openGraphImageUrl: "https://opengraph.githubassets.com/4be76d34dfca272fe4c36a013bf2f36c3b38495be6c41ba9e56324b03eda0f5e/timwuhaotian/killi"
discussionCount: 0
---

**killi is a fast, tiny, free and open-source AI coding agent for your terminal**, written in
Rust. It ships as one ~7 MB native binary for Apple silicon Macs and Linux (x64 and arm64) — no runtime to install, starts
in under 10 ms, and uses about 18 MB of memory while running a prompt. It reads your code, runs commands and edits files, and works with any OpenAI-compatible,
Anthropic-compatible or OpenAI Responses LLM, including ChatGPT subscriptions. It supports MCP
servers, subagents, plan mode, skills, hooks and `AGENTS.md`.
It is built around one idea: send the model as little as possible, and send it the same way
every time, so the provider's prompt cache keeps hitting (70–90% of input tokens come from the
cache). It is the sibling of the [Kil](https://github.com/timwuhaotian/kil) terminal and the
[Kiled](https://github.com/timwuhaotian/kiled) editor.

**killi is opinionated, not a general-purpose replacement for other agents.** It makes these
trade-offs on purpose:
