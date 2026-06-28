---
repo: "crisnahine/chameleon"
name: "chameleon"
description: "Claude Code plugin that learns your repo's conventions and shows the model a real example from your own code before each edit, so AI-generated code matches your style on the first try. TypeScript, Ruby, and Python."
url: "https://github.com/crisnahine/chameleon"
homepage: "https://www.claudepluginhub.com/plugins/crisnahine-chameleon"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["archetype", "ast-analysis", "claude-code", "claude-plugin", "code-conventions", "code-style", "developer-tools", "linter", "mcp", "mcp-server"]
stars: 7
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-05-10T09:08:56Z"
lastCommitAt: "2026-06-28T02:01:38Z"
lastReleaseAt: "2026-05-21T00:00:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 70
maintainers: ["crisnahine", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f0c7476842d81be213587c39afb3b21a87959b8f9a54bcabae596ccdbf43bb6f/crisnahine/chameleon"
---

# chameleon

> *"Code that blends in."*

**Your AI writes code that works. It just doesn't write code that looks like yours.**

It reaches for `axios` when your team standardized on `@/lib/http` six months ago. It hand-rolls a date format when `fmt()` already exists. It builds a service that ignores the base class every other service in the repo extends. The code passes. The diff is wrong. And you find out in review, every single time, because the model never saw how *your* repo does it.

Chameleon fixes that before the model writes a line.

---

## The one thing it does

Before Claude edits a file, chameleon hands it context drawn straight from your own codebase:

1. **A real example file** of the same kind it's about to write (the "canonical witness"), derived automatically when you profile the repo.
2. **Your team's idioms** for that kind of file (the wrapper to use, the import that's banned, the guard that's mandatory), as you teach them or let chameleon auto-derive them.
3. **The anti-pattern to avoid**, quoted from a real off-pattern line in your repo and labeled "do NOT write it this way," once your team has taught a competing import.

Here is the full first-touch block the…
