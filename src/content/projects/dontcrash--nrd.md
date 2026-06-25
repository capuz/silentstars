---
repo: "dontcrash/NRD"
name: "NRD"
description: "TLD separated newly registered domain lists for use in DNS blocking"
url: "https://github.com/dontcrash/NRD"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 21
forks: 7
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-11-19T14:04:51Z"
lastCommitAt: "2026-06-25T02:07:32Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 68
maintainers: ["actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/2057cc3b92142e7b34d13184fae15a5bfd5642375cdcbc53f2cec6401d326edf/dontcrash/NRD"
---

## NRD Blocklist Splitter
This script automates the update process for a blocklist of newly registered domains from [https://github.com/hagezi/dns-blocklists?tab=readme-ov-file#nrd](https://github.com/hagezi/dns-blocklists?tab=readme-ov-file#nrd)

The original list contains every single TLD in one file, which leads to long update times, by breaking the list apart, it allows the end user to select what newly registered domains they want to block based on TLD.

A GitHub action runs daily, updating each TLD file in the lists directory and the badge below indicates if the script executed successfully.
