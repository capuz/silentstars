---
repo: "prime-radiant-inc/evener"
name: "evener"
description: "A coding agent: give it a prompt and it reads, writes, runs commands, and searches code in a loop until the work is done, using native tool-calling across OpenAI, Anthropic, and Google models."
readmeQualityOk: true
url: "https://github.com/prime-radiant-inc/evener"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [62, 35]
topics: ["ai-agent", "cli", "coding-agent", "go", "llm"]
stars: 169
forks: 15
openIssues: 217
closedIssues: 1061
watchers: 0
contributors: 8
recentReleases: 8
createdAt: "2026-02-10T05:44:12Z"
lastCommitAt: "2026-10-06T10:42:23Z"
lastReleaseAt: "2026-09-30T06:38:54Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "release_machine"]
healthScore: 96
undervaluedScore: 36
maintainers: ["obra"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f25f221fe73cf98c0e719563699a8929b2c67b3fa0771bfff01abda0baadb8c/prime-radiant-inc/evener"
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

The [product guide](https://github.com/prime-radiant-inc/evener/blob/HEAD/docs/product/README.md) describes the experience Evener aims
to provide, maps its subsystems and recovery responsibilities, and tracks open
friction cases and their product decisions.

Evener uses the LLM's native tool-calling and supports OpenAI, Anthropic,
Google, and [other providers](https://github.com/prime-radiant-inc/evener/blob/HEAD/docs/llm-providers.md). For how the code is
organized, see [docs/architecture.md](https://github.com/prime-radiant-inc/evener/blob/HEAD/docs/architecture.md). For the runtime
contracts that…
