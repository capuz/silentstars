---
repo: "Natak-Mesh/Nucleus_OS"
name: "Nucleus_OS"
description: "Working repo for the Nucleus family of mesh radios"
url: "https://github.com/Natak-Mesh/Nucleus_OS"
homepage: "https://www.natakmesh.com"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [41, 39]
stars: 19
forks: 3
openIssues: 3
closedIssues: 36
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-06-18T16:17:54Z"
lastCommitAt: "2026-06-24T00:21:58Z"
lastReleaseAt: "2025-12-24T00:49:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 66
maintainers: ["Nate-Boyette"]
openGraphImageUrl: "https://opengraph.githubassets.com/210af9636d0c475369eb1aeb67e75532e60127bdbf287f873c2088c3a27f08f1/Natak-Mesh/Nucleus_OS"
discussionCount: 1
---

# Use Cases: Capabilities provided by the current Nucleus units.
## ATAK / Takserver
### ATAK EUD
- Connected ATAK EUD's will automatically discover other EUD's connected to the IP mesh network
- ATAK CoT bridge transparently forwards SA and chat between the local multicast LAN and remote nodes over Meshtastic LoRa -- no ATAK plugin required on the EUD
- Enough throughput for instant position and text updates along with pictures,video, routes, etc
### TAKserver
- OpenTAKserver can be installed to run locally on the Nucleus
- Included Mediamtx install allows video to be streamed to OpenTAKserver and distributed out to other devices on the IP mesh network.
## Data
### Wi-Fi IP Mesh Network
- Any program using an IP network connection
- Reticulum
## Text
### Meshtastic
- Onboard Meshtastic node operating in bridge mode (default) or BLE mode
- Bridge mode: Nucleus owns the radio over serial, bidirectionally bridges ATAK CoT (SA + chat) between the IP mesh multicast LAN and LoRa
- BLE mode: radio released to Bluetooth for the official Meshtastic phone app
- Mode toggled via Nucleus web UI or REST API
### Reticulum
- Onboard transport instance. Connected/configured Reticulum devices can…
