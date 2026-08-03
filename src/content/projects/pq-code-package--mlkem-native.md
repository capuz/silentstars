---
repo: "pq-code-package/mlkem-native"
name: "mlkem-native"
description: "Secure, fast, and portable C90 implementation of ML-KEM / FIPS 203"
readmeQualityOk: true
url: "https://github.com/pq-code-package/mlkem-native"
homepage: "https://pq-code-package.github.io/mlkem-native/dev/bench/"
language: "Assembly"
languages: ["Assembly", "C"]
languagePcts: [45, 21]
topics: ["ml-kem", "post-quantum-cryptography", "post-quantum-kem", "formal-verification", "cryptography-library"]
stars: 217
forks: 61
openIssues: 99
closedIssues: 443
watchers: 7
contributors: 30
recentReleases: 1
createdAt: "2024-03-18T13:21:26Z"
lastCommitAt: "2026-08-03T06:44:33Z"
lastReleaseAt: "2026-06-20T09:25:07Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 44
maintainers: ["mkannwischer", "hanno-becker", "willieyz"]
openGraphImageUrl: "https://opengraph.githubassets.com/1e3e301190ce8a31e25c19a52deb69d2d357c0ced2661e76f0b37c7f087e0240/pq-code-package/mlkem-native"
discussionCount: 5
---

[//]: # (SPDX-License-Identifier: CC-BY-4.0)

# mlkem-native

mlkem-native is a secure, fast, and portable C90[^C90] implementation of ML-KEM[^FIPS203].
It is a fork of the ML-KEM reference implementation[^REF].

All C code in [mlkem/src/*](https://github.com/pq-code-package/mlkem-native/blob/HEAD/mlkem) and [mlkem/src/fips202/*](https://github.com/pq-code-package/mlkem-native/blob/HEAD/mlkem/src/fips202) is proved memory-safe (no memory overflow) and type-safe (no integer overflow)
using CBMC[^CBMC]. All AArch64 and x86_64 assembly is proved to be functionally correct,
memory-safe, and of secret-independent timing (constant-time), using HOL-Light[^HOL-Light].

mlkem-native includes native backends for Arm (64-bit, Neon), Intel/AMD (64-bit, AVX2), RISC-V (64-bit, RVV), and POWER (ppc64le, VSX). See [benchmarks](https://pq-code-package.github.io/mlkem-native/dev/bench/) for performance data.

mlkem-native is supported by the [Post-Quantum Cryptography Alliance](https://pqca.org/) as part of the [Linux Foundation](https://linuxfoundation.org/).

## Quickstart for Ubuntu

```bash
# Install base packages
sudo apt-get update
sudo apt-get install make gcc python3 git

# Clone…
