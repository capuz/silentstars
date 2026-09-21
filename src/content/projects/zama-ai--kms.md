---
repo: "zama-ai/kms"
name: "kms"
description: "Key Management System for the Zama Protocol."
readmeQualityOk: true
url: "https://github.com/zama-ai/kms"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 73
forks: 21
openIssues: 4
closedIssues: 18
watchers: 0
contributors: 34
recentReleases: 0
createdAt: "2025-07-03T16:42:43Z"
lastCommitAt: "2026-09-21T09:14:23Z"
lastReleaseAt: "2025-10-23T18:42:31Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 51
maintainers: ["dvdplm", "kc1212", "jot2re"]
openGraphImageUrl: "https://opengraph.githubassets.com/479f2bee1dc2c5baf5091a3dd893d9cadd3286f03a48cc1de69944ce003ac56d/zama-ai/kms"
---

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="KMS-dark.png">
  <source media="(prefers-color-scheme: light)" srcset="KMS-light.png">
</picture>
</p>

</p>

</p>

## About

### What is the KMS

The Zama KMS is a fully decentralized key management solution for TFHE, based on a maliciously secure and robust [MPC protocol](https://eprint.iacr.org/2023/815) utilizing secret sharing,
primarily for threshold key generation and threshold decryption.
We also made the [full specification](https://github.com/zama-ai/threshold-fhe/blob/main/docs/CryptographicDocumentation.pdf)
available to the public.

The system consists of a core cryptography layer that implements cryptographic primitives and MPC protocols and a service layer that packs everything up and offers an interface for interacting with the components.

Interaction with the KMS can either happen via a gRPC interface, or in its deployed form via the [FHEVM](https://github.com/zama-ai/fhevm).

### Main features

- Threshold key generation for keys that are compatible with [TFHE-rs](https://github.com/zama-ai/tfhe-rs).
- Threshold decryption of TFHE-rs ciphertexts.
- Resharing of secret FHE key shares.
- Distributed…
