---
repo: "Tailormap/tailormap-viewer"
name: "tailormap-viewer"
description: "Tailormap frontend"
readmeQualityOk: true
url: "https://github.com/Tailormap/tailormap-viewer"
homepage: "https://snapshot.tailormap.nl/"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [85]
topics: ["ogc-services", "webmapping", "tailormap"]
stars: 21
forks: 7
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 10
recentReleases: 0
createdAt: "2021-11-25T11:36:12Z"
lastCommitAt: "2026-09-24T08:41:41Z"
lastReleaseAt: "2024-02-28T09:42:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 64
maintainers: ["geertplaisier", "matthijsln", "steinkobben"]
openGraphImageUrl: "https://opengraph.githubassets.com/46d8d4f29731cc59afd6b031bd0f7e25bc42a0b22f1bcbf581e9bd36f76e946c/Tailormap/tailormap-viewer"
---

# Tailormap viewer

The Angular frontend for Tailormap.

## Running using Docker Compose

Install [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) (version 2) and
run:

```shell
docker compose up -d
```

This runs Tailormap on http://localhost:8080/ together with a PostgreSQL container to store configuration and Prometheus
and Solr containers for full text search indexing. The port (and other options) can
be changed by copying `.env.template` to `.env` and changing the variables (or use the `--env-file <file>` argument). Tailormap will only
accept connections from the loopback interface, unless you set `SERVER_ADDRESS=0.0.0.0` in the env-file.

Remove the Tailormap stack using `docker compose down` (add `-v` to remove the volume with the database).

By default, the latest development Docker image will be used (tagged with `snapshot`). This is published automatically by a GitHub Action on
every change to the `main` branch, so this might be an unstable version. To use the latest (stable) released version, set the `VERSION`
variable to `latest` before running. To update a running stack after a new version is released,…
