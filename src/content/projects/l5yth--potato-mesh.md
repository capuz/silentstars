---
repo: "l5yth/potato-mesh"
name: "potato-mesh"
description: "A federated Meshtastic, Meshcore, and Reticulum node dashboard for your local community. No MQTT clutter, just local LoRa aether."
readmeQualityOk: true
url: "https://github.com/l5yth/potato-mesh"
homepage: "https://potatomesh.net"
language: "JavaScript"
languages: ["JavaScript", "Ruby", "Python"]
languagePcts: [36, 30, 24]
topics: ["dashboard", "meshtastic", "qos", "webapp", "meshcore", "reticulum"]
stars: 473
forks: 55
openIssues: 21
closedIssues: 210
watchers: 9
contributors: 16
recentReleases: 0
createdAt: "2025-09-13T06:09:07Z"
lastCommitAt: "2026-08-31T10:01:36Z"
lastReleaseAt: "2025-11-16T16:39:25Z"
status: "thriving"
tags: ["solo_builder", "community_hub"]
healthScore: 95
undervaluedScore: 35
maintainers: ["l5yth", "dependabot[bot]", "eknuth"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6147748c2f7139cd623a09a0329c297d00ef4e385abd96ff0a46128ccec768e/l5yth/potato-mesh"
discussionCount: 22
---

# 🥔 PotatoMesh

A federated Meshtastic, Meshcore, and Reticulum node dashboard for your local community.
_No MQTT clutter, just local LoRa aether._

* Web dashboard with chat window and map view showing nodes, positions, neighbors,
  trace routes, telemetry, and messages.
  * API to POST (authenticated) and to GET nodes, messages, and telemetry.
  * Shows new node notifications (first seen) and telemetry logs in chat.
  * Allows searching and filtering for nodes in map and table view.
  * Federated: _automatically_ froms a federation with other communities running
    Potato Mesh!
  * Supports Meshtastic, Meshcore, and Reticulum.
* Supplemental Python ingestor to feed the POST APIs of the Web app with data remotely.
  * Supports multiple ingestors per instance.
  * Supports Meshtastic, Meshcore, and Reticulum protocols.
* Matrix bridge that posts Meshtastic messages to a defined matrix channel (no
  radio required).
* Mobile app to _read_ messages on your local aether (no radio required).

Live demo for Berlin: [potatomesh.net](https://potatomesh.net)

**Jump to Contents:**
- [Web App](#web-app) - configuration, running, deploying, monitoring, etc.
- [Ingestor](#ingestor) -…
