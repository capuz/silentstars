---
repo: "56dl/subs-checker"
name: "subs-checker"
description: "Subscription merge conversion detection tool"
originalDescription: "subs-checker"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/56dl/subs-checker"
language: "Go"
languages: ["Go", "HTML"]
languagePcts: [77, 20]
stars: 9
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-06T10:26:29Z"
lastCommitAt: "2026-07-14T05:54:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 66
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/66aca095dcf152f6ab4dd2e6407b5c983de9dc2617a641f574c7d0c083364078/56dl/subs-checker"
---

# Subscription Merge Conversion Detection Tool

Based on the [original project](https://github.com/beck-8/subs-check/commit/a7439254daed532bb1b1baa95e3cca470881c6f6), this is an independent project that retains the core subscription node detection and outputs valid nodes.

> **Note:** Features are added frequently, please check the latest [configuration file](https://github.com/bruceblink/subs-checker/blob/master/config/config.example.yaml) for updates.

## Preview

## Features

- Detect node availability and remove unavailable nodes
  - New parameter `keep-success-proxies` to persistently save successfully tested nodes, which can prevent the loss of available nodes due to upstream link updates; this feature is off by default.
- Check platform unlocking status (requires manual activation of the parameter `media-check`)
  - openai
  - youtube
  - netflix
  - disney
  - gemini
  - IP fraud score
- Merge multiple subscriptions
- Convert subscriptions to clash/clash.meta/base64/QX and other [any format subscriptions](https://github.com/bruceblink/subs-checker?tab=readme-ov-file#%E8%AE%A2%E9%98%85%E4%BD%BF%E7%94%A8%E6%96%B9%E6%B3%95)
- Node deduplication
- Node renaming
- Node speed…
