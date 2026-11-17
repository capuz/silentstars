---
repo: "erorplex/claude-desktop-profiles-macos"
name: "claude-desktop-profiles-macos"
description: "Several Claude accounts in one Claude Desktop app on macOS: switch from the menu bar, Code-tab sessions carry over, import CLI/VS Code sessions"
readmeQualityOk: true
url: "https://github.com/erorplex/claude-desktop-profiles-macos"
language: "Python"
languages: ["Python"]
languagePcts: [74]
topics: ["claude", "claude-code", "claude-desktop", "macos", "menubar"]
stars: 7
forks: 6
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-09-11T17:19:37Z"
lastCommitAt: "2026-11-17T14:46:02Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 80
undervaluedScore: 45
maintainers: ["erorplex", "iamarsenibragimov", "floze-the-genius"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd014bf0ab9fb4483b20eef71ce334a95b69ce0c826fb839f2eb021e456e8764/erorplex/claude-desktop-profiles-macos"
---

# Profiles for Claude Desktop (macOS)

Use several Claude accounts in **one** Claude Desktop app — switch from the menu bar instead of signing out and back in. Your Claude Code sessions (the *Code* tab) follow you to whichever account is active.

> Unofficial. Not affiliated with or endorsed by Anthropic. It works by moving the app's data directory around, so an app update that changes the internal layout may break it — see [Caveats](#caveats).

## Why

Claude Desktop knows exactly one sign-in at a time. If you keep a personal account and a work account (or one per client), every switch means sign out → sign in → lose your place. This tool gives the app *profiles*, the way Chrome and Slack have them:

- **One app in the Dock.** No second copy of Claude, no `--user-data-dir` juggling.
- **Menu bar switcher.** Shows the active profile and its usage; click another profile to switch. The app relaunches in about ten seconds.
- **Code-tab sessions carry over.** Every profile sees the same session list, so you can continue a session under a different account.
- **Import old sessions.** Sessions you started in the Claude Code CLI or the VS Code extension can be added to the app's sidebar.…
