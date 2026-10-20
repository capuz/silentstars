---
repo: "karatektus/pl_mail"
name: "pl_mail"
description: "Self-hosted, Gmail-style mail client. Multi-account IMAP, threaded conversations, real-time push via IMAP IDLE + Mercure. Built with Symfony, FrankenPHP, Hotwire Turbo. Clone and docker compose up."
readmeQualityOk: true
url: "https://github.com/karatektus/pl_mail"
language: "PHP"
languages: ["PHP"]
languagePcts: [69]
stars: 378
forks: 29
openIssues: 37
closedIssues: 66
watchers: 2
contributors: 8
recentReleases: 7
createdAt: "2026-07-02T11:13:44Z"
lastCommitAt: "2026-10-20T08:49:20Z"
lastReleaseAt: "2026-10-20T06:49:07Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 90
undervaluedScore: 27
maintainers: ["karatektus", "Flouss", "phdelodder"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7beffab825dbd3bd219c7684b2a88f649b0fe24d6bd31e3a85c0f1b8f0bf5d3/karatektus/pl_mail"
fundingLinks: ["GITHUB:https://github.com/karatektus"]
discussionCount: 3
---

# plMail

Self-hosted mail with a calendar beside it. Connect the mailboxes you already have — IMAP, Gmail,
Outlook — and read them side by side in one inbox, on a server you own.

### 📖 [Read the handbook →](https://karatektus.github.io/pl_mail/docs/)

Installing on Docker, Linux, WSL2, macOS or a NAS · every feature in detail · connecting Gmail and
Outlook, with the exact permissions to tick · how the internals work.
Also on the [wiki](https://github.com/karatektus/pl_mail/wiki) and in [`docs/`](https://github.com/karatektus/pl_mail/blob/HEAD/docs/) — all three
are built from the same files.

### 📱 Apps for your phone

- **Android** — [karatektus/pl_mail_android](https://github.com/karatektus/pl_mail_android)
- **iOS** — [karatektus/pl_mail_ios](https://github.com/karatektus/pl_mail_ios)

Both connect to your own plMail server.

---

## What it is

A mail client you host yourself. It connects to the mailboxes you already have — IMAP, Gmail,
Outlook — syncs them into your own PostgreSQL database, and gives them one inbox, one search box and
one set of labels in the browser.

It is **not** a mail server: it doesn't receive mail from the internet or host your domain. Because…
