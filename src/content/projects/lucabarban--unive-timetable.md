---
repo: "LucaBarban/unive-timetable"
name: "unive-timetable"
description: "A simple lesson scraper with automatic calendar sync"
readmeQualityOk: true
url: "https://github.com/LucaBarban/unive-timetable"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 16
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-11-30T10:40:14Z"
lastCommitAt: "2026-09-09T08:18:37Z"
lastReleaseAt: "2025-09-25T07:17:05Z"
status: "thriving"
tags: ["needs_contributors"]
healthScore: 55
undervaluedScore: 22
maintainers: ["saccarosium", "LucaBarban"]
openGraphImageUrl: "https://opengraph.githubassets.com/1c1ad6e131a5278a58548c67f88bf5010b2212d019ab241f0187d0db26e653d7/LucaBarban/unive-timetable"
---

# unive-timetable

Simple python scraper for unive's timetable.

## Installing

For installing the package itself you can simply clone it on your machine. Or
grab a release zip file.

```bash
# You can git clone
git clone https://github.com/LucaBarban/unive-timetable.git
# Or download the zip file from GitHub
```
## Running the script

```bash
python3 -m unive_timetable
```

## Configuration

The script createas automaticly an **empty** config when you first run it.
Before you run the script again you should populate the config with your info.

# Notes on the data source
If in the past we directly scraped the website, after finding the [open data webpage](https://www.unive.it/pag/13488/) we found out that an official API is provided and [documented here](https://www.unive.it/pag/fileadmin/user_upload/ateneo/mobile/documenti/WebserviceCorsi-Insegnamenti-Orari-Aule-Sedi.pdf). As far as we know, there are no filtering options, which means that the whole timetable for the entire university has to be downloaded. We implemented some caching to make reruns of the script faster.
