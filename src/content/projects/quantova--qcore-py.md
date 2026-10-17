---
repo: "Quantova/QCore.py"
name: "QCore.py"
description: "Quantova's client core for Python. Post quantum signing and Q1 addresses, generated over the Rust core."
readmeQualityOk: true
url: "https://github.com/Quantova/QCore.py"
language: "Python"
languages: ["Python"]
languagePcts: [86]
topics: ["blockchain", "client-library", "cryptography", "fips-204", "ml-dsa", "post-quantum", "quantova", "quantum-resistant", "quantum-safe", "sdk"]
stars: 35
forks: 8
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2026-07-17T18:17:14Z"
lastCommitAt: "2026-10-17T07:58:25Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 35
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f79a269fbc8b903bc35f54fac8d93d67386a85276b6df9c4897f0b3572b024b/Quantova/QCore.py"
---

# QCore.py

The Quantova post quantum client core for Python. It is the Rust core QCore.rs built as a native extension with pyo3, so the key derivation, the post quantum signing, and every RPC request body are the core's and are never rewritten in Python. This package does the HTTP and reads the documented response fields, and the core does everything that has to be exactly right. A second implementation of the signing would be a second chance to be wrong with a user's money, so there is only ever the one.

One core with one binding for each language. QCore.rs is the Rust core. QCore.js is the JavaScript binding over it. QCore.py is this Python binding over it. It imports as qcore. It is not published on PyPI, and the project named qcore on PyPI is an unrelated package, so never install it with pip install qcore. Build it from this repository with maturin as described under Building.

## What this library is for

Any Python program that holds a Quantova account, reads the chain, and sends signed transactions. A backend service, an indexer, an explorer, a faucet, a validator tool, or a script. Your code drives the flow it wants and QCore.py derives the key, signs the transaction,…
