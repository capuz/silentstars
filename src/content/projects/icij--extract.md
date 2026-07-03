---
repo: "ICIJ/extract"
name: "extract"
description: "A cross-platform command line tool for parallelised content extraction and analysis."
url: "https://github.com/ICIJ/extract"
language: "Java"
languages: ["Java"]
languagePcts: [99]
topics: ["tika", "etl", "index", "ediscovery", "solr"]
stars: 256
forks: 32
openIssues: 0
closedIssues: 14
watchers: 20
contributors: 11
recentReleases: 0
createdAt: "2015-05-07T16:24:57Z"
lastCommitAt: "2026-07-03T11:46:40Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 40
maintainers: ["pirhoo"]
openGraphImageUrl: "https://opengraph.githubassets.com/a48d8a355dd756fe6f7b7dc9f16cf56cc8c0b0d5aa6f798da9abdb3717dfab02/ICIJ/extract"
---

<h3 align="center">Extract</h3>

<p>A cross-platform command line tool for parallelized, distributed content extraction.</p>

| | Status |
| --: | :-- |
| **CI checks** | [](https://circleci.com/gh/ICIJ/extract) |
| **Maven Central** | [](https://central.sonatype.com/artifact/org.icij.extract/extract-lib) |
| **Latest version** | [](https://github.com/ICIJ/extract/releases/latest) |
| **Open issues** | [](https://github.com/ICIJ/extract/issues/) |
| **Documentation** | [](https://github.com/ICIJ/extract/wiki) |

</div>

# Extract

**Extract** is an open‑source, cross‑platform command line tool for parallelized, distributed content extraction. Built on top of [Apache Tika](https://tika.apache.org/), it parses text and metadata from heterogeneous files (PDFs, emails, office documents, images, archives, etc.) and can run optical character recognition (OCR) on scans. It uses Redis‑backed queueing to distribute work across many machines and writes results to Solr, plain text files, or standard output. Extract is an essential part of the engineering behind the [Panama Papers](https://en.wikipedia.org/wiki/Panama_Papers), [Swiss Leaks](https://en.wikipedia.org/wiki/Swiss_Leaks) and…
