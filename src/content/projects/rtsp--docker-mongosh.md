---
repo: "rtsp/docker-mongosh"
name: "docker-mongosh"
description: "Debian Docker image with MongoDB Shell preinstalled"
url: "https://github.com/rtsp/docker-mongosh"
homepage: "https://hub.docker.com/r/rtsp/mongosh"
language: "Dockerfile"
languages: ["Dockerfile", "Shell"]
languagePcts: [62, 38]
topics: ["docker", "mongo", "mongosh", "mongoshell", "debian", "docker-image"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2021-09-01T10:01:24Z"
lastCommitAt: "2026-06-27T06:23:42Z"
lastReleaseAt: "2021-10-28T13:31:58Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 72
maintainers: ["dependabot[bot]", "rtsp", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9c9dc06db8d8c2a2e26de0d15895afed100ffaabede76162c79fd0f8272ced7/rtsp/docker-mongosh"
---

# RTSP MongoDB Shell Docker Image

Debian with [MongoDB Shell (mongosh)](https://docs.mongodb.com/mongodb-shell/) included.

## `mongosh` Usage

For the `mongosh` command usage, please refer to the following documents.

- [Connect to a Deployment](https://docs.mongodb.com/mongodb-shell/connect/)
- [`mongosh` Usage](https://docs.mongodb.com/mongodb-shell/run-commands/)
  - [Perform CRUD Operations](https://docs.mongodb.com/mongodb-shell/crud/)
  - [Run Aggregation Pipelines](https://docs.mongodb.com/mongodb-shell/run-agg-pipelines/)
- [`mongosh` Options](https://docs.mongodb.com/mongodb-shell/reference/options/)

## Usage

In order to use image from GitHub Container Registry instead of Docker Hub, you can replace `rtsp/mongosh` with `ghcr.io/rtsp/docker-mongosh` anywhere in the instruction below.

### Pull Image

```ShellSession
docker pull rtsp/mongosh
```

### Interactive Mode

```ShellSession
docker run --rm -it rtsp/mongosh mongosh -- mongodb://172.17.0.1:27017
```

```ShellSession
docker run --rm -it rtsp/mongosh bash
```

### Run a Specific Command

```ShellSession
docker run --rm rtsp/mongosh mongosh -- mongodb://172.17.0.1:27017 --eval 'db.serverStatus()'
```

### Run as…
