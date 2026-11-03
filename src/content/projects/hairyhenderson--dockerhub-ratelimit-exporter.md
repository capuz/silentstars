---
repo: "hairyhenderson/dockerhub_ratelimit_exporter"
name: "dockerhub_ratelimit_exporter"
description: "A Prometheus-format exporter to report on DockerHub per-image rate limits"
readmeQualityOk: true
url: "https://github.com/hairyhenderson/dockerhub_ratelimit_exporter"
language: "Go"
languages: ["Go", "Makefile"]
languagePcts: [47, 33]
topics: ["dockerhub", "docker", "prometheus-exporter", "prometheus", "hacktoberfest"]
stars: 11
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2020-11-19T04:04:16Z"
lastCommitAt: "2026-11-03T11:14:57Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "funded"]
healthScore: 79
undervaluedScore: 54
maintainers: ["renovate[bot]", "hairyhenderson"]
openGraphImageUrl: "https://opengraph.githubassets.com/1963a9ecc6e5c2dd0da610d6699a9b8094d851975a6318641d0d804b37afd2d4/hairyhenderson/dockerhub_ratelimit_exporter"
fundingLinks: ["GITHUB:https://github.com/hairyhenderson"]
discussionCount: 0
---

# dockerhub_ratelimit_exporter

A Prometheus-format exporter to report on DockerHub per-image rate limits.

Recently, DockerHub has [introduced rate limiting](https://docs.docker.com/docker-hub/download-rate-limit/)
for anonymous and free-tier users. This exporter can help Prometheus users
track the remaining pulls for certain images.

## Status/Roadmap

This is brand-new, hacked-together over the course of a couple hours. It works,
but I'm certain there are bugs.

This is currently very _thin_ on features. Some things that are missing:

- support for authenticating to DockerHub
- support for caching auth tokens on a per-repo basis
- exposing a few more general-purpose metrics

## Usage

The image name is provided as a query parameter when querying the exporter,
and Prometheus-format metrics are returned, like this:

```console
$ curl http://localhost:9766/limits?image=hairyhenderson/gomplate:v3.8.0
# HELP dockerhub_ratelimits_limit total number of pulls that can be performed during the window
# TYPE dockerhub_ratelimits_limit gauge
dockerhub_ratelimits_limit{image="hairyhenderson/gomplate:v3.8.0"} 100
# HELP dockerhub_ratelimits_remaining number of pulls remaining for the window…
