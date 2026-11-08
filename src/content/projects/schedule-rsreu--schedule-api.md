---
repo: "schedule-rsreu/schedule-api"
name: "schedule-api"
description: "API for the RSREU class schedule"
originalDescription: "API для расписания занятий РГРТУ"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/schedule-rsreu/schedule-api"
homepage: "https://api.rsreu-schedule.ru/docs/index.html"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["api", "echo", "golang", "mongodb"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2024-03-18T07:28:59Z"
lastCommitAt: "2026-11-08T10:41:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 86
undervaluedScore: 71
maintainers: ["VinGP"]
openGraphImageUrl: "https://opengraph.githubassets.com/8a71788faceff325778209db7113441ea9aeecf71d70eb12309d82e8f63b55e8/schedule-rsreu/schedule-api"
---

API for the <a href="https://t.me/schedule_rsreu_bot">bot</a> for the class schedule of <a href="https://rsreu.ru/studentu/raspisanie-zanyatij">РГРТУ</a>.

## Getting started

To run the project you will need `make` ([download](https://cmake.org/download/))
and `docker` ([installation instructions](https://docs.docker.com/engine/install/)).

Run locally, with the database started separately. (The database can be started in `docker`
by running `docker compose up postgres -d`):

```shell
make run
```

Run the whole project with `docker compose`:

```shell
make d
```

## Local development

Some linters require diff. For Windows it can be downloaded
from [this link](https://deac-riga.dl.sourceforge.net/project/gnuwin32/diffutils/2.8.7-1/diffutils-2.8.7-1.exe?viasf=1).

### Linters

- Installation:

```shell
make install
```

- Run checks:

```shell
make lint
```

- Automatically fix linter issues where possible:

```shell
make format
```

## Deploying to k3s

The workflow `.github/workflows/deploy.yml` publishes a private image
`ghcr.io/schedule-rsreu/schedule-api:<git-sha>`, creates Kubernetes Secrets
via SSH, and after the initial migration updates the Helm release in the namespace…
