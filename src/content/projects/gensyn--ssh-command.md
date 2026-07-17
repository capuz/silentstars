---
repo: "gensyn/ssh_command"
name: "ssh_command"
description: "Execute SSH Commands in Home Assistant."
readmeQualityOk: true
url: "https://github.com/gensyn/ssh_command"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["hacs-custom", "home-assistant", "integration", "ssh"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 8
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-01-25T20:43:23Z"
lastCommitAt: "2026-07-17T05:59:19Z"
lastReleaseAt: "2026-06-23T09:35:12Z"
status: "thriving"
tags: ["hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 62
maintainers: ["gensyn", "Copilot", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3185de1d3c1d384394360f23110744836e470ff7d2c99403e5bf8e6dce6665e1/gensyn/ssh_command"
fundingLinks: ["KO_FI:https://ko-fi.com/gensyn"]
---

# 🔐 SSH command

Minimal Home Assistant custom component that exposes a single service to execute commands on remote hosts over SSH: `ssh_command.execute`.

This integration does not create devices or entities. It only registers the `ssh_command.execute` service.

---

## Installation

### HACS (Recommended)

1. Click the badge above or search for **SSH Command** in HACS
2. Click **Download**
3. Restart Home Assistant
4. Add the integration via `Settings > Devices & Services > Add Integration`

### Manual Installation

1. Download or clone this repository
2. Copy the `ssh_command` folder to your Home Assistant `config/custom_components` directory
3. Restart Home Assistant
4. Add the integration via `Settings > Devices & Services > Add Integration`

---

### 🔧 Service: `ssh_command.execute`

- Domain: `ssh_command`
- Service: `execute`
- The service supports service responses and returns a dictionary with keys: `output`, `error`, `exit_status`.

#### Parameters

- `host` (required) — Hostname or IP address of the remote server
- `port` (default: `22`) — SSH port of the remote server
- `username` (required) — SSH username
- `password` — SSH password (use instead of key_file)
-…
