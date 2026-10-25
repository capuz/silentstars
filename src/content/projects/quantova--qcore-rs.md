---
repo: "Quantova/QCore.rs"
name: "QCore.rs"
description: "The Quantova client core in Rust. Post quantum keys, ML-DSA and SLH-DSA signing, and every gateway request built here."
readmeQualityOk: true
url: "https://github.com/Quantova/QCore.rs"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["blockchain", "client-library", "cryptography", "fips-204", "ml-dsa", "post-quantum", "quantova", "quantum-resistant", "quantum-safe", "sdk"]
stars: 35
forks: 8
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 1
recentReleases: 0
createdAt: "2026-07-14T01:34:34Z"
lastCommitAt: "2026-10-25T09:00:45Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 35
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/5429492419c6c672a932f85ae1e473a4b256eabac16e462eb99a58be5fe85cc5/Quantova/QCore.rs"
---

# QCore.rs

The Quantova post quantum client core, written in Rust. It is the one place a Quantova client does the four things it has to get exactly right. It derives a post quantum key. It builds a transaction. It signs that transaction with the post quantum scheme. It speaks the Quantova gateway wire. QCore.js and QCore.py are generated over this same core, so a signature is written once in Rust and never rewritten in another language. A second implementation of the signing would be a second chance to be wrong with a user's money, so there is only ever the one.

One core with one binding for each language. QCore.rs is this Rust core. QCore.js is the JavaScript and WebAssembly binding over it. QCore.py is the Python binding over it. All three derive the same address from the same seed and sign the same body to the same bytes, because they are the one core rather than three copies of it.

## What this library is for

Any program that holds a Quantova account, reads the chain, and sends signed transactions. A wallet, a block explorer, a faucet, a trading bot, a backend service, or a command line tool. The program makes whatever network calls it prefers and QCore does the…
