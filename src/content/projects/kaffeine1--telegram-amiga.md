---
repo: "kaffeine1/telegram-amiga"
name: "telegram-amiga"
description: "Cross-platform Telegram client bootstrap for AmigaOS 3.x, MorphOS, AmigaOS 4 and AROS"
readmeQualityOk: true
url: "https://github.com/kaffeine1/telegram-amiga"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 14
forks: 2
openIssues: 4
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-08T04:32:18Z"
lastCommitAt: "2026-07-19T06:13:41Z"
lastReleaseAt: "2026-06-24T04:49:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 47
maintainers: ["kaffeine1"]
openGraphImageUrl: "https://opengraph.githubassets.com/b8f86d7e015d0c156f4f22b9ab1efc02398b31f909598e4559b83da19e86cd76/kaffeine1/telegram-amiga"
---

# Telegram Amiga

A from-scratch, native **MTProto Telegram client** for Amiga-family systems —
log in with a normal Telegram account, list your chats and exchange messages.
**Zero external dependencies**: no MUI, no ixemul, no AmiSSL. All the
cryptography (RSA, Diffie-Hellman, SRP/2FA, AES, SHA) is built in.

Two front-ends share one engine:

- **TelegramAmiga** — a native Intuition/GadTools GUI: chat list with real
  avatars and persistent unread badges, conversation view, scrollbars (wheel,
  knob drag, arrow keys, pixel scroll), scroll-to-top history paging,
  click-to-compose with multi-line wrap, online chat search, drag-and-drop
  reorder and remove, live receive, "&lt;name&gt; is typing", read receipts,
  file sharing and a pinned Saved Messages chat. A double-click starts it with
  no flashing console and no launcher script. Drawn by the client itself on a
  RastPort.
- **TelegramAmiga-TUI** — the text/console client, at home on a 68030 with a
  serial console: same engine, launched from the second icon.

Status: **alpha 0.0.6** — everyday direct-message and group chat works on all
five platforms below. 0.0.6 adds file sharing (download any received file,
send files up to…
