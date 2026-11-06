---
repo: "everanium/itb"
name: "itb"
description: "Experimental symmetric cipher construction"
readmeQualityOk: true
url: "https://github.com/everanium/itb"
language: "Assembly"
languages: ["Assembly", "Go"]
languagePcts: [29, 28]
topics: ["aead", "aead-cipher", "cipher", "cross-platform", "crypto-library", "cryptography", "cryptography-library", "deniable-encryption", "encryption", "post-quantum"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2026-03-23T00:43:04Z"
lastCommitAt: "2026-11-06T12:17:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 79
undervaluedScore: 46
maintainers: ["everanium"]
openGraphImageUrl: "https://opengraph.githubassets.com/64fef368ad610c782c35f219684737224d1a2d502220fa4efc4b2520c78bc066/everanium/itb"
---

> **Security notice.** ITB is an experimental symmetric cipher
> construction without prior peer review, independent cryptanalysis, or
> formal certification. The construction's security properties have
> **not been verified** by independent cryptographers or mathematicians.
>
> PRF-grade hash functions are **required**. No warranty is provided.

**No bespoke cryptography.** ITB introduces no cryptographic primitive of its own — no custom S-box, permutation, or round function. It is a construction over existing primitives, much as PGP composes standard ciphers rather than defining one. Such constructions are not the object of algorithm-level cryptographic certification: national regimes (NIST CAVP/FIPS in the US, GOST/FSB in Russia, OSCCA's SM-series in China, IC3S in India, SOG-IS/EUCC and national lists in the EU, ASD's ISM in Australia, CRYPTREC in Japan, KCMVP in South Korea) certify **primitives** and the **modules** built on them, not compositional schemes. Eligibility for regulated use is therefore inherited from the primitives ITB is configured with, not conferred by ITB itself.

---

A parameterized symmetric cipher construction library for Go that suppresses hash output…
