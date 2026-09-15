---
repo: "ministryofjustice/laa-court-data-ui"
name: "laa-court-data-ui"
description: "\"View court data\" webapp for viewing data from HMCTS's \"Common Platform\""
readmeQualityOk: true
url: "https://github.com/ministryofjustice/laa-court-data-ui"
language: "Ruby"
languages: ["Ruby", "Haml"]
languagePcts: [73, 24]
topics: ["laa-access-court-data"]
stars: 7
forks: 3
openIssues: 0
closedIssues: 1
watchers: 12
contributors: 30
recentReleases: 0
createdAt: "2020-01-06T08:41:44Z"
lastCommitAt: "2026-09-15T08:55:13Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch"]
healthScore: 95
undervaluedScore: 71
maintainers: ["alexdesi", "dependabot[bot]", "pezholio"]
openGraphImageUrl: "https://opengraph.githubassets.com/377d5aa5864c517470c1cb563c68c891989a0f6abbea95b9d950937da8c74ca7/ministryofjustice/laa-court-data-ui"
---

# View court data

A service to enable Legal Aid Agency (LAA) caseworkers to view and "link" Court data related to a claim for remuneration. This is primarily an interface to the [laa-court-data-adaptor](https://github.com/ministryofjustice/laa-court-data-adaptor) API, which in turn is a conduit providing a layer of abstraction around the HMCTS "common platform" API.

## Quick start (on macosx)
```
make install

make run

make open
```

## Pre-commit hooks
We have gitleaks set up on this repo. To make it harder to accidentally leak a secret, have it run as a pre-commit hook:
```
pip install pre-commit
pre-commit install
```

## Linking court data to MAAT

One of the purpose of this service is to "link" HMCTS court records to a legal-aid
record in MAAT (via **MAAT ID**).
There are **two distinct things that can be linked**:

### 1. Prosecution case

A *prosecution case* is the original criminal proceedings brought against one or more **defendants** (the "first instance" case), identified by its case **URN**.
A caseworker links an individual **defendant** on that case to a MAAT ID.

Linking and Unlinking each have their own dedicated page, following the same pattern as the court…
