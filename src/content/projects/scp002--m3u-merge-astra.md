---
repo: "SCP002/m3u-merge-astra"
name: "m3u-merge-astra"
description: "Heavily configurable CLI tool to add channels from M3U playlist into Cesbo Astra 5"
readmeQualityOk: true
url: "https://github.com/SCP002/m3u-merge-astra"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["astra", "cesbo", "cli-app", "m3u", "m3u8", "cesbo-astra", "astra-5", "cesbo-astra-5"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2022-09-27T18:31:42Z"
lastCommitAt: "2026-11-20T12:03:13Z"
lastReleaseAt: "2024-07-20T19:57:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 96
undervaluedScore: 71
maintainers: ["SCP002"]
openGraphImageUrl: "https://opengraph.githubassets.com/4a1c7af2c9024e766568f2cbfc09ab2d5bd0a4a5aadb8756914b97643da63cf7/SCP002/m3u-merge-astra"
---

# m3u-merge-astra

## What is this?

Heavily configurable CLI tool to add channels from M3U playlist into Cesbo Astra 5.

## Why was it made?

To simplify the process of adding new, updating and removing astra streams and it's inputs.

## How it works?

It connects to astra using API, reads its config (mostly streams), adds M3U channels into it from `--m3uPath` by rules
defined in `--programCfgPath` and sends requests to astra to modify config.

## How to use it?

| Command argument     | Description                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------- |
| -v, --version        | Print the program version                                                                       |
|     --update         | Check for updates, update and exit                                                              |
| -h, --help           | Print help message                                                                              |
