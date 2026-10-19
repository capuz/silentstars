---
repo: "Ramilen-L-Emuruk/yuremado"
name: "yuremado"
description: "Real-time earthquake viewer"
originalDescription: "リアルタイム地震ビューアー"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/Ramilen-L-Emuruk/yuremado"
homepage: "https://ramilen-l-emuruk.github.io/yuremado/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [96]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-04T17:44:01Z"
lastCommitAt: "2026-10-19T09:13:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 60
maintainers: ["Ramilen-L-Emuruk", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ee130fef6b02c49d48ebd572c23313a40ecdab30e33be950fdb9d9cbbf9fc15/Ramilen-L-Emuruk/yuremado"
---

# Yuremado

Yuremado (揺れ窓) is a PWA app that displays Japan Meteorological Agency (JMA) earthquake information, earthquake early warnings, tsunami information, and real-time seismic intensity on a map.
It is built with React + TypeScript + MapLibre GL JS.
It is based on [kotoho7/scratch-realtime-earthquake-viewer-page](https://github.com/kotoho7/scratch-realtime-earthquake-viewer-page).

**Standard version (P2PQuake)**: https://ramilen-l-emuruk.github.io/yuremado/
**DM-D.S.S version (DMDATA.JP)**: https://ramilen-l-emuruk.github.io/yuremado/dmdss/

> "DM-D.S.S" is the service name of DMDATA.JP. In the following documentation and code (`VITE_VARIANT=dmdss`), it is abbreviated as **DMDSS**.

## Main Features

- **Earthquake information**: Displays past earthquake cards, per-station seismic intensity, area fills, and epicenter markers on the map
- **Earthquake Early Warning (EEW)**: When issued, shows forecast circles, epicenters, and warning areas, and counts down the predicted arrival times of main shocks for each region announced by the JMA
- **Tsunami information**: Color-codes major tsunami warnings, warnings, advisories, and forecasts along coastlines, with observation…
