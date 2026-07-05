---
repo: "michigandaily/dte-outage-tracker"
name: "dte-outage-tracker"
description: "Retrieve DTE outage data."
readmeQualityOk: true
url: "https://github.com/michigandaily/dte-outage-tracker"
language: "JavaScript"
languages: ["JavaScript", "Shell"]
languagePcts: [73, 27]
stars: 6
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2023-02-23T03:36:50Z"
lastCommitAt: "2026-07-05T21:00:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 79
maintainers: ["github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/637580dff6cb9d7c71929c3f61900ca8582f0db0220441e84086be8c937aa272/michigandaily/dte-outage-tracker"
---

# dte-outage-tracker

Retrieve [DTE](https://www.dteenergy.com/) outage data.

## Retrieving historical data

The `main.mjs` script runs every hour on GitHub Actions.

- The script retrieves high-level data from the internal DTE [Kubra](https://www.kubra.com/) API and writes to `data-api.json`.
- The script also retrieves high-level data from the external-facing DTE dashboard and writes to `data-home.json`.
- In addition, the script writes to `data.csv` with more granular Kubra data based on ZIP Code.

The script overwrites these files on each run, but we are still able to retrieve historical data based on Git commit history using the [`git-history`](https://github.com/simonw/git-history) package authored by [Simon Willison](https://en.wikipedia.org/wiki/Simon_Willison).

### Setup

1. Run `python3 -m venv venv` to create a virtual environment.
2. Run `source venv/bin/activate` to activate the virtual environment.
3. Run `pip install -r requirements.txt` to install dependencies.

### Scripts

- Run `./data-api.sh` to generate a SQL database at `data-api.sqlite` of historical data based on `data-api.json` commit history.
- Run `./data-home.sh` to generate a SQL database at…
