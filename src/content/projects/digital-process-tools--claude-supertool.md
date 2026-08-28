---
repo: "Digital-Process-Tools/claude-supertool"
name: "claude-supertool"
description: "Batched file operations for autonomous Claude Code runs. Collapses N reads/greps/globs into one Bash round-trip — fewer output tokens, less cache growth, less wall time."
readmeQualityOk: true
url: "https://github.com/Digital-Process-Tools/claude-supertool"
homepage: "https://github.com/Digital-Process-Tools/claude-marketplace"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["ai", "anthropic", "batch-operations", "claude", "claude-code", "cli", "developer-tools", "file-operations", "mcp", "plugin"]
stars: 16
forks: 2
openIssues: 100
closedIssues: 977
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-04-16T19:24:17Z"
lastCommitAt: "2026-08-28T12:23:52Z"
lastReleaseAt: "2026-08-08T17:56:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 56
maintainers: ["fdaviddpt"]
openGraphImageUrl: "https://opengraph.githubassets.com/bc3b656b75eddc9897c7d9222dc7e23479b83db4b58fcc99a822567a52dcd78b/Digital-Process-Tools/claude-supertool"
discussionCount: 0
---

</p>

# supertool

> **Cut your Claude Code bill by 50%.**
> `git-status`, but it tells you what to do next.

Saves tokens. Saves money. Saves turns. Works the same in interactive sessions and autonomous runs — humans pair-programming with Claude Code use it every day, not just Kevin-style headless agents. One Python file, zero deps, Python 3.9+.

[Why](#why) • [Why I built this](#why-i-built-this) • [Four pillars](#four-pillars) • [Receipt](#receipt--the-bulldozer-math) • [Batching](#batch-multiple-ops-in-one-call) • [Parallel](https://github.com/Digital-Process-Tools/claude-supertool/blob/HEAD/docs/configuration.md#parallel-execution) • [Input forms](#input-forms) • [Validators](#validators--squiggle-on-save-for-the-llm) • [Expand it](#supertooljson--project-configuration) • [Install](#install)

```bash
# 7 ops, 1 round-trip, parallel where safe
supertool 'read:src/Module.py' 'read:src/Auth.py' 'grep:TODO:src/:20' 'map:src/'
```

---

## Why

**Hammer in 2026.** Claude Code's default toolbelt is 1995 unix: `cat` one file, `grep` one pattern, `git status` returns 200 bytes of porcelain. Every tool call re-sends the entire conversation cache — system prompt, CLAUDE.md, rules,…
