---
repo: "basilelt/overseer"
name: "overseer"
description: "Run and supervise your AI coding agents side by side, locally or on a server over SSH"
readmeQualityOk: true
url: "https://github.com/basilelt/overseer"
language: "Rust"
languages: ["Rust", "TypeScript"]
languagePcts: [46, 37]
stars: 6
forks: 1
openIssues: 10
closedIssues: 8
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-11-05T02:00:04Z"
lastCommitAt: "2026-11-06T12:17:06Z"
lastReleaseAt: "2026-11-05T11:15:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 89
undervaluedScore: 55
maintainers: ["basilelt", "dmpvost"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b4e1e7ae0062dfade0f40f52ef45e395e7ddf89c9c96e448e5d7a48f41bb9c3/basilelt/overseer"
---

on this machine or on a server over SSH, with their terminals, tasks and reviews in one place.

Overseer is a desktop app (Linux, macOS, Windows), a phone and tablet app (Android, iOS) and a small
daemon. It works with Claude Code, Codex, Gemini CLI, Antigravity, opencode, Amp, Copilot CLI and
Cursor Agent. Each agent session is a **line**: one agent, in one worktree, on one machine, for
one owner. The daemon owns the terminals, so closing the app, losing Wi-Fi or putting the laptop
to sleep stops nothing; open the app again and every session is where you left it.

New here? Install the app, open it, and take the tour: it shows each part of the window in about
a minute. You can replay it any time from Settings → Help.

## Features

### Every agent in one window

Workspaces group sessions by project. Each session opens in a tab with its live terminal, and
the side panel shows what the agent is doing: last message, work log, todos, edited files and
changes. Switch to **By status** to see at a glance who needs your input, who is running and who
is done. Agent tabs also have a **Chat** view rebuilt live from the agent's session file.
Terminals can optionally be drawn on the GPU with…
