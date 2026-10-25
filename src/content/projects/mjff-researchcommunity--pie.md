---
repo: "MJFF-ResearchCommunity/PIE"
name: "PIE"
description: "Parkinson's Insight Engine (PIE) is a Python-based data preprocessing and analysis pipeline designed for researchers working with the Michael J. Fox Foundation's Parkinson's Progression Markers Initiative (PPMI) dataset and other MJFF data."
readmeQualityOk: true
url: "https://github.com/MJFF-ResearchCommunity/PIE"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [53, 39]
stars: 7
forks: 4
openIssues: 3
closedIssues: 2
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2024-12-19T17:44:37Z"
lastCommitAt: "2026-10-25T22:10:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 74
maintainers: ["allianceai"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/905876719/676699af-1aff-46eb-9810-7b669e27abea"
---

# Parkinson's Insight Engine (PIE)

PIE is a Python toolkit for research on data from the Michael J. Fox Foundation's
[Parkinson's Progression Markers Initiative (PPMI)](https://www.ppmi-info.org/). It covers the
path from the raw PPMI download to a result you can defend.

| Layer | What it does | Docs |
|---|---|---|
| **Tabular ML pipeline** | Loads and cleans every PPMI study table, drops low-value columns, merges, engineers and selects features, then compares, tunes and reports classifiers. One command runs it all. | [pipeline](https://github.com/MJFF-ResearchCommunity/PIE/blob/HEAD/documentation/pipeline.md) |
| **Statistics** | Classical tests, regression, mixed models, survival analysis, multiple-testing correction, small-sample tools (bootstrap partial correlation, feature-subset search nested inside the validation folds), and PD helpers (LEDD, MDS-UPDRS totals, Hoehn & Yahr). Results come back as plain dictionaries. | [stats](https://github.com/MJFF-ResearchCommunity/PIE/blob/HEAD/documentation/stats.md) |
| **Experiments** | Cohort rules for PPMI's encoding traps, nested model selection that never sees its test partition, and provenance manifests. |…
