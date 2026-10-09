---
repo: "freedomofpress/pressfreedomtracker.us"
name: "pressfreedomtracker.us"
description: "Code for the U.S. Press Freedom Tracker project website"
readmeQualityOk: true
url: "https://github.com/freedomofpress/pressfreedomtracker.us"
homepage: "https://pressfreedomtracker.us"
language: "Python"
languages: ["Python"]
languagePcts: [83]
stars: 31
forks: 8
openIssues: 101
closedIssues: 852
watchers: 13
contributors: 27
recentReleases: 0
createdAt: "2017-04-06T18:34:17Z"
lastCommitAt: "2026-10-09T17:59:24Z"
lastReleaseAt: "2026-06-10T19:14:45Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 59
maintainers: ["paulschreiber", "dependabot[bot]", "SaptakS"]
openGraphImageUrl: "https://opengraph.githubassets.com/3d30ca4bbe56716e8237c6e767dacbe49f76a018d0822166041af6eb947c149c/freedomofpress/pressfreedomtracker.us"
---

# U.S. Press Freedom Tracker

> [!NOTE]
> By contributing to this project, you agree to abide by our [Code of Conduct](https://github.com/freedomofpress/.github/blob/main/CODE_OF_CONDUCT.md).

This is the code that powers the U.S. Press Freedom Tracker website. It is built with Wagtail and served at [pressfreedomtracker.us](https://pressfreedomtracker.us/).

| Environment | Status                                                                                                                                   |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Production  |  |
| Development |  |

## Development

### Prerequisites

The installation instructions below assume you have the following
software on your machine:

- [docker](https://docs.docker.com/engine/installation/) or
  [podman](https://podman.io/docs/installation), with "compose"
  support
- [just](https://github.com/casey/just)

### Local Development instructions

When you want to play with the environment, you will be using
`docker compose`. Your guide to understand all the nuances of
`docker compose` can be…
