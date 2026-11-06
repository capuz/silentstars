---
repo: "paulocorcino/ralphy"
name: "ralphy"
description: "Works your GitHub issue backlog overnight with Claude Code: plans, codes, commits, and closes issues, then hands you a branch to review in the morning. Never pushes, never opens a PR. Runs on your Claude subscription quota."
readmeQualityOk: true
url: "https://github.com/paulocorcino/ralphy"
language: "Rust"
languages: ["Rust"]
languagePcts: [57]
topics: ["agentic", "ai-agent", "anthropic", "automation", "autonomous-agent", "claude", "claude-code", "cli", "code-generation", "developer-tools"]
stars: 6
forks: 2
openIssues: 28
closedIssues: 525
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-06T08:21:04Z"
lastCommitAt: "2026-11-06T12:17:23Z"
lastReleaseAt: "2026-07-02T23:52:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 59
maintainers: ["paulocorcino"]
openGraphImageUrl: "https://opengraph.githubassets.com/0417b8751f71c5de06ce9a72ec0ae1e1979381f3c291a75f6be692c9e1b43868/paulocorcino/ralphy"
discussionCount: 16
---

# Ralphy 🌙

**Your coding agents, your repos, your machine — in a browser tab you can open from anywhere.**

Ralphy is one small binary that turns the computer where your code lives into a workspace
you can reach from any other screen. It runs a resident **daemon** on your box and serves a
**workbench**: projects, a file explorer with a real editor, your git changes, your issue
board, live runs, spend — and **real agent terminals** (Claude, Codex, OpenCode, Copilot,
Cursor, Gemini, Kimi) side by side in one tab.

The terminals belong to the daemon, not to the browser. Close the laptop, pick up the
tablet, open the same URL: the sessions are still running, with their scrollback, **and your
window layout comes back with them**.

And when you're done for the day, the same binary can work your backlog while you sleep.

```text
     🏠 your machine                      🌍 any screen you happen to have
┌───────────────────────────┐          ┌──────────┐ ┌──────────┐ ┌──────────┐
│  ralphy daemon            │          │ desktop  │ │ notebook │ │  tablet  │
│  · your repos             │  ◀────▶  │          │ │          │ │  / phone │
│  · your agent sessions    │          └──────────┘…
