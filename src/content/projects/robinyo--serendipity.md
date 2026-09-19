---
repo: "Robinyo/serendipity"
name: "serendipity"
description: "Serendipity is an open source toolkit for building performant, high-quality applications."
readmeQualityOk: true
url: "https://github.com/Robinyo/serendipity"
homepage: "https://rob-ferguson.me"
language: "TypeScript"
languages: ["TypeScript", "Java"]
languagePcts: [48, 34]
topics: ["customer-engagement", "crm", "crm-platform", "customer-engagement-platform", "open-source", "angular", "angular-material", "spring-boot", "camunda"]
stars: 389
forks: 207
openIssues: 0
closedIssues: 12
watchers: 27
contributors: 1
recentReleases: 0
createdAt: "2018-10-30T21:05:02Z"
lastCommitAt: "2026-09-19T01:38:04Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "fork_magnet"]
healthScore: 80
undervaluedScore: 42
maintainers: ["Robinyo"]
openGraphImageUrl: "https://opengraph.githubassets.com/a4cc3ce36772293b1e67583721d85c658db566e8a58e4c7edad93b1920eec22c/Robinyo/serendipity"
---

</p>

<h1 align="center">Serendipity</h1>

<p>
  Serendipity is an open source toolkit for building performant, high-quality Customer Engagement applications.
  Applications that can transform your organisation by connecting your customers, products, people and operations.
</p>

**Built using Angular v22, Angular Material (M3) v22.1.1, Spring Boot v4.0.1,
Spring Cloud 2025.1.0 and Java 25.**

## Architecture

Serendipity is composed of the following components:

- **Progressive Web App** — an Angular 22 + Angular Material (M3) single-page application
- **Backend for Frontend (BFF)** — a Spring Boot 4.0.1 service that serves the PWA and proxies API requests
- **Core Services**
  - **Identity Service** — Keycloak, providing OpenID Connect authentication and OAuth 2.0 authorization
  - **Party Service** — a Spring Boot microservice managing leads, opportunities, accounts, and contacts
- **Orchestration Services**
  - **Human Tasks Service** — Camunda 8.9 for BPMN 2.0 workflow orchestration
- **Reporting Services**
  - **Report Service** — separate reporting infrastructure (see [js-docker](https://github.com/Robinyo/js-docker))

<br /> <br />

## Security

- **OpenID Connect** is used…
