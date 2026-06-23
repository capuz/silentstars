---
repo: "bethropolis/localgo"
name: "localgo"
description: "a golang implementation of the localsend protocol"
url: "https://github.com/bethropolis/localgo"
language: "Go"
languages: ["Go", "Shell"]
languagePcts: [70, 26]
topics: ["file-sharing", "golang", "localsend", "localsend-protocol", "cli"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-07-06T16:58:07Z"
lastCommitAt: "2026-06-23T23:17:18Z"
lastReleaseAt: "2026-03-10T09:43:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 61
maintainers: ["bethropolis"]
openGraphImageUrl: "https://opengraph.githubassets.com/86df8884a0163c788781e07ee6fcacaa1518edad8ef885af5faf6a906f338fac/bethropolis/localgo"
---

# LocalGo

A Go implementation of the LocalSend v2.1 protocol for secure, cross-platform file sharing.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Commands](#commands)
- [Documentation](#documentation)
- [Troubleshooting](#troubleshooting)
- [For Developers](#for-developers)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Complete LocalSend v2.1 Protocol** - Works with LocalSend apps
- **Secure** - HTTPS with certificates, optional PIN protection
- **Fast Discovery** - Multicast UDP + HTTP fallback
- **Multi-file Transfers** - Send multiple files concurrently
- **Web Share** - Share files via browser download link
- **Clipboard Integration** - Incoming text/plain transfers copied to clipboard automatically
- **Metadata Preserved** - File timestamps preserved on transfer
- **Cross-Platform** - Linux, macOS, Windows

## Quick Start

### Installation

#### Online (macOS, Linux)
```bash
curl -fsSL https://bethropolis.github.io/localgo/install.sh | bash
```

####  User installation (recommended)
```bash
# clone repo
git clone https://github.com/bethropolis/localgo.git
cd localgo

# installs a…
