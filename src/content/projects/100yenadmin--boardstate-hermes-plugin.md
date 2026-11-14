---
repo: "100yenadmin/boardstate-hermes-plugin"
name: "boardstate-hermes-plugin"
description: "From one ask, your Hermes agent builds a live board of KPIs, tables and charts, and keeps it current as plans change."
readmeQualityOk: true
url: "https://github.com/100yenadmin/boardstate-hermes-plugin"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [82]
topics: ["agent", "dashboard", "hermes", "mcp", "widgets", "ai-agent", "hermes-agent", "hermes-plugin"]
stars: 11
forks: 1
openIssues: 6
closedIssues: 4
watchers: 0
contributors: 1
recentReleases: 6
createdAt: "2026-07-10T08:25:05Z"
lastCommitAt: "2026-11-14T22:01:18Z"
lastReleaseAt: "2026-11-09T11:08:18Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 85
undervaluedScore: 49
maintainers: ["100yenadmin"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1296271464/9f8ace0c-a0b0-4d7c-9bf7-11dda6cc6641"
---

# Boardstate for Hermes

From one ask, your Hermes agent builds a live board of KPIs, tables and charts, and keeps it current as plans change.

**[Watch the demo](https://x.com/ElectricSheepIO/status/2120139551293292623)**

https://github.com/user-attachments/assets/ccdbef31-792d-43b2-9b2a-635fe47aef4a

## Install

```bash
hermes plugins install 100yenadmin/boardstate-hermes-plugin --enable
```

This installs the current `main` branch; to install one exact release, pin it (see
[More install options](#more-install-options)). You need Hermes 0.21.2 or newer and Node.js 20 or newer.
No API keys or accounts. Hermes prints a "custom (unreviewed) source" warning for any install from a
repository; Boardstate scans `safe`, so it installs with no prompt. Then start (or restart) `hermes dashboard`
and follow **Try it** below.

The catalog name installs the release the Hermes catalog reviewed:

```bash
hermes plugins install boardstate --enable
```

On Hermes 0.23.1 or newer this installs the live catalog pin, and Hermes shows the catalog entry instead of
the "custom (unreviewed) source" warning. The pin is 1.5.13, the release that updates
the sidecar's dependencies for known security…
