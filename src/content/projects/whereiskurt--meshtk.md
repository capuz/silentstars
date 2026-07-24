---
repo: "whereiskurt/meshtk"
name: "meshtk"
description: "Toolkit for working with virtual meshtastic nodes using mqtt+protobufs"
readmeQualityOk: true
url: "https://github.com/whereiskurt/meshtk"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["meshtastic", "mqtt"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2025-04-05T00:29:25Z"
lastCommitAt: "2026-07-24T06:07:33Z"
lastReleaseAt: "2025-04-28T03:40:04Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 80
undervaluedScore: 61
maintainers: ["whereiskurt"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c4411e2cd5993f012e90a1181581f0d03bf282587bf0ff2f26178cadc29f5ae/whereiskurt/meshtk"
fundingLinks: ["BUY_ME_A_COFFEE:https://buymeacoffee.com/whereiskurt"]
---

# TODO: Update this now that we're live at DEFCON 33!

# meshtk - A Meshtatic virtual node Toolkit
A toolkit for virtual meshtastic nodes (ie. no radio/serial) using mqtt+protobufs. A work in progress (WIP) that's been useful for some upcoming projects (defcon.run!)

> "Release early, release often." 🐇  

To 'just run it': `go run cmd/meshtk.go nodeinfo announce --verbose trace` (but you'll like want to tweak the config 😉) 

You'll start to get a tonne of MQTT message tracing like this, from the public meshtastic mqtt server on a `#` subscription:
```
time="2025-04-05T13:38:28-04:00" level=trace msg="{mapReport: 'long_name:\"stats2\" short_name:\"st2s\" role:CLIENT_MUTE hw_model:PORTDUINO firmware_version:\"2.4.0.a04de8c6\" region:EU_868 latitude_i:510885888 longitude_i:168787968 altitude:113 position_precision:16 num_online_local_nodes:1'}"
time="2025-04-05T13:38:28-04:00" level=trace msg="{'from': '876654321', 'topic': 'msh/PL/2/map/', 'portNum': 'MAP_REPORT_APP', 'longName': 'stats2', 'shortName': 'st2s', 'hwModel': 'PORTDUINO', 'role': 'CLIENT_MUTE', 'fwVersion': '2.4.0.a04de8c6', 'region': 'EU_868', 'modemPreset': 'LONG_FAST', 'hasDefaultCh': false, 'onlineLocalNodes': 1,…
