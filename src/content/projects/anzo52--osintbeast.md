---
repo: "Anzo52/osintbeast"
name: "osintbeast"
description: "Combining (mostly) Python OSINT tools into a single framework with support for sqlite3 database, currently working on mysql support."
readmeQualityOk: true
url: "https://github.com/Anzo52/osintbeast"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["crawling-python", "information-gathering", "information-retrieval", "infosec", "open-source-intelligence", "open-source-research", "osint", "osint-framework", "osint-python", "socmint"]
stars: 5
forks: 1
openIssues: 12
closedIssues: 40
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2022-12-01T03:14:33Z"
lastCommitAt: "2026-11-23T10:16:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 92
undervaluedScore: 78
maintainers: ["Anzo52"]
openGraphImageUrl: "https://opengraph.githubassets.com/13605624e5e4b9a94e301109ae42e85897c59e44275a37e93e1ba539ea67ca92/Anzo52/osintbeast"
discussionCount: 0
---

# OSINT Beast

OSINT Beast is a Python command-line framework for organizing authorized open-source intelligence (OSINT) workflows. It provides a curated registry of tools and uses SQLite to store structured records and tool results. The project is under active development; see the [documentation](https://github.com/Anzo52/osintbeast/blob/HEAD/doc/wiki/Home.md), [development roadmap](#development-roadmap), and [development notes](https://github.com/Anzo52/osintbeast/blob/HEAD/doc/NOTES.md).

## Current capabilities

- Browse the tool registry and check whether each tool is installed.
- Download registered tools and install supported Python packages through the CLI. Binary tools such as Amass require manual installation.
- Initialize a local SQLite database for OSINT records and tool metadata.
- Run Holehe email checks and optional Maigret, Helix OSINT, and Sherlock username checks, with recorded outcomes.
- Review, filter, and page through prior runs; inspect results and export selected runs as JSON.
- Query stored database records from the CLI.
- Launch authorized checks and retrieve their status and results through a local API.
