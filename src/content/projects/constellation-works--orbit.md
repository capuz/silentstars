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
lastCommitAt: "2026-09-12T08:03:55Z"
lastReleaseAt: "2026-05-17T09:18:53Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 55
maintainers: ["orbit-agent-01", "danieljhkim"]
openGraphImageUrl: "https://opengraph.githubassets.com/c69ee69a058401dd23a586b3e5c048925a6460ec36182d2b7f2cc2359969f146/constellation-works/orbit"
discussionCount: 0
---

# Orbit — The engineering framework for your AI coding agents

</p>

  <em>The Orbit dashboard (<code>orbit web serve</code>) — task backlog, live audit log, per-agent scoreboard.</em>
</p>

**Orbit takes review off the critical path, so throughput and rigor stop trading against each other. A durable task for every change, structured audit of every tool call and provider exchange, conflict-aware parallel dispatch, and continuous review sweeps that file what they find straight back into the backlog — local-first.**

You drive Claude Code, Codex, Grok Build, or Gemini CLI against real code, often in parallel. Agents make it easy to skip the disciplines that keep code maintainable, and six months later nobody can reconstruct why an agent wrote a given line. Orbit makes those disciplines cheap: tasks before edits, every tool call in a structured audit log, parallel runs sandboxed into worktrees with file-level locks, and your own design docs retrievable by the agents doing the work.

Conventional practice buys safety with blocking gates, which caps how many agents you can run at once. Orbit merges on a quick direction check, then scheduled `code-review`, `qa-sweep`, and…
