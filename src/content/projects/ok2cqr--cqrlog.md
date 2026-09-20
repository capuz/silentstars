---
repo: "ok2cqr/cqrlog"
name: "cqrlog"
description: "Linux logging program for amateur radio operators"
readmeQualityOk: true
url: "https://github.com/ok2cqr/cqrlog"
homepage: "https://www.cqrlog.com"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [89]
stars: 146
forks: 63
openIssues: 48
closedIssues: 88
watchers: 20
contributors: 26
recentReleases: 0
createdAt: "2013-03-15T20:16:42Z"
lastCommitAt: "2026-09-20T08:45:26Z"
lastReleaseAt: "2017-12-30T07:35:45Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 91
undervaluedScore: 45
maintainers: ["ok2cqr"]
openGraphImageUrl: "https://opengraph.githubassets.com/a098a02a2dfc6c1b52f6ac076063b71028b6095d0b4ad82cae3a8e04ab4cc0da/ok2cqr/cqrlog"
---

# What is CQRLOG?

CQRLOG is an advanced ham radio logger based on MySQL database. Provides radio control based on hamlib libraries (currently support of 140+ radio types and models), DX cluster connection, online callbook, a grayliner, internal QSL manager database support and a most accurate country resolution algorithm based on country tables developed by OK1RR. CQRLOG is intended for daily general logging of HF, CW & SSB contacts and strongly focused on easy operation and maintenance. More at https://www.cqrlog.com/

## How to contribute?

You have to have at least Lazarus 4.6, fpc 3.2.2 compiler, MySQL (MariaDB) server and client installed. CQRLOG is developed on Ubuntu 24.04, Lazarus and FreePascal are available in my personal repo  https://launchpad.net/~ok2cqr/+archive/lazarus; but packages on most modern Linux distros should work fine. 

Compile with `make` and install with `make DESTDIR=/home/yourusername/where_you_want_to_have_it install`. If you are going to change the source code, fork the repo, do the changes, commit them and use Pull request.

## Dependencies

Build-Depends: lazarus, lcl, fp-utils, fp-units-misc, fp-units-gfx, fp-units-gtk2, fp-units-db,…
