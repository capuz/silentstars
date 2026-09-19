---
repo: "zspacelabs/bunsen"
name: "bunsen"
description: "Bunsen is an add-on suite of model components for Burn."
readmeQualityOk: true
url: "https://github.com/zspacelabs/bunsen"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 20
forks: 5
openIssues: 4
closedIssues: 1
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2026-04-10T19:08:33Z"
lastCommitAt: "2026-09-19T02:48:05Z"
lastReleaseAt: "2026-06-05T23:54:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 36
maintainers: ["crutcher", "rjwalters"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c484cfea056f89ec0c1976ee14146eefb24aa6db879b0ee44c531667e790b84/zspacelabs/bunsen"
---

# Bunsen

*by [ZSpaceLabs](https://zspacelabs.ai)*

`bunsen` aims to be a "batteries included" complementary community standard library for extending
the [burn](https://burn.dev) tensor library.

# Book

Read the [bunsen book](https://zspacelabs.ai/bunsen/book)

# Crates

## Public / API Crates

* [`bunsen-firehose`](https://github.com/zspacelabs/bunsen/blob/HEAD/crates/public/bunsen-firehose) — a columnar dataloader / processing pipeline, with a burn batcher
  bridge.

## Utility Crates

* [`bunsen-contracts-macros`](https://github.com/zspacelabs/bunsen/blob/HEAD/crates/public/bunsen-contracts-macros) — the
  `shape_contract![]` proc-macro backing `bunsen`'s runtime tensor-shape contracts.

## Experimental Crates

These represent complex-interface + work-in-progress, unstable interface extensions to `bunsen`; particulary those which
incur large dependencies or are not yet ready for general consumption.

* [`bunsen-firehose-image`](https://github.com/zspacelabs/bunsen/blob/HEAD/crates/public/bunsen-firehose-image) — image loading, augmentation, and tensor-conversion
  operators for `bunsen-firehose`.
* [`bunsen`](https://github.com/zspacelabs/bunsen/blob/HEAD/crates/public/bunsen)…
