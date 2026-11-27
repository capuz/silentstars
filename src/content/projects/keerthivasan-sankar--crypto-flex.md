---
repo: "keerthivasan-sankar/crypto_flex"
name: "crypto_flex"
description: "A local-first crypto-agility policy engine for Python — hybrid classical + post-quantum (ML-KEM) key exchange with zero network dependency."
readmeQualityOk: true
url: "https://github.com/keerthivasan-sankar/crypto_flex"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["applied-cryptography", "cryptographic-agility", "cryptography", "cybersecurity", "hybrid-cryptography", "information-security", "liboqs", "local-first", "ml-kem", "offline-first"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2026-08-18T13:40:44Z"
lastCommitAt: "2026-11-27T16:30:54Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 83
undervaluedScore: 46
maintainers: ["keerthivasan-sankar", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5edb443c115d1cddb4411f58596673216c42d1c0a2dbf11f5bc1b931f5a30449/keerthivasan-sankar/crypto_flex"
---

# cryptoflex

Version: 0.5.5
Status: RELEASE CANDIDATE / research prototype

A local-first crypto-agility policy engine for Python.

`cryptoflex` sits between your application and its cryptographic primitives. It selects the strongest combination of classical (X25519) and post-quantum (ML-KEM via [liboqs](https://github.com/open-quantum-safe/liboqs)) algorithms that the current machine can support, then hands you a single root key — without ever making a network call.

> **Status:** security-hardened research prototype. CryptoFlex v0.5.5 has undergone maintainer-led security hardening, technical reviews, and supply-chain integrity verification covering its cryptographic API boundaries, hybrid key-combination design, header authentication, downgrade protection, streaming integrity, keystore protection, memory-handling practices, adversarial testing, and reproducible build and SBOM verification. This review is not an independent third-party security audit or formal cryptographic proof. The project remains prepared for further independent security review.
