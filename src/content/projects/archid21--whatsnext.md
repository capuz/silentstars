---
repo: "archid21/whatsnext"
name: "whatsnext"
description: "A shared plan, check-offs and resumable task progress for every coding agent in a project"
readmeQualityOk: true
url: "https://github.com/archid21/whatsnext"
homepage: "https://aivalue.blog/whatsnext"
language: "Python"
languages: ["Python"]
languagePcts: [92]
topics: ["ai-agents", "claude", "claude-code", "claude-code-plugin", "codex", "coding-agents", "developer-tools", "handoff", "project-status", "session-continuity"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 7
createdAt: "2026-11-02T04:52:15Z"
lastCommitAt: "2026-11-19T05:04:43Z"
lastReleaseAt: "2026-11-19T05:04:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 52
maintainers: ["archid21"]
openGraphImageUrl: "https://opengraph.githubassets.com/3af6c2c5dea9c83aaf256f11e1cc026276797aaed08b7618a30926078016f8de/archid21/whatsnext"
---

# whatsnext

**One plan, one next step, for every coding agent.**

whatsnext works in Claude Code, Codex, Gemini CLI, Cursor and any agent that reads `AGENTS.md`. It keeps a plan checklist, check-offs and a short resume note as plain files in your repository, so a new session, or a second agent, starts from where the last one stopped.

**Status: 0.6.0.** See [New in 0.6.0](#new-in-060).

MIT license · Python 3.9+, standard library only · no database, no background process

## Install

Claude Code:

```
claude plugin marketplace add archid21/whatsnext
claude plugin install whatsnext@whatsnext
```

Codex: from a checkout, run `python3 skills/whatsnext/scripts/whatsnext.py install-hooks`, then review the new hooks in Settings > Hooks (desktop) or `/hooks` (CLI). Gemini CLI and Cursor: add `--agent gemini` or `--agent cursor` (writes `~/.gemini/settings.json` or `~/.cursor/hooks.json`; `--project` for the repo; `--dry-run` and `--undo` work the same).

## Key steps

1. Say **"set up whatsnext in this repo"** and make a plan.
2. Work. Say **"wrap up"** before you step away or clear the chat.
3. Come back and say **"what's next?"**. You pick up where you left off.
