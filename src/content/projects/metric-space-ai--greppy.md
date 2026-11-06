---
repo: "metric-space-ai/greppy"
name: "greppy"
description: "Local code navigation for coding agents: deterministic symbol graph, semantic search, compact briefings, and byte-exact real-grep passthrough. One native Rust binary."
readmeQualityOk: true
url: "https://github.com/metric-space-ai/greppy"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
topics: ["cli", "code-intelligence", "code-search", "grep", "llm-agent", "rust", "semantic-search", "agentic-coding", "ai-engineering", "developer-tools"]
stars: 12
forks: 2
openIssues: 15
closedIssues: 3
watchers: 0
contributors: 4
recentReleases: 5
createdAt: "2026-06-30T10:38:47Z"
lastCommitAt: "2026-11-06T11:24:25Z"
lastReleaseAt: "2026-10-22T21:19:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 46
maintainers: ["mkh-welsch"]
openGraphImageUrl: "https://opengraph.githubassets.com/8550702ed85123c95c09362d118db71a56487c937fb934c22816722c9c4b9157/metric-space-ai/greppy"
---

# greppy

**Local code navigation, transactional editing, portable CoW workspaces, and a native browser tool for coding agents: deterministic symbol-graph evidence, semantic search, compact function briefings, certificate-backed edits, and byte-exact real-`grep` passthrough.**

> In our 115-task, four-model benchmark (MiniMax-M3, GLM-5.2, Qwen3.6-27B,
> Kimi-K3), an agent with greppy answered 6–50 percentage points more
> questions correctly than the same agent with `grep`, and matched the grep
> agent's best quality at 37–80 % lower API cost.
> Method and full results: [paper](https://github.com/metric-space-ai/greppy/blob/HEAD/docs/paper/mscc-greppy-paper.pdf); the
> benchmark suites are in this repo.

`greppy` is a code-navigation and code-editing tool that also accepts ordinary
`grep` invocations. Those invocations execute the real system `grep` and forward its
stdout, stderr, and exit code byte-for-byte; they do not open an index, load a
model, or mutate a Greppy cache. ripgrep-style invocations (`--smart-case`,
`-t rust`, `-g '!target'`, …) are recognized too: they delegate byte-exactly
to a real `rg` when one is installed, otherwise the common flag subset is
mapped onto the…
