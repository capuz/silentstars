---
repo: "hiero-hackers/analytics"
name: "analytics"
description: "Analytics for organisation activity and contributor diversity"
readmeQualityOk: true
url: "https://github.com/hiero-hackers/analytics"
homepage: "https://hiero-hackers.github.io/analytics/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [71, 27]
topics: ["data-analytics", "data-engineering", "data-science", "data-structures", "data-visualization", "github-api", "good-first-issue", "hiero", "supervised-machine-learning", "new-contributors-welcome"]
stars: 14
forks: 26
openIssues: 17
closedIssues: 177
watchers: 1
contributors: 24
recentReleases: 0
createdAt: "2026-02-26T16:31:21Z"
lastCommitAt: "2026-10-31T02:00:13Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 97
undervaluedScore: 70
maintainers: ["dependabot[bot]", "danielmarv", "exploreriii"]
openGraphImageUrl: "https://opengraph.githubassets.com/7f0bc5d419bfd579cab28531ce00bb338f160099dbc87767561976680d5ef9dc/hiero-hackers/analytics"
---

# Analytics

## Overview

Stay up to date with hiero organisation activity and contributor diversity

This repository provides analytics for the [Hiero repositories](https://github.com/hiero-ledger).

**Latest dashboard:** [hiero-hackers.github.io/analytics](https://hiero-hackers.github.io/analytics/)

**Contributing?** Start with the [contributor guide](https://github.com/hiero-hackers/analytics/blob/HEAD/CONTRIBUTING.md) — setup, workflow, skill levels, AI policy, and testing conventions.

## Quickstart

**Prerequisites:** [Git](https://git-scm.com/downloads), Python 3.11+, and
[uv](https://docs.astral.sh/uv/getting-started/installation/). `uv` provisions the
right Python version and all dependencies for you.

```bash
git clone https://github.com/hiero-hackers/analytics.git
cd analytics
uv sync          # create the environment and install everything
uv run pytest    # verify — no credentials needed
```

Most work, and the whole test suite, runs without credentials. For pipelines that
fetch **live** GitHub data, add a `.env` file in the project root with a token that
has public-repo read access (this only raises your API rate limit):

```bash
GITHUB_TOKEN=<your token>
```…
