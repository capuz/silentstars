---
repo: "btclib-org/btclib-wallet"
name: "btclib-wallet"
description: "Bitcoin wallet functionality built on btclib"
readmeQualityOk: true
url: "https://github.com/btclib-org/btclib-wallet"
homepage: "https://btclib.org/btclib-wallet/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bip21", "bip32", "bip39", "bip44", "bip85", "bitcoin", "bolt11", "coin-selection", "electrum", "hardware-wallet"]
stars: 10
forks: 13
openIssues: 75
closedIssues: 273
watchers: 0
contributors: 15
recentReleases: 10
createdAt: "2026-09-24T14:31:54Z"
lastCommitAt: "2026-11-11T19:46:49Z"
lastReleaseAt: "2026-10-26T07:35:07Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 95
undervaluedScore: 74
maintainers: ["fametrano", "dependabot[bot]", "pre-commit-ci[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/8ccfd02019baa03fd70e84a7a206492cf3c55ed8a368264fff5fd37547d2fcea/btclib-org/btclib-wallet"
---

# btclib-wallet

From a seed to a signed, broadcast bitcoin transaction, on top of the
btclib library.

[btclib](https://github.com/btclib-org/btclib) is the protocol: the
encodings other than Base58Check and bech32, the scripts, the
transactions and the signature schemes, what a node consumes. This
package is what a wallet does with them, and every module with a
counterparty outside the process — a device, a node, a server, a file
from another wallet. It depends on btclib and on
[bitcoin-core-rpc](https://github.com/btclib-org/bitcoin-core-rpc), and
re-exports nothing of btclib's: a name btclib defines is imported from
btclib.

It is fully annotated and ships `py.typed`, and the test suite answers
to vectors their authors publish: the BIPs' and the SLIPs' own, HWI's, and
trezor's for BIP39 and SLIP39. `tests/_data/README.md` pins each vendored
file to the upstream commit it was copied from, and says whether the two
still match.

## Installing

```shell
python -m pip install --upgrade btclib-wallet
```

Signing and verifying run where ecc runs them, so its
[libsecp256k1 bindings](https://github.com/btclib-org/btclib-secp256k1)
are the recommended install beside it, and ecc's…
