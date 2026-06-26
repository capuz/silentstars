---
repo: "vul-os/lilmail"
name: "lilmail"
description: "lil-mail: A minimalist Go email client with basic IMAP/SMTP support. Simple web UI for reading and sending emails - nothing fancy, just the essentials."
url: "https://github.com/vul-os/lilmail"
language: "Go"
languages: ["Go"]
languagePcts: [65]
topics: ["binary", "client", "email", "executable", "imap", "mail", "smtp", "web", "webmail", "webmail-client"]
stars: 36
forks: 9
openIssues: 0
closedIssues: 4
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2024-11-07T19:53:55Z"
lastCommitAt: "2026-06-26T23:24:06Z"
lastReleaseAt: "2026-06-22T21:17:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 56
maintainers: ["imranparuk"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/885015172/2649cb2c-5c9a-4792-bf41-a7fe164dfd1c"
---

**A lightweight, database-free webmail client in a single Go binary.**

<sub><img src="docs/assets/vulos-logo.png" height="14" alt="VulOS"> Part of <strong><a href="https://vulos.org">VulOS</a></strong> — the open, self-hostable web OS &amp; app suite. Runs standalone, or combined under one login by <a href="https://vulos.org">Vulos Workspace</a>.</sub>

<br>

</div>

---

## What is lilmail?

lilmail is a self-hostable webmail client that connects to any IMAP/SMTP
mailbox and ships as **one self-contained Go binary**. The UI is server-rendered
HTML (Go templates + HTMX + Alpine.js) with every frontend asset embedded via
`embed.FS` — no build step, no CDN, and no external services to run by default.
Drop the binary next to a `config.toml` and it runs, comfortably, on 64 MB of RAM.

Log in with a classic username/password or **OAuth2 / OpenID Connect** (full
PKCE flow with XOAUTH2 and OAUTHBEARER SASL and automatic token refresh).
Everything beyond core mail — CalDAV calendar, CardDAV contacts, an AI mail
assistant, real-time notifications, Web Push, and multi-account support — is
opt-in via config keys and adds zero overhead when disabled.

## Part of VulOS…
