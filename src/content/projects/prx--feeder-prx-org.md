---
repo: "PRX/feeder.prx.org"
name: "feeder.prx.org"
description: "Dovetail podcast content management system"
readmeQualityOk: true
url: "https://github.com/PRX/feeder.prx.org"
homepage: "https://podcasts.dovetail.prx.org"
language: "Ruby"
languages: ["Ruby"]
languagePcts: [78]
topics: ["podcasting", "rails", "ruby"]
stars: 5
forks: 1
openIssues: 161
closedIssues: 529
watchers: 6
contributors: 12
recentReleases: 0
createdAt: "2015-01-07T18:18:15Z"
lastCommitAt: "2026-10-29T21:23:44Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 93
undervaluedScore: 75
maintainers: ["rpeterman-gp", "cavis", "svevang"]
openGraphImageUrl: "https://opengraph.githubassets.com/b42b0b03854429e81930d05082e54e3d6c0e3e967ea6379cba911a7b2b1c607f/PRX/feeder.prx.org"
---

# Feeder

## Description

Rails app to manage PRX podcasts and generate RSS feeds.

Includes both an HTML user interface and a [HAL API](https://en.wikipedia.org/wiki/Hypertext_Application_Language).

This repo follows the [standards for PRX services](https://github.com/PRX/docs.prx.org/blob/master/team/Project-Standards.md#services).

## Dependencies

### Tech

- Ruby - runs all the things!
- PostgreSQL - main database
- AWS S3 - writing RSS files
- AWS SQS - async job queue
- NodeJS - for linting

### Integrations

This app additionally relies on other PRX services:

- [id.prx.org](https://id.prx.org) - authorize PRX users/accounts
- [Porter](https://github.com/PRX/Porter) - send tasks to analyze and manipulate audio/image files
- [dovetail.prxu.org](https://dovetail.prxu.org) - calls feeder for info about episodes/feeds
- [Apple API Bridge Lambda](https://github.com/PRX/api-bridge-lambda/) - for publishing subscribable podcasts to Apple

## Installation

First off, clone the repo and get ruby/nodejs installed.
Try [asdf](https://asdf-vm.com/), or use something completely different!

```sh
git clone git@github.com:PRX/feeder.prx.org.git
cd feeder.prx.org

# make your local git…
