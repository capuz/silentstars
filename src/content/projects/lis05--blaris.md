---
repo: "lis05/blaris"
name: "blaris"
description: "Windowless Random-Access LZSS for Constrained Microcontrollers"
readmeQualityOk: true
url: "https://github.com/lis05/blaris"
language: "HTML"
languages: ["HTML", "C", "Python"]
languagePcts: [41, 33, 23]
topics: ["compression", "data-compression", "embedded", "lz77", "lzss", "random-access"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-11-07T16:18:39Z"
lastCommitAt: "2026-11-18T12:03:15Z"
status: "thriving"
tags: []
healthScore: 80
undervaluedScore: 10
maintainers: ["lis05"]
openGraphImageUrl: "https://opengraph.githubassets.com/19810dfcd4ffa801e60f08b16fa99e929d957a253cf5115ab8e882688e5b3588/lis05/blaris"
---

# blaris

**Windowless Random-Access LZSS for Constrained Microcontrollers**

`blaris` is a windowless LZSS decompressor designed for deeply constrained microcontrollers where RAM budgets are too tight for sliding-window codecs like `heatshrink` or `tamp`. By resolving back-references directly in the compressed payload via bidirectional streams and compact power-of-two checkpoints, `blaris` achieves compression ratios comparable to high-window `heatshrink` and `tamp` configurations (which require `> 1.2 KiB` of RAM) while using only **548–784 B of Flash** and **104–112 B of total RAM**.

For random access to small slices, `blaris` is up to orders of magnitude faster than ratio-matched, block-indexed streaming decoders, though streaming codecs become faster on larger sequential reads (`>= 128 B`) when speed is the priority and sufficient RAM is available.
