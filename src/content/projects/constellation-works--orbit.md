---
repo: "constellation-works/orbit"
name: "orbit"
description: "Orbit is durable, intent-tracked agentic project management for developers "
readmeQualityOk: true
url: "https://github.com/constellation-works/orbit"
homepage: "https://orbit-cli.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [93]
topics: ["cli", "local-first", "rust", "agentic-workflow", "claude-code", "codex", "gemini", "grok-build", "agent-orchestration", "ai-agents"]
stars: 11
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2026-03-15T18:23:29Z"
lastCommitAt: "2026-09-21T09:13:54Z"
lastReleaseAt: "2026-05-17T09:18:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 56
maintainers: ["orbit-agent-01", "danieljhkim"]
openGraphImageUrl: "https://opengraph.githubassets.com/65c3656cbf0b9fda97d0129dae48075c9dddd5df4cd132d4db04a07810325295/constellation-works/orbit"
discussionCount: 1
---

# Orbit — Your agent files the work. Orbit ships it. You review the pull request.

</p>

  <em>The Orbit dashboard (<code>orbit web serve</code>) — task backlog, live audit log, per-agent scoreboard.</em>
</p>

**Say what you want in the coding agent you already use. Over MCP it files a task with acceptance criteria, Orbit runs it in an isolated worktree with the task's file scope reserved and a gated pipeline, and a pull request comes back for you to review. Every tool call, provider exchange, and task transition lands in a joined audit record. Local-first, driving the provider CLI you already have.**

You drive Claude Code, Codex, Grok Build, or Gemini CLI against real code, often in parallel. Agents make it easy to skip the disciplines that keep code maintainable, and six months later nobody can reconstruct why an agent wrote a given line. Orbit makes those disciplines cheap without making you the clerk: the agent files the task before it edits, every tool call goes into a structured audit log, parallel runs are sandboxed into worktrees with file-level locks, and your own design docs are retrievable by the agents doing the work.

---

## What a session looks like

Two commands…
