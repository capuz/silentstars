---
repo: "yousan/c-lord"
name: "c-lord"
description: "C-lord: Discord frontend for Claude Code with thread-based session management"
readmeQualityOk: true
url: "https://github.com/yousan/c-lord"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 33
closedIssues: 668
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-22T13:29:58Z"
lastCommitAt: "2026-11-12T05:37:50Z"
lastReleaseAt: "2026-06-10T02:14:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 98
undervaluedScore: 63
maintainers: ["yousan"]
openGraphImageUrl: "https://opengraph.githubassets.com/95d72c959f70d9a959a348ebfeb5d9691d4424c6f381f80a47b7bf95a5283bab/yousan/c-lord"
---

# c-lord

**Run multiple Claude Code sessions in parallel from Discord — each thread in its own git clone, so sessions never share a working tree.**

c-lord turns a Discord server into the control room for the Claude Code sessions running on your own machine. Give each task its own thread, walk away, and check on all of them from your phone, laptop, or terminal — nothing gets cut off, and everything that happened stays in the thread.

## Why c-lord

- 🎛️ **Discord becomes the control room for many Claude Code sessions.** One thread is one real, interactive Claude Code running in tmux on your machine — the same thing you'd use in a terminal. Drop files into the thread and Claude gets them; files Claude makes come back as attachments. Want the keyboard? `tmux attach` to that very session.
- ⏳ **No time limit.** A long job is never stopped for taking long. c-lord only gives up on a turn when Claude's screen has been frozen for 5 minutes, and even then it doesn't kill Claude.
- 🧪 **A whole separate workspace per thread.** Each thread works in its own clone of your repo, so it can run its own backend and frontend together, and its own `docker compose` stack, without touching another…
