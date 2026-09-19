---
repo: "open-space-collective/open-space-toolkit-data"
name: "open-space-toolkit-data"
description: "Automatically 🪄 fetch data for the space environment."
readmeQualityOk: true
url: "https://github.com/open-space-collective/open-space-toolkit-data"
language: "Python"
languages: ["Python"]
languagePcts: [86]
stars: 5
forks: 2
openIssues: 4
closedIssues: 0
watchers: 5
contributors: 7
recentReleases: 0
createdAt: "2023-07-18T20:50:58Z"
lastCommitAt: "2026-09-19T01:35:51Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 64
maintainers: ["kyle-cochran"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee4cdd5afc78ef1993342205fc78f3e5915447d3f312f507ac6ac31ba43e328a/open-space-collective/open-space-toolkit-data"
---

# Open Space Toolkit ▸ Data

Data for the space environment automatically fetched using Github Actions.

## Getting Started

You can clone this repository and run the data fetching yourself. [*requires Docker*].

```bash
make pull-data
```

However since the data is update periodically on the remote, a regular 'ole `git pull` should be sufficient to keep you updated!

If you really want to see it in action, feel free to delete the entire `data` directory and run `make pull-data` again.

## Setup

### Development Environment

Using [Docker](https://www.docker.com) for development is recommended, to simplify the installation of the necessary build tools and dependencies.
Instructions on how to install Docker are available [here](https://docs.docker.com/install/).

To start the development environment:

```bash
make start-development
```

## How It Works

This repo contains a selection of data files intended for use with the Open Space Toolkit collection of libraries. All data is publicly available and comes from other sources, so OSTk Data simply acts as an aggregator for space environment data. This helps when the primary data sources might be flaky and separates some of the data…
