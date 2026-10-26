---
repo: "juju35/ha-freebox-card"
name: "ha-freebox-card"
description: "Lovelace cards for Home Assistant to monitor a Freebox (Freebox integration): rates, connection, temperatures, storage, Wi-Fi, calls"
readmeQualityOk: true
url: "https://github.com/juju35/ha-freebox-card"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
topics: ["free", "freebox", "home-assistant", "home-assistant-custom-card", "homeassistant", "lovelace", "lovelace-card"]
stars: 5
forks: 0
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-10-19T21:02:54Z"
lastCommitAt: "2026-10-26T02:58:42Z"
lastReleaseAt: "2026-10-24T13:56:41Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 43
maintainers: ["juju35", "claude", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/041f37e92cc691acc8f9f08b56b93a37d1347cd897cb67590f8fe68eed9ea197/juju35/ha-freebox-card"
---

# ha-freebox-card

Lovelace cards for Home Assistant to monitor a Freebox: download / upload rates, connection, temperatures, fans, storage, Wi-Fi, missed calls and connected devices at a glance.

The cards are built on top of the [Freebox integration](https://www.home-assistant.io/integrations/freebox/) of Home Assistant: entities are **discovered automatically**, you don't have to pick them one by one.

| Freebox Card | Freebox Mini Card |
|---|---|
|  |  |

## Features

- Two cards: a full **Freebox Card** and a compact **Freebox Mini Card**
- Detail button at the top right of the mini card: it shows the full Freebox card in its place (same Freebox and options), and the collapse button, or a click anywhere outside the card, brings the compact view back (`zoom: false` removes it)
- Automatic discovery of the Freebox integration entities, whatever the language of the entity ids (several Freebox supported)
- Picture and commercial name of the Freebox model (Ultra, Pop, Delta, Revolution, mini 4K), detected automatically or set with the `model` option, and firmware version
- Connection status and type (FTTH, xDSL…), public IPv4 (IPv6 on hover) and uptime
- Download / upload rates,…
