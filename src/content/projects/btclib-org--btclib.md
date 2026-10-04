---
repo: "btclib-org/btclib"
name: "btclib"
description: "A Python library for 'bitcoin cryptography'"
readmeQualityOk: true
url: "https://github.com/btclib-org/btclib"
homepage: "https://btclib.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["bitcoin", "cryptography", "elliptic-curves", "ecdsa", "schnorr", "electrum", "base58", "bech32", "segwit", "message-signing"]
stars: 113
forks: 47
openIssues: 5
closedIssues: 1102
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2018-05-16T09:08:50Z"
lastCommitAt: "2026-10-04T10:02:11Z"
lastReleaseAt: "2020-11-22T20:32:47Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 100
undervaluedScore: 51
maintainers: ["fametrano", "dependabot[bot]", "opencode13241-eng"]
openGraphImageUrl: "https://opengraph.githubassets.com/9e13cee01545d6ebe56aa7534b367346ddf4252ba3fd6a0933a56911724ca0dc/btclib-org/btclib"
---

# A Python library for 'bitcoin cryptography'

---

[btclib](https://btclib.readthedocs.io/) is a Python
[type annotated](https://docs.python.org/3/library/typing.html) library
for teaching, learning and using bitcoin, focused on elliptic curve
cryptography and bitcoin's blockchain. It started as a teaching tool for
Ferdinando Ametrano's
*[Bitcoin and Blockchain Technology](https://www.ametrano.net/bbt/)*
course, it is used in production today (still marked as beta
because it is often refactored for improved clarity — [CONTRIBUTING.md's
*Breaking a caller is not an
argument*](https://github.com/btclib-org/btclib/blob/HEAD/CONTRIBUTING.md#breaking-a-caller-is-not-an-argument) says
what that promises a caller and what it does not).

The test suite covers virtually the whole code base, a floor the build
enforces, and it answers to vectors their authors publish: the BIPs' own
and Bitcoin Core's script, transaction, sighash and key-encoding files.
`tests/_data/README.md` pins each vendored file to the
upstream commit it was copied from, and says whether the two still match —
including the few vectors that are btclib's own, having no upstream.
The elliptic curve schemes are answered for…
