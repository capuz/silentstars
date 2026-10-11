---
repo: "EvanZhang008/open-walnut"
name: "open-walnut"
description: "Claude Code on your laptop and remote dev boxes, in one web page. Sessions keep running when SSH drops (no tmux), each session's changes get their own diff, plus tasks, notes, and memory. Self-hosted."
readmeQualityOk: true
url: "https://github.com/EvanZhang008/open-walnut"
homepage: "https://openwalnut.dev"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["ai-agent", "ai-productivity", "claude", "claude-code", "cli", "developer-tools", "knowledge-management", "llm", "local-first", "nodejs"]
stars: 33
forks: 9
openIssues: 3
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 8
createdAt: "2026-02-24T01:55:43Z"
lastCommitAt: "2026-10-11T09:30:18Z"
lastReleaseAt: "2026-10-07T17:09:12Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 49
maintainers: ["EvanZhang008", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1165269890/3ee0a565-a90e-4613-ac12-79e33415a63f"
---

# Open Walnut

Open Walnut runs Claude Code on your laptop and on your remote dev boxes, and shows
every session in one web page. A small daemon on each host owns the `claude`
processes, so a session on a dev box keeps working when your SSH connection drops or
your laptop sleeps. No tmux. Walnut installs that daemon over SSH for you, and each session gets
its own diff of every file it changed.

Next to the sessions sit your tasks, notes, and long-term memory, and a personal AI
that can plan work, find context, and start sessions for you. Open Walnut is
self-hosted, local-first, and has no telemetry.

## What Open Walnut Does

- **Personal AI**: Ask Walnut to manage tasks, find information, write and search
  notes, start coding sessions, and run scheduled routines.
- **Claude Code workspace**: Run and monitor multiple Claude Code sessions side by side
  with live output, permission controls, terminals, files, and session history.
- **Local and remote sessions**: Use the same web app for sessions on your laptop and
  any configured SSH host.
- **Durable sessions**: Sessions keep running across browser disconnects, dropped SSH
  connections, and Walnut server restarts.
- **Change…
