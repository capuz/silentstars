---
repo: "constellation-works/orbit"
name: "orbit"
description: "Local-first delivery layer for AI coding agents. Your agent files the work as a task, and Orbit runs it in a sandboxed worktree with file locks and review gates. Every run ends in a pull request, with an audit log of every step. Works with Claude Code, Codex, Cursor, Copilot and more."
readmeQualityOk: true
url: "https://github.com/constellation-works/orbit"
homepage: "https://orbit-cli.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [89]
topics: ["cli", "local-first", "rust", "claude-code", "codex", "gemini", "agent-orchestration", "ai-agents", "audit-log", "cursor"]
stars: 14
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-15T18:23:29Z"
lastCommitAt: "2026-10-10T10:06:21Z"
lastReleaseAt: "2026-05-17T09:18:53Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 56
maintainers: ["orbit-agent-01", "danieljhkim", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/05ff8c8d292bb6c237ed151a85187f0cab9f80a1dd9c477bb9573a8d4c384d17/constellation-works/orbit"
discussionCount: 1
---

Orbit is a local-first runtime for coding agents. Keep using your authenticated agent CLI; Orbit adds a durable task queue, sandboxed worktrees, file locks for parallel runs, a gated delivery pipeline, and an audit log.

**Why:** fast agents make planning, review, and traceability easy to lose. Orbit keeps the prompt, plan, and review behind every change, with a task ID on every workflow commit.

- **Single binary, no cloud.** State lives in `~/.orbit` and `.orbit/`; Orbit sends no telemetry.
- **Bring your own agents.** Use the provider CLIs you already have authenticated, without giving Orbit API keys.
- **MIT licensed.** No paid tier or hosted offering.

## How it works

```text
You:    The fsProfile lookup is undocumented. Get that fixed.
Agent:  Files a proposed task with acceptance criteria. Approve it and ship?
You:    Yes.
Agent:  Queues it, then runs plan → execute → review in a locked, isolated worktree.
        Opens a pull request. Review and merge it, then approve the task to close it.
```

Nothing starts without approval; PR runs stop for your review unless you authorize `--complete`. The task record keeps the prompt, plan, execution trace, and review. For larger…
