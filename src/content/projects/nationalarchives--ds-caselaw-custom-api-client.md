---
repo: "nationalarchives/ds-caselaw-custom-api-client"
name: "ds-caselaw-custom-api-client"
description: "A common client to the MarkLogic API for the National Archives Find Case Law service"
readmeQualityOk: true
url: "https://github.com/nationalarchives/ds-caselaw-custom-api-client"
homepage: "https://nationalarchives.github.io/ds-caselaw-custom-api-client/"
language: "Python"
languages: ["Python"]
languagePcts: [90]
topics: ["api-client", "caselaw", "find-caselaw", "national-archives", "python"]
stars: 10
forks: 1
openIssues: 1
closedIssues: 1
watchers: 3
contributors: 22
recentReleases: 0
createdAt: "2022-03-15T11:15:08Z"
lastCommitAt: "2026-08-25T04:06:45Z"
lastReleaseAt: "2023-01-30T13:28:34Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 68
maintainers: ["renovate[bot]", "jacksonj04"]
openGraphImageUrl: "https://opengraph.githubassets.com/51e9eb2835d9b7e5a57ae6215aa0dcb3ee8b0db1f4263a1a3c25bed718c0df27/nationalarchives/ds-caselaw-custom-api-client"
---

# The National Archives: Find Case Law

This repository is part of the [Find Case Law](https://caselaw.nationalarchives.gov.uk/) project at [The National Archives](https://www.nationalarchives.gov.uk/). For more information on the project, check [the documentation](https://github.com/nationalarchives/ds-find-caselaw-docs).

# MarkLogic API Client

This is an API Client for connecting to Marklogic for The National Archive's Caselaw site.

This package is published on PyPI: https://pypi.org/project/ds-caselaw-marklogic-api-client/

## Usage

You can find documentation of the client class and available methods [here](https://nationalarchives.github.io/ds-caselaw-custom-api-client).

## Testing

To run the test suite:

```bash
poetry install
poetry run pytest
```

There are also some smoketests in `smoketests.py` which run against a MarkLogic database but do not run in CI currently.

To run them locally you can set the environment variables as detailed in the file in a `.env` file or just hardcode them in, as long as you don't commit those changes to the repo.

And then run

```bash
poetry run pytest smoketest.py
```

To start with when running this, we have been choosing to point to…
