---
repo: "nationalarchives/ds-caselaw-data-enrichment-service"
name: "ds-caselaw-data-enrichment-service"
description: "Judgment citation annotations for the National Archives Find Case Law service"
readmeQualityOk: true
url: "https://github.com/nationalarchives/ds-caselaw-data-enrichment-service"
homepage: "https://caselaw.nationalarchives.gov.uk"
language: "Python"
languages: ["Python"]
languagePcts: [82]
topics: ["find-caselaw", "caselaw", "national-archives"]
stars: 24
forks: 2
openIssues: 2
closedIssues: 7
watchers: 6
contributors: 24
recentReleases: 0
createdAt: "2022-05-12T08:43:18Z"
lastCommitAt: "2026-07-04T22:17:53Z"
lastReleaseAt: "2024-10-30T11:04:50Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 95
undervaluedScore: 61
maintainers: ["renovate[bot]", "anthonyhashemi"]
openGraphImageUrl: "https://opengraph.githubassets.com/ef361483baa41cf56b22efe908fbbea1f232da3cc41a2606d9934934ef3ac653/nationalarchives/ds-caselaw-data-enrichment-service"
---

# The National Archives: Find Case Law

This repository is part of the [Find Case Law](https://caselaw.nationalarchives.gov.uk/) project at [The National Archives](https://www.nationalarchives.gov.uk/). For more information on the project, check [the documentation](https://github.com/nationalarchives/ds-find-caselaw-docs).

# Judgment Enrichment Pipeline

Marks up judgments in [Find Case Law](https://caselaw.nationalarchives.gov.uk) with references to other cases and legislation.

# Description of system

[A description of the system's architecture](DESCRIPTION.md)

## Development Setup

### Local Environment

Install all dependencies (including test dependencies) for local development:

```bash
make setup
```

This uses Poetry to install:

- Core dependencies: `boto3`, `botocore`, `aws-lambda-powertools`, `pandas`, `psycopg2-binary`, `sqlalchemy`
- Lambda-specific groups: `enrichment-lambda`, `legislation-lambda`, `rules-lambda`, `backup-lambda`
- Test dependencies: `pytest`, `pytest-cov`, `moto`, `testcontainers`, etc.

All dependencies are managed centrally in `pyproject.toml` with a locked `poetry.lock` file for reproducible builds.

### Dependency Management

- **Single…
