---
repo: "ledimestari/homeassistant-storj-integration"
name: "homeassistant-storj-integration"
description: "Add sensors to home assistant to monitor statistics of a storj node"
readmeQualityOk: true
url: "https://github.com/ledimestari/homeassistant-storj-integration"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["hacs", "home-automation", "homeassistant", "homeassistant-custom-component", "homeassistant-integration", "storj", "storj-node"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-29T17:13:47Z"
lastCommitAt: "2026-07-30T06:08:06Z"
lastReleaseAt: "2026-03-29T11:32:56Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 66
maintainers: ["ledimestari", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/dc1aa8fb2d6df22c98ea9282f965588d1b1d7c6fd095f89e528ee43036f8c0d7/ledimestari/homeassistant-storj-integration"
---

# Homeassistant Storj Node statistics

A custom homeassistant integration ```storj_node_statistics``` to read statistics from a storj storage node using json data provided by the node.

This integration is unofficial and not related to the official storj company at all.

## Example card


This is somewhat the view I'm using, the graphs should get more interesting over time.

## Setup
### HACS (recommended)

Click the button below to install via HACS.


### Manual
Copy the "homeassistant_storj_integration" directory into the "custom_components" directory of your homeassistant install.

### Configuration
After installation, you'll be able to setup your device in the gui like this:


Setup is simple and only needs the IP-address (e.g. 192.168.1.123) and the port of your node server.

Default port 14002 provided as a default value.

## Features

This integration only reads data and does not not provide any actionable switches.

Provided sensors:

- Node ID
- Wallet address
- QUIC status
- Uptime
- Version number
- Diskspace Total
- Diskspace Used
- Diskspace Trash
- Diskspace Free
- Average Disk Space Used This Month
- Disk Use Percentage
-…
