---
repo: "GridProtectionAlliance/openHistorian"
name: "openHistorian"
description: "The Open Source Time-Series Data Historian"
readmeQualityOk: true
url: "https://github.com/GridProtectionAlliance/openHistorian"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["time-series", "historian", "data-mining", "data-storage", "data-stream"]
stars: 202
forks: 55
openIssues: 6
closedIssues: 51
watchers: 41
contributors: 21
recentReleases: 0
createdAt: "2015-09-30T13:34:37Z"
lastCommitAt: "2026-07-24T06:09:11Z"
lastReleaseAt: "2021-11-18T05:57:05Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 93
undervaluedScore: 41
maintainers: ["gsfbuildbot", "ritchiecarroll", "clackner-gpa"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fcd47bfab6bd6eee1ee3cf21af1155a824919087b3a887aec76c0821adc0456/GridProtectionAlliance/openHistorian"
---

# openHistorian

The openHistorian is a back office system designed to efficiently integrate and archive process control data, e.g., SCADA, synchrophasor, digital fault recorder or any other time-series data used to support process operations.

The openHistorian is optimized to store and retrieve large volumes of time-series data quickly and efficiently, including high-resolution sub-second information that is measured very rapidly, e.g., many thousands of times per second.

# Overview
The openHistorian 2 is built using the [GSF SNAPdb Engine](http://www.gridprotectionalliance.org/technology.asp#SnapDB) - a key/value pair archiving technology developed to significantly improve the ability to archive extremely large volumes of real-time streaming data and directly serve the data to consuming applications and systems.

Through use of the [SNAPdb Engine](http://www.gridprotectionalliance.org/technology.asp#SnapDB), the openHistorian inherits very fast performance with very low lag-time for data insertion. The openHistorian 2 is a time-series implementation of the SNABdb engine where the "key" is a tuple of time and measurement ID, and the "value" is the stored data - which can be…
