---
repo: "kaffeine1/telegram-amiga"
name: "telegram-amiga"
description: "Cross-platform Telegram client bootstrap for AmigaOS 3.x, MorphOS, AmigaOS 4 and AROS"
readmeQualityOk: true
url: "https://github.com/kaffeine1/telegram-amiga"
language: "C"
languages: ["C"]
languagePcts: [97]
stars: 13
forks: 2
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-05-08T04:32:18Z"
lastCommitAt: "2026-07-05T06:32:28Z"
lastReleaseAt: "2026-06-24T04:49:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 50
maintainers: ["kaffeine1"]
openGraphImageUrl: "https://opengraph.githubassets.com/e29a1740e64996f0b446251b6bac29d63dc1195d9dac10d1311aaea0b16bb91b/kaffeine1/telegram-amiga"
---

# Telegram Amiga

A from-scratch, native **MTProto Telegram client** for Amiga-family systems —
log in with a normal Telegram account, list your chats and exchange messages.
**Zero external dependencies**: no MUI, no ixemul, no AmiSSL. All the
cryptography (RSA, Diffie-Hellman, SRP/2FA, AES, SHA) is built in.

Two front-ends share one engine:

- **TelegramGUI** — a native Intuition/GadTools GUI: chat list with persistent
  unread badges, conversation view, scrollbars (wheel, knob drag, arrow keys,
  pixel scroll), scroll-to-top history paging, click-to-compose with multi-line
  wrap, online chat search, drag-and-drop reorder and remove, live receive,
  "&lt;name&gt; is typing", read receipts. A double-click starts it with no
  flashing console (flashless Workbench launch). Drawn by the client itself on a
  RastPort.
- **TelegramTUI** — a full-screen text/console client for low-end and
  mouse-less setups.

Status: **alpha 0.0.4** — everyday direct-message and group chat works on all
five platforms below. 0.0.4 adds edit & delete of your own messages (via the
right-click context menu, which now highlights the hovered item), live read
receipts (the two blue ticks flip in real time),…
