---
repo: "jecklgamis/gatling-server"
name: "gatling-server"
description: "An API server for running Gatling simulations"
readmeQualityOk: true
url: "https://github.com/jecklgamis/gatling-server"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 7
forks: 4
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2021-01-04T00:47:52Z"
lastCommitAt: "2026-09-10T08:21:20Z"
lastReleaseAt: "2026-09-09T09:44:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 90
undervaluedScore: 89
maintainers: ["jecklgamis"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0e94b4a007587e6654b87dd3e9a39fa4753dadad5fc3b1f1ea018eb390b916c/jecklgamis/gatling-server"
---

## gatling-server

An API server for running [Gatling](https://gatling.io/) OSS load test simulations.

## Features

* Runs simulations packaged as a self-contained jar (simulation classes and resources bundled together)
* Task submission via HTTP upload, S3 download, or a generic http(s)/s3 URL
* Standalone file upload endpoint with a browsable uploads directory
* Artifact upload to S3 (metadata, console log, results, etc.)
* Endpoints for task metadata, console log, simulation log, and results
* HTTP and SNS event notifiers for heartbeat and task lifecycle events
* Docker image on Docker Hub, plus prebuilt binaries and a Helm chart
* AI integration via [gatling-mcp-server](https://github.com/jecklgamis/gatling-mcp-server)

## Quick Start

### 1. Run gatling-server

```bash
docker run -it --name gatling-server -p 58080:58080 -e API_TOKEN=some-secret-token jecklgamis/gatling-server:main
```

### 2. Build a simulation jar

```bash
git clone https://github.com/jecklgamis/gatling-scala-example.git
cd gatling-scala-example
./mvnw clean package
```

This produces a self-contained `target/gatling-scala-example.jar` (simulation classes, resources, and all
dependencies - including Scala…
