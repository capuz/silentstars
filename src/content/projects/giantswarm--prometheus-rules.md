---
repo: "giantswarm/prometheus-rules"
name: "prometheus-rules"
description: "Giant Swarm Prometheus alerting and recording rules"
readmeQualityOk: true
url: "https://github.com/giantswarm/prometheus-rules"
language: "Shell"
languages: ["Shell"]
languagePcts: [66]
stars: 27
forks: 3
openIssues: 1
closedIssues: 1
watchers: 6
contributors: 80
recentReleases: 0
createdAt: "2021-06-22T12:40:46Z"
lastCommitAt: "2026-07-21T06:12:51Z"
lastReleaseAt: "2021-07-23T08:22:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 88
undervaluedScore: 53
maintainers: ["renovate[bot]", "taylorbot", "ljakimczuk"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3f3f3a6fbec0c5b4a6906f68de5e417a1b2d9fee92d4cee2919b32b2549154a/giantswarm/prometheus-rules"
---

# Giant Swarm alert and recording rules

## Table of Contents

- [Introduction](#introduction)
- [Alerting](#alerting)
  - [Alert structure](#alert-structure)
    - [Metrics-based alerts](#metrics-based-alerts)
    - [Logs-based alerts](#logs-based-alerts)
  - [Best practices](#best-practices)
    - [Mandatory annotations](#mandatory-annotations)
    - [Recommended annotations](#recommended-annotations)
    - [Dashboard URL construction](#dashboard-url-construction)
    - [Mandatory labels](#mandatory-labels)
    - [Optional labels](#optional-labels)
    - [`Absent` function](#absent-function)
    - [Useful links](#useful-links)
  - [Alert routing](#alert-routing)
    - [PagerDuty routing](#pagerduty-routing)
    - [Inhibitions](#inhibitions)
  - [Recording rules](#recording-rules)
- [Mixins management](#mixins)
  - [kubernetes-mixins](#kubernetes-mixins)
  - [mimir-mixins](#mimir-mixins)
  - [loki-mixins](#loki-mixins)
  - [tempo-mixins](#tempo-mixins)
- [Testing](#testing)
  - [Prometheus rules unit tests](#prometheus-rules-unit-tests)
  - [Test syntax](#test-syntax)
  - [Test exceptions](#test-exceptions)
  - [Test "no data" case](#test-no-data-case)
  - [Hints &…
