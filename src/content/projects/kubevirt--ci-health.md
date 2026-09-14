---
repo: "kubevirt/ci-health"
name: "ci-health"
description: "Metrics about CI performance in repositories using Prow"
readmeQualityOk: true
url: "https://github.com/kubevirt/ci-health"
language: "Go"
languages: ["Go"]
languagePcts: [95]
topics: ["prow", "ci", "metrics", "prometheus", "kubevirt"]
stars: 11
forks: 14
openIssues: 2
closedIssues: 10
watchers: 1
contributors: 54
recentReleases: 0
createdAt: "2020-11-16T11:37:11Z"
lastCommitAt: "2026-09-14T09:12:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 96
undervaluedScore: 83
maintainers: ["kubevirt-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/6b449ff9421ee75f508b12d73859917f12d959f4ce373984552c2ac7f934559d/kubevirt/ci-health"
---

# ci-health

This repo contains code to calculate metrics about the performance of CI systems
based on Prow.

## Definitions

* Merge queue: list of Pull Requests that are ready to be merged at any given
date. For being ready to be merged they must:

  * Have the `lgtm` label.
  * Have the `approved` label.
  * Not have any label matching `do-not-merge/*`, i.e. `do-not-merge/hold`,  `do-not-merge/work-in-progress` etc. .
  * Not have any label matching `needs-*`, i.e. `needs-rebase`, `needs-ok-to-test` etc. .

* Merge queue length: number of PRs in the merge queue at a given time.
* Time to merge: for each merged PR, the time in days it took since it entered the merge
queue for the last time until it got finally merged.
* Retests to merge: for each merged PR, how many `/test` and `/retest` comments
were issued after the last code push.

## Status
This status is updated every 3 hours. The average values are calculated with
data from the previous 7 days since the execution time.

### kubevirt/kubevirt

[Latest execution data](https://kubevirt.io/ci-health/output/kubevirt/kubevirt/results.json)

[Latest weeks data](https://grafana.ci.kubevirt.io/d/WZU1-LPGz/merge-queue)

### Failures…
