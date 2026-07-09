---
repo: "bruneaug/DShield-SIEM"
name: "DShield-SIEM"
description: "DShield Sensor Log Collection with ELK"
readmeQualityOk: true
url: "https://github.com/bruneaug/DShield-SIEM"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
topics: ["arkime", "dshield", "elk-configuration", "elk-server", "elk-stack", "honeypot", "sensor", "daemonlogger", "filebeat", "logstash"]
stars: 47
forks: 9
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2021-12-29T19:18:03Z"
lastCommitAt: "2026-07-09T20:45:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 77
undervaluedScore: 52
maintainers: ["bruneaug"]
openGraphImageUrl: "https://opengraph.githubassets.com/05be99d7f799a474035142087a2f7bc467319a021a91a773dbe498689ce5acd2/bruneaug/DShield-SIEM"
---

# DShield Sensor Log Collection with Elasticsearch
## Introduction
This is fork and a significant update from the initial publication on the ISC Storm Center website by Scott Jensen as a BACS paper and the scripts published in Github.<br>
https://github.com/fkadriver/Dshield-ELK<br>
https://isc.sans.edu/diary/DShield+Sensor+Monitoring+with+a+Docker+ELK+Stack+Guest+Diary/30118<br>

This is a good reference on howto use DShield-SIEM for analysis: https://isc.sans.edu/diary/30962/

## DShield SIEM Network Flow
This provides an overview how the log collection with the DShield sensor is done.<br>
https://github.com/bruneaug/DShield-SIEM/blob/main/Troubleshooting/DShield-SIEM-Flow.png

# Why Used it?
This docker is custom built to be used with the [DShield Honeypot](https://isc.sans.edu/tools/honeypot/) to collect and parse the logs and collect the data to make it easy to search for research purposes. The suggested installation is to install the DShield sensor in a Rasperry using PI Raspbian OS or a system running Ubuntu 24.04 LTS either in your network or in the cloud of your choice.<br>

**Note**: This must be installed on a separate server as per the instruction below.<br>

- This…
