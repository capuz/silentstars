---
repo: "MianliWang/pietto"
name: "pietto"
description: "A gradual, semantic SQL authoring DSL with Python-style syntax, type constraints, and SQL generation."
readmeQualityOk: true
url: "https://github.com/MianliWang/pietto"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-06-08T06:04:21Z"
lastCommitAt: "2026-11-13T09:43:39Z"
lastReleaseAt: "2026-11-05T19:23:21Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["MianliWang"]
openGraphImageUrl: "https://opengraph.githubassets.com/fd71800047a0d460378768a933e1c46bd3f7c4a77ee25d0b1c713d299bc33980/MianliWang/pietto"
discussionCount: 0
---

# Pietto

Readable, typed SQL authoring with deterministic compilation and fail-closed
guardrails for hand-written or AI-generated Pietto programs.

Pietto is a small, typed language for writing SQL queries. It reads like
Python: blocks use `:` and indentation, and `None`, `True` and `False` mean
what they mean in Python. `pietto check` reports unknown fields, type errors
and aggregates that a JOIN could count twice before any database sees the
query, and `pietto emit-sql` writes plain PostgreSQL or MySQL SQL that you run
with the tools you already use. An unsupported or unproven query shape is an
error, never guessed SQL. Pietto checks the program, not the intent or the
data in your database: review the emitted SQL and validate its results for
your deployment.

The compiler has no runtime evaluation, database connection, transaction
management, scheduler, or arbitrary I/O language features. The compiler and
the `pietto` command never connect to a database; database access is
available only from the explicit alpha Python API described below.

## Status

**Version 0.1.11, public alpha.** Pietto is pre-release. Before 1.0 a release
may carry breaking changes: it lists them at the…
