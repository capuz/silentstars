---
repo: "masoneff3/ha_zteh388x"
name: "ha_zteh388x"
description: "A Home Assistant custom component for the ZTE H388X (TIM HUB+) router"
readmeQualityOk: true
url: "https://github.com/masoneff3/ha_zteh388x"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["homeassistant", "homeassistant-custom-component", "zte"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-10-12T12:29:32Z"
lastCommitAt: "2026-11-22T11:53:30Z"
lastReleaseAt: "2026-08-12T08:49:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 51
maintainers: ["masoneff3", "alsd4git"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef577cbde0afe6f1c95eb1bb401570829dbaf88ed5e6d616942037796a940ce2/masoneff3/ha_zteh388x"
---

# ZTE H388X (TIM HUB+) Custom Component for Home Assistant

A [Home Assistant](https://www.home-assistant.io/) (HA) custom component for the ZTE H388X (TIM HUB+) router.

## Features

- **Supports both xDSL (ADSL/VDSL) and FTTH (SFP/Ethernet) connections**.
- Retrieves details including:
  - Connection status (connected/disconnected)
  - Line statistics (downstream/upstream rates, SNR margin, attenuation, profile, CRC/FEC errors, TX/RX power, etc.)
  - Connection uptime
  - Bytes and packets received/sent
  - WAN IP address and DNS servers
  - MAC addresses
  - And more...
- **[V2.0]** **Device tracking** for Wi-Fi clients (see [Device tracker](#device-tracker-wi-fi-clients))
- **[V2.0]** **Supports multiple routers** (see [Multiple routers](#optional-multiple-routers))

  The entity prefix is omitted for brevity.
