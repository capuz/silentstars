---
repo: "cagscalclabs/lwip-ce"
name: "lwip-ce"
description: "An IP stack implementation for the TI-84+ CE derived from lwIP code. Implements custom memory management for <60K RAM, assembly optimizations, and a custom lightweight TLS stack engineered for the constraints of the system."
readmeQualityOk: true
url: "https://github.com/cagscalclabs/lwip-ce"
homepage: "https://cagscalclabs.github.io/lwip-ce/"
language: "C"
languages: ["C"]
languagePcts: [87]
topics: ["networking", "ti-84-plus-ce", "tls13"]
stars: 29
forks: 4
openIssues: 6
closedIssues: 23
watchers: 4
contributors: 110
recentReleases: 0
createdAt: "2023-11-05T01:41:42Z"
lastCommitAt: "2026-10-25T02:47:42Z"
lastReleaseAt: "2026-06-25T00:05:39Z"
status: "thriving"
tags: ["solo_builder", "funded"]
healthScore: 95
undervaluedScore: 60
maintainers: ["acagliano", "alessiodam"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/714486642/044ab6d9-92b8-49f8-9377-a0c1b84472b9"
fundingLinks: ["GITHUB:https://github.com/cagscalclabs", "KO_FI:https://ko-fi.com/cagscalclabs", "BUY_ME_A_COFFEE:https://buymeacoffee.com/cagscalclabs", "CUSTOM:https://buy.stripe.com/28E6oG0CS6uQ6GN9NI1Fe01"]
discussionCount: 4
---

**Main CI**

**Code Quality**

*SAST uses `git diff` against upstream lwIP to filter out untouched upstream code and scans only targets unique to this repository. For upstream issues, file an issue with [nonGNU](https://savannah.nongnu.org/bugs/?group=lwip).*

*DAST uses a locally-run hardware-in-the-loop workflow because the current emulator does not support Ethernet devices. A helper program runs on the calculator and exposes the DAST target while a local script attaches to it, performs network probes, advances the calculator-side test state, and writes results to JSON. This workflow then parses the JSON report and updates the test state accordingly.*

**Cryptography Quality Checks**

*CAVP selects 16 random samples from the NIST RSP datasets that match the primitives we provide (with the exception of SHA-256 Monte Carlo, which selects one) (totaling 185 samples covering AES-CBC, GCM, CCM, SHA-256, HMAC-SHA-256, PBKDF2, HKDF, RSA-PSS-RSAE-SHA256, RSA-PKCS1-SHA256, and X25519). Where NIST publishes no RSP for a primitive (or in the case of RSA with e=65537), the output of python3-cryptography is used instead. Our workflow caches the expected values and then serializes the inputs…
