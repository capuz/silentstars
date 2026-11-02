---
repo: "hdering/ioBroker.aura"
name: "ioBroker.aura"
description: "Aura is a modern visualization dashboard for ioBroker."
readmeQualityOk: true
url: "https://github.com/hdering/ioBroker.aura"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [61, 38]
topics: ["dashboard", "iobroker", "visualization"]
stars: 20
forks: 3
openIssues: 12
closedIssues: 782
watchers: 4
contributors: 5
recentReleases: 0
createdAt: "2026-04-07T20:13:21Z"
lastCommitAt: "2026-11-02T17:57:09Z"
lastReleaseAt: "2026-04-09T09:03:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 98
undervaluedScore: 47
maintainers: ["hdering"]
openGraphImageUrl: "https://opengraph.githubassets.com/7e9e33f3226e301b295ca4a026c8851ee2750afd57a5416d0a4f1c97340d8bb7/hdering/ioBroker.aura"
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
| **web instance** | automatic | The `iobroker.web` instance to connect to. Pick one and its port, bind address and HTTPS setting are taken from it — the two fields below are then hidden |
| **ioBroker socket port** | `8082` | Only in automatic mode: port of the `iobroker.web` instance that provides the socket.io connection |
| **Web…
