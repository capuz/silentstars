---
repo: "frappe/pilot"
name: "pilot"
description: "Frappe Server Manager"
readmeQualityOk: true
url: "https://github.com/frappe/pilot"
language: "Python"
languages: ["Python"]
languagePcts: [82]
stars: 56
forks: 36
openIssues: 9
closedIssues: 64
watchers: 4
contributors: 82
recentReleases: 1
createdAt: "2026-05-21T05:18:49Z"
lastCommitAt: "2026-07-23T06:15:55Z"
lastReleaseAt: "2026-07-23T06:16:29Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 97
undervaluedScore: 43
maintainers: ["Aradhya-Tripathi", "tanmoysrt", "AryamanSharma14"]
openGraphImageUrl: "https://opengraph.githubassets.com/88a5f3309b9b366e01696b0abf4ca6d0fd82b015011ba7cd0c5111173e190e08/frappe/pilot"
---

</p>

<h1 align="center">Pilot</h1>

  <strong>Manage Frappe benches and sites on any server</strong>
</p>

  </a>
</p>

Pilot makes it simple to run Frappe on your own servers. Use the Admin UI to manage apps, sites, processes, backups, domains, and production setup, with a CLI for automation.

## Key Features

- Bench and site lifecycle: create, update, rename, restore, back up, and drop
- Integrated marketplace to install apps on sites from Git repositories or the app registry
- Local development runner for Redis, web, workers, socket.io, and Admin UI
- Production setup for process managers, nginx, monitoring, domains, and TLS
- Devtools for investigation: SQL playground, database analyzer, binlog browser, logs, and task history

## Requirements

- Debian 12+, Ubuntu 22.04+, Fedora 40+, Arch Linux, or macOS with Homebrew for local development
- Python 3.11+

## Installation

Run the installer as your normal user:

```bash
curl -fsSL https://raw.githubusercontent.com/frappe/pilot/main/install.sh | bash
```

On a root-only VPS, run it as root; the installer creates a non-root bench user.

## Basic Usage

Create a bench and launch the setup wizard:

```bash
bench new dev-bench…
