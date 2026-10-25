---
repo: "TCKDB/TCKDB"
name: "TCKDB"
description: "Theoretical Chemical Kinetics Database"
readmeQualityOk: true
url: "https://github.com/TCKDB/TCKDB"
homepage: "https://tckdb.github.io/TCKDB/"
language: "Python"
languages: ["Python"]
languagePcts: [85]
topics: ["database", "kinetics", "thermodynamic-properties", "standardization"]
stars: 5
forks: 2
openIssues: 0
closedIssues: 105
watchers: 3
contributors: 6
recentReleases: 0
createdAt: "2019-04-11T20:16:47Z"
lastCommitAt: "2026-10-25T09:01:33Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 99
undervaluedScore: 86
maintainers: ["calvinp0", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/311eef82ec5c85218842e9955227c73bc5dd52c81e3a8046afde0ffdc4fbd4b1/TCKDB/TCKDB"
---

# TCKDB

**Thermochemical & Kinetics Database** — a provenance-rich,
workflow-tool-agnostic database and HTTP API for computational and
experimental chemistry data: species, reactions, transition states,
geometries, calculations, statmech, thermo, kinetics, transport,
networks, artifacts, and review/moderation state.

In practical terms, TCKDB is a database you can run locally or host
for a group. It stores quantum-chemistry and experimental records
with enough context to answer questions like: *Which calculation
produced this thermo value? Which geometry was used? What level of
theory, software version, and workflow generated it? Has the record
been reviewed?*

TCKDB defines a general scientific storage, provenance, and read/query
contract. Workflow tools such as ARC, RMG, or any other computational
chemistry pipeline can adapt to TCKDB; nothing in the schema or API is
shaped around a single tool.

Documentation website: <https://calvinp0.github.io/tckdbv2/>

---

## Start here

**Just want to see what's in it?** Open
[`examples/clients/explore_tckdb.ipynb`](https://github.com/TCKDB/TCKDB/blob/HEAD/examples/clients/explore_tckdb.ipynb) —
a read-only tour of a live TCKDB…
