---
repo: "maximilientyc/wts"
name: "wts"
description: "Git worktree + tmux session launcher for parallel Claude Code agents"
readmeQualityOk: true
url: "https://github.com/maximilientyc/wts"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["claude-code", "cli", "git-worktree", "tmux", "tmuxinator", "zsh"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-09-13T19:02:22Z"
lastCommitAt: "2026-10-03T22:04:50Z"
lastReleaseAt: "2026-09-20T17:32:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 49
maintainers: ["maximilientyc"]
openGraphImageUrl: "https://opengraph.githubassets.com/b56c77d206fc3f276778de939983dcf233449d36edf0928d01a1397cdf1c457a/maximilientyc/wts"
---

# wts — worktree sessions for parallel coding agents

`wts` creates a git worktree and a tmux session on it in one command, from a
layout you pick — by default an editor next to a Claude Code pane. It is made for
running several agents on the same repository at once without them stepping on
each other, and for finding your way back afterwards:

- **Survives reboots.** Every session is recorded as *(name, layout, context)* in a
  small SQLite database, so `wts restore` rebuilds them all — worktrees survive a
  reboot, tmux does not.
- **Lets the agents know about each other.** Each Claude Code agent started in a
  wts session is told which other sessions are running and what they are on, and
  can query the shared state and leave notes for the others (`wts db`).
- **Shows what each agent is doing, and since when.** `wts ls` and the fzf
  switcher (`prefix+s`) tell you which Claude Code agent is blocked, idle or
  working, for how long, and on what question — from the agent's own hooks —
  with a stale guard that catches agents claiming to work on a frozen pane.
- **Tells you when one needs you.** A bell on the pane and a banner naming the
  session when an agent waits for a…
