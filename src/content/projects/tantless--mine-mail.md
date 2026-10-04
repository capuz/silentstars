---
repo: "Tantless/mine-mail"
name: "mine-mail"
description: "new mail app"
originalDescription: "new mail app"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/Tantless/mine-mail"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [57, 35]
stars: 53
forks: 2
openIssues: 0
closedIssues: 5
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-07-14T11:00:09Z"
lastCommitAt: "2026-10-03T10:42:23Z"
lastReleaseAt: "2026-07-28T16:51:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 42
maintainers: ["Tantless", "3180253545"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d31c9a29d27887ead6b2bc38e84268f6137096e98797f16caa47f4ae218b645/Tantless/mine-mail"
---

# Mine Mail

## Project Introduction

Mine Mail is a local-first, reading-experience-focused cross-platform desktop email client built with Tauri 2, React 19, Rust, and SQLite.

- On startup, prioritize reading local cache, then sync mailboxes in the background via Rust.
- Supports 163 Mail, QQ Mail, Gmail OAuth 2.0, and custom IMAP/SMTP accounts, with a maximum of 3 accounts connected.
- Provides email search, drafts and send queue, plain text/secure HTML reading, desktop notifications, four built-in themes, and local custom background themes.
- Can inject local mailbox capabilities into AI assistants supporting MCP with "Receive Information / Send Email" dual permissions.
- Credentials are saved in the operating system credential store; email content is treated as untrusted input and sanitized in Rust.

Mine Mail v1.0.0 is the first official release, targeting Windows 11 x64, macOS 14 and above on Apple Silicon Mac, and Linux x64. Installation packages for each platform are built and verified by a unified release process; specific signature, notarization, and vendor authorization status should refer to the corresponding release notes.

## Installation Guide

1. Open [Mine Mail…
