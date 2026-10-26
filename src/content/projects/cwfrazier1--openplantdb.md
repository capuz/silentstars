---
repo: "cwfrazier1/openplantdb"
name: "openplantdb"
description: "An open, public-domain (CC0) database of garden plants: germination times, days to maturity, when-to-plant by USDA zone, mature size, and growing directions."
readmeQualityOk: true
url: "https://github.com/cwfrazier1/openplantdb"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-05T19:59:12Z"
lastCommitAt: "2026-10-26T09:17:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 69
undervaluedScore: 41
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/5769afb334e065b7fe5ce247cb5fa10a57fb6e44a846b68fad8af90262828f4f/cwfrazier1/openplantdb"
---

# 🌱 OpenPlantDB

An open, machine-readable database of garden plants — **germination times,
days to maturity, when to plant by USDA zone, mature size, and growing
directions** — released into the public domain (CC0) so anyone can build on it.

It exists because the best-known open crop dataset (OpenFarm) went offline and
its data disappeared with it. This one lives in flat files in git, so it can't
vanish, and anyone can fork, correct, or extend it.

> ⚠️ **Accuracy note.** Values are typical published horticultural ranges and
> vary by variety, region and microclimate. Treat them as planning guidance,
> not guarantees. Corrections via PR are very welcome.

## What's in it

| File | What |
|------|------|
| [`data/plants.json`](https://github.com/cwfrazier1/openplantdb/blob/HEAD/data/plants.json) | The full dataset — one rich JSON object per plant |
| [`data/plants.csv`](https://github.com/cwfrazier1/openplantdb/blob/HEAD/data/plants.csv) | The same data flattened to a spreadsheet-friendly CSV |
| [`data/zones.json`](https://github.com/cwfrazier1/openplantdb/blob/HEAD/data/zones.json) | USDA hardiness zones 1–13 with typical frost dates |
|…
