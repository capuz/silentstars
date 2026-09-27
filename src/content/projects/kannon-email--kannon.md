---
repo: "kannon-email/kannon"
name: "kannon"
description: "✉️  Cloud-Native massive mail sender for Kubernetes!"
readmeQualityOk: true
url: "https://github.com/kannon-email/kannon"
homepage: "https://www.kannon.email"
language: "Go"
languages: ["Go"]
languagePcts: [100]
topics: ["email", "smtp", "hacktoberfest", "open-source-saturday"]
stars: 85
forks: 14
openIssues: 19
closedIssues: 111
watchers: 3
contributors: 10
recentReleases: 0
createdAt: "2021-01-03T09:01:56Z"
lastCommitAt: "2026-09-27T09:27:31Z"
lastReleaseAt: "2025-09-09T16:44:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 91
undervaluedScore: 46
maintainers: ["ludusrusso", "dependabot[bot]", "SAY-5"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/326366162/18945380-9b8d-11eb-84f8-421ed7119e83"
---

# Kannon 💥

A **Cloud Native SMTP mail sender** for Kubernetes and modern infrastructure.

> [!NOTE]
> Due to limitations of AWS, GCP, etc. on port 25, this project will not work on cloud providers that block port 25.

---

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Quickstart](#quickstart)
- [Configuration](#configuration)
- [Database Schema](#database-schema)
- [API Overview](#api-overview)
- [Sending Mail](#sending-mail)
- [Deployment](#deployment)
- [Domain & DNS Setup](#domain--dns-setup)
- [Testing & Demo Mode](#testing--demo-mode)
- [Development & Contributing](#development--contributing)
- [License](#license)

---

## Features

- Cloud-native, scalable SMTP mail sending
- HTTP API for sending HTML and templated emails, speaking Connect, gRPC and gRPC-Web on a single port
- DKIM signing and SPF-friendly delivery
- Per-recipient templating (custom fields), attachments and custom `To` / `Cc` headers
- Open and click tracking, governed by a per-Domain / per-Batch / per-Recipient [Tracking Policy](https://github.com/kannon-email/kannon/blob/HEAD/docs/adr/0003-tracking-policy-ceiling-defaults-and-intake-resolution.md)
- RFC 8058 one-click…
