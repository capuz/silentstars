---
repo: "navsuite/celestrak-orbital-data"
name: "celestrak-orbital-data"
description: "collection of leo constellation orbital parameters from celestrak"
readmeQualityOk: true
url: "https://github.com/navsuite/celestrak-orbital-data"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-08-11T04:27:24Z"
lastCommitAt: "2026-09-10T08:22:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 68
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/c2878ccc40ae4a670954aac53e14d1bf7a407a70e2a376d2ed13bcea5034b3bd/navsuite/celestrak-orbital-data"
---

# CelesTrak Orbital Data

A collection of LEO (Low Earth Orbit) constellation orbital parameters sourced from [CelesTrak](https://celestrak.org/).

## 📡 Overview

This repository provides automatically updated orbital data for various satellite constellations in LEO. The data is sourced from CelesTrak, a trusted provider of orbital element sets and collision assessment tools used by space professionals worldwide.

## 🚀 What's Included

- **TLE Files** (`.tle`): Two-Line Element sets containing orbital parameters
- **XML Files** (`.xml`): Orbital Mean Elements Messages (OMM) in XML format
- **Automated Updates**: Data is refreshed every 15 minutes via GitHub Actions

## 📊 Data Sources

All orbital data is sourced from [CelesTrak.org](https://celestrak.org/), a 501(c)(3) non-profit organization dedicated to making space data freely available to the space community.

## 🔄 Update Schedule

- **Frequency**: Every 15 minutes
- **Automation**: GitHub Actions workflow
- **Smart Updates**: Only commits when data actually changes

## 📋 File Formats

### TLE Format
Two-Line Element sets are the standard format for distributing orbital elements:
```
SATELLITE NAME
1 25544U 98067A…
