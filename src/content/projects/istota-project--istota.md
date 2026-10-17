---
repo: "istota-project/istota"
name: "istota"
description: "Your intelligent personal OS"
readmeQualityOk: true
url: "https://github.com/istota-project/istota"
homepage: "https://istota.cynium.com"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["ai", "assistant", "claude-code", "homelab", "nextcloud", "personal", "self-hosted", "agent"]
stars: 14
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-02-17T05:04:56Z"
lastCommitAt: "2026-10-17T07:59:43Z"
lastReleaseAt: "2026-05-03T15:43:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 49
maintainers: ["stfnkbck"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ca6d970d87bb88ad823825d9e419ee5610a132671a692ebf6dda6709df39a15/istota-project/istota"
---

Istota runs on your own server or in a VM on your Mac. It combines chat, persistent memory, background jobs, and web applications for feeds, briefings, health, location, and money. The agent works across these through a maintained set of tools, with filesystem isolation, network restrictions, and credential handling enforced by the runtime. You choose the model and the services it can access.

Istota has been in active development since February 2026. The application, task history, and personal records live on infrastructure you control, and the installer brings up a working system.

[Documentation](https://istota.cynium.com/docs/) · [Security model](https://github.com/istota-project/istota/blob/HEAD/docs/deployment/security.md) · [Changelog](https://github.com/istota-project/istota/blob/HEAD/CHANGELOG.md) · [EUPL-1.2](https://github.com/istota-project/istota/blob/HEAD/LICENSE)

## Install

Choose a fresh Debian 13 machine dedicated to Istota, or an Apple silicon Mac with Lima. Both run the same container stack and Linux task sandbox. The machine must be dedicated because the container gets the access bubblewrap needs to build the sandbox, which is only acceptable with nothing…
