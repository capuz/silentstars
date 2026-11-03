---
repo: "songkeys/cc-same"
name: "cc-same"
description: "Keep Claude Desktop's local sessions identical across all your accounts. Desktop app (macOS, Windows, Linux) and CLI."
readmeQualityOk: true
url: "https://github.com/songkeys/cc-same"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["claude", "claude-code", "claude-desktop", "gpui", "rust", "sync"]
stars: 50
forks: 13
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 4
recentReleases: 10
createdAt: "2026-09-29T03:10:30Z"
lastCommitAt: "2026-11-03T11:14:23Z"
lastReleaseAt: "2026-10-01T14:44:00Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 39
maintainers: ["songkeys", "JevonsCode"]
openGraphImageUrl: "https://opengraph.githubassets.com/f77de87f5dcb369eaf59471713ed2dc9a969cef5dabd92613fb3c9aecf32958c/songkeys/cc-same"
---

Keep Claude Desktop's local sessions identical across all your accounts.<br>
  Sign out, sign in with another account, and everything is still there.

  &nbsp;

## Why

Claude Desktop keeps a separate list of local Code sessions for every account and organization.
Switch accounts and the sidebar is empty, even though every conversation is still on disk in
`~/.claude/projects`. CC Same keeps every account's list in step: sessions, titles, archive
state, deletions, scheduled tasks and task suggestions. Whichever account you sign in to looks the same.

It works on **macOS**, **Windows** and **Linux** (unofficial Linux builds of Claude Desktop), and
comes as a small desktop app and a command-line tool. Both share one engine.

## The app

- **One glance.** Each account is a ring; rings that share every session overlap, and one that is
  behind drifts out until it catches up. One sentence says what is going on.
- **One switch.** *Sync in the background* keeps every account identical from login, even with the
  window closed.
- **Menu bar / system tray.** The status, *Sync now* and the background switch are a click away.
  Hide the icon in Settings, and choose whether the app opens…
