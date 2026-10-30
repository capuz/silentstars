---
repo: "hoooou/my_yml"
name: "my_yml"
description: "Personal-use clash"
originalDescription: "自用clash"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/hoooou/my_yml"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-11-29T17:15:02Z"
lastCommitAt: "2026-10-30T11:02:33Z"
lastReleaseAt: "2022-02-15T04:05:44Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 67
maintainers: ["hoooou", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/51932465c16f90d5cc0f17cb63b69397ed5d9a41a1af6fddbea0d678e2a69460/hoooou/my_yml"
---

# Clash / v2rayN Node Selection and Testing Guide

Every 6 hours (Beijing time 05:00, 11:00, 17:00, and 23:00), free GitHub Actions fetches public subscriptions, removes duplicates, tests the nodes in the cloud, and generates complete configurations for FlClash and Clash Meta / Mihomo. The goal is entry points that are reachable, responsive, stable, and have good upload and download speeds. A change in exit IP alone is not a reason to eliminate a node.

[Latest test summary](#节点检测报告) · [Latest stage statistics JSON](https://github.com/hoooou/my_yml/blob/HEAD/最新检测.json) · [Current subscription statistics JSON](https://github.com/hoooou/my_yml/blob/HEAD/连通性报告.json) · [GitHub Actions](https://github.com/hoooou/my_yml/actions)

## Usage and Groups

Add the remote configuration in your client. The three addresses have identical content, so choose the one that loads on your network:

```text
# China-first: jsDelivr Gcore node
https://gcore.jsdelivr.net/gh/hoooou/my_yml@main/%E4%BC%98%E9%80%89%E9%85%8D%E7%BD%AE.yaml

# Backup: jsDelivr default node
https://cdn.jsdelivr.net/gh/hoooou/my_yml@main/%E4%BC%98%E9%80%89%E9%85%8D%E7%BD%AE.yaml

# Original address: GitHub raw, often needs a proxy…
