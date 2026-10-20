---
repo: "canonical/pgbouncer-operator"
name: "pgbouncer-operator"
description: "A charmed operator for running PgBouncer on virtual machines."
readmeQualityOk: true
url: "https://github.com/canonical/pgbouncer-operator"
homepage: "https://charmhub.io/pgbouncer"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["data-platform", "charm", "postgresql", "python"]
stars: 8
forks: 7
openIssues: 11
closedIssues: 21
watchers: 9
contributors: 17
recentReleases: 0
createdAt: "2021-12-03T17:27:50Z"
lastCommitAt: "2026-10-20T08:48:58Z"
lastReleaseAt: "2026-03-02T12:14:14Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 77
maintainers: ["renovate[bot]", "dragomirp", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9fc826b9bf1450e8628a7c854855484a827d4e9554db4bbc479dc55db1ef8a69/canonical/pgbouncer-operator"
---

# Charmed PgBouncer Operator

## Description

The PgBouncer Operator deploys and operates the [PgBouncer](https://www.pgbouncer.org) lightweight connection pooler for PostgreSQL. This charm is only compatible with the [data platform postgresql-operator charm](https://github.com/canonical/postgresql-operator).

## Usage

To deploy pgbouncer in front of three units of postgres:

```bash
juju deploy pgbouncer --channel=edge
juju deploy postgresql --channel=edge -n 3
juju add-relation pgbouncer:backend-database postgresql:database
```

To deploy and relate your application to the above cluster, using the updated [data platform relation](https://github.com/canonical/data-platform-libs/blob/main/lib/charms/data_platform_libs/v0/database_requires.py) (recommended):

```bash
juju deploy my-app
juju add-relation pgbouncer:database my-app:pg-backend
```

To deploy and relate an application to the above cluster, using the legacy pgsql relation (not recommended - this will be deprecated in future):

```bash
juju deploy my-app
juju add-relation pgbouncer:db my-app:db
```

Or, if my-app needs admin permissions:

```bash
juju add-relation pgbouncer:db-admin my-app:db
```

### Configuration…
