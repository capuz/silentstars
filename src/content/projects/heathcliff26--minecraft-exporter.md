---
repo: "heathcliff26/minecraft-exporter"
name: "minecraft-exporter"
description: "A prometheus exporter for minecraft server"
readmeQualityOk: true
url: "https://github.com/heathcliff26/minecraft-exporter"
language: "Go"
languages: ["Go"]
languagePcts: [96]
stars: 5
forks: 1
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2024-01-18T19:25:28Z"
lastCommitAt: "2026-10-25T08:39:57Z"
lastReleaseAt: "2025-03-17T19:47:12Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 84
undervaluedScore: 54
maintainers: ["bot-ahsoka[bot]", "heathcliff26"]
openGraphImageUrl: "https://opengraph.githubassets.com/03e568de67535047cd5ca8b83930f087e5604dc62fa408315722bbc9614485ab/heathcliff26/minecraft-exporter"
---

# minecraft-exporter

This is a prometheus exporter for minecraft stats.
It collects metrics from the save folder, as well as over RCON.
This includes advancements, player stats, Tick stats and dynmap stats.
The exporter is implemented purely in golang for a small image and memory footprint.

Before i created this exporter, i used the one from [Joshi425](https://github.com/Joshi425/minecraft-exporter), which is why the dashboard looks nearly identical.
However it seems the other exporter is abandoned, so i wrote my own.
There is zero compatibility to the other exporter.

## Table of Contents

- [minecraft-exporter](#minecraft-exporter)
  - [Table of Contents](#table-of-contents)
  - [Container Images](#container-images)
    - [Image location](#image-location)
    - [Tags](#tags)
  - [Usage](#usage)
    - [Kubernetes](#kubernetes)
  - [Metrics](#metrics)
    - [Reduced Metrics](#reduced-metrics)
    - [RCON Metrics](#rcon-metrics)
      - [Since minecraft version 1.20.3](#since-minecraft-version-1203)
    - [(Neo)Forge Metrics](#neoforge-metrics)
    - [Paper Metrics](#paper-metrics)
    - [Dynmap Metrics](#dynmap-metrics)
  - [Dashboard](#dashboard)
    - [Minecraft -…
