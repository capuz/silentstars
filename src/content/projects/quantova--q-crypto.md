---
repo: "Quantova/Q-Crypto"
name: "Q-Crypto"
description: "The only cryptography in Quantova. From scratch ML-DSA, ML-KEM, SLH-DSA, and SHA-3 against NIST vectors. No elliptic curve."
readmeQualityOk: true
url: "https://github.com/Quantova/Q-Crypto"
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
createdAt: "2026-07-14T01:35:26Z"
lastCommitAt: "2026-09-23T08:46:09Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 87
undervaluedScore: 30
maintainers: ["quantova-inc"]
openGraphImageUrl: "https://opengraph.githubassets.com/24f7a1deb5babd277685e1ac7a174219e6b044338705133e1eeb6bef063812df/Quantova/Q-Crypto"
---

# Q-Crypto

Q-Crypto is the cryptographic floor of Quantova, a sovereign post quantum Layer 1 built from scratch with no classical escape hatch anywhere. It is the only cryptography in the organization. Every signature the chain checks, every key exchange the transport runs, every committee draw the consensus samples, and every crypto opcode the virtual machine executes calls into this one crate. There is no second implementation and no vendored library behind it.

## What it is

A from scratch reference implementation of the NIST post quantum standards, written against the published FIPS documents and validated against the official NIST known answer tests. The crate is built on the Rust standard library alone. It pulls in no third party dependency, no RustCrypto, no OpenSSL, nothing. What checks a signature on Quantova is code you can read in this repository, end to end, from the Keccak permutation up.

Classical public key cryptography is not merely absent, it is unrepresentable. There is no elliptic curve, no ECDSA, no secp256k1, no Ed25519, no X25519, no RSA, no pairing. A machine readable deny list in `deny.toml` bans those crates from anywhere in the dependency tree,…
