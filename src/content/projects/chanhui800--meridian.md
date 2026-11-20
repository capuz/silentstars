---
repo: "chanhui800/Meridian"
name: "Meridian"
description: "Multi-site reverse proxy and node scheduling panel for Emby/Jellyfin, supporting automatic origin discovery, IPv4/IPv6 dual-stack Agent, TLS, traffic statistics, request logs, and Telegram daily reports"
originalDescription: "Emby/Jellyfin 多站点反向代理与节点调度面板，支持自动回源发现、IPv4/IPv6 双栈 Agent、TLS、流量统计、请求日志和 Telegram 日报"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/chanhui800/Meridian"
homepage: "https://emby.fydivine.com"
language: "Go"
languages: ["Go"]
languagePcts: [71]
topics: ["docker", "emby", "golang", "jellyfin", "media-server", "reverse-proxy"]
stars: 92
forks: 8
openIssues: 0
closedIssues: 3
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-08-05T10:36:03Z"
lastCommitAt: "2026-11-20T11:59:34Z"
lastReleaseAt: "2026-08-07T07:26:22Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 36
maintainers: ["chanhui800", "binaryu"]
openGraphImageUrl: "https://opengraph.githubassets.com/cf34f1d28c6ece8ed936b2573fc785cc208c7d67ac8e19aed62733db9cd875c9/chanhui800/Meridian"
discussionCount: 0
---

# Meridian

Meridian is a multi-site reverse proxy and node scheduling panel for Emby and Jellyfin. It puts site entry points, backup routes, playback address rewriting, traffic statistics, request logs, viewing history, TLS, and an optional edge Agent into a single control panel.

For the official installation version and checksum files, refer to the [latest GitHub Release](https://github.com/chanhui800/Meridian/releases/latest). This document describes the current main branch; unreleased changes will be delivered in later official versions. Node scheduling is enabled per site, and sites where it is not enabled continue to use the original panel entry point.

## Interface Preview

The screenshots below only show the interface layout and use demo data. The screenshots contain no production domains, IPs, tokens, or certificates.

| Dashboard | Site Management |
| --- | --- |
|  |  |
| Node Scheduling | Request Logs |
|  |  |
| Viewing History | Global Settings |
|  |  |
| TLS Settings | Telegram Daily Report |
|  |  |
