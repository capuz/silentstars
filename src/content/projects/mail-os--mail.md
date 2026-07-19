---
repo: "mail-os/mail"
name: "mail"
description: "A performant & secure SMTP server implementation, designed for self-hosting email infrastructure."
readmeQualityOk: true
url: "https://github.com/mail-os/mail"
language: "Zig"
languages: ["Zig"]
languagePcts: [97]
topics: ["cli", "library", "smtp-server", "zig", "mail-server", "imap", "pop3"]
stars: 8
forks: 1
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 4
createdAt: "2025-10-24T02:33:07Z"
lastCommitAt: "2026-07-19T06:12:30Z"
lastReleaseAt: "2026-07-17T18:47:35Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 69
undervaluedScore: 56
maintainers: ["chrisbbreuer", "glennmichael123"]
openGraphImageUrl: "https://opengraph.githubassets.com/a2b4db9854d75eee6e063d3cc8546bc1ca8d64271884ae704baf90c2183335f9/mail-os/mail"
---

# Mail

A performant and secure mail server implementation written in Zig, designed for self-hosting email infrastructure. Supports SMTP, IMAP, POP3, CalDAV/CardDAV, ActiveSync, and more.

## Features

### Core Protocols

- **SMTP** (RFC 5321): Full ESMTP with SIZE, 8BITMIME, PIPELINING, AUTH (PLAIN, LOGIN), STARTTLS
- **IMAP** (IMAP4rev1): 24 commands, folder management, search, flags
- **POP3**: Standard mailbox retrieval
- **CalDAV/CardDAV**: Calendar and contact sync
- **ActiveSync**: Mobile device sync
- **ManageSieve**: Server-side mail filtering
- **Milter**: Mail filter protocol support

### Enterprise Features

- **Multi-Tenancy**: Complete tenant isolation with four tiers, resource limits, and REST API
- **Cluster Mode**: Leader election, distributed state, automatic failover, health monitoring
- **Machine Learning Spam Detection**: Built-in ML-based spam filtering
- **DKIM/SPF/DMARC/ARC/BIMI**: Full email authentication suite
- **DANE & MTA-STS**: Transport security enforcement
- **ACME**: Automatic certificate management
- **Webhook Notifications**: HTTP POST on incoming mail events
- **WebSocket**: Real-time notifications

### Security & Operations

- Per-IP and…
