---
repo: "hdering/ioBroker.aura"
name: "ioBroker.aura"
description: "Aura is a modern visualization dashboard for ioBroker."
readmeQualityOk: true
url: "https://github.com/hdering/ioBroker.aura"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [94]
topics: ["dashboard", "iobroker", "visualization"]
stars: 12
forks: 3
openIssues: 26
closedIssues: 352
watchers: 3
contributors: 5
recentReleases: 0
createdAt: "2026-04-07T20:13:21Z"
lastCommitAt: "2026-07-10T07:01:25Z"
lastReleaseAt: "2026-04-09T09:03:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 49
maintainers: ["hdering", "dependabot[bot]", "mcuiobroker"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0e1181f312f070ee0b6ebfef543cac710ffc53ca8bc321694e3066265a16112/hdering/ioBroker.aura"
fundingLinks: ["CUSTOM:https://paypal.me/HermannDering"]
---

# ioBroker.aura

**Aura** is a modern visualization dashboard for [ioBroker](https://www.iobroker.net/).

📖 **[Documentation](https://hdering.github.io/ioBroker.aura/)** – widgets, settings, screenshots

---

## Installation

### Step 1 – Install adapter

Install Aura via ioBroker Admin:

1. Open ioBroker Admin
2. Go to **Adapters**
3. Search for **Aura** and install it

### Step 2 – Create instance

After installation, create a new **Aura** instance (if not done automatically).

### Step 3 – Configure the instance

Aura runs its **own web server** (frontend + built-in iframe proxy) and connects to an existing
`iobroker.web` instance only for the socket.io data connection. Open the **Aura** instance settings:

| Setting | Default | Meaning |
|---------|---------|---------|
| **Port** | `8095` | Port of Aura's HTTP server (frontend + iframe proxy) |
| **ioBroker socket port** | `8082` | Port of the `iobroker.web` instance that provides the socket.io connection |
| **Web adapter uses HTTPS** | off | Enable if that web instance runs HTTPS |

> **Requirement:** A running `iobroker.web` (or `iobroker.socketio`) instance must serve socket.io on
> the configured socket port. The stock…
