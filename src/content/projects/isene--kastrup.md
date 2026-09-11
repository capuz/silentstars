---
repo: "isene/kastrup"
name: "kastrup"
description: "Rust unified messaging hub. Feature clone of Heathrow for multi-source email and messaging."
readmeQualityOk: true
url: "https://github.com/isene/kastrup"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 20
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-29T19:06:23Z"
lastCommitAt: "2026-09-11T08:14:47Z"
lastReleaseAt: "2026-04-14T07:23:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 37
maintainers: ["isene"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ebf886a53ba83e6911b44aefbc3eded406f885f641cc0ab9721829ba9d3c9c9/isene/kastrup"
---

# kastrup

**The fast unified messaging hub. Written in Rust.**

   

Unified terminal messaging client. All your email, chat, and feeds in one TUI. Built on [Crust](https://github.com/isene/crust). Feature clone of [Heathrow](https://github.com/isene/Heathrow) rewritten in Rust for speed and single-binary distribution.

## Screenshot

*Unified messaging: threaded RSS feeds (shown), mail, chat, and Workspace in one inbox.*

## Features

- **Multi-source messaging**: Maildir email, RSS/Atom feeds, WeeChat/IRC, Messenger, Instagram
- **4-pane TUI**: source/message list, message content, info bar, and status bar
- **Threading**: flat, threaded, and folder-grouped message views
- **Background sync**: automatic polling with configurable intervals per source
- **Compose/Reply/Forward**: full email composition with editor integration
- **Send later**: `S` in the send review parks the message until its time (`08:00`, `tomorrow 09:00`, `+2h`, `2026-07-28 08:00`). Works for every channel, not just email; scheduled messages sit in the `+` picker where they can be cancelled or edited
- **Inline images**: Kitty protocol image display (V key)
- **Folder browser**: hierarchical Maildir folder…
