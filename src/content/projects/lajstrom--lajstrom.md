---
repo: "lajstrom/lajstrom"
name: "lajstrom"
description: "Artifact registry (apt, rpm, maven, pypi, npm, terraform) on top of any OCI registry"
readmeQualityOk: true
url: "https://github.com/lajstrom/lajstrom"
homepage: "https://lajstrom.dev"
language: "Go"
languages: ["Go"]
languagePcts: [93]
stars: 73
forks: 1
openIssues: 74
closedIssues: 258
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-11-05T19:11:09Z"
lastCommitAt: "2026-11-13T10:41:17Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 95
undervaluedScore: 34
maintainers: ["gecube"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1447409307/aa2eed73-abd9-4071-803d-3a6c20d24c01"
discussionCount: 0
---

# Lajstrom

Artifact registry on top of any OCI registry.

One server, many repository formats: apt, rpm, maven, pypi, npm and raw files, and any OCI
artifact through the facade.
Every artifact is stored as an OCI artifact in the registry you already run: ECR, Harbor, Zot,
GHCR, docker distribution. Lajstrom owns no bytes, only the index, and the index can always be
rebuilt from the registry.

*Lajstrom* is Hungarian for "register, inventory".

Clients keep their own protocol: `pip`, `apt-get`, `mvn`, `npm` and `oras` talk to Lajstrom as
to their usual repository, with no plugin. Each upload is checked, written to the registry and
indexed in SQLite or Postgres; `lajstrom reindex` rebuilds that index from the registry alone.
Users, tokens and per-repo roles live in Lajstrom; the registry only ever sees Lajstrom's
credentials. v0.1.0 is planned for 2026-12-04 ([roadmap](https://github.com/lajstrom/lajstrom/blob/HEAD/docs/roadmap.md)).
https://lajstrom.dev

## Install

No release is out yet. Until v0.1.0 (due 2026-12-04), build from source with Go 1.27:

```sh
git clone https://github.com/lajstrom/lajstrom.git && cd lajstrom
make build && bin/lajstrom version
```

From v0.1.0 on, the…
