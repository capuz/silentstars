---
repo: "malomehi/acestream-search"
name: "acestream-search"
description: "Simple tool to scrape acestream links from HTML content"
readmeQualityOk: true
url: "https://github.com/malomehi/acestream-search"
language: "Python"
languages: ["Python"]
languagePcts: [91]
topics: ["acestream", "python", "streaming", "adb", "firetv", "sports", "android-tv", "android"]
stars: 23
forks: 4
openIssues: 1
closedIssues: 4
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-02-25T14:04:26Z"
lastCommitAt: "2026-10-22T08:51:33Z"
lastReleaseAt: "2024-03-12T23:05:46Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["malomehi", "pre-commit-ci[bot]", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/24748cd7e20b260aedcc802bd4067664c349243793a12957d1759ad9a9b23a53/malomehi/acestream-search"
---

# acestream-search
Simple tool to scrape acestream links from HTML content

## Install

You need to have `python` installed in your system. Just run the following command (I recommend using a python virtual environment):
```
pip install git+https://github.com/malomehi/acestream-search --upgrade
```

Alternatively download the executable files from the [release page](https://github.com/malomehi/acestream-search/releases) (Linux and Windows operating systems are supported, x64)

## Usage

### Console Tool

```console
$ acestream-search --help
usage: acestream-search [-h]
                        [--category {american_football,athletics,aussie_rules,badminton,bandy,baseball,basketball,beach_soccer,beach_volleyball,billiard,boxing,climbing,combat_sport,cricket,cycling,darts,e_sports,field_hockey,floorball,football,futsal,golf,handball,ice_hockey,lacrosse,mma,netball,padel_tennis,racing,rugby_league,rugby_sevens,rugby_union,table_tennis,tennis,triathlon,volleyball,water_polo,water_sports,winter_sport}]
                        [--search TEXT] [--hours HOURS] [--show-empty]

options:
  -h, --help            show this help message and exit
  --category…
