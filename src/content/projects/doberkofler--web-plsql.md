---
repo: "doberkofler/web_plsql"
name: "web_plsql"
description: "The Express Middleware for Oracle PL/SQL"
readmeQualityOk: true
url: "https://github.com/doberkofler/web_plsql"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [91]
topics: ["oracledb", "express", "expressjs", "express-middleware", "plsql", "web-application", "apex", "oracle"]
stars: 14
forks: 2
openIssues: 0
closedIssues: 10
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2017-10-20T08:54:13Z"
lastCommitAt: "2026-09-26T08:47:18Z"
lastReleaseAt: "2025-08-22T18:40:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 87
undervaluedScore: 65
maintainers: ["doberkofler"]
openGraphImageUrl: "https://opengraph.githubassets.com/b80799ae66cb2db14bdc43bcf8ca5db7dd942c1649760f2b0d1e9cedfa5fc50c/doberkofler/web_plsql"
discussionCount: 0
---

# Oracle PL/SQL Gateway Middleware for the Express web framework for Node.js
This Express Middleware is a bridge between a PL/SQL application running in an Oracle Database and an Express web server for Node.js.
It is an open-source alternative to the legacy **mod_plsql**, the Embedded PL/SQL Gateway, and the modern **Oracle REST Data Services (ORDS)** (specifically its PL/SQL Gateway mode).

It allows you to develop PL/SQL web applications using the PL/SQL Web Toolkit (OWA) and serve the content using the Express web framework for Node.js.

Please feel free to try and suggest any improvements. Your thoughts and ideas are most welcome.

# Release History
See the [changelog](https://github.com/doberkofler/web_plsql/blob/main/CHANGELOG.md).

# Prerequisites
The connection to the Oracle Database uses the node-oracledb Driver for Oracle Database. 
Please visit the [node-oracledb](https://node-oracledb.readthedocs.io/en/latest/index.html) documentation for more information.

# Installing
* Create and move to a new directory
* Create a new npm project (`npm i`)
* Install package (`npm i --omit=dev web_plsql`)

# Example

## Native
* Change to the `examples/sql` directory, start SQLPLus,…
