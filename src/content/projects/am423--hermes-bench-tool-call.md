---
repo: "am423/hermes-bench-tool-call"
name: "hermes-bench-tool-call"
description: "Hermes Agent benchmark v0.1 — evaluate local models on the actual tool-calling patterns Hermes users hit. Reproducible, trace-capturing, training-data ready."
url: "https://github.com/am423/hermes-bench-tool-call"
language: "Python"
languages: ["Python"]
languagePcts: [84]
stars: 13
forks: 2
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-06-02T18:17:17Z"
lastCommitAt: "2026-06-23T23:17:15Z"
status: "thriving"
tags: []
healthScore: 78
undervaluedScore: 33
maintainers: ["am423"]
openGraphImageUrl: "https://opengraph.githubassets.com/99967b267698168afa3fad27a1d15189b2afe80f15ed6f39760fc97298bd32de/am423/hermes-bench-tool-call"
---

# hermesbench

A benchmark for **local models running inside the Hermes Agent
harness**. Captures full conversation traces (every tool call +
result + reasoning + token IDs), asciinema recordings, and 5 Hz
hardware telemetry. Designed to be the ground truth for "how good
is this model at *using* hermes-agent?" — not just at generating text.

> **Repo:** `github.com/am423/hermes-bench-tool-call`
> **Plan:** see [`project.md`](./project.md) (1,813 lines, 11 sections, 75 answered design questions)
> **Rubric:** see [`rubric.md`](./rubric.md) (the self-grade)

**Agents:** see [AGENTS.md](./AGENTS.md) for install, `hermesbench run`, flags, and repo rules.

## What it does

- **61 tasks** — 48 core tasks across 11 categories (terminal smoke,
  file read, patch, search, write, process, todo, execute_code,
  web_lookup, memory, error_recovery), **3** `t12_real_world`
  integration tasks, plus **10** `t13_humaneval_micro` coding tasks
- **Runs the real `AIAgent` from `~/.hermes/hermes-agent/`** in a
  subprocess with a custom `tmux_isolated` environment backend
- **Captures three artifacts per task run:**
  - `trace.jsonl` — every system/user/assistant/tool message with
    token IDs and…
