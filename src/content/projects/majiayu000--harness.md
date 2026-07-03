---
repo: "majiayu000/harness"
name: "harness"
description: "Run fleets of parallel coding agents with governance — Rust control plane for Claude Code & Codex: orchestration, policy, cross-agent review, observability."
url: "https://github.com/majiayu000/harness"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["ai-agent", "ai-tools", "cli", "developer-tools", "llm", "observability", "orchestration", "rules-engine", "rust", "skills"]
stars: 37
forks: 2
openIssues: 0
closedIssues: 531
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-03-02T10:34:21Z"
lastCommitAt: "2026-07-03T06:24:24Z"
lastReleaseAt: "2026-05-30T03:11:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["majiayu000", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/59a378f8b71ba01a7dd5007c698234894eb09760b9e0db8517aef8c6d6609994/majiayu000/harness"
---

# Harness

**Run fleets of parallel coding agents with governance — orchestrate, police, review, and observe Claude Code / Codex at scale.**

[Documentation](docs/) · [Contributing](CONTRIBUTING.md) · [Security](SECURITY.md)

</div>

---

AI development is no longer one agent in one terminal — it is fleets of agents working in parallel across issues, branches, and repositories. The hard problems move up a level: who assigns the work, what each agent is allowed to do, who reviews the output, and what happens when a run goes wrong at 3 a.m.

Harness is a Rust-native control plane for that fleet. It wraps AI coding agents (Claude Code, Codex, Anthropic API) with structured lifecycle management, policy enforcement, and continuous feedback loops. Instead of replacing agents, it standardizes how they run, what they're allowed to do, and how their output is reviewed.

## Key Features

- **Fleet orchestration** — Run many agents in parallel with a unified task/thread/turn lifecycle; pluggable adapters for Claude Code CLI, Codex CLI, and Anthropic API
- **Independent agent review** — Automatic cross-agent code review between implementation and GitHub review, preventing self-review by…
