---
repo: "elkentaro/jp_incidents"
name: "jp_incidents"
description: "listing of recent jp incidents"
readmeQualityOk: true
url: "https://github.com/elkentaro/jp_incidents"
language: "Python"
languages: ["Python"]
languagePcts: [77]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-19T08:28:05Z"
lastCommitAt: "2026-10-24T00:15:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 39
maintainers: ["elkentaro"]
openGraphImageUrl: "https://opengraph.githubassets.com/74b7bb590e70c2b2b663cdddd2ffd16f74a36fe14f55d7b490e06ab851c48b18/elkentaro/jp_incidents"
---

# JP Incident Monitor

A Python collector and static, bilingual dashboard for publicly reported cybersecurity incidents affecting organizations in Japan.

The collector stores normalized incidents in SQLite, polls its sources hourly on the host machine, and writes the complete public dataset to `data/incidents.json` and `feed.xml`. The GitHub Pages site reads the JSON in the browser and paginates it at 100 records per page; feed readers can subscribe to the full-history RSS feed.

## Coverage and confidence

The collector keeps any relevant Japanese incident it finds, regardless of organization size. Its source mix includes broad Japanese/English news searches, security publications, incident aggregators, JPCERT/CC, global outlets filtered for Japan, and direct official-site layers.

The government layer covers:

- Tokyo Metropolitan Government
- All 23 Tokyo special wards
- All 20 ordinance-designated cities
- All 47 prefectural governments
- National privacy, cyber, financial, communications, industry, health, education, digital, police, and research authorities

The transport layer polls 92 major official operator and group sites across rail, subway, airlines, airports, buses,…
