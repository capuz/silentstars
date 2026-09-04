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
openIssues: 96
closedIssues: 1096
watchers: 2
contributors: 4
recentReleases: 10
createdAt: "2026-04-16T19:24:17Z"
lastCommitAt: "2026-09-04T08:10:24Z"
lastReleaseAt: "2026-08-08T17:56:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 56
maintainers: ["fdaviddpt"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac46489c79440d9d65e3b9842b29ad598863b3fd7e5d1eb87baea7e5176f870d/Digital-Process-Tools/claude-supertool"
discussionCount: 0
---

</p>

# supertool

> **Cut your Claude Code bill by 50%.**
> `git-status`, but it tells you what to do next.

Saves tokens. Saves money. Saves turns. Works the same in interactive sessions and autonomous runs — humans pair-programming with Claude Code use it every day, not just Kevin-style headless agents. Stdlib only, zero deps, Python 3.9+ — a thin launcher (`supertool.py`) delegating to one core module (`_supertool.py`) plus the presets, [validators](https://github.com/Digital-Process-Tools/claude-supertool/blob/HEAD/docs/validators.md), [formatters](https://github.com/Digital-Process-Tools/claude-supertool/blob/HEAD/docs/formatters.md) and [notifiers](https://github.com/Digital-Process-Tools/claude-supertool/blob/HEAD/docs/notifiers.md) you enable per repo.

```bash
# 7 ops, 1 round-trip, parallel where safe
supertool 'read:src/Module.py' 'read:src/Auth.py' 'grep:TODO:src/:20' 'map:src/'
```

---

## From the same workshop

Four plugins, one team, each does one thing. This one and three siblings:

- [claude-remember](https://github.com/Digital-Process-Tools/claude-remember): memory across sessions. Saves, compresses through Haiku, reloads at the next start.
-…
