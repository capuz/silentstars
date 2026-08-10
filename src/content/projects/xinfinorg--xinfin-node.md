---
repo: "XinFinOrg/XinFin-Node"
name: "XinFin-Node"
description: "Setup XinFin Masternode using Docker"
readmeQualityOk: true
url: "https://github.com/XinFinOrg/XinFin-Node"
homepage: "https://xinfin.org/setup-masternode.php"
language: "Shell"
languages: ["Shell"]
languagePcts: [95]
stars: 66
forks: 57
openIssues: 5
closedIssues: 60
watchers: 8
contributors: 24
recentReleases: 0
createdAt: "2018-12-28T09:08:19Z"
lastCommitAt: "2026-08-10T05:07:10Z"
lastReleaseAt: "2024-07-23T11:45:17Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 43
maintainers: ["AnilChinchawale", "benjamin202410", "gzliudan"]
openGraphImageUrl: "https://opengraph.githubassets.com/12adf9826d793ffcd73f25c018040e466fe8ca17b577e6982d9b068901b5920c/XinFinOrg/XinFin-Node"
---

## Securing Your XDC Network Node

Before deploying your XDC Network Node, it is critical to secure the server, especially for validator or standby nodes that do not require RPC/WebSocket access. There are two deployment scenarios:

* **RPC Node**: Exposes necessary ports to allow DApps and users to interact with the blockchain.
* **Validator/Standby Node**: Only communicates with the network and should block unnecessary ports for better security.

This guide provides instructions for securing your server, changing the default SSH port, and enabling a firewall for validator/standby nodes.

---

### Initial Server Setup

1. **Log in to your server** using credentials provided by your cloud provider:

   ```bash
   ssh user@your-server-ip
   ```

2. **Update OS packages**:

   ```bash
   sudo apt update -y && sudo apt upgrade -y && sudo apt autoremove -y
   ```

---

### Setting Up SSH Key Authentication

**Step 1: Generate SSH Key (on your local machine or computer)**

If you don’t already have an SSH key:

```bash
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

* Save the key in the default path (usually `~/.ssh/id_rsa`)
* You may optionally add a passphrase

**Step 2:…
