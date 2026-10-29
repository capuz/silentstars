---
repo: "marsh4200/ar_hdl_buspro"
name: "ar_hdl_buspro"
description: "A Licensed HDL-Buspro and Buspro-Wireless integration for Home Assistant."
readmeQualityOk: true
url: "https://github.com/marsh4200/ar_hdl_buspro"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "hdl-buspro", "home-assistant", "lighting", "smart", "smarthome", "buspro-wireless"]
stars: 14
forks: 1
openIssues: 0
closedIssues: 14
watchers: 0
contributors: 1
recentReleases: 4
createdAt: "2026-08-24T06:45:44Z"
lastCommitAt: "2026-10-29T05:50:35Z"
lastReleaseAt: "2026-10-27T10:20:29Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 55
maintainers: ["marsh4200"]
openGraphImageUrl: "https://opengraph.githubassets.com/783cd070609d78806ebab8d6618f055796a4936564b6c9ebff1dbf47f0e546e2/marsh4200/ar_hdl_buspro"
---

Lights, relays, curtains, floor heating, AC, sensors, dry contacts and wireless panels, all set up from the UI.<br>
  No YAML. No hunting for addresses.

---

## Why AR HDL BUSPRO

| Feature | What it does |
|---|---|
| 🔍 **One scan finds everything** | Every device on the bus is found, named and classified for you. Self-describing hardware reports its own type and channel layout; everything else is matched against a built-in catalogue of **~1,800 HDL device types** |
| 📡 **Finds your gateway** | A broadcast probe on UDP/6000 lists every HDL gateway on the wire, even across IP subnets on the same switch |
| ✂️ **One entity per channel** | A 12-channel relay becomes 12 switches, a 6-channel dimmer 6 lights, a 2-curtain module 2 covers |
| 💡 **Keypad LEDs stay in step** | Button LEDs follow their relays, even when the relay is switched from Home Assistant |
| 🔘 **Spare buttons become triggers** | Point any free keypad button at Home Assistant and use it in automations |
| 🛡️ **Ignores the neighbours** | Only telegrams from *your* gateway are processed, so other HDL systems on a shared network never leak in |
| 🔁 **Self-healing** | Automatic reconnect with backoff; quiet…
