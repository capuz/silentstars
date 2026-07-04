---
repo: "pwyf/aid-transparency-tracker"
name: "aid-transparency-tracker"
description: "A data quality measurement tool for international aid data."
readmeQualityOk: true
url: "https://github.com/pwyf/aid-transparency-tracker"
language: "Python"
languages: ["Python", "HTML"]
languagePcts: [60, 29]
stars: 10
forks: 5
openIssues: 26
closedIssues: 478
watchers: 6
contributors: 9
recentReleases: 0
createdAt: "2012-08-25T13:32:09Z"
lastCommitAt: "2026-07-04T22:51:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 65
maintainers: ["markbrough"]
openGraphImageUrl: "https://opengraph.githubassets.com/c3f02249b4807057620da9f953d3fdde0fb7562984dd4b5a22ee25f020816800/pwyf/aid-transparency-tracker"
---

# Aid Transparency Tracker

A data quality measurement tool for international aid data.

## Installation

**N.B. If you would like to develop locally with vagrant follow these [instructions](./vagrant/vagrant-readme.md)**

Run the following commands to bootstrap your environment:

``` bash
git clone --recursive https://github.com/pwyf/aid-transparency-tracker.git
cd aid-transparency-tracker
```

Setup a virtual environment, and install dependencies:

``` bash
python3 -m venv .ve
source .ve/bin/activate
pip install "setuptools<58"
pip install -r requirements.txt
```

Install and run a postgres database. If you have docker-compose, you can do this:

```
docker-compose -f docker-compose-postgres.yml up -d
```

(You may need to run `docker compose` instead of `docker-compose` if you have docker v2 installed).

You can login to the PostgreSQL server (which might be useful to check things are working) using `psql` with the following command (using password from dockerfile; or using port and password you set, if not using the docker compose setup):

```commandline
psql -h localhost -p 5433 -U postgres
```

Copy and if necessary edit the config.py.tmpl. (If you installed postgres using…
