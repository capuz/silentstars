---
repo: "mrdedede/Eleicoes-Cachorreira-2022"
name: "Eleicoes-Cachorreira-2022"
description: "Project in Streamlit that includes: A login interface, a voting scheme, voter analytics and election result analytics"
readmeQualityOk: true
url: "https://github.com/mrdedede/Eleicoes-Cachorreira-2022"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["analytics", "election", "election-analysis", "election-data", "elections", "python", "streamlit"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2022-11-14T18:54:13Z"
lastCommitAt: "2026-11-15T11:21:12Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 33
maintainers: ["mrdedede"]
openGraphImageUrl: "https://opengraph.githubassets.com/1f1ba21d96326453ad238c8118bd92d979d933e17c8a3595a2941bb127742f2d/mrdedede/Eleicoes-Cachorreira-2022"
---

# Eleições Cachorreira 2022

A small voting system built with [Streamlit](https://streamlit.io/) for a group of friends who wanted to elect their next representative.

The app has four parts:

- **Login screen**: voters identify themselves with an electoral ID and username.
- **Voting screen**: each voter sees only the candidates from their own region ("pote") and casts one vote.
- **Pre-vote analytics**: charts describing the pool of eligible voters (by network, group and region).
- **Results**: partial results overall, per mesoregion (electoral group) and per region, including turnout (votes vs. abstentions).

## Table of contents

- [Requirements](#requirements)
- [Running the project](#running-the-project)
- [How the app works](#how-the-app-works)
- [Project structure](#project-structure)
- [Data files](#data-files)
- [Preparing an election](#preparing-an-election)
- [Known limitations](#known-limitations)

## Requirements

- Python 3
- [streamlit](https://pypi.org/project/streamlit/)
- [pandas](https://pypi.org/project/pandas/)
- [matplotlib](https://pypi.org/project/matplotlib/) (used by both analytics pages)

There is no `requirements.txt` yet, so install the dependencies…
