---
repo: "ruderigo/LaBuche-Stump"
name: "LaBuche-Stump"
description: "Reticulum RNode and Local Intranet features RRC, fServer Bot, Billboards, and Provisioning tools for Heltec V3 and Freenove ESP-32-s3-cam"
readmeQualityOk: true
url: "https://github.com/ruderigo/LaBuche-Stump"
homepage: "https://labuche-stump.web.app/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["reticulum", "micropython", "python", "python3"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-08-23T14:49:33Z"
lastCommitAt: "2026-10-09T18:55:46Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 88
undervaluedScore: 49
maintainers: ["ruderigo"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ef98135b465f25e512d260278439e989012e38d5d064c2c35305c2944735b70/ruderigo/LaBuche-Stump"
---

# Project Stump — Beta A (Release)

An off-grid community node. A long-range encrypted mesh radio and a
local high-bandwidth server, deliberately kept on separate hardware.

```
[ Mesh ] <--( LoRa )--> [ Heltec V3 ] <--( WiFi/TCP :7633 )--> [ ESP32-S3-CAM ] <--( WiFi )--> [ Local room ]
                        CONTROL PLANE                          DATA PLANE
                        RNS identity, LXMF,                    SD storage, chat, files,
                        routing. Low power.                    billboard, about page, captive portal.
```

Walk up with a phone, join the WiFi, and get a chat room, a bulletin
board, a file library, and an About page explaining the project — in
French, English, or Spanish. Meanwhile the node holds a cryptographic
identity on the Reticulum mesh, so people reachable only over LoRa can
share rooms with the people standing in front of it.

---

## Before anything else: access modes are in test

This build ships **three** node-wide access profiles — `open`,
`hybrid`, `mandatory` — plus a separate, newer per-room access system
(minted/invite-only rooms) and a mesh-landing-room feature layered on
top of both. All of this is real, implemented, and…
