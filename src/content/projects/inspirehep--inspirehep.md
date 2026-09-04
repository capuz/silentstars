---
repo: "inspirehep/inspirehep"
name: "inspirehep"
description: "Documentation: http://inspire.docs.cern.ch"
readmeQualityOk: true
url: "https://github.com/inspirehep/inspirehep"
homepage: "http://inspirehep.net"
language: "Python"
languages: ["Python", "JavaScript"]
languagePcts: [61, 22]
topics: ["backend", "inspirehep", "reactjs", "python", "frontend", "record-editor"]
stars: 26
forks: 29
openIssues: 0
closedIssues: 704
watchers: 6
contributors: 25
recentReleases: 0
createdAt: "2018-12-13T10:30:29Z"
lastCommitAt: "2026-09-04T08:10:50Z"
lastReleaseAt: "2019-12-10T13:47:30Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 99
undervaluedScore: 74
maintainers: ["DonHaul", "EliseRecejac", "ioannistsanaktsidis"]
openGraphImageUrl: "https://opengraph.githubassets.com/b5c4954cf1fdcba57459619a54998d415571631b0ec0064c34ebf331cd415b3f/inspirehep/inspirehep"
discussionCount: 0
---

# INSPIRE HEP 

Welcome to the INSPIRE monorepo!

This repository is the engine room behind inspirehep.net, housing the core services of an open access digital library that keep high-energy physics data moving.

As a monorepo, it currently contains three main services (besides helper services):

- **Inspirehep** - The main inspire service. It serves the website inspirehep.net / inspirebeta.net and calls to the required services.
- **Backoffice** - A Django app with the goal of fully replacing [inspire-next](https://github.com/inspirehep/inspire-next/) one day with the help of the workflows service
- **Workflows** - An airflow service responsible for running the workflows.

Okay, so now the question is: **how do we develop on it?**

## Table of Contents

- [INSPIRE HEP](#inspire-hep)
  - [Table of Contents](#table-of-contents)
  - [🐳 Running with docker (Recommended)](#-running-with-docker-recommended)
    - [Docker Prerequisites](#docker-prerequisites)
    - [Using Make](#using-make)
    - [Adding global variables](#adding-global-variables)
  - [💻 Running Locally (For the brave ones)](#-running-locally-for-the-brave-ones)
    - [Local System…
