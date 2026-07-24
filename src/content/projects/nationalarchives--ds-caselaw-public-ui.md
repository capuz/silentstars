---
repo: "nationalarchives/ds-caselaw-public-ui"
name: "ds-caselaw-public-ui"
description: "Public frontend to the National Archives Find Case Law service"
readmeQualityOk: true
url: "https://github.com/nationalarchives/ds-caselaw-public-ui"
homepage: "https://caselaw.nationalarchives.gov.uk"
language: "Jinja"
languages: ["Jinja", "Python"]
languagePcts: [41, 38]
topics: ["caselaw", "find-caselaw", "national-archives", "frontend"]
stars: 16
forks: 8
openIssues: 1
closedIssues: 6
watchers: 7
contributors: 29
recentReleases: 0
createdAt: "2022-02-03T10:59:47Z"
lastCommitAt: "2026-07-24T05:58:25Z"
lastReleaseAt: "2022-07-13T16:05:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 71
maintainers: ["renovate[bot]", "jacksonj04", "jlhdxw"]
openGraphImageUrl: "https://opengraph.githubassets.com/9bea4020193f5ecf68a4963c35592a55e80305dc3beb9b0fa313eee73cc8d975/nationalarchives/ds-caselaw-public-ui"
---

# The National Archives: Find Case Law

This repository is part of the [Find Case Law](https://caselaw.nationalarchives.gov.uk/) project at [The National Archives](https://www.nationalarchives.gov.uk/). For more information on the project, check [the documentation](https://github.com/nationalarchives/ds-find-caselaw-docs).

# Public Interface

A public interface to the service, allowing users to search archived items of case law.

## Local development

This project uses Docker to create a consistent environment for local development.

On macOS and Windows, Docker requires [Docker
Desktop](https://www.docker.com/products/docker-desktop) to be installed. Linux
users should install the Docker engine using their distribution's package
manager or [download a `.deb` or
`.rpm`](https://docs.docker.com/engine/install/)

Once installed, we need to build our containers. We use
[`docker compose`](https://docs.docker.com/compose/) to orchestrate the
building of the project's containers:

### Services

- **`django`** — The application container, built from a multi-stage Dockerfile (local dev stage by default)
- **`postgres`** — PostgreSQL database
- **`e2e_tests`** — Playwright end-to-end…
