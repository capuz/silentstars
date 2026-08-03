---
repo: "boldprojekte/franke_skills"
name: "franke_skills"
description: "Agent-first CLI that runs Codex, Claude Code, and Grok as detached coding workers, while a stronger model keeps orchestration, steering, and review."
readmeQualityOk: true
url: "https://github.com/boldprojekte/franke_skills"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-skills", "ai-agents", "claude-code", "cli", "codex", "orchestration"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-07-08T22:44:46Z"
lastCommitAt: "2026-08-03T06:41:11Z"
lastReleaseAt: "2026-08-03T06:43:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 37
maintainers: ["boldprojekte"]
openGraphImageUrl: "https://opengraph.githubassets.com/0257bcc41d61c0d3d3bb84d34d680fe2c36682722443f1eea8079a87cd800ae5/boldprojekte/franke_skills"
---

# Franke Skills

Keep the smart model in the chair. Send the coding to detached workers.

Newer orchestration-grade models (Fable-class and up) are excellent at planning, decomposing, and judging work. Actual coding still runs best in isolated executors with their own context, logs, tests, and failure states. This repo gives the orchestrator a way to stay in control while it fans out the token-heavy implementation, review, and investigation to cheaper or more specialized workers.

The first skill, `cxcc-subagent`, wraps Codex CLI, Claude Code, and Grok Build CLI as detached coding subagents behind one small, agent-first CLI.

## Why this over `codex exec` directly

Three things you don't get from spawning a raw coding CLI in a loop:

1. **A stuck run comes back as state, not silence.** A watchdog reaps true hangs, and when a worker needs input it surfaces as an explicit `awaiting_reply` instead of dying quietly in a log. The orchestrator polls attention-first: `awaiting_reply` / `failed` / `stalled` sort to the top.
2. **Three backends, one interface.** Codex CLI (`codex exec --json`), Claude Code (`claude -p --output-format stream-json`), and Grok Build CLI (`grok --prompt-file…
