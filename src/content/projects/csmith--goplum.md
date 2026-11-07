---
repo: "csmith/goplum"
name: "goplum"
description: "Plugin-based monitoring and alerting system, written in Go"
readmeQualityOk: true
url: "https://github.com/csmith/goplum"
language: "Go"
languages: ["Go"]
languagePcts: [98]
topics: ["monitoring", "alerting", "golang"]
stars: 6
forks: 0
openIssues: 14
closedIssues: 28
watchers: 0
contributors: 2
recentReleases: 2
createdAt: "2020-09-16T18:19:25Z"
lastCommitAt: "2026-11-07T13:48:21Z"
lastReleaseAt: "2026-11-04T17:00:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded", "under_pressure"]
healthScore: 88
undervaluedScore: 79
maintainers: ["csmith", "csmith-ci"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/296113346/a2765180-162b-11eb-88d0-f584e3222117"
fundingLinks: ["KO_FI:https://ko-fi.com/csmith"]
---

Goplum is an extensible monitoring and alerting daemon designed for
personal infrastructure and small businesses. It can monitor
websites and APIs, and send alerts by a variety of means if they go down.

## Table of Contents

- [Features](#features)
- [Getting started](#getting-started)
- [Usage](#usage)
- [Advanced topics](#advanced-topics)
- [Licence and credits](#licence-and-credits)

## Features

**Highly extensible**: Goplum supports plugins written in Go
to define new monitoring rules and alert types, and it has an API
for integration with other services and tools.

**Get alerts anywhere**: Goplum supports a variety of ways to
alert you out-of-the-box:

| | | |
|---|---|---|
|  Discord |  E-mail |  Microsoft Teams |
|  Phone call (via Twilio) |  Pushover |  Slack |
|  SMS (via Twilio) |  Webhook | |

**Lightweight**: Goplum has a small resource footprint, and all
checks are purpose-written in Go. No need to worry about chains
of interdependent scripts being executed.

**Heartbeat monitoring**: Have an offline service or a cron job
that you want to monitor? Have it send a heartbeat to Goplum
periodically and get alerted if it stops.

**Simple to get started**: If you're set…
