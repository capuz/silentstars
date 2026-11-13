---
repo: "auricom/home-ops"
name: "home-ops"
description: "My home Kubernetes (talos) cluster managed by GitOps (Flux2) and serviced with RenovateBot"
readmeQualityOk: true
url: "https://github.com/auricom/home-ops"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [47, 36]
topics: ["flux", "kubernetes", "k8s-at-home", "helm", "renovate", "gitops", "talhelper", "talos"]
stars: 211
forks: 8
openIssues: 1
closedIssues: 7
watchers: 2
contributors: 6
recentReleases: 0
createdAt: "2020-11-19T08:20:40Z"
lastCommitAt: "2026-11-13T11:25:05Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 97
undervaluedScore: 40
maintainers: ["feisar-bot[bot]", "auricom"]
openGraphImageUrl: "https://opengraph.githubassets.com/de51b4710ed5e92107c5bf1106dc2a292efa8f7b097e37b1faa4a6fb34e70585/auricom/home-ops"
---

# README.md

## My home Kubernetes cluster :sailboat:

... managed with Flux and Renovate :robot:

## AdGuard allowlist

The [allowlist](https://github.com/auricom/home-ops/blob/HEAD/filters/adguard-allowlist.txt) is served at
[this raw URL](https://raw.githubusercontent.com/auricom/home-ops/main/filters/adguard-allowlist.txt)
and configured as an enabled subscription in Ansible's shared AdGuard configuration.
Add one exception rule per line, such as `@@||celestia.dev^` to allow a domain and all its subdomains.

Merge the list to `main` and verify the raw URL is available before deploying the Ansible configuration.
AdGuard checks for filter updates every 24 hours.
