---
repo: "sh4den/Montscan"
name: "Montscan"
description: "🖨️ Automated scanner document processor with AI-powered naming and WebDav integration. Receives scans via FTP, extracts text using Vision AI, generates intelligent filenames with Ollama AI, and uploads to your cloud storage."
readmeQualityOk: true
url: "https://github.com/sh4den/Montscan"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai", "ftp-server", "nextcloud", "ollama", "printer", "scanner", "webdav", "vision-language-model", "vision-model", "rust"]
stars: 454
forks: 32
openIssues: 1
closedIssues: 1
watchers: 6
contributors: 1
recentReleases: 2
createdAt: "2023-05-14T09:33:29Z"
lastCommitAt: "2026-11-05T14:04:39Z"
lastReleaseAt: "2026-11-02T18:41:00Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 83
undervaluedScore: 30
maintainers: ["sh4den", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/640495759/e83a2d06-dc33-4579-9572-7c7b7aaac50c"
fundingLinks: ["GITHUB:https://github.com/sh4den"]
discussionCount: 0
---

## Self-hosted naming and filing for scanned documents

**Montscan** receives scanned documents from your network scanner, reads them with a local Ollama vision model, gives each file a descriptive, dated name, and delivers it wherever you keep your documents. It speaks FTP, SFTP, SCP and SMB, so most scanners work with it without extra software.

Naming runs locally through Ollama, so your documents are never sent to a third-party AI service and no API key is needed.

---

**[Install](#installation) &nbsp;|&nbsp; [Docker image](https://github.com/sh4den/Montscan/pkgs/container/montscan) &nbsp;|&nbsp; [Configuration](#configuration) &nbsp;|&nbsp; [Issues](https://github.com/sh4den/Montscan/issues) &nbsp;|&nbsp; [Contributing](https://github.com/sh4den/Montscan/blob/HEAD/CONTRIBUTING.md)**

---

> [!NOTE]
> Montscan is still in active development and not fully production-ready, but it is usable day to day.
> On a test set of 1000 documents it named 97.5% of them correctly.

If it's useful to you, a star on GitHub is appreciated.

## Features

- Receives scans over FTP, SFTP or legacy SCP, by polling a remote SMB share, or by watching a local folder
- Reads each document with an…
