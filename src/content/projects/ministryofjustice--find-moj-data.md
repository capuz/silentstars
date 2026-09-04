---
repo: "ministryofjustice/find-moj-data"
name: "find-moj-data"
description: "Find MOJ data service • This repository is defined and managed in Terraform"
readmeQualityOk: true
url: "https://github.com/ministryofjustice/find-moj-data"
homepage: "https://find-moj-data.service.justice.gov.uk/"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [70, 22]
topics: ["data-catalogue"]
stars: 7
forks: 2
openIssues: 203
closedIssues: 783
watchers: 4
contributors: 63
recentReleases: 0
createdAt: "2024-01-12T15:26:07Z"
lastCommitAt: "2026-09-04T08:10:15Z"
lastReleaseAt: "2024-07-31T13:00:41Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 94
undervaluedScore: 77
maintainers: ["dependabot[bot]", "mkjmckinlay", "nathan-justice"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a0e364ec2ea1ec6b92e0bbabcfe06af83f61c050d7f6f4d8b2e720e953aa178/ministryofjustice/find-moj-data"
---

# Find MoJ data

Find MoJ data is an internal service for finding and sharing data across the Ministry of Justice.
It is powered by Datahub, an open source data catalogue. This repository contains a custom UI that
uses the GOV.UK design system, and focuses on data discovery.

# Prerequisites

## Npm

Required for building the front end javascript dependencies

## UV

Required for managing python package dependencies.
Follow installation instructions here https://docs.astral.sh/uv/getting-started/installation/

## 1Password

Organisational level tool for storing application secrets and passwords securely.
There are a number of 1password utilities available to manage credentials from cli and desktop environments.

1. Install the 1Password desktop app - https://support.1password.com/get-the-apps/
2. Install the 1Password CLI app - https://developer.1password.com/docs/cli/get-started/
3. Follow the steps to turn on and test the 1password desktop app integration

## Chromedriver

Tests will require chromedriver at a version compatible with your chrome browser (https://googlechromelabs.github.io/chrome-for-testing/)

## Datahub

[Datahub](https://datahubproject.io/) is the backend for…
