---
repo: "vkitchen/cocomel"
name: "cocomel"
description: "A search engine"
readmeQualityOk: true
url: "https://github.com/vkitchen/cocomel"
language: "Zig"
languages: ["Zig"]
languagePcts: [96]
stars: 8
forks: 0
openIssues: 0
closedIssues: 13
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2018-09-03T13:57:54Z"
lastCommitAt: "2026-07-09T20:45:10Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 74
maintainers: ["vkitchen"]
openGraphImageUrl: "https://opengraph.githubassets.com/4e4b68e5573b61b8415b991fe0cd98a180095dac0fb256a3cc492af749f362c2/vkitchen/cocomel"
---

# Cocomel - A search engine

**coco**nut + cara**mel**

Cocomel is an [anytime](https://andrewtrotman.github.io/papers/2015-2.pdf) search engine used for research at the [University of Otago](https://www.otago.ac.nz/).

This puts it in the same family as [ATIRE](https://github.com/andrewtrotman/ATIRE/), [IOQP](https://github.com/JMMackenzie/IOQP/), [JASS](https://github.com/lintool/JASS), and [JASSv2](https://github.com/andrewtrotman/JASSv2/).

## Features

* Searches

## TODO

* Lots of stuff

## Compiling

You'll need to install Zig `0.16.0` then run `zig build -Doptimize=ReleaseFast`.
Other versions of Zig may work but remain untested.

## Usage

Cocomel can index from either a trec format `<DOC><DOCNO>DOC_001</DOCNO></DOC>` file or a folder of html files.
Conversion from [ciff](https://github.com/osirrc/ciff) is supported using the `convert` tool.
The indexer, search etc. can be found in `./zig-out/bin/` with usage described by the `--help` flag.
There is also a daemon `cocomel` and example `client`.
Indexing is a batch job and the daemon will need to be restarted to use a new index however this only takes a few seconds as the index is simply read not decompressed.

## Tuning…
