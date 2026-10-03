---
repo: "unxed/dn"
name: "dn"
description: "DN revitalization"
readmeQualityOk: true
url: "https://github.com/unxed/dn"
language: "Pascal"
languages: ["Pascal"]
languagePcts: [93]
stars: 12
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-01T18:57:14Z"
lastCommitAt: "2026-10-03T22:05:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 41
maintainers: ["claude", "unxed"]
openGraphImageUrl: "https://opengraph.githubassets.com/bd3741e185f2fceafe43e43543ca090ac35f70a6d74e76ba3bce7e783f3ff423/unxed/dn"
---

# dn

A port of DOS Navigator to Free Pascal.

The repository holds two independent projects with different licenses and one shared toolset:

| Directory | What it is | License | Where the code comes from |
|---|---|---|---|
| [`tv/`](https://github.com/unxed/dn/blob/HEAD/tv/README.md) | a git submodule: the repository **[unxed/tv](https://github.com/unxed/tv)** (it was a directory of this repository until 2026-10-03). **TV**: a Pascal translation of the [magiblot/tvision](https://github.com/magiblot/tvision) library, its own backends (memory, DOS), tests, demos | Borland disclaimer + MIT (`tv/COPYRIGHT.magiblot`, `tv/LICENSE`) | magiblot/tvision (its code comes from the TV 2.0 release published by Borland and the MIT contribution of magiblot) and our new code |
| [`dn/`](https://github.com/unxed/dn/blob/HEAD/dn/README.md) | **DN**: the file manager itself, sources in git | DN files: the DN license (not relicensed); our files: MIT ([`dn/LICENSE.md`](https://github.com/unxed/dn/blob/HEAD/dn/LICENSE.md)) | the public release of DN OSP 2.14 (the path: `bootstrap/`) and our new code |
| [`bootstrap/`](https://github.com/unxed/dn/blob/HEAD/bootstrap/README.md) | a record of how the…
