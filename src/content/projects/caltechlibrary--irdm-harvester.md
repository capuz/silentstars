---
repo: "caltechlibrary/irdm_harvester"
name: "irdm_harvester"
description: "Automatically harvest publications for an InvenioRDM repository"
readmeQualityOk: true
url: "https://github.com/caltechlibrary/irdm_harvester"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 1
openIssues: 5
closedIssues: 21
watchers: 5
contributors: 11
recentReleases: 0
createdAt: "2023-04-24T17:04:14Z"
lastCommitAt: "2026-11-02T15:17:32Z"
lastReleaseAt: "2024-02-29T21:30:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 73
maintainers: ["tdz339", "tmorrell", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d76d1424a5459b4384099b1ae66d4e179481046eea71c64dae3b618f41878066/caltechlibrary/irdm_harvester"
---

# InvenioRDM Harvester

This is a harvester that can automatically collect and submit works to an
InvenioRDM repository. It currently works with the CaltechAUTHORS repository and looks at CrossRef and ORCID.

release](https://img.shields.io/github/v/release/caltechlibrary/irdm_harvester.svg?color=b44e88)](https://github.com/irdm_harvester/template/releases)

## Table of contents

* [Introduction](#introduction)
* [Installation](#installation)
* [Usage](#usage)
* [Known issues and limitations](#known-issues-and-limitations)
* [Getting help](#getting-help)
* [Contributing](#contributing)
* [License](#license)
* [Authors and history](#authors-and-history)
* [Acknowledgments](#authors-and-acknowledgments)

## Introduction

Currently harvesting:

    - CrossRef by ROR
    - ORCID
    - CrossRef DOIs

## Usage

The harvests are typically run through [GitHub actions](https://github.com/caltechlibrary/irdm_harvester/actions) 
but could also be run on the command line.

You need to have a CaltechAUTHORS token available in the environment variable 
`RDMTOK`. For a CrossRef ROR harvest type

```bash
python harvest.py crossref
```

You can harvest a specific DOI with

```bash
python…
