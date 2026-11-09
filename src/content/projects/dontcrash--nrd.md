---
repo: "dontcrash/NRD"
name: "NRD"
description: "TLD separated newly registered domain lists for use in DNS blocking"
readmeQualityOk: true
url: "https://github.com/dontcrash/NRD"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 26
forks: 8
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2023-11-19T14:04:51Z"
lastCommitAt: "2026-11-09T03:30:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 64
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b2399871cfb444fb838f094a6bd19531a6a2e13c18b8e63db56fc8ee232b82b/dontcrash/NRD"
---

## NRD Blocklist Splitter
This script automates the update process for a blocklist of newly registered domains from [hagezi/nrd](https://github.com/hagezi/nrd).

The original lists contain every single TLD in each file, which leads to long update times, by breaking the lists apart, it allows the end user to select what newly registered domains they want to block based on TLD.

A GitHub action runs daily, updating each TLD file in the lists directory and the badge below indicates if the script executed successfully.
