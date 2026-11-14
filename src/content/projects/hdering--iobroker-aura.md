---
repo: "hdering/ioBroker.aura"
name: "ioBroker.aura"
description: "Aura is a modern visualization dashboard for ioBroker."
readmeQualityOk: true
url: "https://github.com/hdering/ioBroker.aura"
language: "TypeScript"
languages: ["TypeScript", "JavaScript"]
languagePcts: [60, 39]
topics: ["dashboard", "iobroker", "visualization"]
stars: 21
forks: 7
openIssues: 7
closedIssues: 852
watchers: 2
contributors: 7
recentReleases: 0
createdAt: "2026-04-07T20:13:21Z"
lastCommitAt: "2026-11-14T22:03:41Z"
lastReleaseAt: "2026-04-09T09:03:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded"]
healthScore: 99
undervaluedScore: 51
maintainers: ["hdering", "GermanBluefox", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/44642b319e651930fc6cd1c961638a063c0472f829db73037ddc6e9265380a0a/hdering/ioBroker.aura"
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
