---
repo: "OmarH-creator/ShareClean"
name: "ShareClean"
description: "Local-first Python CLI for safer log sharing: redact secrets, tokens, emails, and local paths before posting to GitHub issues, tickets, or AI chats."
readmeQualityOk: true
url: "https://github.com/OmarH-creator/ShareClean"
homepage: "https://omarh-creator.github.io/ShareClean/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["cli", "developer-tools", "logs", "privacy", "python", "redaction", "secret-scanning", "security-tools", "command-line-tool", "local-first"]
stars: 9
forks: 1
openIssues: 14
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-06-30T21:24:05Z"
lastCommitAt: "2026-07-04T22:52:52Z"
lastReleaseAt: "2026-07-03T19:55:55Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine", "under_pressure"]
healthScore: 81
undervaluedScore: 49
maintainers: ["OmarH-creator", "jauzin23", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6180b74c08f142f49eac3788425a6d90f5679bcdd80675dff964e9faa06b56e0/OmarH-creator/ShareClean"
---

# ShareClean

## Clean developer output before you share it

ShareClean is a local-first Python CLI for cleaning logs, stack traces, config snippets, terminal output, URLs, and headers **before** you paste them into a GitHub issue, Slack message, support ticket, or AI chat.

It looks for common secrets and personal details, replaces only the risky part, and keeps the useful context around it. It runs locally: no account, no API key, no network calls, and no telemetry.

```text
Before
------
DATABASE_URL=postgresql://app:fake-db-password@db.example.com/shareclean
Authorization: Bearer fake-bearer-token
callback=https://example.com/callback?token=fake-url-token&safe=1

After
-----
DATABASE_URL=postgresql://app:[REDACTED]@db.example.com/shareclean
Authorization: Bearer [REDACTED]
callback=https://example.com/callback?token=[REDACTED]&safe=1
```

[Try the browser playground](https://omarh-creator.github.io/ShareClean/) · [Install from PyPI](https://pypi.org/project/shareclean/)

> The playground is for trying fake text in your browser. Real use happens locally through the CLI.

## Why this exists

Repository secret scanners are great for finding secrets that have already reached a…
