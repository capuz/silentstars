---
repo: "hudcostreets/nj-crashes"
name: "nj-crashes"
description: "Analysis and visualization of traffic crash data published by NJ DOT and NJ State Police"
url: "https://github.com/hudcostreets/nj-crashes"
homepage: "https://crashes.hudcostreets.org/"
language: "Jupyter Notebook"
languages: ["Jupyter Notebook"]
languagePcts: [90]
topics: ["nj", "vision-zero", "njsp", "traffic-violence", "data-analysis", "data-visualization", "njdot"]
stars: 6
forks: 3
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2022-04-04T21:41:23Z"
lastCommitAt: "2026-06-28T03:08:16Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 73
maintainers: ["ryan-williams"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/477882967/cd7a3b2e-9104-4607-907e-14b602c4ae02"
---

# NJ Car Crash Data
Analysis of [NJ State Police fatal crash data][NJSP data] (2008-present) and [NJDOT crash data][NJDOT data] (2001-2023)

- Plots: [neighbor-ryan.org/nj-crashes](https://neighbor-ryan.org/nj-crashes/)
- Hudson County map: [neighbor-ryan.org/nj-crashes/hudson/map][hudco map]

Fatal crash data updates daily (via [GitHub Action](https://github.com/neighbor-ryan/nj-crashes/actions)), plots below are current through either the most recent month or year.

### NJ traffic deaths w/ 12mo rolling avg

### 2021 and 2022 set 17-year highs for traffic deaths in NJ

(NJSP only includes victim-type data since 2020)

### In NJ, traffic deaths are 1.5x-2x homicides

([Uniform Crime Reports][UCR data] 1990-2020, [Disaster Center][Disaster Center data] 1960-2019)

#### Traffic deaths, by month

---

## Setup

This project uses [uv](https://docs.astral.sh/uv/) for Python dependency management:

```bash
# Install dependencies
uv sync

# Run scripts
uv run njsp refresh_data
uv run njdot compute db

# Or activate the virtual environment
source .venv/bin/activate
njsp refresh_data
```

## Data Management

This repository tracks two distinct crash datasets with different update…
