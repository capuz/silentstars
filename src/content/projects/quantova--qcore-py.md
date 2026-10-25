---
repo: "Quantova/QCore.py"
name: "QCore.py"
description: "Quantova's client core for Python. Post quantum signing and Q1 addresses, generated over the Rust core."
readmeQualityOk: true
url: "https://github.com/Quantova/QCore.py"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [73, 27]
topics: ["blockchain", "client-library", "cryptography", "fips-204", "ml-dsa", "post-quantum", "quantova", "quantum-resistant", "quantum-safe", "sdk"]
stars: 35
forks: 8
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2026-07-17T18:17:14Z"
lastCommitAt: "2026-10-25T09:01:14Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 35
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/0d85709d354b22e463b2127d9ab0531d518b847b524b14efdd23146dc6b0a5fc/Quantova/QCore.py"
---

# QCore.py

The Quantova post quantum client core for Python. It is the Rust core QCore.rs built as a native extension with pyo3, so the key derivation, the post quantum signing, and every RPC request body are the core's and are never rewritten in Python. This package does the HTTP and reads the documented response fields, and the core does everything that has to be exactly right. A second implementation of the signing would be a second chance to be wrong with a user's money, so there is only ever the one.

One core with one binding for each language. QCore.rs is the Rust core. QCore.js is the JavaScript binding over it. QCore.py is this Python binding over it. It imports as quantova_qcore, a name distinct from the unrelated qcore project, and the distribution is quantova-qcore. It is not published on PyPI, and the project named qcore on PyPI is an unrelated package, so never install it with pip install qcore. Earlier releases imported as qcore, and that name is gone so it can never be confused with the unrelated package. Build it from this repository with maturin as described under Building.

## What this library is for

Any Python program that holds a Quantova account, reads the…
