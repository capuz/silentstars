---
repo: "Deasus/firestorm-ngfs-data"
name: "firestorm-ngfs-data"
description: "NGFS (Next Generation Fire System) detection mirror for FIRESTORM — CIMSS/SSEC SCENE feed, live ~5min cadence, fire-object tracking + IRWIN correlation. Bridge pattern: GHA cron → repo JSON → frontend fetch."
readmeQualityOk: true
url: "https://github.com/Deasus/firestorm-ngfs-data"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["fire-detection", "satellite", "situational-awareness", "wildfire"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-06-05T15:07:59Z"
lastCommitAt: "2026-09-26T08:48:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 46
maintainers: ["Firestorm-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/20e215e8f1b59f5ce6f699f70cf1b5222929e340c2f7dd1964bc4258b8a23c25/Deasus/firestorm-ngfs-data"
---

# firestorm-ngfs-data

NGFS (Next Generation Fire System) detections for FIRESTORM, mirrored from
CIMSS/SSEC's RealEarth viewer (`re-ngfs-pub.ssec.wisc.edu`) into a single
slim JSON in this repo. Public read; FIRESTORM frontend pulls from
`raw.githubusercontent.com`.

**Data:** [`data/ngfs.json`](https://github.com/Deasus/firestorm-ngfs-data/blob/HEAD/data/ngfs.json) — most recent ~12 minutes of
NGFS-SCENE-CONUS-EAST + NGFS-SCENE-CONUS-WEST detections, deduped across
satellites, slimmed to the fields FIRESTORM needs.

**Cadence:** every ~5 min via GitHub Actions self-re-dispatching loop. NGFS
itself updates every ~2 min, but we deliberately stay below that to be polite
to SSEC.

**Attribution:** *data: NGFS / CIMSS / NOAA*. NGFS is NOAA-funded research from
the Cooperative Institute for Meteorological Satellite Studies (CIMSS) at the
Space Science and Engineering Center (SSEC), University of Wisconsin–Madison.

---

## What NGFS adds vs FIRESTORM's existing fire pipelines

| Pipeline | What it gives | Cadence | Object tracking |
|---|---|---|---|
| `firestorm-lightning-data` (GLM) | Lightning flashes (ignition source) | ~5 min | n/a |
| `firestorm-goes-fire-data` (FDC) | Per-pixel…
