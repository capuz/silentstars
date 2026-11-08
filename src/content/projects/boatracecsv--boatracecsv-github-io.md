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
lastCommitAt: "2026-11-08T10:40:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 62
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/a78d325a8333e7aea6c15a4fca83d325317e452a17587cecbb82c175765bae09/BoatraceCSV/boatracecsv.github.io"
---

# Boatrace Data Automation

Boatrace data is spread across proprietary formats, and collecting and formatting it takes a lot of time. To make it easier to use for machine learning, we created CSV files with one race per row.
Since the files can be downloaded over HTTPS, they are also easy for Agents to access.
Updates are made once a day (real-time data every 5 minutes).
If you need the latest information, please use another source such as [Boatrace OpenAPI](https://github.com/BoatraceOpenAPI).

## Data Download

All files can be downloaded from the root `https://boatracecsv.github.io/` using the following paths.

- `data/programs/title/YYYY/MM/DD.csv` — per-race race name
- `data/programs/race_cards/YYYY/MM/DD.csv` — detailed racecard
- `data/programs/recent_national/YYYY/MM/DD.csv` — nationwide recent form (last 5 setsu)
- `data/programs/recent_local/YYYY/MM/DD.csv` — local venue recent form (last 5 setsu)
- `data/programs/motor_stats/YYYY/MM/DD.csv` — motor period performance
- `data/previews/{tkz,stt,sui,original_exhibition}/YYYY/MM/DD.csv` — pre-race information
- `data/results/realtime/YYYY/MM/DD.csv` — near-real-time results 5 to 30 minutes after closing
-…
