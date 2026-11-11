---
repo: "btclib-org/ecc"
name: "ecc"
description: "Elliptic-curve arithmetic and the schemes built on it, multi-curve, accelerated by libsecp256k1 on secp256k1"
readmeQualityOk: true
url: "https://github.com/btclib-org/ecc"
homepage: "https://btclib.org/ecc/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bip340", "cryptography", "ecdsa", "ecies", "elliptic-curves", "ellswift", "frost", "musig2", "pedersen-commitment", "rfc-6979"]
stars: 9
forks: 5
openIssues: 7
closedIssues: 193
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-09-25T21:10:35Z"
lastCommitAt: "2026-11-11T11:19:19Z"
lastReleaseAt: "2026-10-23T07:05:41Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 99
undervaluedScore: 71
maintainers: ["fametrano", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/a130feead2f34c2569803d33c11835446dcc147bffa67ba0a484594dbca97488/btclib-org/ecc"
---

# ecc

Elliptic curve arithmetic, and the signature, key-agreement and
commitment schemes built on it, in typed Python.

It is fully annotated and ships `py.typed`.

## What is here

- modular arithmetic: inverse, blinded and variable-time, Legendre
  symbol, square root (`number_theory`)
- the elliptic curve class, over any curve in short Weierstrass form
    - Jacobian coordinates, and the secp256k1 endomorphism
    - double and multi scalar multiplication (Straus's algorithm and
      Bos-Coster's)
    - SEC 1 octet encodings of points and scalars
    - the SEC 2 v1 and v2, NIST and Brainpool curves, and low
      cardinality test curves
- ECDSA, with DER encoding, public key recovery, low-R grinding and
  [RFC 6979](https://www.rfc-editor.org/rfc/rfc6979.html) deterministic
  nonces
- [BIP340](https://github.com/bitcoin/bips/blob/master/bip-0340.mediawiki)
  Schnorr signatures, and their batch verification
- the anti-exfil protocol, and the sign-to-contract commitment it rests
  on, for both signature schemes
- [MuSig2](https://github.com/bitcoin/bips/blob/master/bip-0327.mediawiki)
  multi-signatures and
  [FROST](https://github.com/bitcoin/bips/pull/2070) (draft BIP445)…
