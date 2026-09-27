---
repo: "HBTGmbH/salat"
name: "salat"
description: "Time tracking, billing and budget controlling for consulting work — a Spring Boot modular monolith. "
readmeQualityOk: true
url: "https://github.com/HBTGmbH/salat"
language: "Java"
languages: ["Java"]
languagePcts: [83]
topics: ["bootstrap", "hibernate", "htmx", "java", "javascript", "liquibase", "modular-monolith", "mysql", "playwright", "server-side-rendering"]
stars: 7
forks: 1
openIssues: 15
closedIssues: 454
watchers: 6
contributors: 17
recentReleases: 0
createdAt: "2020-10-12T17:17:23Z"
lastCommitAt: "2026-09-27T09:28:59Z"
lastReleaseAt: "2022-05-25T10:00:16Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 71
maintainers: ["github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/47e2fe969ddc4500c24e906f6e92050e3ae7c17d7d4406280e474c6fa681952d/HBTGmbH/salat"
---

## New here?

Onboarding runs as a dialogue with the AI agent, not as a reading assignment: run `/onboarding`
and it walks you through domain, roles, architecture, process and a first ticket, skipping what
you already know. The process itself — and a lookup map of the core concepts — is described in
[docs/onboarding.md](https://github.com/HBTGmbH/salat/blob/HEAD/docs/onboarding.md).

## Run locally

Requirements:

- Java 25
- Docker (running)
- docker-compose or docker compose

Steps to start Salat locally:

1. Build the image: `./mvnw spring-boot:build-image`
2. Run docker-compose: `docker-compose up -d` (in newer docker versions use `docker compose up -d`)
3. That's it. Salat should now be running. To check, open in browser: <http://localhost:8080?login-name=tt>

Shutdown:
1. Stop docker-compose: CTRL+C
2. Stop built containers: `docker-compose stop` (in newer docker versions use `docker compose stop`)
3. If you want to remove the containers: `docker-compose down` (in newer docker versions use `docker compose down`)

### Login
Open the URL <http://localhost:8080?login-name=<sign>>

You can change the `login-name` parameter to login as a different user.
It is even possible to…
