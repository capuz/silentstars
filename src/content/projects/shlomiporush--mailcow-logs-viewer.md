---
repo: "ShlomiPorush/mailcow-logs-viewer"
name: "mailcow-logs-viewer"
description: "A modern, self-hosted dashboard for viewing and analyzing mailcow mail server logs."
readmeQualityOk: true
url: "https://github.com/ShlomiPorush/mailcow-logs-viewer"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [57, 36]
topics: ["mailcow", "mailcow-api", "mailcow-dockerized"]
stars: 121
forks: 12
openIssues: 11
closedIssues: 89
watchers: 8
contributors: 3
recentReleases: 0
createdAt: "2025-12-17T17:23:19Z"
lastCommitAt: "2026-09-17T08:51:27Z"
lastReleaseAt: "2026-01-15T01:15:26Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 31
maintainers: ["ShlomiPorush", "P7aM5qzEddT66lE"]
openGraphImageUrl: "https://opengraph.githubassets.com/33358f45c1e236d2fea6e7bdf438e7700a06f4422fd8d6385b97408b2c6c10f0/ShlomiPorush/mailcow-logs-viewer"
---

# mailcow Logs Viewer

A modern, self-hosted dashboard for monitoring, analyzing, and managing your mailcow mail server. Track email delivery, investigate spam, manage quarantine, detect bounce-based abuse, and validate DNS configurations — all from a single interface.

---

## Features

### 📊 Dashboard
- Real-time statistics (24h / 7d / 30d) — messages, spam, bounces, auth failures
- Container status overview and storage usage
- Quick search across all logs and recent activity stream

### 📬 Messages
- Unified view combining Postfix + Rspamd data with smart correlation
- Direction detection (Inbound / Outbound / Internal)
- Status tracking: delivered, bounced, deferred, expired, spam
- Filter by sender, recipient, user, IP, direction
- CSV export, result count display, smart auto-refresh

### 📋 Message Details
- **Overview**: Message summary with all recipients
- **Logs**: Postfix delivery timeline with error summary and relay info
- **Spam Analysis**: Full Rspamd symbols with scores and descriptions
- **Security**: Netfilter events for the sender's IP

### 🔒 Security (Netfilter)
- Failed authentication attempts with IP, username, method, and action
- Security events chart —…
