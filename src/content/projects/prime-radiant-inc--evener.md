---
repo: "prime-radiant-inc/evener"
name: "evener"
description: "A coding agent: give it a prompt and it reads, writes, runs commands, and searches code in a loop until the work is done, using native tool-calling across OpenAI, Anthropic, and Google models."
readmeQualityOk: true
url: "https://github.com/prime-radiant-inc/evener"
language: "Go"
languages: ["Go"]
languagePcts: [78]
topics: ["ai-agent", "cli", "coding-agent", "go", "llm"]
stars: 117
forks: 8
openIssues: 66
closedIssues: 158
watchers: 0
contributors: 6
recentReleases: 2
createdAt: "2026-02-10T05:44:12Z"
lastCommitAt: "2026-08-28T14:24:51Z"
lastReleaseAt: "2026-06-22T17:37:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 94
undervaluedScore: 33
maintainers: ["obra"]
openGraphImageUrl: "https://opengraph.githubassets.com/936b33e2e9930feca9e6ab35627ec3f22bf869f7876092b1a788433df27f9601/prime-radiant-inc/evener"
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
