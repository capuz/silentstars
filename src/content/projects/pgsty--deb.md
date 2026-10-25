---
repo: "pgsty/deb"
name: "deb"
description: "PostgreSQL Extension Deb Packages maintained by Pigsty"
readmeQualityOk: true
url: "https://github.com/pgsty/deb"
language: "Makefile"
languages: ["Makefile"]
languagePcts: [84]
topics: ["postgresql", "debian", "ubuntu", "deb", "packaging", "extension"]
stars: 6
forks: 2
openIssues: 1
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2024-11-24T01:50:38Z"
lastCommitAt: "2026-10-25T02:42:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 74
maintainers: ["Vonng", "maxbronnikov10"]
openGraphImageUrl: "https://opengraph.githubassets.com/613eb369e00acf9ac6f3f8ebf877d599d9375a21d13091b302c1d3d7cfa33505/pgsty/deb"
---

# PGSTY Deb Package Builder

Extension build scripts for PostgreSQL 13-18 on Debian 12/13 and Ubuntu 22.04/24.04/26.04.

- [Pigsty PGSQL Repo](https://pgext.cloud/repo/pgsql)
- [DEB Change Log](https://pgext.cloud/release/deb)

## Use with pig

You can build extension DEBs with [pig](https://pgext.cloud/pig).

```bash
curl https://repo.pigsty.cc/pig | bash -s 0.9.1
pig build repo
pig build tool
pig build spec # <--- get this repo, setup building environment
pig build rust
pig build pgrx

# then build packages
pig build pkg timescaledb
pig build pkg pg_search
```

## Debug packages

Native builds use debhelper's automatic `-dbgsym` packages by default, and
recipe collection keeps both `.deb` and `.ddeb` artifacts. Rust extensions
remain optimized release builds while setting Cargo's release debug level to
`2` and leaving stripping to `dh_strip`. Debian/Ubuntu has no separate RPM-like
`-debugsource` binary package; pure SQL/data/script `Architecture: all` packages
do not generate empty dbgsym packages. Native recipes that bypass debhelper must
split and validate an equivalent `-dbgsym` `.ddeb` explicitly; `polardb` uses
`split-dbgsym.sh` for that custom path. Recipes that invoke…
