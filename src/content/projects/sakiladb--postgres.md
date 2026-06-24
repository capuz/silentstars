---
repo: "sakiladb/postgres"
name: "postgres"
description: "Postgres docker image preloaded with the Sakila example database"
url: "https://github.com/sakiladb/postgres"
language: "PLpgSQL"
languages: ["PLpgSQL"]
languagePcts: [99]
stars: 12
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2020-03-24T23:49:34Z"
lastCommitAt: "2026-06-24T00:23:25Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 70
undervaluedScore: 37
maintainers: ["neilotoole"]
openGraphImageUrl: "https://opengraph.githubassets.com/0b64820f93e8581808243a7b9a0f33c4fc7976c975a2a9b8c7e5a22903a72cbf/sakiladb/postgres"
---

# sakiladb/postgres

A PostgreSQL Docker image preloaded with the [Sakila](https://dev.mysql.com/doc/sakila/en/) sample
database (via [jOOQ](https://www.jooq.org/sakila)). One of the
[`sakiladb`](https://github.com/sakiladb) image family.

Available on [Docker Hub](https://hub.docker.com/r/sakiladb/postgres) and
[GitHub Container Registry](https://github.com/sakiladb/postgres/pkgs/container/postgres).

## Quick start

```shell
docker run -p 5432:5432 -d sakiladb/postgres:latest
```

The container takes a few moments to start. When it is ready, the logs show:

```
sakiladb/postgres has successfully initialized.
```

Allow a few more seconds after that message (a final server restart) before connecting.

## Connection

| Setting    | Value       |
|------------|-------------|
| host       | `localhost` |
| port       | `5432`      |
| database   | `sakila`    |
| user       | `sakila`    |
| password   | `p_ssW0rd`  |

```shell
$ PGPASSWORD=p_ssW0rd psql -h localhost -d sakila -U sakila -c 'SELECT * FROM actor LIMIT 5'
 actor_id | first_name |  last_name   |     last_update
----------+------------+--------------+---------------------
        1 | PENELOPE   | GUINESS      |…
