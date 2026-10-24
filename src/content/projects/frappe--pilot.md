---
repo: "frappe/pilot"
name: "pilot"
description: "Frappe Server Manager"
readmeQualityOk: true
url: "https://github.com/frappe/pilot"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 120
forks: 71
openIssues: 36
closedIssues: 147
watchers: 4
contributors: 57
recentReleases: 2
createdAt: "2026-05-21T05:18:49Z"
lastCommitAt: "2026-10-24T08:07:33Z"
lastReleaseAt: "2026-07-29T08:26:30Z"
status: "thriving"
tags: ["fork_magnet"]
healthScore: 95
undervaluedScore: 37
maintainers: ["tanmoysrt", "AyshaHakeem", "prathameshkurunkar7"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2fbc4b450906cfbff9dd975f7264dd9c8e2c9651a5597df88989ddd013d17a0/frappe/pilot"
---

Pilot makes it simple to run Frappe on your own servers. Use the Admin UI to manage apps, sites, processes, backups, domains, and production setup, with a CLI for automation.

## Key Features

- Bench and site lifecycle: create, update, rename, restore, back up, and drop
- Integrated marketplace to install apps on sites from Git repositories or the app registry
- Local development runner for Redis, web, workers, socket.io, and Admin UI
- Production setup for process managers, nginx, monitoring, domains, and TLS
- Devtools for investigation: SQL playground, database analyzer, binlog browser, logs, and task history

## Requirements

- Debian 12+, Ubuntu 24.04+, Fedora 43+, Arch Linux, or macOS with Homebrew for local development. The installer refuses older releases.
- Python 3.11+ on the host to run the `pilot` CLI. Benches get their own Python 3.14 through `uv`.
- Node.js 24
- Frappe v16 or later

## Installation

Run the installer as your normal user:

```bash
curl -fsSL https://raw.githubusercontent.com/frappe/pilot/develop/install.sh | bash
```

On a root-only VPS, run it as root; the installer creates a non-root bench user.

This installs the latest release (prebuilt admin UI,…
