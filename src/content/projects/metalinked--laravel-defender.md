---
repo: "metalinked/laravel-defender"
name: "laravel-defender"
description: "Modular security middleware for Laravel 11/12/13: brute force protection, dynamic IP blocklist, country access control, honeypot spam protection, auto-block, multi-channel alerts (log, DB, mail, Slack, webhook), advanced threat detection, Pulse dashboard card, and security audit via Artisan."
readmeQualityOk: true
url: "https://github.com/metalinked/laravel-defender"
language: "PHP"
languages: ["PHP"]
languagePcts: [96]
topics: ["defender", "laravel", "security", "alerts", "brute-force", "geoip", "honeypot", "login-protection", "country-blocking", "ip-logging"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-05-31T16:33:52Z"
lastCommitAt: "2026-10-03T22:04:58Z"
lastReleaseAt: "2025-08-06T15:59:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: ["oskratch", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/208fb46f950ab3b17832ae6a57db2174fa21e530053894de9ada6b064baa3c7c/metalinked/laravel-defender"
discussionCount: 1
---

# Laravel Defender

Security package for Laravel. It detects and blocks suspicious requests (attack routes, malicious user-agents, brute force, unwanted countries), keeps a blocklist of IPs and sends alerts. Everything runs on your own server; external services are only used for the optional geolocation and IP reputation lookups.

---

## Requirements

| Laravel | PHP   |
|---------|-------|
| 11.x    | ^8.2  |
| 12.x    | ^8.2  |
| 13.x    | ^8.3  |

---

## Features

- **Honeypot** for forms
- **Request logging** and alerts for suspicious activity
- **Attack detection**: malicious user-agents, common attack routes, logins with common usernames, path traversal and fuzzing patterns
- **Brute force protection**: blocks IPs after too many suspicious requests
- **Country access control**: allow or deny by country code, with an IP whitelist
- **IP blocklist**: block and unblock IPs at runtime with Artisan, no config changes needed
- **Auto-block**: blocks IPs that keep triggering events within a configurable time window
- **IP reputation**: optional AbuseIPDB score for IPs already flagged as suspicious
- **Events**: `SuspiciousRequestDetected` and `IpBlocked`, to add your own logic
-…
