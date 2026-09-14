---
repo: "120318/Aethera"
name: "Aethera"
description: "Self-hosted media resource management service for BT users."
readmeQualityOk: true
url: "https://github.com/120318/Aethera"
language: "Python"
languages: ["Python"]
languagePcts: [73]
topics: ["docker", "fastapi", "media-management", "self-hosted", "vue"]
stars: 11
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-05-21T07:01:58Z"
lastCommitAt: "2026-09-14T09:12:31Z"
lastReleaseAt: "2026-08-08T11:20:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 31
maintainers: ["120318"]
openGraphImageUrl: "https://opengraph.githubassets.com/f8d45a2841553fd8a55c02656d24deab30819bd768fd670f893323e9dc22cb84/120318/Aethera"
discussionCount: 1
---

# Aethera

[中文](https://github.com/120318/Aethera/blob/HEAD/docs/readme-zh.md)

## Project Introduction

Aethera is a self-hosted media resource management service for BT users. It focuses on resource search, download dispatch, file transfer, media scraping, and library import, providing automation for the full media management workflow.

> **Note**
> 99.99% of this project was written by AI.

### Preface

Radarr and Sonarr are mature reference projects in media automation, but their support for Chinese media metadata and Chinese tracker ecosystems is not always a good fit. There have also been similar attempts in the Chinese community, but many of them cover too broad a scope and spread focus away from the core viewing workflow and advanced configuration.

As a media enthusiast, I built Aethera for this workflow. It integrates Douban search and ratings, fits Chinese user habits, and keeps the scope focused on viewing automation from resource discovery to library import. Aethera now covers my personal viewing workflow, so I decided to open source it for users with similar needs.

### Architecture

Aethera is designed for users who already run their own indexers, download clients,…
