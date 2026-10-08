---
repo: "OpenLMIS/openlmis-stockmanagement"
name: "openlmis-stockmanagement"
description: "Stock Managment Service for OpenLMIS v3.1+ http://openlmis.org"
readmeQualityOk: true
url: "https://github.com/OpenLMIS/openlmis-stockmanagement"
language: "Java"
languages: ["Java"]
languagePcts: [99]
stars: 21
forks: 33
openIssues: 2
closedIssues: 0
watchers: 28
contributors: 48
recentReleases: 0
createdAt: "2016-12-26T09:37:35Z"
lastCommitAt: "2026-10-08T10:52:38Z"
lastReleaseAt: "2018-08-13T13:51:54Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "community_watch", "fork_magnet"]
healthScore: 76
undervaluedScore: 54
maintainers: ["lwojewnik", "kszymankiewicz-sd", "mgrochalskisoldevelo"]
openGraphImageUrl: "https://opengraph.githubassets.com/e49fcba70ea4f58e2a0a5a3904f189b37dae3ebbc7babf85099586062d0a70e5/OpenLMIS/openlmis-stockmanagement"
---

# OpenLMIS Stock Management Service
This service allows users to create/update stock cards and stock movements.

## Prerequisites
* Java 1.8+
* Docker 1.11+
* Docker Compose 1.6+

All other dependencies, such as Java, are delivered automatically via the Docker image. It is unnecessary to install them locally to run the service, though often helpful to do so for the sake of development. See the _Tech_ section of [openlmis/dev](https://hub.docker.com/r/openlmis/dev/) for a list of these optional dependencies.

## Quick Start
1. Fork/clone this repository from GitHub.
 ```shell
 git clone https://github.com/OpenLMIS/openlmis-stockmanagement.git
 ```
2. Add an environment file called `.env` to the root folder of the project, with the required 
project settings and credentials. For a starter environment file, you can use [this 
one](https://raw.githubusercontent.com/OpenLMIS/openlmis-ref-distro/master/settings-sample.env). e.g.
 ```shell
 curl -o .env -L https://raw.githubusercontent.com/OpenLMIS/openlmis-ref-distro/master/settings-sample.env
 ```
3. Develop w/ Docker by running `docker-compose run --service-ports stockmanagement`.
See [Developing w/ Docker](#devdocker).
4. You should…
