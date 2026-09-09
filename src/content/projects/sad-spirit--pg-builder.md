---
repo: "sad-spirit/pg-builder"
name: "pg-builder"
description: "Query builder for Postgres backed by SQL parser"
readmeQualityOk: true
url: "https://github.com/sad-spirit/pg-builder"
homepage: "https://pg-builder.readthedocs.io/"
language: "PHP"
languages: ["PHP"]
languagePcts: [100]
topics: ["postgresql", "postgres", "sql-parser", "sql-builder", "query-builder", "query-parser", "ast", "php", "sql"]
stars: 60
forks: 6
openIssues: 0
closedIssues: 14
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2014-09-20T05:58:34Z"
lastCommitAt: "2026-09-09T08:17:46Z"
lastReleaseAt: "2023-05-14T21:14:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 35
maintainers: ["sad-spirit"]
openGraphImageUrl: "https://opengraph.githubassets.com/5cfb02a4d771260a269e2cbbb16f263e72702d569fccdbc28b62f0f9b124faf6/sad-spirit/pg-builder"
discussionCount: 1
---

# sad_spirit/pg_builder

This is a query builder for Postgres with a twist: it contains a partial<sup>[1](#footnote1)</sup> reimplementation of PostgreSQL's own
query parser. This sets it aside from the usual breed of "write-only" query builders:

* Query is represented as an Abstract Syntax Tree quite similar to PostgreSQL's internal representation.
* Query parts can be added to the AST either as objects or as strings (that will be processed by Parser).
* Nodes can be removed and replaced in AST.
* AST can be analyzed and transformed, the package takes advantage of this to allow named parameters like
  `:foo` instead of standard PostgreSQL's positional parameters `$1` and to infer parameters' types
  from SQL typecasts.
* Almost all syntax available for `SELECT` (and `VALUES`) / `INSERT` / `UPDATE` / `DELETE` / `MERGE` in PostgreSQL 18
  is supported, query being built is automatically checked for correct syntax.

Substantial effort was made to optimise parsing, but not parsing is faster anyway, so there are means to cache parts 
of AST and the resultant query.

## Usage example

```PHP
use sad_spirit\pg_builder\{
    Select,
    StatementFactory,…
