---
repo: "pierreforstmann/pg_log_statements"
name: "pg_log_statements"
description: "PostgreSQL extension to log SQL statements for specific server processes."
readmeQualityOk: true
url: "https://github.com/pierreforstmann/pg_log_statements"
homepage: "https://github.pierreforstmann"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["c", "postgresql", "postgresql-extension"]
stars: 12
forks: 0
openIssues: 0
closedIssues: 2
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2021-02-27T17:09:52Z"
lastCommitAt: "2026-11-21T13:27:42Z"
lastReleaseAt: "2022-11-06T16:23:48Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 41
maintainers: ["pierreforstmann"]
openGraphImageUrl: "https://opengraph.githubassets.com/4b9d2413dd1bbaad5d6dd7b6c9ef9e45ff2e1f87992831daea172983b568a3d9/pierreforstmann/pg_log_statements"
---

# pg_log_statements

pg_log_statements (PGLS) is a PostgreSQL extension that allows to log SQL statements for specific server processes: instead of setting `log_statement` parameter at instance level or database level, `log_statement` can be set for specific server processes.

## Installation
### Compiling

This module can be built using the standard PGXS infrastructure. For this to work, the `pg_config` program must be available in your $PATH:

    git clone https://github.com/pierreforstmann/pg_log_statements.git 
    cd pg_log_statements 
    make 
    make install 

### PostgreSQL setup

Extension must be loaded at server level with `shared_preload_libraries` parameter:

    shared_preload_libraries = 'pg_log_statements'
     

It must also be created with following SQL statement at server level:

    create extension pg_log_statements;

This extension has been validated with PostgreSQL 9.5, 9.6, 10, 11, 12, 13, 14, 15, 16, 17, 18 and 19.

## Usage

PGLS has no GUC parameter and run `log_statement=all` for selected server processes.

PGLS can be used in 2 different ways:
