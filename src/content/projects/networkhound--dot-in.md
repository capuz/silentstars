---
repo: "networkhound/dot-in"
name: "dot-in"
description: "Daily snapshots of newly registered domains (NRDs) for the .IN registry"
readmeQualityOk: true
url: "https://github.com/networkhound/dot-in"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 10
forks: 0
openIssues: 1
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2025-11-13T15:21:52Z"
lastCommitAt: "2026-08-14T05:14:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 53
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/6d9840fd750508fe3004a6369155523b3246028ec42b440b16d88573127a5539/networkhound/dot-in"
---

## .in NRDs

This repository provides daily snapshots of newly registered domains (NRDs) for the .IN registry for threat intelligence and security research purposes.

This repository uses the GitHub Actions workflow defined in `.github/workflows/daily-domain-fetch.yml` and the `fetch_registry_domains.py` script to automatically fetch and extract domain data from the [.IN registry](https://registry.in) every morning at 9 AM IST, processing the previous day's registrations.

## Data format and source

Domains are organized by date in `YYYY/MM/domains_DD-MM-YYYY.txt` files, with one domain per line.

All data is sourced from registry.in's public domain creation reports. This repository simply automates the extraction and archival process.

## Reliability notice

**This repository will break if registry.in changes its domain reporting format or URL structure.** The extraction relies on the current URL structure and PDF table format.

No guarantees are made about data completeness or availability.

## Disclaimer

The maintainer of this repository:

- Makes no warranties about accuracy, completeness, or reliability of the data
- Is not responsible for how this data is used
- Is not…
