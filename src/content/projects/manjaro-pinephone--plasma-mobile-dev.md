---
repo: "manjaro-pinephone/plasma-mobile-dev"
name: "plasma-mobile-dev"
description: "Development Builds of Plasma Mobile for the Pinephone"
readmeQualityOk: true
url: "https://github.com/manjaro-pinephone/plasma-mobile-dev"
language: "HTML"
languages: ["HTML"]
languagePcts: [100]
stars: 56
forks: 3
openIssues: 7
closedIssues: 17
watchers: 7
contributors: 4
recentReleases: 0
createdAt: "2021-01-26T18:07:50Z"
lastCommitAt: "2026-11-06T02:43:21Z"
lastReleaseAt: "2021-02-02T18:08:19Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 92
undervaluedScore: 43
maintainers: ["mjrghbot"]
openGraphImageUrl: "https://opengraph.githubassets.com/417330a379d14fe2cb3ba1b9506c8bd25488c66abca6d345bfcb8f9566cd60cb/manjaro-pinephone/plasma-mobile-dev"
---

# Manjaro Plasma-Mobile Developer Edition

## description

Development branch for Plasma-Mobile of Manjaro Linux for the Pinephone

## where can I download an iso?

Images are build and uploaded in a relatively regular interval to [github releases](https://github.com/manjaro-pinephone/plasma-mobile-dev/releases)

## sources

- [image profile](https://github.com/manjaro-pinephone/arm-profiles)

## building

1. check out the arm-profiles
2. `sudo buildarmimg -d pinephone -e plasma-mobile -v 20211003 -b unstable -k kde-unstable`
