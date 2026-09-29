---
repo: "replikativ/pg-datahike"
name: "pg-datahike"
description: "Postgres compatibility layer for Datahike."
readmeQualityOk: true
url: "https://github.com/replikativ/pg-datahike"
language: "Clojure"
languages: ["Clojure"]
languagePcts: [94]
stars: 21
forks: 0
openIssues: 0
closedIssues: 24
watchers: 1
contributors: 4
recentReleases: 2
createdAt: "2026-04-24T05:38:11Z"
lastCommitAt: "2026-09-29T10:04:46Z"
lastReleaseAt: "2026-07-15T02:58:00Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 48
maintainers: ["whilo"]
openGraphImageUrl: "https://opengraph.githubassets.com/21d9e19f307868f04122d89dd87a910df212801d7d780c272b6f97e9725dfb26/replikativ/pg-datahike"
---

# pg-datahike

</p>

**PostgreSQL access for [Datahike](https://github.com/replikativ/datahike).**
Embeds a PG-compatible adapter — wire protocol, SQL translator, virtual
`pg_*` / `information_schema` catalogs, constraint enforcement, schema
hints — inside a Datahike process. Clients that speak PostgreSQL
(pgjdbc, psql, psycopg2, Rails ActiveRecord, Hibernate, Odoo, Flyway,
Alembic) talk to Datahike without a PostgreSQL install.

The integration is **bidirectional at the datom layer**: tables created
over SQL are normal Datahike schemas and queryable from Clojure via
`(d/q …)`; existing Datahike schemas are visible as SQL tables with no
setup. Temporal queries (`as-of`, `history`, `since`) are exposed through
`SET datahike.as_of`.

Status: **beta**. Ready for the workloads it has been tested
against (275 pgjdbc cases across eight classes, Odoo 19 module boot + TestORM,
Flyway-style migrations). Not a full PG dialect; see
[Compatibility](#compatibility).

## Quickstart

### Datahike Server (recommended)

For a network deployment, start with
[Datahike Server](https://github.com/replikativ/datahike). Its Docker image and
standalone JAR bundle pg-datahike with Datahike's HTTP API,…
