---
repo: "webkom/lego"
name: "lego"
description: "Backend for abakus.no"
readmeQualityOk: true
url: "https://github.com/webkom/lego"
homepage: "https://lego.abakus.no"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["backend", "rest-api", "django", "django-rest-framework", "python", "hacktoberfest", "mypy"]
stars: 62
forks: 29
openIssues: 297
closedIssues: 634
watchers: 11
contributors: 79
recentReleases: 0
createdAt: "2014-09-24T15:13:29Z"
lastCommitAt: "2026-10-12T11:15:38Z"
lastReleaseAt: "2019-02-16T21:37:40Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 90
undervaluedScore: 54
maintainers: ["ch0rizo", "dependabot[bot]", "jonasdeluna"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7d1e15af08f8ccae38f22d56e47a944189fca9ad704b1ce49769ef919bc8aeb/webkom/lego"
---

# LEGO

> Open source backend for abakus.no, frontend located at [webkom/lego-webapp](https://github.com/webkom/lego-webapp)

> LEGO Er Ganske Oppdelt

## Getting started

LEGO requires `python3.11`, `docker` and `uv`. Services like Postgres, Redis, Thumbor and Garage run inside docker.

### Initial setup (only needed once)

```bash
$ git clone git@github.com:webkom/lego.git && cd lego/
$ echo "from .development import *" > lego/settings/local.py
$ docker compose up -d
$ uv run python manage.py initialize_development
```

`uv run` creates `.venv` on first use and re-syncs it against `uv.lock`, so there is nothing to install up front and nothing to activate.

### Run (every time)

```bash
$ docker compose up -d
$ uv run python manage.py runserver
```

#### Notes

```bash
# Note 1: Whenever you switch branches you might need to make minor changes

$ uv run python manage.py migrate # If the branch has a database in another state than yours

# Note 2: When you make changes to models, or constants used by models, you need to create new migrations

$ uv run python manage.py makemigrations # Creates one or more new files that must be commited

# Remember to format generated migrations!…
