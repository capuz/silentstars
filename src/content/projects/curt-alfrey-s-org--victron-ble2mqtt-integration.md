---
repo: "Curt-Alfrey-s-Org/victron-ble2mqtt-integration"
name: "victron-ble2mqtt-integration"
description: "Complete setup and integration guide for victron-ble2mqtt with Home Assistant, Node-RED, Mosquitto, Refoss, Dozzle, Watch Tower, Portainer"
readmeQualityOk: true
url: "https://github.com/Curt-Alfrey-s-Org/victron-ble2mqtt-integration"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [62, 37]
topics: ["ble", "energy-monitor", "home-automation", "iot", "mqtt", "node-red", "raspberry-pi", "victron", "cockpit", "docker"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-05T21:59:44Z"
lastCommitAt: "2026-09-18T14:02:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 65
undervaluedScore: 76
maintainers: ["curtalfrey", "cursoragent"]
openGraphImageUrl: "https://opengraph.githubassets.com/982855490c6f76df393d9692417c2208a2965f72b3fc27cbf6fa7e57e1091ae2/Curt-Alfrey-s-Org/victron-ble2mqtt-integration"
---

# victron-ble2mqtt-integration

## What it is

A **Raspberry Pi home-energy stack**. It listens to your solar / battery gear, sends the numbers to a local MQTT broker (Mosquitto), and shows them in **Home Assistant** — the dashboard you open in a browser or on your phone (`http://YOUR-PI-IP:8123`).

The same repo also runs on a **second Pi in the house** (`HOST_ROLE=pi5`): LAN DNS (AdGuard) and a Bluetooth gateway that forwards house BLE into the Pi 4 broker. The Pi 4 cannot hear those radios from another building. Details: [docs/PI5_HOUSE_EDGE.md](https://github.com/Curt-Alfrey-s-Org/victron-ble2mqtt-integration/blob/HEAD/docs/PI5_HOUSE_EDGE.md).

It is meant to run **on your LAN**, not in a vendor cloud. At home you open Home Assistant on Wi‑Fi; **away from home** you use optional **Tailscale** (a private VPN) so you can review the same numbers without opening the dashboard to the public internet. You do not need to know GitHub to use it; the install steps below are copy-and-paste on the Pi. Tailscale is covered in [docs/TAILSCALE.md](https://github.com/Curt-Alfrey-s-Org/victron-ble2mqtt-integration/blob/HEAD/docs/TAILSCALE.md).

One installer (`scripts/deploy.sh`) sets up…
