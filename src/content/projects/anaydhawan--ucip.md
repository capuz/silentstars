---
repo: "AnayDhawan/UCIP"
name: "UCIP"
description: "Decision-support platform ranking Mumbai's 24 wards by heat vulnerability, with cited nature-based cooling recommendations"
readmeQualityOk: true
url: "https://github.com/AnayDhawan/UCIP"
homepage: "https://uciplatform.vercel.app/dashboard"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [49, 49]
topics: ["climate-data", "geospatial", "google-earth-engine", "heat-vulnerability", "leaflet", "mumbai", "nature-based-solutions", "nextjs", "postgis", "python"]
stars: 16
forks: 7
openIssues: 39
closedIssues: 110
watchers: 0
contributors: 10
recentReleases: 3
createdAt: "2026-07-22T06:12:53Z"
lastCommitAt: "2026-10-27T12:37:22Z"
lastReleaseAt: "2026-09-23T18:25:38Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 93
undervaluedScore: 59
maintainers: ["AnayDhawan", "dependabot[bot]", "Aaqibhafeezkhan"]
openGraphImageUrl: "https://opengraph.githubassets.com/197ec286c604247b77305eb155107d9cc306bbc99b62fdb2d46f607d1ff156ef/AnayDhawan/UCIP"
discussionCount: 0
---

**Ward-level heat vulnerability for Mumbai, built only from free, open data.**

**[Open the live dashboard](https://uciplatform.vercel.app/dashboard)**

---

UCIP scores each of Mumbai's 24 BMC wards for heat vulnerability on a 0 to 100 scale, explains each score factor by factor, and suggests cooling interventions that pass an ecological check. Every scored input comes from free, open, global data, so the same pipeline can be pointed at another city.

It is a citable, versioned dataset with a dashboard and an API. It is not a forecast and not a warning service: for heatwave warnings, use the [India Meteorological Department](https://mausam.imd.gov.in/).

## What goes into the score

Mumbai is cut into 1 km cells (541 of them with people living in them). Each cell gets five measurements:

| Factor | What it measures | Source | Licence |
|---|---|---|---|
| Land surface temperature | How hot the ground gets on dry-season afternoons | Landsat 8/9 Collection 2 | public domain |
| Green cover (NDVI) | How much vegetation there is (more green, less vulnerable) | Landsat 8/9 Collection 2 | public domain |
| Population density | How many people live in the cell | WorldPop 2020, 100 m |…
