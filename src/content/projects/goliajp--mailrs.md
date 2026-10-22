---
repo: "goliajp/mailrs"
name: "mailrs"
description: "AI-native mail server — SMTP/IMAP in Rust + React web UI"
readmeQualityOk: true
url: "https://github.com/goliajp/mailrs"
language: "Rust"
languages: ["Rust"]
languagePcts: [60]
topics: ["email", "imap", "mail-server", "postgresql", "react", "rust", "smtp"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-03-02T04:48:00Z"
lastCommitAt: "2026-10-22T08:52:39Z"
lastReleaseAt: "2026-05-28T00:51:08Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 66
maintainers: ["doracawl"]
openGraphImageUrl: "https://opengraph.githubassets.com/cad941d56f5081069b7904ed2f043c2114a0dc2fd2361660f9e403d2568d2bc9/goliajp/mailrs"
---

# mailrs

A mail server written in Rust, with a React web client and iOS and Android
apps. It handles SMTP in and out, IMAP, POP3, JMAP, ManageSieve and
CalDAV/CardDAV, and exposes a REST API and an MCP server for agents.

## Architecture

Production runs four processes from one image beside a `kevy-server`:

| process | role |
|---|---|
| `mailrs-receiver` | SMTP on 25, 465 and 587; the inbound pipeline (rate limits, DNSBL, greylisting, SPF/DKIM/DMARC/ARC, Bayes, fraud rules); writes accepted mail to a spool |
| `mailrs-fastcore` | Owns the mailbox: drains the spool, applies Sieve, delivers to Maildir, threads and indexes; IMAP, POP3 and ManageSieve; the core API the others call |
| `mailrs-webapi` | REST, JMAP, CalDAV/CardDAV, OIDC sign-in, MCP and the realtime WebSocket; serves the web client |
| `mailrs-fastcore-sender` | Outbound delivery: DKIM signing, MX and STARTTLS, MTA-STS, retries and DSNs |

There is no SQL database in that stack. Message metadata lives in an
embedded [kevy](https://github.com/goliajp/kevy) store inside fastcore,
state the processes share lives in `kevy-server`, and mail bodies are
Maildir files.

The workspace has 70 crates. Most of them are libraries…
