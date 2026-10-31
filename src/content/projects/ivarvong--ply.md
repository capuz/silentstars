---
repo: "ivarvong/ply"
name: "ply"
description: "ply — a git client for anywhere. Zero-dependency JS git client for Workers and Node: thin-delta edits, git-exact merges, OTLP spans."
readmeQualityOk: true
url: "https://github.com/ivarvong/ply"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [80]
stars: 12
forks: 0
openIssues: 7
closedIssues: 26
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-23T22:29:39Z"
lastCommitAt: "2026-10-31T15:58:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 35
maintainers: ["ivarvong"]
openGraphImageUrl: "https://opengraph.githubassets.com/ae4fb686c6b6a25c233620d2180e2cff616bb608b658e3ee67df26439bee8849/ivarvong/ply"
---

# ply

Zero-dependency git smart-HTTP client that edits one file in a remote repo in **O(1) memory** and pushes the change **as a delta**. Runs anywhere with `fetch`, `CompressionStream`, `crypto.getRandomValues` and `Uint8Array` (Node ≥ 20, Workers, browsers behind a CORS proxy).

Every byte and every roundtrip is recorded as an OTLP span. The test suite is a property/fuzz harness that uses real `git` as the oracle and the spans as the coverage map that steers generation.

The hosted HTTP API and the public repository viewer live in [ply-web](https://github.com/ivarvong/ply-web) (the Cloudflare Worker `ply`). This repository is the git client.

`parsePack` accepts optional `maxObjects` and `maxInflatedTotal`. Omitting them uses `DEFAULT_LIMITS` (`maxPackObjects` 100_000, `maxInflatedTotal` 256 MiB). A limits object that drops either key fails closed (`bad_request`) instead of leaving the cap off. `validateIdent({ name, email, time, tz })` is the only way to build an author, committer, or tagger: `time` is a non-negative safe integer, `tz` is a civil offset (`-1200`..`+1400`), and the result is branded so a spread cannot reach `ident()`.…
