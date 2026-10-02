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
openIssues: 25
closedIssues: 1074
watchers: 4
contributors: 18
recentReleases: 0
createdAt: "2018-05-16T09:08:50Z"
lastCommitAt: "2026-10-02T10:00:20Z"
lastReleaseAt: "2020-11-22T20:32:47Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 99
undervaluedScore: 51
maintainers: ["fametrano", "opencode13241-eng", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f52f13e25dd487989a4d796cfbb65a10091712862967f8eee53f127df7a0fda0/btclib-org/btclib"
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
enforces, and it answers to vectors their authors publish: the BIPs' own,
Bitcoin Core's script, transaction, sighash and key-encoding files, and
Appendix A.2 of RFC 6979. `tests/_data/README.md` pins each vendored file to the
upstream commit it was copied from, and says whether the two still match —
including the few vectors that are btclib's own, having no upstream.

The library is…
