---
repo: "michaelpq/pg_plugins"
name: "pg_plugins"
description: "Gathering of template plugins for PostgreSQL: background workers, logical replication things, etc."
url: "https://github.com/michaelpq/pg_plugins"
language: "C"
languages: ["C"]
languagePcts: [91]
stars: 348
forks: 70
openIssues: 0
closedIssues: 36
watchers: 22
contributors: 3
recentReleases: 0
createdAt: "2013-03-26T04:32:44Z"
lastCommitAt: "2026-06-23T23:29:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero", "funded"]
healthScore: 73
undervaluedScore: 25
maintainers: ["michaelpq"]
openGraphImageUrl: "https://opengraph.githubassets.com/a1dd6075f4fc6582588f4bf1333bc91c5b1884dea6be2e9dc713cf26bda73924/michaelpq/pg_plugins"
fundingLinks: ["GITHUB:https://github.com/michaelpq"]
---

pg_plugins, set of plugin templates for PostgreSQL
==================================================

This repository contains a collection of plugins and extensions for
PostgreSQL that can be used as templates for more extensive work, like:

- Background workers
- Logical decoding plugins
- Custom logging formats
- Extensions
- Table access methods
- Micro-benchmarking functions.
- WAL reader.
- etc.

Installation
------------

Simply run the following command with pg_config in PATH:

    make install

All the sub-commands of PGXS are available as well.  Note that some modules
may fail to compile because of missing dependencies or a version of
PostgreSQL code incompatible with the module.  You may want to compile
individually modules if that is the case.  Each module is maintained to be
compatible with the latest version of PostgreSQL.

LICENSE
-------

pg_plugins is free software distributed under the PostgreSQL Licence.

Copyright (c) 1996-2026, PostgreSQL Global Development Group

Developer
---------

The modules stored in this repository have been written and are being
maintained by Michael Paquier, PostgreSQL committer.

Links
-----

- [Blog](http://paquier.xyz)
- [Bug…
