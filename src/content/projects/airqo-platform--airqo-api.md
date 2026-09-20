---
repo: "airqo-platform/AirQo-api"
name: "AirQo-api"
description: "This repo contains API definitions for the AirQo platform"
readmeQualityOk: true
url: "https://github.com/airqo-platform/AirQo-api"
homepage: "https://airqo.africa/"
language: "JavaScript"
languages: ["JavaScript", "Dart", "Python"]
languagePcts: [47, 31, 21]
topics: ["hacktoberfest", "hacktoberfest2024"]
stars: 26
forks: 25
openIssues: 125
closedIssues: 181
watchers: 3
contributors: 30
recentReleases: 0
createdAt: "2019-06-22T13:06:28Z"
lastCommitAt: "2026-09-20T08:47:13Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 91
undervaluedScore: 70
maintainers: ["github-actions[bot]", "Baalmart", "OlukaGibson"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b3be007f5aa064ef7c0377e47b7734d46f8b7adf25ddeecf40881981a53801a/airqo-platform/AirQo-api"
discussionCount: 0
---

# AirQo-api

## What is AirQo??

The AirQo project aims to measure and quantify the scale of air pollution in and around African cities through the design, development and deployment of a network of low-cost air quality sensing devices mounted on either static or mobile objects.

## System Architecture.

**AirQo platform** is composed of many microservices written in different languages that talk to each other using Istio.

The [AirQo system architecture](https://github.com/airqo-platform/AirQo-api/wiki/System-Architecture) uses a mono repo for faster shipping. Each service has its own database. Consistency across these databases is maintained using an event driven approach. There is also an API gateway (Nginx) which clients use to access ther rest of the services. The state of the miscroservices is monitored using PM2. Deployment pattern is one service per container using Docker.

## Folder Organisation
```
.
├── LICENSE
├── README.md
├── codecov.yml
├── contributing.md
├── docs
│   ├── img
│   └── system-architecture.md
├── infra
│   ├── ansible
│   └── terraform
├── k8s
│   ├── analytics
│   ├── workflows
│   ├── auth-service
│   ├── calibrate
│   ├── cilium
│   └── *
├──…
