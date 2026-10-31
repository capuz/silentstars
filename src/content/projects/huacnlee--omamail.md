---
repo: "huacnlee/omamail"
name: "omamail"
description: "Omarchy mail plugin with Gmail, HEY and IMAP supports."
readmeQualityOk: true
url: "https://github.com/huacnlee/omamail"
homepage: "https://huacnlee.github.io/omamail/"
language: "QML"
languages: ["QML", "Rust", "JavaScript"]
languagePcts: [33, 28, 26]
topics: ["gmail", "omarchy", "imap", "hey", "mail"]
stars: 316
forks: 124
openIssues: 40
closedIssues: 53
watchers: 1
contributors: 68
recentReleases: 10
createdAt: "2026-08-19T10:54:40Z"
lastCommitAt: "2026-10-31T19:01:10Z"
lastReleaseAt: "2026-09-04T16:38:21Z"
status: "thriving"
tags: ["funded", "release_machine"]
healthScore: 87
undervaluedScore: 32
maintainers: ["huacnlee", "klaudworks", "oliverlukschander"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1339459045/4ee238fa-c92b-44a7-afb1-bea9f3de7a81"
fundingLinks: ["GITHUB:https://github.com/huacnlee"]
---

# Omamail

Omamail is a native email and calendar app with multiple accounts and keyboard navigation. It runs either as an Omarchy shell plugin or as a standalone Qt desktop application.

## Install

### Omarchy plugin

The plugin requires **Omarchy 4** and follows the active Omarchy theme. It includes the bar widget, `mailto:` integration, and AI assistance through the configured Omarchy agent.

```bash
omarchy plugin add https://github.com/huacnlee/omamail.git --enable
```

Update it with:

```bash
omarchy plugin update omamail
```

Click the envelope in the bar, install the pinned backend when prompted, and add your mailbox. Prebuilt plugin backends are available for Linux x86_64 and aarch64.

### Standalone desktop app

The standalone app includes mail, calendar, and native desktop notifications. It has no system tray, AI assistance, or operating-system `mailto:` registration in this release.

macOS & Linux:

```bash
curl -fsSL https://huacnlee.github.io/omamail/install.sh | sh
```

Windows (PowerShell):

```powershell
irm https://huacnlee.github.io/omamail/install.ps1 | iex
```

Each installer verifies the release package before replacing an existing version. The macOS app…
