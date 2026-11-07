---
repo: "extractumio/terminum"
name: "terminum"
description: "The self-hosted, tmux-native browser IDE for running dozens of coding agents at once, from your desk or your phone."
readmeQualityOk: true
url: "https://github.com/extractumio/terminum"
homepage: "https://terminum.app"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [42, 38]
stars: 10
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-10-16T12:23:44Z"
lastCommitAt: "2026-11-07T22:34:53Z"
lastReleaseAt: "2026-10-19T14:53:22Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 66
maintainers: ["extractumio"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1422127448/5bea2459-7ec9-4265-a105-8db79d5790cc"
---

# terminum

**The self-hosted, tmux-native browser IDE for running dozens of coding agents at once, from your
desk or your phone.**

No app, no account, no vendor relay: terminum runs on your Mac or Linux server, and your devices
reach it over your own network.

## Features

### Local or remote: no difference

- **Same agents:** Claude Code and Codex on your Mac, your Linux server or any ssh host, in one
  session list.
- **Same files:** browse and edit files on any host, no sftp client needed.
- **Same viewer:** JSON as a tree, CSV and TSV as tables; PDF, audio, video and MIDI play in place.
- **Same clipboard:** paste screenshots, drop files (and folders from a Mac's Finder); they land on
  the session's host.
- **Zero server setup:** only tmux needed; reconnects by itself.

### Keep track of every agent

- **Plan and ETA:** the agent keeps its plan via MCP; the list shows its percent done.
- **Kanban:** tasks with severities, owners, comments and files; agents and you move them.
- **Cross-session alerts:** an agent waiting for you shows up in every session.
- **Status at a glance:** working, waiting, done, subagents.

These come with `terminum hooks install` (see [the…
