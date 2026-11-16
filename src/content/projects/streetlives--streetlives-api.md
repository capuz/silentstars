---
repo: "streetlives/streetlives-api"
name: "streetlives-api"
description: "The Streetlives backend providing the API for accessing data"
readmeQualityOk: true
url: "https://github.com/streetlives/streetlives-api"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 6
forks: 3
openIssues: 19
closedIssues: 6
watchers: 5
contributors: 14
recentReleases: 0
createdAt: "2018-01-28T15:53:24Z"
lastCommitAt: "2026-11-16T11:52:15Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 72
undervaluedScore: 61
maintainers: ["shakilhossain1", "jbeard4", "doobneek"]
openGraphImageUrl: "https://opengraph.githubassets.com/ad0563e032a741d66f1b6a7e2a938112c11dfbd8097bf271902caea4c5ac3db2/streetlives/streetlives-api"
---

# Streetlives API

Streetlives is a community-built platform for enabling people who are homeless or in poverty to easily find, rate and recommend social services across New York City.

This repository contains the Streetlives back-end server, which provides an API for accessing and interacting with the Streetlives data.

## Getting Started

### Prerequisites

For the Streetlives server to run, it requires a connection to a PostgreSQL database.

You can install and run the database locally (instructions [here](https://wiki.postgresql.org/wiki/Detailed_installation_guides)), or connect to a remote database (for instance on [RDS](https://aws.amazon.com/rds/)).

See the [Configuration](#configuration) section for how to configure the database connection info.

Since Streetlives relies heavily on geographical data, it requires enabling PostGIS (version < 2.2.0) on the database. After [installing](https://postgis.net/install) the PostGIS software locally, connect to the correct database within PostgreSQL (Default: 'streetlives') using [psql](https://www.postgresql.org/docs/current/static/app-psql.html) (or another PostgreSQL management tool) and run:

```
CREATE EXTENSION postgis;
```…
