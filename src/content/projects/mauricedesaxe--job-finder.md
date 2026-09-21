---
repo: "mauricedesaxe/job-finder"
name: "job-finder"
description: "Job Finder searches job boards, evaluates each listing against your criteria, and puts the strongest matches in a private review queue."
readmeQualityOk: true
url: "https://github.com/mauricedesaxe/job-finder"
homepage: "https://youtu.be/bO7vzA0xbWg"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 8
forks: 3
openIssues: 12
closedIssues: 15
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-27T12:15:44Z"
lastCommitAt: "2026-09-21T09:14:36Z"
lastReleaseAt: "2026-03-29T21:20:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 55
maintainers: ["mauricedesaxe", "github-actions[bot]", "open-inspect-leetsoftware[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5f7628e0f76bbe0b53e2fa2d0e518d13bb81bf85ba9d25decff521212c285b5e/mauricedesaxe/job-finder"
---

# job-finder

Job Finder searches job boards, evaluates each listing against your criteria,
and puts the strongest matches in a private review queue. It uses Dagster to
run the search pipeline, PostgreSQL to store results, Jina to find and scrape
listings, and OpenRouter to evaluate them.

[Watch the Job Finder demo on YouTube](https://youtu.be/bO7vzA0xbWg).

This README has two setup paths:

- [Run Job Finder for yourself](#run-job-finder-for-yourself) if you want job
  results as soon as possible.
- [Contribute to Job Finder](#contribute-to-job-finder) if you want a local
  development environment.

## Run Job Finder for yourself

The steps below run the full application on your computer. The default search
and evaluation criteria target senior product engineering and applied AI roles
that can be worked remotely from Europe. Change those defaults before your
first search if they do not fit you.

### 1. Install the requirements

Install:

- [Git](https://git-scm.com/downloads)
- [Python 3.12](https://www.python.org/downloads/)
- [uv 0.12.9 or newer](https://docs.astral.sh/uv/getting-started/installation/)
- [Docker](https://docs.docker.com/get-started/get-docker/)
- A [Jina API…
