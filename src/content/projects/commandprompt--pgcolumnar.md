---
repo: "commandprompt/pgcolumnar"
name: "pgcolumnar"
description: "Independent MIT-licensed column-oriented storage extension for PostgreSQL"
readmeQualityOk: true
url: "https://github.com/commandprompt/pgcolumnar"
homepage: "https://commandprompt.github.io/pgcolumnar/"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [41, 37]
stars: 42
forks: 4
openIssues: 27
closedIssues: 492
watchers: 0
contributors: 5
recentReleases: 4
createdAt: "2026-07-19T00:17:02Z"
lastCommitAt: "2026-11-01T10:45:05Z"
lastReleaseAt: "2026-09-17T19:45:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 47
maintainers: ["jdatcmd", "OffgridwithJD"]
openGraphImageUrl: "https://opengraph.githubassets.com/ecaea193ee8585dac03f773d21a38b491c9f56eb1fd0668f33037c19547312bb/commandprompt/pgcolumnar"
---

A table created `USING pgcolumnar` stores its data by column, with per-column
compression, chunk-group skipping, and a vectorized aggregate path. It is for
analytic workloads: large scans, aggregates, and column projections over
append-mostly data.

pgColumnar builds from one source tree on PostgreSQL 15 through 18, with 19
validated against 19beta2, and is
licensed under the [MIT License](https://github.com/commandprompt/pgcolumnar/blob/HEAD/LICENSE). It is [pre-release](https://github.com/commandprompt/pgcolumnar/blob/HEAD/docs/limitations.md#release-status); the version marker
is `1.0-alpha5`, recorded in `VERSION`.
The latest published pre-release is `v1.0-alpha4`. A table `USING pgcolumnar` is stored in the
native on-disk format, PGCN v1.

## Documentation

The full documentation is published at
**[commandprompt.github.io/pgcolumnar](https://commandprompt.github.io/pgcolumnar/)**. The
same pages are in this repository under `docs/`:

| | |
| --- | --- |
| [Features](https://github.com/commandprompt/pgcolumnar/blob/HEAD/docs/features.md) | What pgColumnar provides |
| [Installation](https://github.com/commandprompt/pgcolumnar/blob/HEAD/docs/installation.md) | Build, load, and…
