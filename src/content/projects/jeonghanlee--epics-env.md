---
repo: "jeonghanlee/EPICS-env"
name: "EPICS-env"
description: "EPICS Configuration Environment"
readmeQualityOk: true
url: "https://github.com/jeonghanlee/EPICS-env"
homepage: "https://jeonghanlee.github.io/EPICS-env/"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
topics: ["epics"]
stars: 6
forks: 4
openIssues: 7
closedIssues: 111
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2020-07-23T21:09:12Z"
lastCommitAt: "2026-11-05T00:21:18Z"
lastReleaseAt: "2026-09-10T03:59:32Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 96
maintainers: ["jeonghanlee"]
openGraphImageUrl: "https://opengraph.githubassets.com/1a2c30e43439c3775ee0db08beeab4141c6fc449ff77f0c8b3ed72062ca05ab9/jeonghanlee/EPICS-env"
---

# EPICS Configuration Environment

EPICS-env builds one Experimental Physics and Industrial Control System (EPICS)
base and a pinned set of 36 EPICS modules from source with make, and installs
them as one tree per release, operating system, and base version. The
installed tree links its libraries relative to its own location, carries a
shell environment script, and holds a set of common iocsh fragments for
input/output controllers (IOCs).

## Reference

## Continuous Integration Status

## Supported platforms

The supported operating systems are the ones with a continuous integration
workflow above:

* Primary support: Debian 13 (Trixie)
* Supported: Debian 12 (Bookworm), Rocky Linux 8.10 (Green Obsidian), Rocky
  Linux 10.2 (Red Quartz), Ubuntu 24.04 LTS (Noble Numbat), Ubuntu 26.04 LTS
  (Resolute Raccoon)

## Documentation

The EPICS-env book is published at
<https://jeonghanlee.github.io/EPICS-env/>, with its source under
[docs/src](https://github.com/jeonghanlee/EPICS-env/blob/HEAD/docs/src). Start with:

* [Build and use your first EPICS environment](https://github.com/jeonghanlee/EPICS-env/blob/HEAD/docs/src/tutorial/first-environment.md),
  a lesson from a fresh clone to a…
