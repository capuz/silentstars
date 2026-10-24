---
repo: "anoguez/styr"
name: "styr"
description: "An agentic IDE: a kanban board that dispatches AI coding agents into embedded terminals, with an MCP server so agents can drive the board."
readmeQualityOk: true
url: "https://github.com/anoguez/styr"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-01T08:20:51Z"
lastCommitAt: "2026-10-24T00:15:04Z"
lastReleaseAt: "2026-10-03T01:58:37Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["anoguez", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3dd49a75123833eb0ce72e77d66dbe847c61665fbeca70bc64e8c86bd18edc2a/anoguez/styr"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/noguez"]
---

# Styr

**An agentic IDE built around a kanban board.** Write tasks, and Styr launches a coding agent (Claude Code
or Codex) on each one in its own terminal tab, often in its own git worktree, and watches them work. Agents move
their own cards as they go: spec, build, review, done.

> _Styr_ (Old Norse, _stýra_): to steer. You set the course; the agents row.

## Why

Running several coding agents at once is mostly bookkeeping: which one is waiting on you, which
branch it is on, what it was asked to do, whether the review has happened. Styr keeps that state on
a board you can see, and in plain files you can read.

- **Tasks are markdown files.** One file per task, with YAML frontmatter. You can edit them in any
  editor, track them in git, and generate them from scripts. The app's database is only a cache.
- **Agents drive the board.** Every prompt tells the agent how to move its task between columns and
  log notes. A bundled MCP server lets agents list, create and update tasks.
- **The prompt follows the column.** A task that needs a spec gets a spec prompt, a task in Backlog
  gets an implementation prompt, and a task in Review gets a fresh reviewer that is not the session…
