---
repo: "Quantova/Quantova-Conformance"
name: "Quantova-Conformance"
description: "The frozen cross repo conformance vectors for Quantova and their runner, holding the VM, the language, the SDK, and the node in lockstep and proving classical artifacts are unparseable."
readmeQualityOk: true
url: "https://github.com/Quantova/Quantova-Conformance"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 28
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T01:39:06Z"
lastCommitAt: "2026-10-25T09:00:58Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 30
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/f93c9957adf3431f4f5f28835661df83a6794c81863d512a43e3252f0b3c43a0/Quantova/Quantova-Conformance"
---

# Quantova-Conformance

The frozen cross repo test vectors for Quantova and the runner that reproduces them. It keeps the virtual machine, the language, the SDK, and the node in agreement on one wire format, and it proves that a classical artifact cannot be parsed at all.

Quantova is a sovereign post quantum Layer 1 that shares no wire and no encoding with any other chain. A claim like that has to be checkable, not asserted. The vectors here are the checkable form. Each is a fixed input and the exact value the reference must recompute, and the hostile vectors are inputs the reference must refuse.

## What it does

The runner reproduces every frozen vector with the reference crates and confirms two things. A positive vector must recompute bit for bit, and a hostile vector must be refused. The reference crates are pinned to exact git commits in `runner/Cargo.toml`, so a vector is measured against a known build and not a moving target.

```
qtv-idfmt, qtv-account, qtv-codec, qtv-tx   from Quantova-Chain
qtv-crypto                                   from Q-Crypto
```

Run it as a binary that prints one line per area, or as the test suite.

```
cargo run -p qtv-conformance-runner
cargo…
