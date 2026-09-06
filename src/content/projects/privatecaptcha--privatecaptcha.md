---
repo: "PrivateCaptcha/PrivateCaptcha"
name: "PrivateCaptcha"
description: "Independent, privacy-first, self-hostable PoW CAPTCHA service made in EU"
readmeQualityOk: true
url: "https://github.com/PrivateCaptcha/PrivateCaptcha"
homepage: "https://privatecaptcha.com"
language: "Go"
languages: ["Go"]
languagePcts: [82]
topics: ["captcha", "protection", "anti-abuse", "anti-bot", "proof-of-work", "captcha-alternative", "ddos-protection", "invisible-captcha", "security", "self-hosted"]
stars: 193
forks: 6
openIssues: 2
closedIssues: 2
watchers: 1
contributors: 5
recentReleases: 3
createdAt: "2023-12-23T10:06:17Z"
lastCommitAt: "2026-09-06T08:03:24Z"
lastReleaseAt: "2026-08-24T09:42:13Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 44
maintainers: ["ribtoks", "renovate-bot", "detail-app[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d8eca6bb25077fe9c8f4df5c3cc71afbb68e0947dba74f2a140e244cd2516f0f/PrivateCaptcha/PrivateCaptcha"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="./web/static/img/pc-logo-light.png">
</picture>
---

Private Captcha is an independent, privacy-first, self-hostable Proof-of-Work CAPTCHA service made in EU.

## About

### Project goals

- provide powerful means to fight bots, including AI scrapers, and spam even as AI improves
- make web a slightly better place by replacing existing frustrating CAPTCHAs
- stay focused on privacy and GDPR compliance as well as on-prem deployment
- provide stable, backward-compatible and reliable API and integrations
- be sustainable financially to fulfill previous goals long enough

### Features

- adaptive challenge difficulty (including various configuration options)
- optimized backend (low resource requirements)
- lightweight, customizable widget (including "invisible" version)
- usage statistics (backend)
- privacy-focused, no behavior tracking or PII processing

## Documentation

Please refer to the [official documentation](https://docs.privatecaptcha.com).

### Getting started

To spin up a local version of Private Captcha _for development_, clone this repository and run `make run-docker` in the root (it requires to have…
