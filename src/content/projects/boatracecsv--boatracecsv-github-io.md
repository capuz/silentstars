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
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-01-19T04:58:57Z"
lastCommitAt: "2026-10-29T05:50:48Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/651b4175a4c943256b79ab42338c50b4e3731cb71d2795b9a1f3bff8f320d610/BoatraceCSV/boatracecsv.github.io"
---

# Boatrace Data Automation

Boat race data is spread across proprietary formats, and collecting and formatting it takes a lot of time.
To make it easier to use for machine learning, we created CSV files with one race per row.
Because they can be downloaded over HTTPS, they are also easy for agents to access.
They are updated once a day (real-time data every 5 minutes).
If you need the latest information, please use another source such as [Boatrace OpenAPI](https://github.com/BoatraceOpenAPI).

## Data Download

All files can be downloaded from the root `https://boatracecsv.github.io/` using the following paths.

- `data/programs/title/YYYY/MM/DD.csv` — race name for each race
- `data/programs/race_cards/YYYY/MM/DD.csv` — detailed race cards
- `data/programs/recent_national/YYYY/MM/DD.csv` — nationwide recent form (last 5 sections)
- `data/programs/recent_local/YYYY/MM/DD.csv` — local-venue recent form (last 5 sections)
- `data/programs/motor_stats/YYYY/MM/DD.csv` — motor performance for the period
- `data/previews/{tkz,stt,sui,original_exhibition}/YYYY/MM/DD.csv` — pre-race information
- `data/results/realtime/YYYY/MM/DD.csv` — near-real-time results 5–30 minutes after betting…
