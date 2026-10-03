---
repo: "constellation-works/orbit"
name: "orbit"
description: "Local-first delivery layer for AI coding agents. Your agent files the work as a task, and Orbit runs it in a sandboxed worktree with file locks and review gates. Every run ends in a pull request, with an audit log of every step. Works with Claude Code, Codex, Cursor, Copilot and more."
readmeQualityOk: true
url: "https://github.com/constellation-works/orbit"
homepage: "https://orbit-cli.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
topics: ["cli", "local-first", "rust", "claude-code", "codex", "gemini", "agent-orchestration", "ai-agents", "audit-log", "cursor"]
stars: 11
forks: 3
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-15T18:23:29Z"
lastCommitAt: "2026-10-03T09:22:59Z"
lastReleaseAt: "2026-05-17T09:18:53Z"
status: "thriving"
tags: []
healthScore: 100
undervaluedScore: 58
maintainers: ["danieljhkim", "codex", "orbit-agent-01"]
openGraphImageUrl: "https://opengraph.githubassets.com/374eb2c8387f0e327ed55959e2ae7926d1d5cde3339d62dbf5bd1a2e72dc5511/constellation-works/orbit"
discussionCount: 1
---

# Orbit

**Your agent files the work. Orbit ships it. You review the pull request.**

</p>

</p>

Orbit is a local-first runtime for coding agents. You keep using Claude Code, Codex, Cursor, Copilot, or any of the other supported CLIs. Orbit gives them a durable task queue, isolated sandboxed worktrees, file-level locks for parallel runs, a gated pipeline that ends in a pull request, and an audit log of every step.

**Why:** agents are fast enough that planning, review, and traceability are the first things to go. Six months later nobody can say why a line was written. Orbit makes those disciplines cheap and keeps you out of the clerical work. The agent files the task, Orbit runs it, and every commit carries a task ID you can trace back to the prompt, the plan, and the review.

- **Single binary, no cloud.** State lives in `~/.orbit` and `.orbit/`. Nothing phones home.
- **Bring your own agents.** Orbit drives the provider CLIs you already have authenticated, and never asks for API keys.
- **MIT licensed.** No paid tier, no hosted offering.

---

## How it works

```text
$ orbit init                                 # one-time, per machine
$ cd my-repo && orbit workspace init --mcp…
