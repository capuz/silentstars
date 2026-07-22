---
repo: "SignalK/freeboard-sk"
name: "freeboard-sk"
description: "Chartplotter implementation for Signal K servers"
readmeQualityOk: true
url: "https://github.com/SignalK/freeboard-sk"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [76]
topics: ["freeboard", "chart", "chartplotter", "signalk"]
stars: 67
forks: 50
openIssues: 28
closedIssues: 330
watchers: 16
contributors: 25
recentReleases: 0
createdAt: "2015-05-14T00:37:47Z"
lastCommitAt: "2026-07-22T06:13:28Z"
lastReleaseAt: "2020-12-02T04:20:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 55
maintainers: ["joelkoz", "dependabot[bot]", "dillan"]
openGraphImageUrl: "https://opengraph.githubassets.com/19ab7fa0580ab63774ced2afd2a02dd3b1b27dc926a1dff75a73f06d26a036ed/SignalK/freeboard-sk"
---

# Freeboard-SK
Freeboard-SK is a stateless, multi-station, Openlayers based chart plotter for Signal K.
Use it to display:
- Resources _(i.e. routes, waypoints, notes, charts, etc)_
- Alarms & notifications
- AIS information
- Weather information
- Signal K instrument WebApps.

and more from any web enabled device.




See the [FAQs](https://github.com/SignalK/freeboard-sk/wiki) for more information.

## Features:

### Vessel / Chart Display:

Moving map display with:

- Multiple chart overlay using both of online and locally served charts 
- Radar overlay
- Built in support (no plugin required) for OpenStreetMap and OpenSeaMap(from Signal K server)  
- North-up / Vessel-up orientation   
- Moving Map / Moving Vessel
- Vessel Heading / Bearing lines
- Wind True / Apparent display
- Closest point of approach

and more.

Charts are sourced from the `/resources/charts` path on the Signal K server and the following chart types / sources are supported:

- Image tiles _(XYZ)_
- Vector Tiles _(MVT / PBF)_
- [S57 ENC's converted to vector tiles](#S57-charts) _(MVT / PBF)_
- WMS _(Web Map Server)_
- WMTS _(Web Map Tile Server)_
- PMTiles _(ProtoMap…
