---
repo: "jwbensley/dfz_name_and_shame"
name: "dfz_name_and_shame"
description: "DFZ Name and Shame - A Twitter bot which tweets stats about the BGP DFZ."
readmeQualityOk: true
url: "https://github.com/jwbensley/dfz_name_and_shame"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["bgp", "bgp-dfz", "twitter-bot", "python3", "mrt"]
stars: 5
forks: 0
openIssues: 15
closedIssues: 91
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-12-23T10:34:34Z"
lastCommitAt: "2026-10-25T09:00:59Z"
status: "thriving"
tags: ["under_pressure"]
healthScore: 86
undervaluedScore: 52
maintainers: ["jwbensley", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2e74b2324e03c4ae50e16e4d037ae6ef609aead4e23b6226903f64faf829b9c/jwbensley/dfz_name_and_shame"
---

# DFZ Name and Shame Bot

## Overview

This repo contains the "code"[^1] and configuration files for the BGP DFZ Name and Shame ("DNAS") bot on Twitter: <https://twitter.com/bgp_shamer>

The ultimate output of this code are the daily reports published here: <https://github.com/DFZ-Name-and-Shame/dnas_stats>

The bot is written in Python3 and runs in several Docker containers. These containers form a rudimentary pipeline:  

* data collection (1 container continuously downloads MRT files from public and private sources as they become available)
* data ingest (1 container continuously parses the MRT as they are downloaded and the stats for each MRT file are stored in a Redis DB, consuming a real-time firehose API or similar is not currently planned)
* daily report (once per day a container is started to compile together the stats generated from all the MRTs parsed for the previous day, generate a report which is committed and pushed to GitHub, and Tweet the availability of the report and the headlines of the report)

The each stage can also be run individually in a retrospective mode, in which stats are generated and published for the previous day.

[^1]: If your standards are low…
