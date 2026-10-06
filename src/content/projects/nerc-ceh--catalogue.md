---
repo: "NERC-CEH/catalogue"
name: "catalogue"
description: "Metadata catalogue"
readmeQualityOk: true
url: "https://github.com/NERC-CEH/catalogue"
language: "Java"
languages: ["Java"]
languagePcts: [72]
stars: 5
forks: 2
openIssues: 0
closedIssues: 0
watchers: 4
contributors: 20
recentReleases: 0
createdAt: "2015-09-24T14:43:29Z"
lastCommitAt: "2026-10-06T10:41:29Z"
lastReleaseAt: "2025-02-26T12:07:26Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 69
undervaluedScore: 73
maintainers: ["rodscott", "phtrceh", "rexlai-ceh"]
openGraphImageUrl: "https://opengraph.githubassets.com/b2b46f811144882e2f49592ffeda222ab426e5f09002e144c3acb94102cfa88e/NERC-CEH/catalogue"
---

# UKCEH metadata catalogue

[Introduction for developers](https://github.com/NERC-CEH/catalogue/blob/HEAD/docs/introduction.md)

## Installation

### Running the application

The recommended way to run the application is with Docker Compose, which starts all services
including nginx, Solr, the Spring Boot application, and the webpack watcher:

```bash
# First run, or after changing the Dockerfile or entrypoint script:
docker compose up --build --watch

# Subsequent runs (reuses the built image and cached Gradle dependencies — much faster):
docker compose up --watch

# Watch mode — auto-rebuilds when build.gradle, libs.versions.toml, Dockerfile, or entrypoint-dev.sh change:
docker compose watch
```

Browse to http://localhost:8080/eidc/documents to see the catalogue populated with demo records.

Optional services can be included with profiles:

```bash
docker compose --profile hubbub up --build   # include Hubbub upload service
docker compose --profile legilo up --build   # include Legilo
docker compose --profile fuseki  up --build  # include Fuseki SPARQL
```

Local environment overrides can be placed in `override.env`.

## Project Structure

- **/datastore**  - Git-backed…
