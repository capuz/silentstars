---
repo: "vsxsentry/vsxsentry.github.io"
name: "vsxsentry.github.io"
description: "VSX Extension Threat Intelligence "
url: "https://github.com/vsxsentry/vsxsentry.github.io"
homepage: "https://vsxsentry.github.io/"
language: "HTML"
languages: ["HTML"]
languagePcts: [89]
topics: ["cti", "extension", "intelligence", "vscode", "vscode-extension"]
stars: 10
forks: 0
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-04-02T16:22:42Z"
lastCommitAt: "2026-07-04T19:19:27Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 46
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1199714237/d71dbd0e-72b2-4657-8779-7e00f7280436"
fundingLinks: ["GITHUB:https://github.com/mthcht"]
---

# VSXSentry - VS Code Extension Threat Intelligence

**[vsxsentry.github.io](https://vsxsentry.github.io)**

Community-driven threat intelligence for Visual Studio Code extensions. Track malicious, removed, and suspicious extensions from the VS Marketplace.

## What is VSXSentry?

VS Code extensions execute as native Node.js processes with full access to the file system, terminals, environment variables, SSH keys, and source code - with **no sandbox and no permission model**. VSXSentry provides structured, machine-readable feeds and tools for security teams to detect, block, and respond to malicious extensions.

## Features

### Feed Browser
- **Combined feed** - all records (malicious + risky) with full-text search across all fields
- **Malicious feed** - extensions removed for malware, typo-squatting, impersonation, spam
- **Risky feed** - legitimate but dual-use extensions (remote access, tunnels, credential vaults, AI code agents, file transfer, cloud access, database clients)
- Sortable columns (Extension ID, Publisher, Severity, Category, Comment, Source, Removal Date)
- Every view has a unique shareable URL via hash routing

### Feed Downloads
All feeds are generated…
