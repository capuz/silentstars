---
repo: "thecont1/traffic-monitor-lizard"
name: "traffic-monitor-lizard"
description: "A system to monitor and analyse road traffic flow on pre-determined routes within a city."
readmeQualityOk: true
url: "https://github.com/thecont1/traffic-monitor-lizard"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [96]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-09-22T16:11:27Z"
lastCommitAt: "2026-08-29T10:22:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 60
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/20e876d28f7823e690d17198365d3418fdaf77a238ff65fc3c67942b0fef3fb4/thecont1/traffic-monitor-lizard"
---

# Traffic Monitor Lizard

The data engine behind [traffiCOracle](https://github.com/thecont1/traffic-oracle). This project builds a dataset of live hyperlocal traffic and weather readings, and provides a full toolkit for analysing and visualising the results.

It is designed for **civic technologists**, **urban planners**, **data journalists**, and **researchers** who want a transparent, reproducible pipeline for understanding how a city moves, how traffic patterns evolve, what factors influence travel times, and the characteristics of roads and routes.

---

## What it does

An automated script periodically asks Google Maps to estimate how long it would take to go from Point A to Point B, for each from a set of pre-determined routes, and records the result. Over weeks and months, this builds up a rich dataset. The project also pulls in local weather data so you can later ask whether rain or heat correlate with traffic congestion.

Because everything is stored as plain CSV files in a public GitHub repository, the data is **open** (anyone can download and verify it), **versioned** (every commit is a snapshot in time) and **reusable** (the companion dashboard traffiCOracle reads…
