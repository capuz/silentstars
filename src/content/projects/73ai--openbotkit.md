---
repo: "73ai/openbotkit"
name: "openbotkit"
description: "A kit to build your own personal assistant with safety"
readmeQualityOk: true
url: "https://github.com/73ai/openbotkit"
homepage: "https://openbotkit.dev"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 5
forks: 2
openIssues: 34
closedIssues: 10
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-02-26T14:40:40Z"
lastCommitAt: "2026-10-13T10:57:10Z"
lastReleaseAt: "2026-04-01T07:10:37Z"
status: "thriving"
tags: ["under_pressure"]
healthScore: 63
undervaluedScore: 27
maintainers: ["priyanshujain", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/00d0cf708cfea93d212ddb7d4dba4dced0b88b76087722003f7e2f32b86423ba/73ai/openbotkit"
---

# OpenBotKit

A personal AI assistant that runs on your machine, connects to your email and messages, and **always asks before acting**.

## The Problem

AI agents can now read your email, send messages, and browse the web on your behalf. But most of them:

- Run autonomously with no approval flow — sending emails you didn't review
- Store your personal data on someone else's servers
- Get WhatsApp accounts blocked by spamming contacts without limits
- Operate as a black box — you can't see what they're doing

## How OpenBotKit Is Different

**Sensitive actions need your permission.** When the assistant wants to send an email, a WhatsApp message, or modify your calendar, it sends you a preview on Telegram with Approve and Deny buttons. You review it, you decide. This is enforced in code — the AI cannot skip this step. Read-only actions like searching your email or reading notes happen instantly without interrupting you.

**Your data stays on your device.** Emails, messages, notes, and contacts sync into SQLite databases on your machine. OpenBotKit connects directly to Gmail's API, WhatsApp's protocol, and Apple Notes. No cloud relay, no third-party middleware.

**Everything is…
