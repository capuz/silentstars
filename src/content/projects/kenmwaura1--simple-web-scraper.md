---
repo: "KenMwaura1/simple-web-scraper"
name: "simple-web-scraper"
description: "Simple web scraper to get player data using beatiful-soup4 and PostgreSQL as a database. SQLAlchemy as an ORM"
readmeQualityOk: true
url: "https://github.com/KenMwaura1/simple-web-scraper"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["beautifulsoup4", "requests", "postgresql", "sqlalchemy", "postgres", "python", "scraper"]
stars: 9
forks: 0
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2020-02-05T18:27:17Z"
lastCommitAt: "2026-07-20T06:37:14Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 96
undervaluedScore: 68
maintainers: ["KenMwaura1", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/34994f7e61de7c1a2e049462eeb12d6eb871fa4c04c4ce16c441ef0a525b4c1c/KenMwaura1/simple-web-scraper"
---

# simple-web-scraper

This repository contains code for a webscraper for [Lifetime Leaderboards \| UMG Gaming](https://www.umggaming.com/leaderboards)
Making use of the beatifulsoup4 and requests
Postgres as a Database
SQLAlchemy is used as a ORM to insert data into the db

## Accompanying Blog Post

[Get Started with a Web Scraping Project](https://dev.to/ken_mwaura1/getting-started-with-a-web-scraping-project-10ej)

## Installation

1. Clone this Repo

`git clone https://github.com/KenMwaura1/simple-web-scraper`

2. Change into into the simple-web-scraper folder

`cd simple-web-scraper`

3. Create a virtualenv

`python3 -m virtualenv env`

4. Activate virtualenv

`source /bin/activate` OR use pipenv `pipenv install`

5. Install the required dependecies

`python3 -m pip install -r requirements.txt`

## Database

Ensure Postgres is installed locally and running on port 5432

OR

run a Postgres container on Docker [Easy PostgreSQL 10 and pgAdmin 4 Setup with Docker](https://info.crunchydata.com/blog/easy-postgresql-10-and-pgadmin-4-setup-with-docker) container on port 5432

The default db credentials are:

* host: localhost
* port: 5432
* user: test
* db: xp_db
* password:…
