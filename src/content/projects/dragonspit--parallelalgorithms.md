---
repo: "DragonSpit/ParallelAlgorithms"
name: "ParallelAlgorithms"
description: "Parallel C++ algorithms"
url: "https://github.com/DragonSpit/ParallelAlgorithms"
language: "C++"
languages: ["C++"]
languagePcts: [100]
stars: 66
forks: 7
openIssues: 2
closedIssues: 0
watchers: 4
contributors: 1
recentReleases: 0
createdAt: "2018-01-13T18:42:33Z"
lastCommitAt: "2026-07-04T19:21:12Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 49
undervaluedScore: 23
maintainers: ["DragonSpit"]
openGraphImageUrl: "https://opengraph.githubassets.com/421559770a472040ee060c63c4ce3520012ea28089770d61cff5620ab93cddae/DragonSpit/ParallelAlgorithms"
---

# ParallelAlgorithms

High Performance Parallel (and Sequential) C++ Algorithms, which accompany "[Practical Parallel Algorithms in C++ and C#](https://www.amazon.com/Practical-Parallel-Algorithms-Sorting-Multicore-ebook/dp/B0C3TZPRKZ/ref=sr_1_1?crid=3P7Q0RUP8OBXB&keywords=duvanenko&qid=1702488919&sprefix=duvanenko%2Caps%2C95&sr=8-1)" book.

### Multi-Core Parallel Sorting Algorithms:

*Algorithm*|*Random*|*Presorted*|*Constant*|*Description*
--- | --- | --- | --- | ---
LSD Radix Sort        |2865|2907|4769| 48-core AWS C7a.24xlarge (AMD)
LSD Radix Sort        |2338|2297|2255| 48-core AWS C7i.24xlarge (Intel)
LSD Radix Sort        | 952| 831| 846| 14-core Intel i7-12700H
Merge Radix Sort      | 877| 945| 971| 48-core AWS C7a.24xlarge (AMD)
Merge Sort            |1176|1143|1143| 144-core Azure HBV4 (AMD)
Merge Sort            | 695| 946|1954| 48-core AWS C7i.24xlarge (Intel)
Merge Sort            | 174| 275| 617| 14-core Intel i7-12700H
Merge Sort (in-place) | 272| 502| 549| 48-core AWS C7i.24xlarge (Intel)
Merge Sort (in-place) |  90| 234| 339| 14-core Intel i7-12700H

The above performance is in millions of unsigned 32-bit integers/second when sorting an array of 100 million…
