---
repo: "Deasus/firestorm-lightning-data"
name: "firestorm-lightning-data"
description: "FIRESTORM lightning data pipeline — GOES-R GLM L2 LCFA flashes from NOAA Open Data S3, slim JSON for the wildfire dashboard."
readmeQualityOk: true
url: "https://github.com/Deasus/firestorm-lightning-data"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-05-20T22:43:15Z"
lastCommitAt: "2026-08-04T06:12:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 50
maintainers: ["Firestorm-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cb0193633c5dd26ba9c51d78d1b3caeda99a7001e01d2ea489783a310c10887/Deasus/firestorm-lightning-data"
---

# firestorm-lightning-data

Real-time lightning feed for [FIRESTORM](https://github.com/Deasus/Firestorm),
mirroring GOES-R GLM Level-2 LCFA flashes from NOAA's Open Data S3 buckets
to a slim JSON the FIRESTORM frontend reads via `raw.githubusercontent.com`.

Same architectural shape as `firestorm-aircraft-data`, `firestorm-wind-data`,
`firestorm-news-data`: GitHub Actions cron poll → public S3 source → slim
JSON → frontend `fetch()`.

## What this replaces

Until v2_141, FIRESTORM's lightning layer rendered 40 randomly-generated
points around hand-picked region centroids (`generateDemoLightning(40)`).
The visual presentation gave no indication the data was synthetic. This
pipeline replaces that demo path with real strikes.

## Source

GOES-R Geostationary Lightning Mapper (GLM) Level-2 Lightning Cluster
Filter Algorithm (LCFA) product:

- **GOES-East (G19):** `s3://noaa-goes19/GLM-L2-LCFA/<YYYY>/<DDD>/<HH>/` (replaced G16 in April 2025)
- **GOES-West (G18):** `s3://noaa-goes18/GLM-L2-LCFA/<YYYY>/<DDD>/<HH>/` (replaced G17 in 2023)

Public, anonymous, no auth, no egress charge. NOAA Open Data on AWS.

Native cadence: ~20 seconds per satellite. Each file is netCDF-4,
~50–500 KB.…
