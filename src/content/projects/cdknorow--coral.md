---
repo: "cdknorow/coral"
name: "coral"
description: "Agentic IDE for Claude Code, Codex CLI, Antigravity CLI, and Pi.dev"
readmeQualityOk: true
url: "https://github.com/cdknorow/coral"
homepage: "https://cdknorow.github.io/coral/"
language: "Go"
languages: ["Go", "JavaScript"]
languagePcts: [54, 30]
topics: ["ai-agents", "claude-code", "codex", "coding-agents", "developer-tools", "gemini-cli", "multi-agent", "orchestration"]
stars: 53
forks: 7
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 5
createdAt: "2026-02-18T09:05:57Z"
lastCommitAt: "2026-10-16T08:27:16Z"
lastReleaseAt: "2026-09-15T06:37:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 50
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/69601639b584910a369f214da50422432ebf4d235f667c0d1aaf8462de8c03fb/cdknorow/coral"
discussionCount: 1
---

Run Claude Code, Codex, Gemini CLI, and Pi.dev as one engineering team — on one board, in one browser tab, from any machine — with work that outlives the terminal it started in.

---

## What is Coral?

Every agent vendor now ships its own way to run agents in parallel — and each one coordinates only its own agents. Claude Code's teammates are other Claude Code instances. Codex's subagents are Codex. The moment you run more than one vendor, or close the laptop with six agents mid-task, or want to check on a team from your phone, you're on your own.

Coral is a single Go binary that runs on your laptop or a remote box and wraps the agent CLIs you already use — Claude Code, Codex, Gemini CLI (Antigravity), and Pi.dev — as one coordinated team on the same codebase. You keep your keys, your subscriptions, and your tools. Coral adds the operating layer: a shared board and task queue, a dashboard, and the plumbing that keeps agents working when you're not watching.

It works by managing three things:

- **Separate sessions and worktrees.** Every agent gets its own tmux session. Launch a team into a dedicated git worktree on a team branch so the work stays off your main checkout, and…
