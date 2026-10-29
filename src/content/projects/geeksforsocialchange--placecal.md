---
repo: "geeksforsocialchange/PlaceCal"
name: "PlaceCal"
description: "Bring your community together"
readmeQualityOk: true
url: "https://github.com/geeksforsocialchange/PlaceCal"
homepage: "https://placecal.org"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [90]
topics: ["rails", "calendar", "community", "commons", "events", "ical", "import", "ldjson", "nonprofit", "nonprofit-organizations"]
stars: 39
forks: 11
openIssues: 130
closedIssues: 1077
watchers: 8
contributors: 23
recentReleases: 0
createdAt: "2017-07-24T17:05:38Z"
lastCommitAt: "2026-10-29T10:20:37Z"
lastReleaseAt: "2022-02-14T13:54:19Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "legacy_hero", "funded"]
healthScore: 98
undervaluedScore: 59
maintainers: ["kimadactyl", "renovate[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/98214630/145a63df-8241-49dd-985c-37c9346e0462"
fundingLinks: ["CUSTOM:https://gfsc.community/support-us/", "OPEN_COLLECTIVE:https://opencollective.com/gfscstudio", "KO_FI:https://ko-fi.com/gfscstudio"]
---

# PlaceCal

## Introduction

PlaceCal is an online calendar which lists events and activities by and for members of local communities, curated around interests and locality.

To get an idea of the project and what we're about, check out [the handbook](https://handbook.placecal.org/).

## Requirements

To run PlaceCal locally you will need to install the following dependencies:

- [Docker](https://docs.docker.com/get-docker/) (for PostgreSQL)
- [Ruby](https://www.ruby-lang.org/) (see `.ruby-version` for exact version)
- [Node.js](https://nodejs.org/en/download) (see `.node-version`) & (optional) [nvm](https://github.com/nvm-sh/nvm) to manage it
- [Yarn 1.x](https://classic.yarnpkg.com/lang/en/)
- [ImageMagick](https://imagemagick.org/index.php) for image manipulation
- [Chrome/Chromium](https://www.chromium.org/chromium-projects/) for system tests along with a matching version of [Chromedriver](https://chromedriver.chromium.org/)

## Quickstart

### Set up PostgreSQL with docker

If you don't already have PostgreSQL installed and running, set it up with docker:

```sh
make docker
```

To tear down the docker setup, run `make clean`.

### Run the setup script

```sh
bin/setup
```…
