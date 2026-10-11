---
repo: "guenchi/Theourgia"
name: "Theourgia"
description: "A block-graph store for LLM agents"
readmeQualityOk: true
url: "https://github.com/guenchi/Theourgia"
homepage: "https://theourgia.dev"
language: "Scheme"
languages: ["Scheme"]
languagePcts: [98]
topics: ["block-graph", "llm-tool", "store"]
stars: 20
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 1
createdAt: "2026-09-10T13:56:30Z"
lastCommitAt: "2026-10-11T10:14:06Z"
lastReleaseAt: "2026-09-30T07:14:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["guenchi"]
openGraphImageUrl: "https://opengraph.githubassets.com/997991b5b88f610d97f418edd77fed92a1285aa988d02a253589b3f52e070f61/guenchi/Theourgia"
---

# Theourgia

A block-graph store where agents and people write together.
Licensed under the Apache License, Version 2.0. See LICENSE.

## Installing

**Requirements: Chez Scheme, libuv, and igropyr.** Chez Scheme 10.1.0, 10.3.0, 10.4.0 or 10.4.1 (the datum
printer is measured identical on these; on any other version the verbs that print a datum refuse with
`(error unsupported-printer-version)`). On Homebrew the Chez binary is `chez`, not `scheme`; use that
name wherever `scheme` appears below, and set `THEOURGIA_SCHEME=chez`: the programs start each other (the daemon, `core.sc`, `eval`'s worker) with `THEOURGIA_SCHEME`, else `scheme`.

**Platforms: the ones with a measured row.** The numbers the code hands
to the kernel or reads back from it that differ between platforms --
open flags, errno values, signal numbers, struct sizes and field offsets
-- are taken from a table of MEASURED rows, `platform-numbers.sc`, one per
platform. What POSIX fixes stays in the code (permission bits, the wait
status encoding, the file-type mask operation), a C scalar the rows do
not measure (`size_t`) takes Chez's width for its machine type, and the
signal names an evaluation reports are those whose…
