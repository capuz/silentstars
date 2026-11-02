---
repo: "caaarlxs/agent-center"
name: "agent-center"
description: "A local board for every Claude Code session in the Claude desktop app: what each one waits for, and the controls to answer, wake, stop and tidy them up."
readmeQualityOk: true
url: "https://github.com/caaarlxs/agent-center"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-22T14:17:40Z"
lastCommitAt: "2026-11-02T11:34:04Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 51
maintainers: ["caaarlxs"]
openGraphImageUrl: "https://opengraph.githubassets.com/f13873c5c5b9b1e9dc8f7670f3f0e68378993c85337795a2ba7c3f6bade63321/caaarlxs/agent-center"
---

# Agent Center

A local board for every Claude Code session running in the Claude desktop app on your Mac:
which ones are asking you something, which finished, which are still working — and the
controls to answer, steer and tidy them up without hunting through windows.

It runs on your Mac only. It reads the files Claude Code already writes, talks to your
sessions through a small Claude Code mod, and keeps its own state in a folder of its own.

## What it does

- **Three views of your sessions.** **Inbox** (`1`): a list grouped by state. **Board** (`2`):
  the same sessions in columns — Asking you, To review, Working, Pending, Later, Done — with
  drag and drop, and lanes per repo (`G`). **Canvas** (`3`): cards you place anywhere,
  with named zones (fold one into a folder that says what its sessions wait for; drop a card
  on it to add it), sticky notes (also attached to cards, with checklists), zoom,
  multi-select and a Done strip at the bottom (what does not fit waits behind "+N more").
- **Files** Claude shows you, as in Claude desktop's side panel: a file it sends is a chip in the
  conversation, a path it names is a link, and the **Files** tab lists what the session sent,…
