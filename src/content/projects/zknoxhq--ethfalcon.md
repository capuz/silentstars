---
repo: "ZKNoxHQ/ETHFALCON"
name: "ETHFALCON"
description: "Implementation of FALCON and its variants for Ethereum"
readmeQualityOk: true
url: "https://github.com/ZKNoxHQ/ETHFALCON"
language: "Python"
languages: ["Python", "Solidity"]
languagePcts: [52, 26]
stars: 44
forks: 14
openIssues: 8
closedIssues: 24
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-01-24T08:41:34Z"
lastCommitAt: "2026-11-17T14:46:48Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 83
undervaluedScore: 52
maintainers: ["simonmasson", "rdubois-crypto"]
openGraphImageUrl: "https://opengraph.githubassets.com/47ec3904864730f9340cbc221bf4c89656d0808686a549b38f22cb203edb825e/ZKNoxHQ/ETHFALCON"
---

# ETHFALCON

ETHFALCON gather experimentations around FALCON adaptations for the ETHEREUM ecosystem. [Falcon signature scheme](https://falcon-sign.info/) is a post-quantum digital signature algorithm. 
This repo provides:

* on-chain [contracts](https://github.com/ZKNoxHQ/ETHFALCON/tree/main/src) for verification
* [python](https://github.com/ZKNoxHQ/ETHFALCON/tree/main/pythonref) signers and verification for testing (offchain and on-chain wrapping cast).
* [c](https://github.com/ZKNoxHQ/ETHFALCON/tree/main/falcon/nistfalcon) signers and verification for testing (based on the NIST reference implementation, with added functionalities).

**This is an experimental work, not audited: DO NOT USE IN PRODUCTION, LOSS OF FUND WILL OCCUR.**

## SPECIFICATION

The repo implements several versions of FALCON:

* FALCON is the legacy NIST round3 compliant (tested against the 100 official [KATS](https://csrc.nist.gov/projects/post-quantum-cryptography/post-quantum-cryptography-standardization/round-3-submissions) in [test/falcon_KAT_file.t.sol](https://github.com/ZKNoxHQ/ETHFALCON/blob/main/test/falcon_KAT_file.t.sol), plus single vectors in…
