---
repo: "swan-cern/swan-charts"
name: "swan-charts"
description: "Helm charts for SWAN and k8s configurations"
readmeQualityOk: true
url: "https://github.com/swan-cern/swan-charts"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [75, 24]
stars: 6
forks: 10
openIssues: 6
closedIssues: 17
watchers: 5
contributors: 15
recentReleases: 0
createdAt: "2020-06-18T08:15:07Z"
lastCommitAt: "2026-11-03T10:52:46Z"
lastReleaseAt: "2022-11-10T09:36:57Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 83
maintainers: ["github-actions[bot]", "thozo", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df4f811cd55b310df378b44691297a2924fca8c601aa7f43edf0073fb13e703/swan-cern/swan-charts"
---

# SWAN Helm Charts

This repository contains the Helm charts of the SWAN web-based analysis service. Two charts are provided:
- `swan`: generic SWAN k8s resources and settings, which can be used to deploy SWAN on premises.
- `swan-cern`: CERN-specific k8s resources and settings, used for the central instance of SWAN at CERN.
- `swan-cern-system`: CERN-specific k8s resources that support the SWAN main application, to be deployed cluster wide.
