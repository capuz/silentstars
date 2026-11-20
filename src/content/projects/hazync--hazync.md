---
repo: "hazync/hazync"
name: "hazync"
description: "Bitcoin validity proofs from Bitcoin Core's own unmodified consensus code, proven in a RISC0 zkVM (research)"
readmeQualityOk: true
url: "https://github.com/hazync/hazync"
language: "Rust"
languages: ["Rust", "Python"]
languagePcts: [45, 39]
topics: ["bitcoin", "folding", "risc0-zkvm", "zk", "zkproof"]
stars: 7
forks: 1
openIssues: 0
closedIssues: 226
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-15T17:51:41Z"
lastCommitAt: "2026-11-20T12:24:08Z"
lastReleaseAt: "2026-07-24T12:31:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 55
maintainers: ["defenwycke"]
openGraphImageUrl: "https://opengraph.githubassets.com/a816184590a70f79e128b58bb9113bd7f170c2150dd3c3341260043d472c2d9f/hazync/hazync"
discussionCount: 2
---

# Hazync

**Sync Bitcoin from a proof, not from trust.**

---

## The problem

To use Bitcoin without trusting anyone, your node downloads the entire chain and re-checks every
signature ever made — hundreds of gigabytes and hours of work, and it grows every day. Most people
don't. They use someone else's node and take its word for it.

That cost is the reason Bitcoin gets less decentralised over time.

## The idea

Check the work **once**, produce a proof that it was done correctly, and let everyone else verify
that proof in milliseconds.

This isn't new. What's hard is the honest version of it.

## Why this one is different

Every other attempt rewrites Bitcoin's consensus rules in a language a prover can handle. That
rewrite then has to match Bitcoin Core **exactly, in every edge case, forever** — including the bugs
Core can never fix because they're now consensus. Nobody can prove that about a rewrite.
