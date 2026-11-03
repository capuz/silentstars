---
repo: "linagora/twake-calendar-side-service"
name: "twake-calendar-side-service"
description: "Backend side service honoring historical APIs and features to back linagora/esn-sabre"
readmeQualityOk: true
url: "https://github.com/linagora/twake-calendar-side-service"
language: "Java"
languages: ["Java"]
languagePcts: [98]
stars: 5
forks: 7
openIssues: 44
closedIssues: 609
watchers: 9
contributors: 41
recentReleases: 3
createdAt: "2025-04-08T09:57:44Z"
lastCommitAt: "2026-11-03T10:53:29Z"
lastReleaseAt: "2026-10-07T02:55:35Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 98
undervaluedScore: 90
maintainers: ["chibenwa", "vttranlina", "hungphan227"]
openGraphImageUrl: "https://opengraph.githubassets.com/fa293e84bbd1fe131c6445ed09d6a3e510cbed3f9b46a1cd8c9ba35a18b39ff8/linagora/twake-calendar-side-service"
---

# Twake Calendar Side service

## Goals

This service aims at interacting with a [esn-sabre](https://github.com/linagora/esn-sabre/) backend and OpenPaaS single 
page applications being [calendar](https://github.com/linagora/esn-frontend-calendar) and 
[contacts](https://github.com/linagora/esn-frontend-contacts).

It vows to strictly follow OpenPaaS APIs as integration tested by [dav-integrationTesting](https://ci.linagora.com/btellier/dav-integrationtesting).

It vows to follow OpenPaaS DB structure (at least for now as we might see DB refactoring dropping MongoDB).

However, despite those above statements it shall be seen as a very aggressive refactoring as it technically is a full rewrite.

We aim for a pragmatic approach by reusing most of the tooling that made Twake mail successful.

## Roadmap

We aim for replacing [OpenPaaS](https://open-paas.org/) by the end of 2025.

Then we might add websocket push to this project.

Next development items are not specified yet. We could envision replacing [MongoDB backend](https://www.mongodb.com/) by
[PostgreSQL](https://www.postgresql.org/) document DB but this is not decided yet.

## Architecture

[This…
