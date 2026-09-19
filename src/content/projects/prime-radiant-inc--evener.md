---
repo: "prime-radiant-inc/evener"
name: "evener"
description: "A coding agent: give it a prompt and it reads, writes, runs commands, and searches code in a loop until the work is done, using native tool-calling across OpenAI, Anthropic, and Google models."
readmeQualityOk: true
url: "https://github.com/prime-radiant-inc/evener"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [70, 27]
topics: ["ai-agent", "cli", "coding-agent", "go", "llm"]
stars: 151
forks: 11
openIssues: 245
closedIssues: 507
watchers: 0
contributors: 8
recentReleases: 2
createdAt: "2026-02-10T05:44:12Z"
lastCommitAt: "2026-09-19T08:15:25Z"
lastReleaseAt: "2026-06-22T17:37:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 33
maintainers: ["obra"]
openGraphImageUrl: "https://opengraph.githubassets.com/364d90ac280f72ec5f2728bb8bfaee4c9658b7dd1354e4b46871e3daedd63774/prime-radiant-inc/evener"
---

# Evener

A coding agent run through a hub. The `evener hub` orchestrator serves the
web UI — Evener's default interactive surface — where you start sessions,
watch the agent read files, run commands, and edit code, and steer it with
follow-up messages. The hub tracks many concurrent sessions at once, and
`evener tui` gives the same hub a terminal dashboard. A non-interactive
command line handles scripting and automation.

**New here? [docs/getting-started.md](https://github.com/prime-radiant-inc/evener/blob/HEAD/docs/getting-started.md) walks from
install to your first session.**

Evener uses the LLM's native tool-calling and supports OpenAI, Anthropic,
Google, and [other providers](https://github.com/prime-radiant-inc/evener/blob/HEAD/docs/llm-providers.md). For how the code is
organized, see [docs/architecture.md](https://github.com/prime-radiant-inc/evener/blob/HEAD/docs/architecture.md). For the runtime
contracts that subagents, plugins, and hooks operate under, see
[docs/subagent-runtime-contracts.md](https://github.com/prime-radiant-inc/evener/blob/HEAD/docs/subagent-runtime-contracts.md). For
background jobs, see…
