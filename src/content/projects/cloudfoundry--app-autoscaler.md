---
repo: "cloudfoundry/app-autoscaler"
name: "app-autoscaler"
description: "Auto Scaling for CF Applications"
readmeQualityOk: true
url: "https://github.com/cloudfoundry/app-autoscaler"
language: "Go"
languages: ["Go"]
languagePcts: [75]
stars: 71
forks: 60
openIssues: 16
closedIssues: 60
watchers: 20
contributors: 37
recentReleases: 0
createdAt: "2016-04-02T00:47:11Z"
lastCommitAt: "2026-11-05T08:05:29Z"
lastReleaseAt: "2026-03-23T13:29:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 95
undervaluedScore: 54
maintainers: ["renovate[bot]", "geigerj0", "app-autoscaler-ci-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/678300a48d719f7e2a56e3924b5a8cf3c65505f18994cf99ff3617fdeeb90a80/cloudfoundry/app-autoscaler"
---

# Application Autoscaler

The Application Autoscaler provides the capability to adjust the computation resources for Cloud Foundry applications through:

* Dynamic scaling based on application performance metrics
* Dynamic scaling based on custom metrics
* Scheduled scaling based on time

This repository contains the core Application Autoscaler source code, extracted and refactored from [app-autoscaler-release](https://github.com/cloudfoundry/app-autoscaler-release).

## Architecture

The Application Autoscaler consists of several microservices and are deployed as CF Applications

| Component         | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| `api`             | Public-facing API server for policy management and scaling history          |
| `servicebroker`   | Cloud Foundry service broker implementation                                 |
| `scheduler`       | Manages scheduled scaling policies and triggers scaling actions             |
| `eventgenerator`  | Evaluates scaling rules and generates scaling events based on metrics       |
|…
