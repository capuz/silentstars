---
repo: "swan-cern/swan-charts"
name: "swan-charts"
description: "Helm charts for SWAN and k8s configurations"
readmeQualityOk: true
url: "https://github.com/swan-cern/swan-charts"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [72, 26]
stars: 6
forks: 10
openIssues: 6
closedIssues: 17
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2020-06-18T08:15:07Z"
lastCommitAt: "2026-10-20T08:49:03Z"
lastReleaseAt: "2022-11-10T09:36:57Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 92
undervaluedScore: 83
maintainers: ["github-actions[bot]", "tomasr8", "thozo"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aac1998da6f80342cf3a69e3bdc4f410f2f6e41d74ea4f3908720c888133360/swan-cern/swan-charts"
---

# SWAN Helm Charts

This repository contains the Helm charts of the SWAN web-based analysis service. Two charts are provided:
- `swan`: generic SWAN k8s resources and settings, which can be used to deploy SWAN on premises.
- `swan-cern`: CERN-specific k8s resources and settings, used for the central instance of SWAN at CERN.
- `swan-cern-system`: CERN-specific k8s resources that support the SWAN main application, to be deployed cluster wide.
