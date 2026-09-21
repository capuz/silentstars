---
repo: "btclib-org/btclib-node"
name: "btclib-node"
description: "A full node bitcoin implementation written in Python and based on btclib."
readmeQualityOk: true
url: "https://github.com/btclib-org/btclib-node"
homepage: "https://btclib-node.readthedocs.io"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bitcoin", "bitcoin-node", "blockchain", "consensus", "full-node", "p2p", "script-interpreter", "rocksdb"]
stars: 7
forks: 2
openIssues: 4
closedIssues: 460
watchers: 2
contributors: 3
recentReleases: 2
createdAt: "2020-11-21T17:22:41Z"
lastCommitAt: "2026-09-21T09:13:58Z"
lastReleaseAt: "2026-09-04T10:02:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 88
maintainers: ["fametrano", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/78a74b82f42aebf7e0efe69913ca93cce6179a85f11f3bef18e6a4e89e49e475/btclib-org/btclib-node"
---

# btclib-node

btclib-node is a full node bitcoin implementation written in Python and
based on btclib.

To install, or upgrade:

```shell
python -m pip install --upgrade btclib-node
```

Python 3.14 or newer: `pyproject.toml`'s `requires-python` says so and
says why, and pip refuses the wheel below it rather than installing
something that will not import. `btclib-node` is the command this puts
on `PATH`; `btclib-node -h` lists every option, spelled the way Bitcoin
Core spells its own. Read *Security* before running the node — the
classifier is `3 - Alpha` and the JSON-RPC listener is not something to
expose.

A checkout of `main` is a cycle in progress, declaring the month with no
day, so it is not the same thing as what pip installs;
[CONTRIBUTING.md](https://github.com/btclib-org/btclib-node/blob/HEAD/CONTRIBUTING.md) has how to work from one.

## Running a node

[Running a node](https://github.com/btclib-org/btclib-node/blob/HEAD/docs/source/running_a_node.md) is what comes after
`pip install`: the command against each of the four chains, pointing it
at a peer of your own, reading its progress, the RPC methods it
answers, what it validates and what it does not, and what a…
