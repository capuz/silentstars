---
repo: "glycerine/yogadb"
name: "yogadb"
description: "YogaDB: a flexible-address-space key-value store in pure Go/Golang. Key idea: With minor modifications, B-trees can beat LSM trees on write throughput and latency too. (And B-trees have always had superior read performance). See also https://github.com/flexible-address-space/flexspace https://www.roychan.org/assets/publications/eurosys22chen.pdf"
readmeQualityOk: true
url: "https://github.com/glycerine/yogadb"
language: "Go"
languages: ["Go"]
languagePcts: [100]
stars: 30
forks: 2
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2025-03-18T05:09:49Z"
lastCommitAt: "2026-09-06T08:04:50Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 51
maintainers: ["glycerine"]
openGraphImageUrl: "https://opengraph.githubassets.com/42a25bb1ec878466e4f01064f754abd5a6eb8943850283ccf3c4f51ba84a6af7/glycerine/yogadb"
---

YogaDB: a flexible-address-space key-value store in Go (golang)
===========

Bottom line up front: with minor modifications, and some
sophisticated system design, B-trees can beat LSM-trees 
on both write throughput and latency. (And B-trees have always 
stomped LSM-trees on reads).

# benchmarks up front: 

Let's compare three embedded, persistent, ordered key-value stores in Go.
Each of these can support more data than can fit in main memory,
persists its data on disk to survive reboots,
and each supports range queries and reading keys back in sorted order.

* random writes
~~~
Pebble (github.com/cockroachdb/pebble): Log Structured Merge (LSM) tree
-------------------------
1.2 seconds to write 100K random 21 byte keys and values.

BoltDB (go.etcd.io/bbolt): LMDB based memory-mapped B-tree
-------------------------
9 seconds to write 100K random 21 byte keys and values.

YogaDB: FlexSpace architecture
-----------------
400 msec to write 100K random 21 byte keys and values.
~~~

Here YogaDB is 2x faster than Pebble and 20x faster than BoltDB at random writes.

* read (iterate sequentially through all keys)

~~~
Pebble      114.9 iter_ns/key
Bolt         16.7 iter_ns/key
YogaDB…
