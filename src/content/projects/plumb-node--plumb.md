---
repo: "plumb-node/plumb"
name: "plumb"
description: "Bitcoin Knots with every reviewed spam-policy filter. Policy only, same consensus."
readmeQualityOk: true
url: "https://github.com/plumb-node/plumb"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [65, 22]
topics: ["bitcoin", "bitcoin-knots", "full-node", "mempool-policy"]
stars: 9
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1028
recentReleases: 10
createdAt: "2026-10-01T22:26:50Z"
lastCommitAt: "2026-11-22T01:49:23Z"
lastReleaseAt: "2026-10-18T12:55:58Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 60
maintainers: ["jasonsopko"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1400781501/20da6172-da57-4759-99e4-5509883cb0f2"
discussionCount: 2
---

Plumb is Bitcoin Knots plus the spam-policy filters the Plumb maintainers
have reviewed and ACKed, whether they were opened against Knots or here, and
whether or not Knots merges them. Each release is one Knots release plus
those merges, the few other Knots pull requests listed below, and one
default of its own: `-datacarriersize` starts at 42 bytes, where Knots has
started at 83 since v29.2.knots20251110.

It is a policy project, not a consensus project. The filters change what
your node relays and what your node mines. They do not change which blocks
are valid, so Plumb follows the same chain as the Knots release it is built
on.

It is a drop-in replacement for Knots: same `bitcoind` and `bitcoin-cli`
binaries, same `bitcoin.conf`, same data directory. You can switch back to
Knots at any time.

What Plumb ships
----------------
