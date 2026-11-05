---
repo: "BoatraceCSV/boatracecsv.github.io"
name: "boatracecsv.github.io"
description: "Boatrace data"
originalDescription: "Boatrace data"
descriptionLang: "ja"
readmeQualityOk: true
url: "https://github.com/BoatraceCSV/boatracecsv.github.io"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook", "Python"]
languagePcts: [50, 48]
topics: ["boatrace", "dataset"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-19T04:58:57Z"
lastCommitAt: "2026-11-05T11:25:28Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 61
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/f82dee2faa53b7d1794ab7310e4e71e373e57361fb90eeebce7d3a99b8d9ee58/BoatraceCSV/boatracecsv.github.io"
---

# Boatrace Data Automation

Boatrace data is spread across proprietary formats, and collecting and formatting it takes time.
To make it easier to use for machine learning, we created CSV files with one race per row.
Because they can be downloaded over HTTPS, they are also easy to access from Agents.
Updated once a day (real-time data every 5 minutes).
If you need the latest information, please use another source such as [Boatrace OpenAPI](https://github.com/BoatraceOpenAPI).

## Data Download

All files can be downloaded with `https://boatracecsv.github.io/` as the root, using the following paths:

- `data/programs/title/YYYY/MM/DD.csv` — per-race race name
- `data/programs/race_cards/YYYY/MM/DD.csv` — detailed race card
- `data/programs/recent_national/YYYY/MM/DD.csv` — national recent form (last 5 meets)
- `data/programs/recent_local/YYYY/MM/DD.csv` — local recent form (last 5 meets)
- `data/programs/motor_stats/YYYY/MM/DD.csv` — motor results for the period
- `data/previews/{tkz,stt,sui,original_exhibition}/YYYY/MM/DD.csv` — pre-race information
- `data/results/realtime/YYYY/MM/DD.csv` — near-real-time results, 5–30 minutes after betting closes
-…
