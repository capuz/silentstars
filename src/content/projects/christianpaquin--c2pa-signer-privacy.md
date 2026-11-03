---
repo: "christianpaquin/c2pa-signer-privacy"
name: "c2pa-signer-privacy"
description: "Prototyping cryptographic privacy solutions for C2PA signers "
readmeQualityOk: true
url: "https://github.com/christianpaquin/c2pa-signer-privacy"
language: "Rust"
languages: ["Rust"]
languagePcts: [62]
stars: 9
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-01-30T17:19:56Z"
lastCommitAt: "2026-11-03T19:05:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 44
maintainers: ["christianpaquin"]
openGraphImageUrl: "https://opengraph.githubassets.com/b7684e232bdc5da661d317a3e888780388753bf66ac4beeea7281ac32c8e3f1f/christianpaquin/c2pa-signer-privacy"
---

# C2PA Signer Privacy

This project explores privacy-preserving signature schemes for [C2PA](https://c2pa.org/) (Coalition for Content Provenance and Authenticity) manifests, as described in this [blog post](https://christianpaquin.github.io/2026-03-13-privacy-for-c2pa-signers.html). The goal is to allow verification of content authenticity while protecting the identity of individual signers.

## Approaches

Two proof-of-concept implementations demonstrate different privacy strategies:

| Approach | Description | Documentation |
|----------|-------------|---------------|
| **BBS Signatures** | Toy issuer/holder flow using BBS credentials, selective disclosure, and C2PA hash-bound presentations | [bbs-signatures/](https://github.com/christianpaquin/c2pa-signer-privacy/blob/HEAD/bbs-signatures/README.md) |
| **X.509 + ZK Proofs** | Keep standard X.509/ECDSA signing, add a post-processing step that replaces the signature with a zero-knowledge proof | [zk-proofs/](https://github.com/christianpaquin/c2pa-signer-privacy/blob/HEAD/zk-proofs/README.md) |
| **Web UI Demo** | Flask web interface for both prototypes |…
