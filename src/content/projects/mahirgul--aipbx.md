---
repo: "mahirgul/AiPBX"
name: "AiPBX"
description: "Open-source IP PBX & unified communications: Asterisk 22 web portal, WebRTC softphone, chat, fax, call center, Android & iOS apps — https://aipbx.bid"
readmeQualityOk: true
url: "https://github.com/mahirgul/AiPBX"
homepage: "https://aipbx.bid"
language: "PHP"
languages: ["PHP"]
languagePcts: [84]
topics: ["ai", "audio", "pbx", "sip", "voip", "webrtc", "asterisk", "call-center", "fax", "ip-pbx"]
stars: 17
forks: 5
openIssues: 1
closedIssues: 24
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-09-07T12:19:00Z"
lastCommitAt: "2026-10-16T08:27:13Z"
lastReleaseAt: "2026-10-07T19:49:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 59
maintainers: ["mahirgul"]
openGraphImageUrl: "https://opengraph.githubassets.com/401f24795670ef6d46f0dd07b1e064e739b88d0b05b7e87775ce44724573415b/mahirgul/AiPBX"
---

Asterisk 22 · PHP 8 · MariaDB · WebRTC · Instant Messaging · Android & iOS Apps

  📖 <a href="docs/README.md"><strong>Documentation</strong></a> · 🌐 <a href="https://aipbx.bid"><strong>Website: aipbx.bid</strong></a>

---

## Quick Install

```bash
# One-liner installation (installs the latest release)
curl -fsSL https://raw.githubusercontent.com/mahirgul/AiPBX/main/install.sh | sudo bash
```

Or clone manually and install the latest release:

```bash
git clone https://github.com/mahirgul/AiPBX.git /opt/aipbx
cd /opt/aipbx
git checkout "$(git tag -l 'v*' --sort=-v:refname | head -1)"
sudo bash install.sh
```

The installer:
1. Asks for your **FQDN** — with Let's Encrypt if DNS points to the server, otherwise a self-signed
   certificate; leave it blank for a LAN-only install announced as `aipbx.local` via mDNS
2. Generates **strong random secrets** for every service (no default passwords)
3. Installs and configures Asterisk, MariaDB, Nginx + Apache, PHP, coturn, the Go chat service,
   firewalld and fail2ban, and builds the database from migrations
4. Prints the credentials and saves them to `/root/aipbx-credentials.txt`

> **Requirements**: Ubuntu 26.04 LTS · 2 GB RAM · 10 GB…
