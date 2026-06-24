---
repo: "tlk00/BitMagic"
name: "BitMagic"
description: "BitMagic Library"
url: "https://github.com/tlk00/BitMagic"
homepage: "http://bitmagic.io"
language: "C++"
languages: ["C++"]
languagePcts: [90]
topics: ["bit-vector", "bit-array", "integer-compression", "information-retrieval", "bit-manipulation", "indexing-engine", "sparse-matrix", "sparse-vector", "c-plus-plus", "c"]
stars: 451
forks: 53
openIssues: 11
closedIssues: 21
watchers: 19
contributors: 12
recentReleases: 0
createdAt: "2017-08-22T22:54:04Z"
lastCommitAt: "2026-06-24T00:19:50Z"
lastReleaseAt: "2018-10-08T14:11:21Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 84
undervaluedScore: 36
maintainers: ["KuznetA", "tlk00", "ucko"]
openGraphImageUrl: "https://opengraph.githubassets.com/3062c55a42931c71b154f998fbab0a03d01da920710a0fe16710039d4c005e2d/tlk00/BitMagic"
---

## BitMagic C++ Library

BitMagic was created as a Algebra of Sets toolkit for Information Retrieval but currently evolved into a more general Data Science components library for memory compact structures and algorithms on succinct data vectors. 
BitMagic implements compressed bit-vectors and containers (vectors) based on ideas of bit-slicing transform, Rank-Select compression and logical computing on memory compressed models. 

All BitMagic succicnt containers are serializable (with compression using state of art Binary Interpolative Coding) for efficient storage and network transfer. All containers are fast searchable in
compresed form.

BitMagic offers sets of methods and tools to architect your applications to use HPC techniques to save 
memory on the fly (thus be able to fit more data in one compute unit), improve storage and traffic patterns when storing data vectors and models in files or object stores (SQL or noSQL), optimize systems bandwidth from low-level (CPU caches) to network and storage exchnage.

BitMagic facilitates two big classes of scenarios:
- limited RAM applications (WebAssembly, IoT, Edge computing, desktop/workstation apps)
- Big Data HPC (petabyte…
