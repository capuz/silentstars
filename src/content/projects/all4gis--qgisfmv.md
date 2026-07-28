---
repo: "All4Gis/QGISFMV"
name: "QGISFMV"
description: "QGIS Full Motion Video (FMV)"
readmeQualityOk: true
url: "https://github.com/All4Gis/QGISFMV"
homepage: "https://all4gis.github.io/QGISFMV/"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["qgis3-plugin", "qgis3", "fmv", "klv", "stanag", "misb", "uav", "drone", "dji", "misb-st0601"]
stars: 173
forks: 60
openIssues: 1
closedIssues: 63
watchers: 16
contributors: 11
recentReleases: 0
createdAt: "2018-05-04T19:59:14Z"
lastCommitAt: "2026-07-27T14:28:16Z"
lastReleaseAt: "2020-03-28T12:33:11Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 94
undervaluedScore: 29
maintainers: []
openGraphImageUrl: "https://repository-images.githubusercontent.com/132183545/3a4e0300-6dda-11e9-8e10-044804c6659f"
fundingLinks: ["GITHUB:https://github.com/All4Gis", "CUSTOM:https://www.paypal.com/donate/?hosted_button_id=X2JMP4FMHDYQS"]
discussionCount: 5
---

</p>

<h1 align="center">QGIS Full Motion Video</h1>

  <strong>Play MISB video. See telemetry on the map. Work in QGIS.</strong>
</p>

</p>

</p>

---

## What it does

QGIS FMV brings **Full Motion Video** into your GIS workspace: synchronized map layers (platform, footprint, sensor cone, trajectory), MISB/KLV metadata, drawing tools on video, mosaics, streams, and DJI → STANAG 4609 multiplexing.

Telemetry is handled by **[pymisb](https://pypi.org/project/pymisb/)** on PyPI. The plugin focuses on QGIS integration, playback, and geospatial visualization.

```mermaid
flowchart LR
  subgraph inputs [Inputs]
    V[Video file or stream]
    T[DJI telemetry]
  end
  subgraph pymisb [pymisb]
    M[mux / demux / KLV]
  end
  subgraph plugin [QGIS FMV]
    VM[Video Manager]
    P[Player + map]
    M3[Mini map · HUD]
  end
  V --> M
  T --> M
  M --> VM
  V --> VM
  VM --> P
  P --> M3
```

</p>

---

## Highlights

| Feature | What you get |
|---------|--------------|
| **Live map symbology** | Platform, footprint, beams, trajectory, frame center — updated with playback |
| **MISB / KLV** | Embedded metadata via pymisb; CSV/PDF export, ffprobe tree, bitrate plots |
| **Playback** |…
