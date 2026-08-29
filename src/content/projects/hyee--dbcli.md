---
repo: "hyee/dbcli"
name: "dbcli"
description: "Windows/Linux/MacOS command line utility for Oracle/MySQL/PostgreSQL"
readmeQualityOk: true
url: "https://github.com/hyee/dbcli"
language: "PLSQL"
languages: ["PLSQL", "Lua"]
languagePcts: [52, 27]
stars: 71
forks: 18
openIssues: 2
closedIssues: 6
watchers: 9
contributors: 3
recentReleases: 0
createdAt: "2014-05-17T07:37:47Z"
lastCommitAt: "2026-08-29T10:21:04Z"
lastReleaseAt: "2015-12-18T18:21:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 86
undervaluedScore: 32
maintainers: ["hyee"]
openGraphImageUrl: "https://opengraph.githubassets.com/93eada15c861f29fce9453e23b584c343dbdb7c36057f84123f77634c4a5bb99/hyee/dbcli"
---

DBCLI : A CLI utility for DBA (Oracle/MySQL/DB2)
=====================================================

For more detailed usage, please refer to the [PowerPoint file](https://github.com/hyee/dbcli/blob/HEAD/docs/dbcli.pptx) under the `docs` directory

Description
-----------------------

DBCLI is a portable database command line utility, for DBA or application support to easily manage and run their common used scripts, similar to database built-in CLI tools but is more flexible.

It is mainly developed using Lua language, and bridges to JDBC to access database, many of the files are SQL scripts that easy to maintain.<br/>
It is designed to support multiple databases, and includes 2 types of modules, one is the public module whose functions are visible across all database platforms,
and the other is the platform-specific module.

It is not intended to support all features of the existing CLI utilities that embedded in the specific database(`Oracle SQL*Plus`, `DB2 CLP`, etc), but to provide the features other than those tools:

* Pretty-print of SELECT statements and the flexible control of the grid layouts(see set command)
* Automatically generate help documents for customized…
