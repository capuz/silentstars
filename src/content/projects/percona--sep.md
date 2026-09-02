---
repo: "percona/SEP"
name: "SEP"
description: "Services Enablement Platform "
readmeQualityOk: true
url: "https://github.com/percona/SEP"
language: "Python"
languages: ["Python"]
languagePcts: [80]
stars: 6
forks: 0
openIssues: 0
closedIssues: 7
watchers: 6
contributors: 255
recentReleases: 0
createdAt: "2023-11-15T13:46:32Z"
lastCommitAt: "2026-09-02T08:05:44Z"
lastReleaseAt: "2025-06-24T19:12:47Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 99
undervaluedScore: 71
maintainers: ["yyyyyyyan", "marcuscruz-percona", "peter-o-addo"]
openGraphImageUrl: "https://opengraph.githubassets.com/2ac5487975db21919af042477a4dda51ddaad0104c150afcd795367e899ce150/percona/SEP"
---

# SEP - Services Enablement Platform

## Table of Contents

* [Prerequisites](#prerequisites)
* [Setup](#setup)
* [Configuration](#configuration)
   * [Plugins](#plugins)
   * [Secrets](#secrets)
      * [Getting Casdoor's Client ID and Client Secret](#getting-casdoors-client-id-and-client-secret)
   * [Environment](#environment)
   * [Syncers](#syncers)
      * [PMMSyncer](#pmmsyncer)
         * [Getting your PMM API Key](#getting-your-pmm-api-key)
      * [MySQLSyncer](#mysqlsyncer)
* [Usage](#usage)
  * [Starting Celery with SEP for development](#starting-celery-with-sep-for-development)
* [Contributing](#contributing)
* [Deployment](#deployment)

## Prerequisites

- **Python Version Requirements**
```text
  >=3.11.9, !=3.12.0, !=3.12.1, !=3.12.2, <3.14
```

- [Casdoor](https://casdoor.org/docs/basic/server-installation) or [Docker](https://docs.docker.com/get-started/get-docker/)

You can start Casdoor on port 9999 with Docker by running
```shell
docker run --detach --name casdoor \
--volume casdoor-data:/var/lib/mysql:z,rw \
--publish 9999:8000/tcp \
casbin/casdoor-all-in-one
```

- [PMM](https://docs.percona.com/percona-monitoring-and-management/setting-up/server/index.html)…
