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
lastCommitAt: "2026-11-03T11:15:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 61
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/45635a28cd8b97569537fc411fa9c76faf056981f9f644a24b6d89a8eff590c3/BoatraceCSV/boatracecsv.github.io"
---

# Boatrace Data Automation

Boatrace data is spread across proprietary formats, and collecting and formatting it takes time. To make it easier to use for machine learning, we created CSV files with one race per row.
Since they can be downloaded over HTTPS, they are also easy for Agents to access.
They are updated once a day (real-time series every 5 minutes).
If you need the latest information, please use another source such as [Boatrace OpenAPI](https://github.com/BoatraceOpenAPI).

## Data Download

All files can be downloaded from the root `https://boatracecsv.github.io/` using the following paths.

- `data/programs/title/YYYY/MM/DD.csv` — per-race race name
- `data/programs/race_cards/YYYY/MM/DD.csv` — detailed racecard (出走表)
- `data/programs/recent_national/YYYY/MM/DD.csv` — nationwide recent form over the last 5 meets (全国近況5節)
- `data/programs/recent_local/YYYY/MM/DD.csv` — local-venue recent form over the last 5 meets (当地近況5節)
- `data/programs/motor_stats/YYYY/MM/DD.csv` — motor period performance (モーター期成績)
- `data/previews/{tkz,stt,sui,original_exhibition}/YYYY/MM/DD.csv` — pre-race information (直前情報)
- `data/results/realtime/YYYY/MM/DD.csv` — semi-real-time results 5 to…
