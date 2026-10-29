---
repo: "levinsv/pgadmin3"
name: "pgadmin3"
description: "PgAdmin3 with PostgreSQL 18 support"
originalDescription: "PgAdmin3 с поддержкой PostgreSQL 18"
descriptionLang: "ru"
readmeQualityOk: true
url: "https://github.com/levinsv/pgadmin3"
language: "C++"
languages: ["C++"]
languagePcts: [98]
topics: ["pgadmin3", "postgresql", "sql", "client", "linux", "linux-app", "wxwidgets"]
stars: 71
forks: 12
openIssues: 7
closedIssues: 44
watchers: 13
contributors: 2
recentReleases: 1
createdAt: "2018-10-10T16:54:05Z"
lastCommitAt: "2026-10-29T10:59:12Z"
lastReleaseAt: "2026-09-19T08:11:02Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 94
undervaluedScore: 47
maintainers: ["levinsv"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b36f6e2cc0accb1cd0f4ec094d476a213e9259622d945724acae8469c789f91/levinsv/pgadmin3"
discussionCount: 6
---

# About the project

This project is a fork of pgAdmin3 v1.22. which is no longer maintained.
The full version of pgAdmin3 1.22 is located here https://github.com/postgres/pgadmin3.git.

What has been changed:
* Support for features of newer PostgreSQL versions has been added.
* Some interface elements have been changed, and new features have been added for running queries, building plans and processing query results, monitoring servers and viewing logs.
* Monitoring is configured for csv logs.
* Plugin capabilities have been extended (use of putty, far2l, ssh).

Some new features require the amcheck, pg_query_state, pg_wait_sampling, pgpro_pwr extensions.
Many interface icons have been converted to svg.
**IMPORTANT**: the icons for COMMIT and ROLLBACK have been changed,
green is commit, red is rollback (as in PL/SQL Developer).

Many non-standard features are disabled by default.
All changes are summarized in changelog.md from the commits.

For convenience on Windows, the latest compiled executable will be located in the Release directory.
To use it, simply replace the original pgAdmin3.exe.
Only the original PostgreSQL and PostrgesPro Enterprise versions will be supported.…
