---
repo: "kiwicopple/pg-extensions"
name: "pg-extensions"
description: "Research"
readmeQualityOk: true
url: "https://github.com/kiwicopple/pg-extensions"
homepage: "https://kiwicopple.github.io/pg-extensions/"
language: "PLpgSQL"
languages: ["PLpgSQL"]
languagePcts: [72]
topics: ["postgres"]
stars: 19
forks: 3
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 4
recentReleases: 0
createdAt: "2023-11-01T10:10:13Z"
lastCommitAt: "2026-11-13T05:42:00Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 76
undervaluedScore: 56
maintainers: ["kiwicopple"]
openGraphImageUrl: "https://opengraph.githubassets.com/ec3d34375bea26d640298117b6dca771a23ad11b5c6b996be88d5d948b0b8f68/kiwicopple/pg-extensions"
---

# Postgres Extensions

A few Trusted Language Extensions for database.dev.

## Developers

To publish a new version, run the following command from the root folder of this extension:

`dbdev publish`

If you have `dbdev` CLI version `0.1.3` or older, you will need to specify the path explicitly:

`dbdev publish --path .`

### TLE Commands

- List all versions (???)
- Update a version: `alter extension xxx update to NEW_VERSION`

- `select * from pgtle.available_extensions();` - get all extensions
- `select * from pgtle.available_extension_versions();` -- get all versions

## Research docs

Each extension's research records (`<extension>/research/`) are published together at https://kiwicopple.github.io/pg-extensions/. Build or preview locally with `make research.docs` or `make research.docs.dev`; see [research-site/README.md](https://github.com/kiwicopple/pg-extensions/blob/HEAD/research-site/README.md).

## Vercel documentation sites

Each extension documentation site is a separate Vercel project. Set its Root Directory to `pg_idkit`, `pg_crdt`, `pg_permissions` or `pg_validate` (the extension folder, not its `site/` subfolder). Each folder's `vercel.json` supplies the build…
