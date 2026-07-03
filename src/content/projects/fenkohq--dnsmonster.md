---
repo: "FenkoHQ/dnsmonster"
name: "dnsmonster"
description: "Passive DNS Capture and Monitoring Toolkit"
url: "https://github.com/FenkoHQ/dnsmonster"
homepage: "https://dnsmonster.dev"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["passivedns", "passive-dns", "dns-server", "dns", "dns-traffic", "security-tools", "security", "golang", "nsm", "pcap"]
stars: 356
forks: 60
openIssues: 5
closedIssues: 42
watchers: 7
contributors: 12
recentReleases: 0
createdAt: "2020-02-09T01:10:39Z"
lastCommitAt: "2026-07-03T12:39:21Z"
lastReleaseAt: "2021-01-09T20:58:27Z"
status: "thriving"
tags: ["legacy_hero", "funded"]
healthScore: 93
undervaluedScore: 35
maintainers: ["mosajjal", "dependabot[bot]", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7795c568d87a4422b704abee5a0fa391c4231a998aeb6cdc693ae26c06dd2dfc/FenkoHQ/dnsmonster"
fundingLinks: ["GITHUB:https://github.com/mosajjal"]
discussionCount: 5
---

> **We're exploring a managed SaaS solution for dnsmonster!** Help shape the future of passive DNS monitoring by sharing your feedback and requirements: [Take our quick survey](https://tally.so/r/2EAxBe)

Table of Contents
- [Dnsmonster](#dnsmonster)
- [Main features](#main-features)
- [Installation](#installation)
  - [Linux](#linux)
    - [Container](#container)
    - [Build manually](#build-manually)
    - [Build statically](#build-statically)
  - [Windows](#windows)
  - [FreeBSD and MacOS](#freebsd-and-macos)
- [Architecture](#architecture)
  - [All-in-one Installation using Docker](#all-in-one-installation-using-docker)
    - [All-in-one Demo](#all-in-one-demo)
  - [Enterprise Deployment](#enterprise-deployment)
- [Configuration](#configuration)
  - [Command line options](#command-line-options)
  - [Environment variables](#environment-variables)
  - [Configuration file](#configuration-file)
  - [What's the retention policy](#whats-the-retention-policy)
- [Sampling and Skipping](#sampling-and-skipping)
  - [pre-process sampling](#pre-process-sampling)
  - [skip domains](#skip-domains)
  - [allow domains](#allow-domains)
  - [SAMPLE in clickhouse SELECT…
