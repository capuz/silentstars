---
repo: "capy-zhiao/Job_Monitor"
name: "Job_Monitor"
description: "Customized monitoring of all job updates (SWE, SDE, Research, etc.)"
readmeQualityOk: true
url: "https://github.com/capy-zhiao/Job_Monitor"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 47
forks: 8
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2026-07-03T23:57:28Z"
lastCommitAt: "2026-11-01T22:58:51Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 39
maintainers: ["bot", "capy-zhiao"]
openGraphImageUrl: "https://opengraph.githubassets.com/2f5b9cb04ef0f611ddf6b1252c66e72ce9d1225a6c008dee700e06417c0dbeb8/capy-zhiao/Job_Monitor"
---

# job-monitor

-brightgreen)

## Why

I got tired of refreshing a pile of careers pages, so I wanted a job notifier
that does the filtering for me. Most companies serve their open roles from a
public JSON API (the same one their careers page calls). This subscribes to
those feeds, keeps only the roles that match my filters, remembers what it has
already seen, and pings me on Discord when a new one shows up.

## Description

A job notifier I built to filter openings the way I want and get a Discord ping
the moment something matches. It polls company career APIs on a schedule and only
sends postings that are new and match my keywords and locations. The monitor has no
third-party dependencies; Python 3.8+ standard library only. A separate `/linkedin`
Discord command searches LinkedIn on demand (see [below](#on-demand-linkedin-search)).

**Live jobs page:** all currently-open matches, refreshed on each scheduled run —
[capy-zhiao.github.io/Job_Monitor](https://capy-zhiao.github.io/Job_Monitor/)

Search across every source, filter by role category (Security / AI-ML / SDE /
Research), country (Canada / US), work type (full-time / intern), city, and recency, and star /
mark-applied any…
