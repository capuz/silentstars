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
lastCommitAt: "2026-10-24T08:20:40Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a97dd2334a784a0461ee97de7f4a7471d673ca3df62500e3f930fc43d1b27148/BoatraceCSV/boatracecsv.github.io"
---

# Boatrace Data Automation

Boatrace data is spread across proprietary formats, and collecting and formatting it takes time.
To make it easier to use for machine learning, we created CSV files with one race per row.
Because it can be downloaded over HTTPS, it is also easy for Agents to access.
Updates are made once a day (real-time data every 5 minutes).
If you need the latest information, please use another source such as [Boatrace OpenAPI](https://github.com/BoatraceOpenAPI).

## Data Download

All files can be downloaded from the root `https://boatracecsv.github.io/` using the following paths.

- `data/programs/title/YYYY/MM/DD.csv` — per-race race name
- `data/programs/race_cards/YYYY/MM/DD.csv` — detailed race entry sheet (出走表)
- `data/programs/recent_national/YYYY/MM/DD.csv` — nationwide recent form, last 5 sections (節)
- `data/programs/recent_local/YYYY/MM/DD.csv` — local venue recent form, last 5 sections
- `data/programs/motor_stats/YYYY/MM/DD.csv` — motor period performance stats
- `data/previews/{tkz,stt,sui,original_exhibition}/YYYY/MM/DD.csv` — pre-race information (直前情報)
- `data/results/realtime/YYYY/MM/DD.csv` — semi-real-time results 5 to 30 minutes after closing
-…
