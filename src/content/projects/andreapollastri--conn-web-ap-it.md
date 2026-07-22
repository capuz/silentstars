---
repo: "andreapollastri/conn.web.ap.it"
name: "conn.web.ap.it"
description: "SSH connection manager"
readmeQualityOk: true
url: "https://github.com/andreapollastri/conn.web.ap.it"
homepage: "https://conn.web.ap.it"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 5
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-10-21T20:21:40Z"
lastCommitAt: "2026-07-22T06:14:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 70
undervaluedScore: 46
maintainers: ["andreapollastri"]
openGraphImageUrl: "https://opengraph.githubassets.com/e961880accf63e20224a21ec47dfbbc8949d5844286b06addf6280f1a386b397/andreapollastri/conn.web.ap.it"
---

# conn — SSH Connection Manager

**A lightweight, zero-dependency Bash tool to manage SSH connections with aliases.**

Stop memorizing hosts, usernames and ports.  
Store every server under a short alias and connect with a single command.

---

## Overview

`conn` is a single-file Bash script that wraps `ssh` with a human-friendly interface. It stores your server definitions in `~/.ssh_connections.conf` and exposes a clean CLI to add, list, edit, connect to, and remove them — plus SSH key management, ProxyJump/IdentityFile, shell completion, and auto-update.

```bash
conn to production                              # SSH into "production" in one shot
conn list                                       # Pretty-printed table of all servers
conn add                                        # Interactive wizard
conn add prod deploy@host:22 --folder /var/www  # One-shot add
conn update                                     # Pull the latest version from GitHub
```

---

## Installation

### Quick install (one-liner)

```bash
curl -fsSL https://conn.web.ap.it/setup.sh | bash
```

Downloads and installs `conn` to `/usr/local/bin`

### Shell completion (optional)

```bash
# bash
echo 'eval…
