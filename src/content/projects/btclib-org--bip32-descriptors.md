---
repo: "btclib-org/bip32-descriptors"
name: "bip32-descriptors"
description: "BIP32 keys, output script descriptors and miniscript, built on btclib"
readmeQualityOk: true
url: "https://github.com/btclib-org/bip32-descriptors"
homepage: "https://btclib.org/bip32-descriptors/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bip32", "bip380", "bip388", "bitcoin", "hd-wallet", "miniscript", "output-descriptors"]
stars: 9
forks: 1
openIssues: 22
closedIssues: 40
watchers: 0
contributors: 4
recentReleases: 4
createdAt: "2026-10-31T08:46:45Z"
lastCommitAt: "2026-11-07T16:12:17Z"
lastReleaseAt: "2026-11-06T23:53:08Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 92
undervaluedScore: 59
maintainers: ["fametrano", "dependabot[bot]", "Mr-Neutr0n"]
openGraphImageUrl: "https://opengraph.githubassets.com/e7f3514ae12128939d7851dcdc75ef5e938da76a2ec55ab84fcea16c19779a52/btclib-org/bip32-descriptors"
---

# bip32-descriptors

BIP32 hierarchical deterministic keys, output script descriptors and
miniscript, in typed Python.

It is fully annotated and ships `py.typed`. It is built on
[btclib](https://github.com/btclib-org/btclib), the protocol package, and
[ecc](https://github.com/btclib-org/ecc), the curve package; its
`secp256k1` extra adds the libsecp256k1 bindings, and without them the
Python arithmetic answers instead.

## What is here

- [BIP32](https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki)
  hierarchical deterministic keys: extended key serialization, private and
  public derivation, derivation paths and key origins (`bip32`)
- [BIP380](https://github.com/bitcoin/bips/blob/master/bip-0380.mediawiki)
  output script descriptors, from `pk()` to `tr()` with its script tree,
  `musig()` key expressions, and
  [BIP388](https://github.com/bitcoin/bips/blob/master/bip-0388.mediawiki)
  wallet policies (`descriptors`)
- [BIP379](https://github.com/bitcoin/bips/blob/master/bip-0379.md)
  miniscript: parsing, type checking, the script it compiles to and the
  witness that satisfies it (`descriptors.miniscript`)…
