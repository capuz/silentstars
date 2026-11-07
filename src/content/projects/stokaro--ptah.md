---
repo: "stokaro/ptah"
name: "ptah"
description: "Modern declarative database change management for schemas, migrations, data, and persistent inference state"
readmeQualityOk: true
url: "https://github.com/stokaro/ptah"
homepage: "https://ptah.run"
language: "Go"
languages: ["Go"]
languagePcts: [99]
topics: ["database", "database-design", "database-management", "database-migrations", "database-schema", "database-tools", "ddl", "mariadb", "migration-tool", "mysql"]
stars: 14
forks: 3
openIssues: 70
closedIssues: 1379
watchers: 0
contributors: 4
recentReleases: 7
createdAt: "2025-06-01T23:22:06Z"
lastCommitAt: "2026-11-07T09:29:53Z"
lastReleaseAt: "2026-09-22T21:57:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 82
maintainers: ["denisvmedia", "renovate[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d9a427a89436b7c25f1d1e83e8c67aac86cf49d6a3fb6b5a49ceae6d5cc8fe4e/stokaro/ptah"
discussionCount: 2
---

&nbsp;&nbsp;
  &nbsp;&nbsp;
  &nbsp;&nbsp;
  &nbsp;&nbsp;
  &nbsp;&nbsp;
  &nbsp;&nbsp;
  &nbsp;&nbsp;
  &nbsp;&nbsp;
  &nbsp;&nbsp;
  &nbsp;&nbsp;

Ptah manages database change across schemas and persistent inference state. For
schemas, it compares a desired schema with a live database and either writes
versioned migrations or applies an approved plan directly. For inference state,
it builds a candidate generation beside the active one, calls an external
embedding endpoint, verifies the result, and switches consumers with a rollback
path.

The command-line interface runs without a Go toolchain, and the same planning
components are available as Go packages.

## Schema changes

Both workflows use the same comparison and planning model. The difference is
whether SQL becomes a reviewed artifact in version control before it runs.

## Persistent inference state

Ptah orchestrates the migration; it does not run inference. It reads source
rows, calls the external endpoint, and writes the candidate generation itself,
leaving the active generation untouched until verification and cutover.

The [inference migrations guide](https://docs.ptah.run/edge/inference/overview/)
covers the…
