---
repo: "zspacelabs/bunsen"
name: "bunsen"
description: "Bunsen is an add-on suite of model components for Burn."
readmeQualityOk: true
url: "https://github.com/zspacelabs/bunsen"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
stars: 22
forks: 5
openIssues: 13
closedIssues: 2
watchers: 1
contributors: 7
recentReleases: 0
createdAt: "2026-04-10T19:08:33Z"
lastCommitAt: "2026-10-31T07:45:51Z"
lastReleaseAt: "2026-06-05T23:54:24Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 82
undervaluedScore: 37
maintainers: ["crutcher"]
openGraphImageUrl: "https://opengraph.githubassets.com/52a833c1d268019f9fec9b063b05acde80bd6a7a76cbe5533a903ec203e69fad/zspacelabs/bunsen"
---

# bunsen - tackling tomorrow's burn problems today!

*by [ZSpaceLabs](https://zspacelabs.ai)*

The [burn](https://burn.dev) team is working hard to give us a stable long term foundation
for developing high-performance and maintainable tensor programming in
Rust; The "in Rust" aspect requires a degree of type and runtime R&D research
and that requires a conservative posture to api extension.

`bunsen` provides a "batteries included" complementary community standard library
for research extensions to `burn`; ideas which are useful enough
to collect into one place, document, and build upon; but front-run
the `burn` interface frontier.
Every idea in `bunsen` seeks to either be refined and ported into `burn`,
or supplanted by the eventual `burn` solution to that problem.

- [The bunsen book](https://zspacelabs.ai/bunsen/book/) explains how bunsen is organized, the systems that cut across
  it, and how it is developed. Start with
  [Installing and first use](https://zspacelabs.ai/bunsen/book/organization/install.html).
- [The API docs](https://docs.rs/bunsen/latest/bunsen/) document every type and lifecycle, with worked examples.

## Kits

A kit is a whole model or simulation, with its…
