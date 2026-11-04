---
repo: "ministryofjustice/hmpps-probation-integration-services"
name: "hmpps-probation-integration-services"
description: "A collection of small, domain-focused integrations to support HMPPS Digital services that need to interact with probation data."
readmeQualityOk: true
url: "https://github.com/ministryofjustice/hmpps-probation-integration-services"
homepage: "https://ministryofjustice.github.io/hmpps-probation-integration-services/tech-docs"
language: "Kotlin"
languages: ["Kotlin"]
languagePcts: [99]
topics: ["probation", "hmpps"]
stars: 7
forks: 3
openIssues: 1
closedIssues: 1423
watchers: 34
contributors: 45
recentReleases: 0
createdAt: "2022-06-07T13:38:09Z"
lastCommitAt: "2026-11-04T13:05:17Z"
lastReleaseAt: "2024-10-07T09:37:33Z"
status: "watched"
tags: ["hidden_gem", "community_watch"]
healthScore: 99
undervaluedScore: 64
maintainers: ["marcus-bcl", "sambailey-moj", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/159869e26646c166b345ab4b21f7019cc61cbd57f89d770251404b9ed51ec38b/ministryofjustice/hmpps-probation-integration-services"
---

# Probation Integration Services

A collection of small, domain-focused integrations to support HMPPS Digital services that need to interact with 
probation data. Typically, these integration services will perform translations between HMPPS and Delius domain 
concepts, and are responsible for:
* publishing REST endpoints to read existing data from the Delius database
* listening for HMPPS Domain Event messages and writing data into the Delius database

# Project
## Goals
This project is intended to reduce the surface area of larger integration systems (e.g. [Community API](https://github.com/ministryofjustice/community-api)),
and to replace other components (e.g. [Case Notes to Probation](https://github.com/ministryofjustice/case-notes-to-probation))
with simpler services that have direct access to the Delius database.

With this in mind, we aim to:
* Support HMPPS Digital teams by building and deploying at pace
* Separate overlapping domain concepts by creating smaller, more focused services
* Simplify the developer experience by unifying common approaches and streamlining workflows

## Tooling
* Code is written in [Kotlin](https://kotlinlang.org/), using [Spring…
