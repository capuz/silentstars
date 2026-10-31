---
repo: "ivarvong/ply"
name: "ply"
description: "ply — a git client for anywhere. Zero-dependency JS git client for Workers and Node: thin-delta edits, git-exact merges, OTLP spans."
readmeQualityOk: true
url: "https://github.com/ivarvong/ply"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [100]
stars: 12
forks: 0
openIssues: 8
closedIssues: 13
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-10-23T22:29:39Z"
lastCommitAt: "2026-10-31T02:00:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 26
maintainers: ["ivarvong"]
openGraphImageUrl: "https://opengraph.githubassets.com/cbe3b1c44ba0f79ee8f191763de630c376b6a55f48611f1869b6297491d6e146/ivarvong/ply"
---

# ply

Zero-dependency git smart-HTTP client that edits one file in a remote repo in **O(1) memory** and pushes the change **as a delta**. Runs anywhere with `fetch`, `CompressionStream`, `crypto.getRandomValues` and `Uint8Array` (Node ≥ 20, Workers, browsers behind a CORS proxy).

Every byte and every roundtrip is recorded as an OTLP span. The test suite is a property/fuzz harness that uses real `git` as the oracle and the spans as the coverage map that steers generation.

The hosted HTTP API and the public repository viewer live in [ply-web](https://github.com/ivarvong/ply-web) (the Cloudflare Worker `ply`). This repository is the git client.

`parsePack` accepts optional `maxObjects` and `maxInflatedTotal`. Omitting them uses `DEFAULT_LIMITS` (`maxPackObjects` 100_000, `maxInflatedTotal` 256 MiB). A limits object that drops either key fails closed (`bad_request`) instead of leaving the cap off. `validateIdent({ name, email, time, tz })` is the only way to build an author, committer, or tagger: `time` is a non-negative safe integer, `tz` is a civil offset (`-1200`..`+1400`), and the result is branded so a spread cannot reach `ident()`.…
