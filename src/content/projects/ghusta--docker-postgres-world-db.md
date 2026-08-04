---
repo: "ghusta/docker-postgres-world-db"
name: "docker-postgres-world-db"
description: "Example Database for PostgreSQL : World DB"
readmeQualityOk: true
url: "https://github.com/ghusta/docker-postgres-world-db"
language: "PLpgSQL"
languages: ["PLpgSQL"]
languagePcts: [78]
topics: ["postgresql", "example", "database", "docker"]
stars: 46
forks: 36
openIssues: 2
closedIssues: 67
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2017-05-16T09:23:41Z"
lastCommitAt: "2026-08-04T06:11:37Z"
lastReleaseAt: "2022-10-18T09:44:41Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 84
undervaluedScore: 45
maintainers: ["ghusta", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/85c580d915d7cd3762ba6572f2f3df20943fb4f8c67cdf67c85b2c12624fe58f/ghusta/docker-postgres-world-db"
---

# postgres-world-db

Example Database for [PostgreSQL](https://www.postgresql.org/) : World DB

Database script downloaded at : http://pgfoundry.org/frs/?group_id=1000150&release_id=366#world-world-1.0-title-content

See also PostgreSQL [Sample Databases](https://wiki.postgresql.org/wiki/Sample_Databases).

# Database details

**Important note** : from version 2.0, tables and columns names use [_snake case_](https://en.wikipedia.org/wiki/Snake_case).
 This version is incompatible with version 1.x.

## Default parameters

- database : world-db
- user : world
- password : `<NONE>`

## Schema

- public

## Tables
This database contains 4 tables :

- city
- country
- country_language
- country_flag

## Relationships

- country_language -> country (country_language_country_code_fkey)
- city -> country (country_fk)
- country -> city (country_capital_fkey)

# Run a Docker container

You can run a Docker container with this command (replace _xxxx_ by your local port) :

```shell
docker run -d -p xxxx:5432 -e POSTGRES_PASSWORD=world123 ghusta/postgres-world-db:2.14
```

# PostgreSQL configuration

If you need to inspect the PostgreSQL server configuration, you can print this file :…
