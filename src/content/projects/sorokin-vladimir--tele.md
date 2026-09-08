---
repo: "sorokin-vladimir/tele"
name: "tele"
description: "Keyboard-first Telegram client for the terminal, written in Go"
readmeQualityOk: true
url: "https://github.com/sorokin-vladimir/tele"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["go", "keyboard-driven", "telegram", "telegram-client", "tui", "tele", "cli", "cross-platform", "golang", "linux"]
stars: 197
forks: 24
openIssues: 77
closedIssues: 174
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-05-08T20:29:19Z"
lastCommitAt: "2026-09-08T08:16:53Z"
lastReleaseAt: "2026-05-17T08:20:57Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 26
maintainers: ["sorokin-vladimir", "chrisfinazzo"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bab8079b5eaf61b0b51c1d09625aaf7f9ca387a58a6078e0f673d692a982e88/sorokin-vladimir/tele"
---

# tele

```
  _            _
 | |_    ___  | |   ___
 | __|  / _ \ | |  / _ \
 | |_  |  __/ | | |  __/
  \__|  \___| |_|  \___|
```

> A terminal-native Telegram client built for keyboard-driven workflows.

</p>

---

> **Status:** Active development - already usable for daily messaging (private chats, groups, replies, reactions, forwarding, drafts). Some Telegram features are still in progress.

---

## Why `tele`?

Telegram Desktop, the web client, and mobile apps are designed around mouse-first interaction.

If you live in the terminal - using tools like Neovim, yazi, k9s, or tmux - switching to a GUI messenger breaks your flow.

`tele` keeps you in the terminal.

It is built for:

- keyboard-driven navigation
- fast chat switching
- SSH / remote workflows
- distraction-free messaging

If tools like lazygit feel natural to you, `tele` will too.

It also runs lean - typically ~50MB RSS at idle vs several hundred MB for desktop clients.

---

| Feature              | `tele`                  | Telegram Desktop | Web        |
| -------------------- | ----------------------- | ---------------- | ---------- |
| Terminal-native      | ✅                      | ❌               | ❌…
