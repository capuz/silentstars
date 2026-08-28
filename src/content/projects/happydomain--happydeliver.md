---
repo: "happyDomain/happydeliver"
name: "happydeliver"
description: "Open-source, self-hosted email deliverability testing platform"
readmeQualityOk: true
url: "https://github.com/happyDomain/happydeliver"
homepage: "https://happydeliver.org/"
language: "Go"
languages: ["Go", "Svelte"]
languagePcts: [65, 32]
topics: ["email", "email-deliverability", "email-deliverability-checklist"]
stars: 225
forks: 14
openIssues: 3
closedIssues: 10
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-10-18T11:15:20Z"
lastCommitAt: "2026-08-28T14:30:30Z"
lastReleaseAt: "2026-02-22T21:33:37Z"
status: "thriving"
tags: []
healthScore: 83
undervaluedScore: 36
maintainers: ["nemunaire"]
openGraphImageUrl: "https://opengraph.githubassets.com/8db4c0b1fa182cc447b5c65b9b6534bce8a71a26ff6ade057b4a92dfd9354d8b/happyDomain/happydeliver"
discussionCount: 0
---

# happyDeliver - Email Deliverability Tester

An open-source email deliverability testing platform that analyzes test emails and provides detailed deliverability reports with scoring.

## Features

- **Complete Email Analysis**: Analyzes SPF, DKIM, DMARC, BIMI, ARC, SpamAssassin and rspamd scores, DNS records, blacklist status, content quality, and more
- **REST API**: Full-featured API for creating tests and retrieving reports
- **LMTP Server**: Built-in LMTP server for seamless MTA integration
- **Scoring System**: Gives A to F grades and scoring with weighted factors across dns, authentication, spam, blacklists, content, and headers
- **Database Storage**: SQLite or PostgreSQL support
- **Configurable**: via environment or config file for all settings

## Quick Start

### With Docker (Recommended)

The easiest way to run happyDeliver is using the all-in-one Docker container that includes Postfix, authentication_milter, SpamAssassin, and the happyDeliver application.

#### What's included in the Docker container:

- **Postfix MTA**: Receives emails on port 25
- **authentication_milter**: Entreprise grade email authentication
- **SpamAssassin**: Spam scoring and analysis
-…
