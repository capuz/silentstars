---
repo: "momoshub/J.A.R.V.I.S."
name: "J.A.R.V.I.S."
description: "As always, sir, a great pleasure watching you work."
readmeQualityOk: true
url: "https://github.com/momoshub/J.A.R.V.I.S."
homepage: "https://thediligentengineer.com/J.A.R.V.I.S"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [98]
topics: ["ai", "architecture", "engineering", "harness"]
stars: 5
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-11-10T10:59:40Z"
lastCommitAt: "2026-11-15T10:23:46Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 61
maintainers: ["jarvis-at-momos[bot]", "kai-at-momos", "lyluongthien"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1452544193/14ec7223-937a-4d65-8a6a-03ecc1a87ac3"
---

# J.A.R.V.I.S.

Jarvis is a harness of harnesses. Claude Code is already a harness around a model; Jarvis is the harness around Claude Code (or the **Anthropic API**), for now. It keeps the sessions, memory, roles and tool sandbox, schedules work, waits on CI and reviewers, runs background workers, and changes and redeploys its own source. Slack is only where people talk to it: one front end, not what it is. Live streaming replies with a tool-call timeline and an admin dashboard come with it.

The story of how it came to build itself: [J.A.R.V.I.S.](https://thediligentengineer.com/J.A.R.V.I.S.)

The codebase is generic - the bot's identity (name, persona, labels) lives in the database and is edited from the dashboard, so the same code runs any assistant.

## Requirements / platform

- **Bun** (CI pins the version in `.github/workflows/ci.yml`), **git**, the **Claude Code CLI** (`claude`) for the default `claude-cli` brain (or an `ANTHROPIC_API_KEY` with `LLM_PROVIDER=anthropic`), and a Slack workspace where you can install an app. `gh` is needed for the review and self-update features.
- **macOS first.** It is developed and run on a Mac. These parts are Mac-only:
  - **desktop…
