---
repo: "spreaker/poduptime"
name: "poduptime"
description: "Distributed uptime monitoring for the podcast industry"
url: "https://github.com/spreaker/poduptime"
homepage: "https://poduptime.com"
language: "JavaScript"
languages: ["JavaScript", "Astro"]
languagePcts: [52, 39]
topics: ["monitoring", "podcasting", "serverless"]
stars: 23
forks: 3
openIssues: 0
closedIssues: 11
watchers: 1
contributors: 30
recentReleases: 0
createdAt: "2023-10-26T08:09:39Z"
lastCommitAt: "2026-07-03T12:40:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 47
maintainers: ["lele85", "zakili", "roccozanni"]
openGraphImageUrl: "https://opengraph.githubassets.com/fcc23415ef09244fa3418b9e7234411e23f5bb0f5656891b2757029a3ae449f3/spreaker/poduptime"
---

# PodUptime

PodUptime is a distributed uptime monitoring for the podcast industry, developed and maintained by [Spreaker](https://www.spreaker.com). Its purpose is to measure the availability of hosting platforms and track prefixes.

This project originated as a side endeavor, aimed at assisting our Creators Success team in promptly assessing and addressing issues within the podcast industry that might impact our customers. For instance, it helps identify problems such as import procedures failing due to temporary unavailability of an RSS feed or RSS enclosure, or playback issues resulting from tracking prefix glitches.

## Architecture

PodUptime is made of 3 different components: `monitor`, `analytics`, and `website`.

### Monitor

The `monitor` component is responsible for performing the actual measurements and is a multi-region system deployed in three AWS Regions: `us-west-1`, `us-east-2`, and `eu-south-1`. These regions were chosen to avoid those where most companies typically host their workloads, ensuring an unbiased measurement.

The monitoring process starts with a scheduled `Lambda` function that runs every minute and pushes monitoring jobs to an `SQS` queue. Each job…
