---
repo: "sunososobro-hub/claude-octopus"
name: "claude-octopus"
description: "🐙 Token-frugal session memory & usage tracking for Claude Code — curated nap/wake handoff instead of full-session resume, plus real 5h/7d rate-limit tracking."
readmeQualityOk: true
url: "https://github.com/sunososobro-hub/claude-octopus"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-08-20T03:08:59Z"
lastCommitAt: "2026-09-13T08:27:13Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 33
maintainers: ["alonsohsu-blip"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0c5deee7a79dd121ff10b28757b37fefcd591e49fec965b48be585993c7afa6/sunososobro-hub/claude-octopus"
---

# oct-toolkit

Token-frugal session memory and usage tracking for Claude Code.

## When to use it

Short version: it makes Claude Code remember things the way a person would,
without getting more expensive the longer you use it.

- **Starting work for the day** → `/oct-wake`: picks up yesterday's note
  instead of re-reading the whole old conversation (which costs a lot more).
- **Mid-task, context getting fat, or stepping away for a bit** →
  `/oct-nap`, then `/clear`: writes a ~1-2k word note, clears, `/oct-wake`
  picks it back up next time.
- **"Didn't I run into this before?"** → `/oct-wake <keyword>`: searches
  checkpoints and long-term memory together — no need to remember which
  pool something lives in.
- **Wrapping up for the day** → `/oct-sleep`: writes the note and
  consolidates memory in one shot. In a multi-window day, run this only in
  the last window you close; the others just `/oct-nap`.
- **Wondering what you've spent** → the status bar (turned on by
  `/oct-pulse`) shows it live; for a detailed breakdown, or to check
  whether you have any wasteful habits, use `/oct-checkup`.
- **Not sure the conclusion you just reached is right** → `/oct-consult`:
  a clean…
