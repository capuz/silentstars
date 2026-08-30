---
repo: "AgentWorkforce/relayhistory"
name: "relayhistory"
description: "Sync & search Claude Code + Codex CLI conversation history in SQLite. Zero dependencies."
readmeQualityOk: true
url: "https://github.com/AgentWorkforce/relayhistory"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [76, 20]
stars: 8
forks: 1
openIssues: 11
closedIssues: 9
watchers: 0
contributors: 6
recentReleases: 7
createdAt: "2026-03-08T19:39:19Z"
lastCommitAt: "2026-08-30T00:44:48Z"
lastReleaseAt: "2026-07-07T09:18:15Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 53
maintainers: ["khaliqgant", "claude", "willwashburn"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c5de1e2db68797b38a82055fc8baeede45784ad5154636939d78a13188b6a09/AgentWorkforce/relayhistory"
---

# ai-hist

Sync and search your [Claude Code](https://docs.anthropic.com/en/docs/claude-code), [Codex CLI](https://github.com/openai/codex), [Cursor](https://cursor.com), Grok, [Agent Relay](https://github.com/AgentWorkforce/relay), and compacted persona trajectory history into a local SQLite database with full-text search.

`ai-hist` is a Rust CLI. New commands and integrations should land in the Rust
SDK/CLI surfaces.

## Why ai-hist

Coding agents start every session from zero — they can't see the decisions you
made yesterday, the approach that already failed, or the reasoning behind the
architecture they're editing. Local transcript search recovers *what* you typed.
ai-hist also captures *why*.

- **HOW + WHY, not just HOW.** Most history tools index raw prompts and
  transcripts (the *how*). ai-hist indexes those **and** distilled
  **trajectories** — the `decisions` (question → chosen → reasoning →
  alternatives) and `retrospectives` (learnings, confidence) behind each run.
  Ask `why_for_task` and get the reasoning, not just the keystrokes.
- **Local-first, team-optional.** Everything lands in local SQLite with FTS5 —
  no keys, no network required. When you want it, opt…
