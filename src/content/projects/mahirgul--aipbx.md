---
repo: "mahirgul/AiPBX"
name: "AiPBX"
description: "Open-source IP PBX & unified communications: Asterisk 22 web portal, WebRTC softphone, chat, fax, call center, Android & iOS apps — https://aipbx.bid"
readmeQualityOk: true
url: "https://github.com/mahirgul/AiPBX"
homepage: "https://aipbx.bid"
language: "PHP"
languages: ["PHP"]
languagePcts: [91]
topics: ["ai", "audio", "pbx", "sip", "voip", "webrtc", "asterisk", "call-center", "fax", "ip-pbx"]
stars: 65
forks: 15
openIssues: 1
closedIssues: 30
watchers: 1
contributors: 5
recentReleases: 10
createdAt: "2026-09-07T12:19:00Z"
lastCommitAt: "2026-11-01T10:43:43Z"
lastReleaseAt: "2026-10-07T19:49:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 99
undervaluedScore: 45
maintainers: ["mahirgul", "shido6"]
openGraphImageUrl: "https://opengraph.githubassets.com/b450aeb043e322ddd798afddddfedeedc9c2b1d31c3a2eb1c4f47a79674f15be/mahirgul/AiPBX"
fundingLinks: ["GITHUB:https://github.com/mahirgul"]
---

Asterisk 22 · PHP 8 · MariaDB · WebRTC · Instant Messaging · Android & iOS Apps

  📖 <a href="docs/README.md"><strong>Documentation</strong></a> · 🌐 <a href="https://aipbx.bid"><strong>Website: aipbx.bid</strong></a> · 📺 <a href="https://www.youtube.com/@aipbx"><strong>YouTube</strong></a>

---

## 🚀 Quick Install

```bash
# Recommended one-liner installation (installs the latest release)
curl -fsSL aipbx.bid/i | sudo bash
```

Or via direct GitHub raw URL:

```bash
# Alternative direct GitHub script
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
1. 🌐 Asks for your **FQDN** — with Let's Encrypt if DNS points to the server, otherwise a self-signed
   certificate; leave it blank for a LAN-only install announced as `aipbx.local` via mDNS
2. 🔑 Generates **strong random secrets** for every service (no default passwords)
3. ⚙️ Installs and configures Asterisk, MariaDB, Nginx + Apache, PHP, coturn, the Go…
