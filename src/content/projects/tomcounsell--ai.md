---
repo: "tomcounsell/ai"
name: "ai"
description: "A productive AI coworker that learns, self-improves, and ships work."
readmeQualityOk: true
url: "https://github.com/tomcounsell/ai"
language: "Python"
languages: ["Python"]
languagePcts: [93]
topics: ["ai", "agent-harness", "agentic-workflows", "ai-agent", "autonomous-agent", "claude-code", "llm-agent", "mcp", "telegram"]
stars: 22
forks: 11
openIssues: 130
closedIssues: 1616
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2020-09-08T05:05:28Z"
lastCommitAt: "2026-08-18T04:10:36Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 67
maintainers: ["valorengels", "tomcounsell"]
openGraphImageUrl: "https://opengraph.githubassets.com/3df8598601f0724122839c7bd68c3c2cc0c83547628dc09cb89e1aa9cc684230/tomcounsell/ai"
---

# Valor

An autonomous AI coworker. Not an assistant, not a chatbot — a colleague that owns its own machine and does real work.

## Why Valor?

- **Works where you work.** Receives tasks via Telegram or Email and replies in the same thread — no context switching, no dashboards to check.
- **Ships code end-to-end.** Plans a feature, critiques the plan, writes the code, runs tests, opens a PR, and merges it — without being babysat through each step.
- **Remembers across sessions.** A subconscious memory system injects relevant past decisions and corrections as `<thought>` blocks at exactly the right moment.
- **Fixes itself.** A watchdog + self-healing pipeline restarts on crashes, hibernates on API failures, and escalates to you only when automation can't recover.
- **Extensible by design.** Add a new skill in `.claude/skills/`, wire a tool in `tools/` + MCP, or connect a new comms channel in `bridge/` — the architecture absorbs extensions without surgery.

## What Is This?

Valor wraps agent harnesses (like Claude Code) and bridges them to the comms channels humans actually use (Telegram, Email, LinkedIn, and more). The supervisor assigns work and provides direction. Valor…
