---
repo: "tonyliuzj/email-node"
name: "email-node"
description: "A simple, modern disposable email web app built with Next.js, Tailwind CSS, and SQLite."
readmeQualityOk: true
url: "https://github.com/tonyliuzj/email-node"
homepage: "https://emailno.de"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [85]
topics: ["nextjs", "tailwindcss", "temp-email", "temp-mail", "tempmail"]
stars: 6
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-05-19T13:06:34Z"
lastCommitAt: "2026-10-29T10:37:11Z"
lastReleaseAt: "2025-06-16T21:40:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 45
undervaluedScore: 48
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5b1120d4a49c36a88ae539d9c706319d3ee71046f175be22fced7efb46d2f99d/tonyliuzj/email-node"
---

# Email Node — IMAP Webmail UI

A modern, self-hosted IMAP webmail UI with an inbox address system. Email Node does not send, receive, relay, or host mail by itself; it connects to catch-all IMAP mailboxes you already control, lets visitors create persistent inbox addresses on configured domains, and provides a browser inbox for reading matching messages.

---

## Features

- **Inbox Address System**
  Create persistent inbox addresses with secure passkey authentication. Users can log back in anytime to access mail delivered to that address.

- **Multi-Domain Support**
  Configure multiple domains backed by catch-all IMAP mailboxes. Users can choose from available domains when creating addresses.

- **IMAP Webmail Inbox**
  Polls IMAP on a configurable interval. View sender, subject, and message preview, then click to read full emails with sanitized HTML rendering. Images from the internet are blocked until the reader clicks **Load images**, so senders cannot track who opened a message.
  - **Attachments** are listed on each message and download with their real name and exact contents. Pictures that are part of a message (logos, signatures) are shown in it.
  - Messages can be…
