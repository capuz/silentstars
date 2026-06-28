---
repo: "defgsus/parking-data"
name: "parking-data"
description: "historic archive of free parking places across germany"
url: "https://github.com/defgsus/parking-data"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["free", "parking", "spaces", "historic", "data", "archive", "csv"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2020-04-07T13:13:09Z"
lastCommitAt: "2026-06-28T02:02:53Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 80
undervaluedScore: 61
maintainers: ["defgsus"]
openGraphImageUrl: "https://opengraph.githubassets.com/06ac078768d74a152db18ed6cf29f92e85665fb54dc47d71336001a368b89ebe/defgsus/parking-data"
---

### historic archive of free parking places across germany

This repository contains the export of 
[parking-scraper](https://github.com/defgsus/parking-scraper) as CSV files.

There is a [small article](https://defgsus.github.io/blog/2021/04/08/one-year-parking.html)
written after one year of scraping.

Data gathering has started 2020/03/24 and this repository is updated daily.

Each day is stored in a single file in the `./csv` directory with the following layout:
```
timestamp                 | place_id1 | place_id2 | ...
2020-03-24T16:00:04+00:00 | 100       | 2         |
2020-03-24T16:01:02+00:00 | 99        |           |
2020-03-24T16:02:03+00:00 |           | 3         |
```

### export

You can use `export.py` to bundle them into a single file.

For example:

```shell script
# install some helper
pip install -r requirements.txt

# export everything and print to console
python export.py

# export everything to a file called everything.csv
python export.py -o everything.csv

# export first April
python export.py -d 2020-04-01

# export everything from April and May
python export.py -d 2020-04 2020-05

# export only parking places where ID contains muenster or ulm
python…
