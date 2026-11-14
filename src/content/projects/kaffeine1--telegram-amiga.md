---
repo: "kaffeine1/telegram-amiga"
name: "telegram-amiga"
description: "Cross-platform Telegram client for AmigaOS 3.x, MorphOS, AmigaOS 4 and AROS"
readmeQualityOk: true
url: "https://github.com/kaffeine1/telegram-amiga"
language: "C"
languages: ["C"]
languagePcts: [96]
stars: 17
forks: 3
openIssues: 2
closedIssues: 10
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-08T04:32:18Z"
lastCommitAt: "2026-11-14T10:47:56Z"
lastReleaseAt: "2026-06-24T04:49:55Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 97
undervaluedScore: 47
maintainers: ["kaffeine1"]
openGraphImageUrl: "https://opengraph.githubassets.com/5e61e74386c27a97c8cdd279a9108a97c4f027c48ae24591c2b9ed67e4c9590c/kaffeine1/telegram-amiga"
fundingLinks: ["PATREON:https://patreon.com/kaffeine1", "KO_FI:https://ko-fi.com/kaffeine1"]
---

# Amigram - Unofficial Telegram Amiga Client

Called TelegramAmiga up to 0.0.99. A native Telegram client for AmigaOS 3,
AmigaOS 4, MorphOS and AROS, written from scratch in C on Telegram's
MTProto protocol. You log in with a normal Telegram account. It needs no
MUI, no ixemul and no AmiSSL: the cryptography is built in.

It uses the Telegram API but is not made by Telegram.

One engine, two clients: a window drawn with Intuition and GadTools, and
a text client for the Shell, which also runs on a plain 68000.

*Amigram 0.5 on MorphOS: a forum group, with its topics in place of the
chat list.*

Status: **beta 0.5** (2026-11-14). Direct chats, groups, channels and the
topics of forum groups work on all six platforms. 0.5 is the first
release with new features since the name changed: topics, search in a
chat and in all chats, the Archive, pinned messages and pinned chats,
drafts, polls, albums, stickers through a WEBP datatype, an ARexx port,
a settings panel and an update notice among them. The whole list is in
[CHANGELOG.md](https://github.com/kaffeine1/telegram-amiga/blob/HEAD/CHANGELOG.md); what comes next is in…
