---
repo: "ARK-Electronics/ARK-OS"
name: "ARK-OS"
description: "Software for the ARK Jetson Carrier and ARK Pi6X Flow"
url: "https://github.com/ARK-Electronics/ARK-OS"
language: "Python"
languages: ["Python", "Vue"]
languagePcts: [40, 38]
stars: 41
forks: 9
openIssues: 3
closedIssues: 18
watchers: 3
contributors: 7
recentReleases: 10
createdAt: "2024-10-04T23:11:39Z"
lastCommitAt: "2026-06-27T00:34:31Z"
lastReleaseAt: "2026-06-16T00:41:31Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 91
undervaluedScore: 58
maintainers: ["dakejahl", "Ryanf55", "AlexKlimaj"]
openGraphImageUrl: "https://opengraph.githubassets.com/3be08e8b80e4f78f3b3d4b8105395defadb926b0b595beef170e2c0da7d95663/ARK-Electronics/ARK-OS"
---

# About
ARK-OS is a collection of software services and tools for drones. These services provide essential features such as mavlink routing, video streaming, automatic flight log upload, flight controller firmware updating, network RTK corrections, and more.

#### Supported targets
- **ARK Jetson Carrier** <br> https://arkelectron.com/product/ark-jetson-pab-carrier/
- **ARK Pi6X Flow** <br> https://arkelectron.com/product/ark-pi6x-flow/
- **ARK Just a Pi** <br> https://arkelectron.com/product/ark-just-a-pi/

# Getting started
If you haven't set up an internet connection on your device, ssh in and connect to your wifi network.
```
ssh <user>@<hostname>.local
```

| User   | Password | Hostname |
|--------|----------|----------|
| jetson | jetson   | jetson   |
| pi     | pi       | pi6x     |

Connect to your WiFi network using Network Manager
```
sudo nmcli dev wifi connect <ssid> password <password>
```

# Installation

ARK-OS is distributed as a Debian package on the [Releases page](https://github.com/ARK-Electronics/ARK-OS/releases). The MAVSDK C++ SDK is bundled inside the package (see [MAVSDK](#mavsdk-bundled-usable-replaceable) below), so there is nothing to install…
