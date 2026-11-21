---
repo: "caviri/rete"
name: "rete"
description: "Put an RDF graph in one file. Drop it on a URL. Query it with SPARQL, no database server."
readmeQualityOk: true
url: "https://github.com/caviri/rete"
homepage: "https://caviri.github.io/rete/"
language: "Rust"
languages: ["Rust"]
languagePcts: [49]
topics: ["cloud", "data-format", "graphs", "knowledge-graph", "rdf"]
stars: 13
forks: 0
openIssues: 7
closedIssues: 20
watchers: 0
contributors: 1
recentReleases: 7
createdAt: "2026-06-05T13:00:29Z"
lastCommitAt: "2026-11-21T11:33:43Z"
lastReleaseAt: "2026-10-31T14:37:42Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 94
undervaluedScore: 55
maintainers: ["caviri"]
openGraphImageUrl: "https://opengraph.githubassets.com/39d968b106f060c22b352bae541db892f57dd9ac32890fd596a3a8627a3e5102/caviri/rete"
fundingLinks: ["PATREON:https://patreon.com/caviri", "OPEN_COLLECTIVE:https://opencollective.com/caviri", "KO_FI:https://ko-fi.com/caviri"]
---

> **Warning**
>
> rete is a highly experimental project. Expect breaking changes, in the file
> format and in the APIs, until the format is stable in version 1.0.

## What is rete?

rete (Latin for "net", pronounced RAY-teh) stores a whole RDF graph in one
immutable `.rete` file: the term dictionary, the sorted triple indexes, and
optional extras such as a Dataset Card or a full-text index. Put the file on
any host that serves HTTP range requests (S3, Cloudflare R2, GitHub Pages,
Zenodo) and clients run SPARQL against it where it sits. A query fetches only
the parts of the file it needs, so there is no server to run and no import
step. The same engine runs in the CLI, in Python and JavaScript, and in the
browser through WebAssembly.

If you know Parquet or PMTiles, it is the same idea applied to RDF graphs.

Each file can also describe itself. Its
[Dataset Card](https://caviri.github.io/rete/docs/dataset-cards.html) (title,
license, counts, vocabularies, starter queries) and its
[schema summary](https://caviri.github.io/rete/docs/semantic-zoom.html) are read in
a couple of small range requests, without touching the indexes.
