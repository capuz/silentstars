---
repo: "yeisonrestrepo/code-conductor"
name: "code-conductor"
description: "A governance layer for Claude Code sessions: hooks that check an agent's commands before they run, a spec-first workflow, and project memory the next session reads."
readmeQualityOk: true
url: "https://github.com/yeisonrestrepo/code-conductor"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [94]
topics: ["agentic-development", "claude", "claudecode", "skills", "spec-driven-development", "ai-agents", "claude-code", "claude-code-hooks", "cli", "developer-tools"]
stars: 18
forks: 0
openIssues: 26
closedIssues: 37
watchers: 2
contributors: 4
recentReleases: 6
createdAt: "2026-05-01T16:47:05Z"
lastCommitAt: "2026-11-13T18:35:56Z"
lastReleaseAt: "2026-10-02T15:41:36Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 92
undervaluedScore: 47
maintainers: ["cc-lane-bot[bot]", "cc-reviewer-bot", "Ludocius"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2e7729ea8c13b2be93489ef6f02743c24f02306b859394f82a2b4e369d6087a/yeisonrestrepo/code-conductor"
---

# code-conductor

**Make Claude Code work like a senior engineer, not an enthusiastic intern.**

code-conductor is a drop-in governance layer for [Claude Code](https://www.anthropic.com/claude-code): slash commands, hooks, guardrails, and a persistent memory system that turn free-form AI coding sessions into a disciplined, repeatable engineering workflow. What an agent may run is checked before it runs, what it decided is written where the next session will read it, and what shipped is asserted against the record by instruments that run in CI. It cuts token usage along the way.

One command to install: `npx @yeison.restrepo.r/code-conductor@latest --project`. No code changes to your project. Works with any stack. And every claim below is checkable against a commit in this repository.

---

## Why this exists

If you have used Claude Code for more than a week, you have probably seen all of this:

- **It reads entire files, or entire codebases, to answer a one-line question.** Every one of those reads burns tokens and fills the context window with noise.
- **It forgets everything between sessions.** The conventions you explained yesterday, the architectural decision from last…
