---
repo: "crate/cratedb-airflow-tutorial"
name: "cratedb-airflow-tutorial"
description: "Reference implementations for orchestration project using Astronomer/Airflow"
url: "https://github.com/crate/cratedb-airflow-tutorial"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["astronomer", "airflow", "cratedb"]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 7
contributors: 30
recentReleases: 0
createdAt: "2021-11-10T08:40:36Z"
lastCommitAt: "2026-06-30T06:49:56Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 52
maintainers: ["dependabot[bot]", "hammerhead"]
openGraphImageUrl: "https://opengraph.githubassets.com/23f7d77629dd38e0ac9c70feb3a2a86be99e3afd3cdc3a64751a86cd02ba2484/crate/cratedb-airflow-tutorial"
---

# CrateDB Airflow Tutorial
Orchestration Project - Astronomer/Airflow tutorials

This repository contains examples of Apache Airflow DAGs for automating recurrent queries. All DAGs run on Astronomer infrastructure installed on Ubuntu 20.04.3 LTS.

## Installation

Before running examples make sure to set up the right environment:

* [Python3](https://www.python.org/downloads/)
* [Docker](https://www.docker.com/) version 18.09 and higher
* [Astronomer](https://www.astronomer.io/)

### Astronomer
Astronomer is the managed provider that allows users to easily run and monitor Apache Airflow environments. The best way to initialize and run projects on Astronomer is to use [Astronomer CLI](https://www.astronomer.io/docs/cloud/stable/develop/cli-quickstart). To install its latest version on Ubuntu run:

```shell
curl -sSL https://install.astronomer.io | sudo bash
```

To make sure that Astronomer CLI is installed run:

```shell
astro version
```

For installation of Astronomer CLI on another operating system, please refer to the [official documentation](https://www.astronomer.io/docs/cloud/stable/develop/cli-quickstart).

## Project files

The project directory has the following file…
