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
forks: 8
openIssues: 16
closedIssues: 118
watchers: 0
contributors: 7
recentReleases: 5
createdAt: "2026-10-31T08:46:45Z"
lastCommitAt: "2026-11-11T11:21:45Z"
lastReleaseAt: "2026-11-11T00:31:51Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 97
undervaluedScore: 75
maintainers: ["fametrano", "claude[bot]", "txltedxgod"]
openGraphImageUrl: "https://opengraph.githubassets.com/561467a18a7d9081f8322993f5b4f91d7f84b358a9c199e722a0dd3963a99359/btclib-org/bip32-descriptors"
---

# bip32-descriptors

BIP32 hierarchical deterministic keys, output script descriptors and
miniscript, in typed Python.

It is fully annotated and ships `py.typed`. It is built on
[btclib](https://github.com/btclib-org/btclib), the protocol package,
[base58-bech32](https://github.com/btclib-org/base58-bech32), the codec
package, and [ecc](https://github.com/btclib-org/ecc), the curve package;
its `secp256k1` extra adds the libsecp256k1 bindings, and without them the
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
  witness that satisfies it…
