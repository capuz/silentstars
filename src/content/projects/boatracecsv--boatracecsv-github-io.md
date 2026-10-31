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
lastCommitAt: "2026-10-31T07:45:41Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 61
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/49cb413689e27b0b4408921a78dbd1b271b5a4b9b9d64e568cf12d40865fe30b/BoatraceCSV/boatracecsv.github.io"
---

# Boatrace Data Automation

Boatrace data is spread across proprietary formats, and collecting and formatting it takes a long time.
To make it easier to use for machine learning, we created CSV files with one race per row.
Because they can be downloaded over HTTPS, they are also easy for Agents to access.
Updates are made once a day (real-time data every 5 minutes).
If you need the latest information, please use another source such as [Boatrace OpenAPI](https://github.com/BoatraceOpenAPI).

## Data Download

All files can be downloaded from the root `https://boatracecsv.github.io/` using the following paths:

- `data/programs/title/YYYY/MM/DD.csv` — per-race race name
- `data/programs/race_cards/YYYY/MM/DD.csv` — detailed racing card
- `data/programs/recent_national/YYYY/MM/DD.csv` — nationwide recent form (last 5 meets)
- `data/programs/recent_local/YYYY/MM/DD.csv` — local recent form (last 5 meets)
- `data/programs/motor_stats/YYYY/MM/DD.csv` — motor results for the period
- `data/previews/{tkz,stt,sui,original_exhibition}/YYYY/MM/DD.csv` — pre-race information
- `data/results/realtime/YYYY/MM/DD.csv` — near-real-time results 5–30 minutes after race close
-…
