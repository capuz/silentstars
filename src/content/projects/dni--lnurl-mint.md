---
repo: "dni/lnurl-mint"
name: "lnurl-mint"
description: "LNURLmint is an implementation of LUD-XX."
readmeQualityOk: true
url: "https://github.com/dni/lnurl-mint"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 5
forks: 1
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 9
createdAt: "2026-07-24T07:04:14Z"
lastCommitAt: "2026-08-13T05:17:44Z"
lastReleaseAt: "2026-08-12T17:09:34Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 69
undervaluedScore: 40
maintainers: ["dni"]
openGraphImageUrl: "https://opengraph.githubassets.com/509f5103c075cd1eb0a9b22134e7f53c213693abe9b5ab6e395f12c21e06935b/dni/lnurl-mint"
---

# lnurl-mint

Minimal backend implementing **lnurlcash** ([LUD-XX](https://github.com/lnurl/luds/pull/301),
open PR), Lightning bearer assets on top of plain [LUD-03](https://github.com/dni/lnurl-mint/blob/HEAD/../luds/03.md)
`withdrawRequest` and [LUD-06](https://github.com/dni/lnurl-mint/blob/HEAD/../luds/06.md) `payRequest`. A stripped-down
sibling of [lnurl_server](https://github.com/dni/lnurl-mint/blob/HEAD/../lnurl_server); nothing but the mint.

A bearer note is a `k1` this mint has credited with value. It is minted by paying a
LUD-06 invoice (the payment preimage *is* the note), circulates offline as
`lnurlw://<host>/w?k1=<k1>`, and can be rotated, split, merged, or melted back
to a BOLT-11 payment. Redeem one with [lnurl-wallet](https://github.com/dni/lnurl-wallet),
a reference wallet implementation (hosted at
[dni.github.io/lnurl-wallet](https://dni.github.io/lnurl-wallet)).

## Endpoints

| Endpoint        | Role                                                                          |
|-----------------|-------------------------------------------------------------------------------|
| `GET /`         | one-pager frontend: mint QR code (LNURL of `/p`), lightning…
