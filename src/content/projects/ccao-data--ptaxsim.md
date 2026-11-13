---
repo: "ccao-data/ptaxsim"
name: "ptaxsim"
description: "R package for estimating Cook County property tax bills"
readmeQualityOk: true
url: "https://github.com/ccao-data/ptaxsim"
homepage: "https://ccao-data.github.io/ptaxsim/"
language: "R"
languages: ["R"]
languagePcts: [95]
topics: ["r", "assessment", "r-package", "taxes", "property-taxes", "research"]
stars: 23
forks: 4
openIssues: 21
closedIssues: 30
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2023-06-30T20:39:19Z"
lastCommitAt: "2026-11-13T18:33:34Z"
lastReleaseAt: "2026-05-06T20:47:55Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 66
undervaluedScore: 36
maintainers: ["kyrasturgill", "jeancochrane", "Damonamajor"]
openGraphImageUrl: "https://opengraph.githubassets.com/74f6c0a89d3318c2888bf893e48f2c09ce6fb979068c1e261b44e7e0ecb89cc8/ccao-data/ptaxsim"
---

Table of Contents
================

- [PTAXSIM](#ptaxsim)
- [FAQs](#faqs)
- [Installation](#installation)
  - [Package installation](#package-installation)
  - [Database installation](#database-installation)
- [Usage](#usage)
  - [Single bill, single year](#single-bill-single-year)
  - [Single bill, multiple years](#single-bill-multiple-years)
- [Data](#data)
  - [Data sources](#data-sources)
  - [Database diagram](#database-diagram)
- [Notes and caveats](#notes-and-caveats)
- [Disclaimer](#disclaimer)
- [Release procedures](#release-procedures)
  - [Schema](#schema)
  - [Timing](#timing)
  - [Checklists](#checklists)

## PTAXSIM

> :warning: NOTE: PTAXSIM relies on a separate SQLite database to
> function correctly. You must download and decompress the database
> before using this package! See [Database
> installation](#database-installation) for details.
>
> [**Link to PTAXSIM
> database**](https://ccao-data-public-us-east-1.s3.amazonaws.com/ptaxsim/ptaxsim-2025.0.0.db.bz2)
> (DB version: 2025.0.0; Last updated: 2026-11-10 17:18:26)

PTAXSIM is an R package/database to approximate Cook County property tax
bills. It uses real assessment, exemption, TIF, and levy data to
generate…
