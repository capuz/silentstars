---
repo: "ethereum/cryptography-specs"
name: "cryptography-specs"
description: "Specifications for cryptography in Ethereum, written in Lean."
url: "https://github.com/ethereum/cryptography-specs"
language: "Lean"
languages: ["Lean"]
languagePcts: [91]
stars: 12
forks: 1
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 1
createdAt: "2024-08-26T22:16:59Z"
lastCommitAt: "2026-07-03T12:22:51Z"
lastReleaseAt: "2026-05-07T05:49:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 61
undervaluedScore: 49
maintainers: ["jtraglia", "b-wagn"]
openGraphImageUrl: "https://opengraph.githubassets.com/20a006e43fb1a7801660d337b0b7607dbffe192ba0dc993277089cdb3820d0aa/ethereum/cryptography-specs"
---

# cryptography-specs

Specifications for cryptography in Ethereum, written in Lean.

## Specs

- `EthCryptographySpecs/Bls/`, BLS12-381 curve arithmetic, hash-to-curve, and signatures.
- `EthCryptographySpecs/Kzg/`, KZG polynomial commitments.

## Proofs

Formal proofs of properties of the specs exist in
`EthCryptographySpecs/Proofs/`, mirroring the layout above.

## Prerequisites

- [`elan`](https://github.com/leanprover/elan), for `lean` and `lake`.

## Building

```bash
lake build
```

## Tests

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -e '.[test]'
pytest
```

*Note*: Pre-generated reference tests are written to `tests/` at the project
root. These tests are intended for use across implementations and may be pinned
by downstream consumers.
