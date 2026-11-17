---
repo: "tibetty/eckey-utils"
name: "eckey-utils"
description: "Node.js based EC key utilities to generate the PEM contents (required by crypto.sign and crypto.verify) from the raw keys generated crypto.ECDH and to parse key info from given PEM content."
readmeQualityOk: true
url: "https://github.com/tibetty/eckey-utils"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 5
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2018-12-04T03:54:34Z"
lastCommitAt: "2026-11-17T12:19:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 97
undervaluedScore: 52
maintainers: ["tibetty"]
openGraphImageUrl: "https://opengraph.githubassets.com/73fa9552294a72b5c2d2c7f972ab8cffc2a8541749551ff8621a75c31c9da869/tibetty/eckey-utils"
---

# eckey-utils

Convert raw EC key material to and from PEM, DER and JWK.

`crypto.createECDH()` returns bare keys (the scalar `d` and the point `04 || x || y`), while
`crypto.sign()` and `crypto.verify()` want a PEM string or a `KeyObject`. This library bridges the
gap in both directions, so the same key pair can be generated raw, persisted as PEM, and parsed back
into raw keys.

- No runtime dependencies: nothing beyond `Buffer` and `node:crypto`.
- ESM and CommonJS builds with bundled TypeScript types.
- 79 named curves: NIST, SEC 2 prime and binary, Brainpool, ANSI X9.62 and WAP WSG.
- JWK support for the EC curves with a registered `crv` value (P-256, P-384, P-521, secp256k1),
  plus OKP keys for Ed25519 and Ed448.
- Compressed public points (`02 || x` / `03 || x`) accepted anywhere a key is read; output is always
  uncompressed.
- Key length checked against the curve, so a key from the wrong curve fails where it happens.

## Install

```bash
npm install eckey-utils
```

Node.js 18 or newer. CI covers 20, 22 and 24 (Node 18 is end-of-life).

**Node.js only.** The package uses `Buffer` and `node:crypto`, and it exists to bridge raw keys to
`crypto.sign` / `crypto.verify`.…
