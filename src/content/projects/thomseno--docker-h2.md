---
repo: "thomseno/docker-h2"
name: "docker-h2"
description: "Dockerized H2 database"
readmeQualityOk: true
url: "https://github.com/thomseno/docker-h2"
homepage: "https://hub.docker.com/r/thomseno/h2/"
language: "Shell"
languages: ["Shell", "Dockerfile"]
languagePcts: [73, 27]
topics: ["h2", "database", "docker", "docker-image"]
stars: 5
forks: 6
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2018-02-13T07:44:48Z"
lastCommitAt: "2026-10-20T08:49:40Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 63
maintainers: ["thomseno"]
openGraphImageUrl: "https://opengraph.githubassets.com/62f06b3fd5c526f9cc40964bd1f779e87c79639139bd48cd2bc3f776dd328ea2/thomseno/docker-h2"
---

# docker-h2

Dockerized H2 database.

## Features

* Inspired by [oscarfonts/h2](https://github.com/oscarfonts/docker-h2).
* Using [eclipse-temurin](https://hub.docker.com/_/eclipse-temurin).
* Only packing H2 jar-file into Docker image (retrieved from Maven Central).
* H2-DATA location on /h2-data
* Exposing default ports 8082 / 9092

## Builds

builds on [dockerhub](https://hub.docker.com/r/thomseno/h2/) and [GitHub Container Registry](https://github.com/thomseno/docker-h2/pkgs/container/h2) :

    
* `2.5.252 / latest`
* `2.4.240`
* `2.3.232`
* `2.2.224`
* `2.1.214`
* `2.0.206`
* `1.4.200`

## Running

Get the image:

```
docker pull thomseno/h2
```
or 
```
docker pull ghcr.io/thomseno/h2
```

Run as a service, exposing ports 9092 (TCP database server) and 8082 (web interface) and mapping data volume to host:

```
docker run -d -p 9092:9092 -p 8082:8082 -v /path/to/local/h2-data:/h2-data --name=myH2Server thomseno/h2
```

By setting the JAVA_OPTS environment variable you can for example set the memory parameters of the JVM:

```
docker run -d -e JAVA_OPTS='-Xmx256m -Xms256m' -p 9092:9092 -p 8082:8082 -v /path/to/local/h2-data:/h2-data --name=myH2Server thomseno/h2
```
