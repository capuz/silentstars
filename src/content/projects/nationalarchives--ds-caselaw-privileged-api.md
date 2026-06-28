---
repo: "nationalarchives/ds-caselaw-privileged-api"
name: "ds-caselaw-privileged-api"
description: "An API to the National Archives Find Case Law service"
url: "https://github.com/nationalarchives/ds-caselaw-privileged-api"
homepage: "https://api.caselaw.nationalarchives.gov.uk/docs"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["api", "caselaw", "find-caselaw", "national-archives"]
stars: 7
forks: 4
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 15
recentReleases: 0
createdAt: "2022-08-04T13:59:03Z"
lastCommitAt: "2026-06-28T02:03:22Z"
lastReleaseAt: "2023-08-21T10:16:03Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 77
maintainers: ["renovate[bot]", "jacksonj04"]
openGraphImageUrl: "https://opengraph.githubassets.com/ee0663fb7e657d69f21a948269a227e2c848ca94ff533194b721907dc6aa4b84/nationalarchives/ds-caselaw-privileged-api"
---

# The National Archives: Find Case Law

This repository is part of the [Find Case Law](https://caselaw.nationalarchives.gov.uk/) project at [The National Archives](https://www.nationalarchives.gov.uk/). For more information on the project, check [the documentation](https://github.com/nationalarchives/ds-find-caselaw-docs).

# API Server

Exposing an API to archived case law.

## Requirements.

Python >= 3.12

## Installation & Usage

Ensure that the `MARKLOGIC_API_CLIENT_HOST` environment is set to point at the Marklogic server.

This project uses [Poetry](https://python-poetry.org/) to manage dependencies. You can install them with `poetry install`, and access a virtual environment with `poetry shell`.

To run the server, run `script/server`; open `http://localhost:8080/` in a browser

## Documentation

Run the server and check `http://localhost:8080/docs/`

## Running with Docker (untested)

To run the server on a Docker container, please execute the following from the root directory:

```bash
docker-compose up --build
```

## Tests

Run `script/test`

## Linting

Run `pre-commit install` to set up linting, and/or copy the `pre-push.sample` file to `.github/hooks/pre-push`

##…
