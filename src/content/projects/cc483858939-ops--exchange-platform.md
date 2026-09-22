---
repo: "cc483858939-ops/exchange-platform"
name: "exchange-platform"
description: "Event-driven personalized content recommendation platform built with Go, Redis, Kafka, PostgreSQL and pgvector."
originalDescription: "Event-driven personalized content recommendation platform built with Go, Redis, Kafka, PostgreSQL and pgvector."
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cc483858939-ops/exchange-platform"
language: "Go"
languages: ["Go", "TypeScript"]
languagePcts: [56, 31]
stars: 5
forks: 4
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-11-21T07:07:04Z"
lastCommitAt: "2026-09-22T08:45:12Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 85
undervaluedScore: 73
maintainers: ["cc483858939-ops"]
openGraphImageUrl: "https://opengraph.githubassets.com/832d7c777cf9c873742b913d2beb04a0312a1defb63e5a1785c6a82e1838f28f/cc483858939-ops/exchange-platform"
---

# EX

> A personalized content community built with Go + Vue, centered around recommendation systems, asynchronous event processing, and data consistency.

EX connects content publishing, social interaction, behavior collection, and personalized recommendations into a complete product workflow: users publish short-form or long-form posts, generating feedback through following, liking, replying, and reading. The backend projects this feedback into behavioral data and interest profiles, providing recommendation signals for subsequent Feed requests.

The project's engineering focus is on **the recommendation pipeline and state consistency of the Go backend**, while providing Vue 3 frontend, containerized development environment, automated testing, and observability capabilities.

[Technical Design](#technical-design) · [System Architecture](#system-architecture) · [Quick Start](#quick-start) · [Testing and Verification](#testing-and-verification) · [Project Structure](#project-structure)

## Project Overview

| Aspect | Implementation |
| --- | --- |
| Personalized Recommendation | Four-source recall, Equal RRF candidate fusion, positive/negative interest vectors, multi-signal…
