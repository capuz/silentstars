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
lastCommitAt: "2026-10-25T08:40:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 52
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/086e77fdfec65b4b9012cf9da0db13ade00e377a9aa17f124574b04c8822d9e9/BoatraceCSV/boatracecsv.github.io"
---

# Boatrace Data Automation

Boatrace data is spread across proprietary formats, and collecting and formatting it takes a long time.
So we created CSV files with one race per row, which are easier to use for machine learning.
They can be downloaded over HTTPS, which also makes them easy for agents to access.
Updates are published once a day (real-time data every 5 minutes).
If you need the latest information, please use another source such as [Boatrace OpenAPI](https://github.com/BoatraceOpenAPI).

## Data Download

All files can be downloaded from the root `https://boatracecsv.github.io/` using the following paths.

- `data/programs/title/YYYY/MM/DD.csv` — race name per race
- `data/programs/race_cards/YYYY/MM/DD.csv` — detailed race card
- `data/programs/recent_national/YYYY/MM/DD.csv` — nationwide recent form (last 5 節)
- `data/programs/recent_local/YYYY/MM/DD.csv` — local venue recent form (last 5 節)
- `data/programs/motor_stats/YYYY/MM/DD.csv` — motor period results
- `data/previews/{tkz,stt,sui,original_exhibition}/YYYY/MM/DD.csv` — pre-race information (直前情報)
- `data/results/realtime/YYYY/MM/DD.csv` — semi-real-time results 5 to 30 minutes after the deadline
-…
