---
repo: "nationalarchives/ds-caselaw-ingester"
name: "ds-caselaw-ingester"
description: "Parse judgements from the Transformation Engine and load them into MarkLogic as part of the National Archives Find Case Law service"
readmeQualityOk: true
url: "https://github.com/nationalarchives/ds-caselaw-ingester"
language: "Python"
languages: ["Python"]
languagePcts: [89]
topics: ["caselaw", "etl", "find-caselaw", "national-archives", "service"]
stars: 7
forks: 1
openIssues: 2
closedIssues: 3
watchers: 3
contributors: 20
recentReleases: 0
createdAt: "2022-03-24T15:13:21Z"
lastCommitAt: "2026-07-25T05:58:42Z"
lastReleaseAt: "2022-06-07T09:38:22Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 69
maintainers: ["renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/db14cc379d05f832e1a8f24ff111cc6bf11ddfee520552d9b32d875050cb6e9f/nationalarchives/ds-caselaw-ingester"
---

# The National Archives: Find Case Law

This repository is part of the [Find Case Law](https://caselaw.nationalarchives.gov.uk/) project at [The National Archives](https://www.nationalarchives.gov.uk/). For more information on the project, check [the documentation](https://github.com/nationalarchives/ds-find-caselaw-docs).

# Case Law Ingester

This is the repository for the lambda function used to parse Transformation Engine judgments and insert them to Marklogic

## Development

We're using [localstack](https://github.com/localstack/localstack), along with the awslocal-cli to enable local development of the lambda function.

### Requirements

An installation of `make` is required to use the bundled Makefile for local development. Most operating systems come with this preinstalled, including Ubuntu Linux and MacOS. On Windows, Make can be installed via the Chocolatey package manager, or using the Windows Subsystem for Linux (WSL).

You will also need both `awscli` and `awslocal-cli` installed. `awslocal-cli` is a `Localstack`-specific wrapper around `awscli`.

Install both from the requirements file using:

```bash
python3 -m pip install -r requirements/local.txt
```

For working…
