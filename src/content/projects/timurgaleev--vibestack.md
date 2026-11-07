---
repo: "timurgaleev/vibestack"
name: "vibestack"
description: "Sixty commands for AI coding assistants — /office-hours to shape an idea, /review before you merge, /ship to open the PR — plus the standing rules they assume. One install covers Claude Code, Cursor, Kiro and Codex CLI. Plain bash, MIT, no telemetry."
readmeQualityOk: true
url: "https://github.com/timurgaleev/vibestack"
language: "TypeScript"
languages: ["TypeScript", "Shell"]
languagePcts: [45, 43]
topics: ["agent-skills", "ai-agents", "claude-code", "cursor-ide", "developer-tools", "kiro", "mcp", "prompt-engineering", "slash-commands"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-04-24T12:48:21Z"
lastCommitAt: "2026-11-07T09:29:47Z"
lastReleaseAt: "2026-05-18T17:49:28Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 47
maintainers: ["timurgaleev"]
openGraphImageUrl: "https://opengraph.githubassets.com/e623823358bd352bf945de16e185a64ce55810c81389e0698d62db66566cc43f/timurgaleev/vibestack"
---

# vibestack

---

## What is vibestack?

Sixty commands for AI coding assistants, each one a file your agent reads and
exposes by name. You type `/review` instead of "check my code," and a written
process runs: read the diff, look for the things that actually break, report with
evidence. Same for planning, debugging, security, shipping.

It also installs the standing rules those commands assume — plan before coding,
never commit without being asked, write commits in the author's voice — so the
assistant behaves that way between commands too.

Works in Claude Code, Cursor, Kiro, Codex CLI and GitHub Copilot CLI from one
source. MIT, no
telemetry, no account, no cloud service of its own. Some commands do reach out
by design — `/codex` sends your diff to a second model, `/telegram`
sends messages as you, `/pair-agent` opens a tunnel — and each says so before it
runs.

| What you get | Why it matters |
|---|---|
| A command per job, not a prompt per job | The process is written down once and runs the same way every time |
| A second pass before you ship | `/review` runs an adversarial pass in a fresh context, and a genuine second model when the Codex CLI is installed — it says which…
