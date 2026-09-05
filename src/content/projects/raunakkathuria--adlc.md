---
repo: "raunakkathuria/adlc"
name: "adlc"
description: "ADLC — the automated development life cycle. A spec-driven delivery loop where agents carry the work between two human gates. "
readmeQualityOk: true
url: "https://github.com/raunakkathuria/adlc"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [81]
stars: 8
forks: 1
openIssues: 1
closedIssues: 28
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-08-08T15:46:56Z"
lastCommitAt: "2026-09-05T07:48:00Z"
lastReleaseAt: "2026-09-05T07:48:36Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 56
maintainers: ["raunakkathuria", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b5b5ddc7c5453bf69de3bef64ac5ad654e742d6b97ed985675e2a6e0463c1ee/raunakkathuria/adlc"
---

# ADLC — the automated development life cycle

An **assembly line for software development**, built from GitHub issues, GitHub Actions, [OpenSpec](https://github.com/Fission-AI/OpenSpec), and [buildwright](https://github.com/raunakkathuria/buildwright): an issue goes in, a verified pull request comes out, and exactly two human decisions happen in between.

This repo is both the line itself — six reusable workflows any repository can adopt — and its own first consumer: a small storefront (catalog and orders, in memory, zero dependencies) that ships through the line it demonstrates. Its issues, PRs, and Actions history are the living proof.

**Anything in, one shape out.** Work arrives as a GitHub issue and triage decides what it is. A bug is accepted only once the reproduce station turns it into a failing test — a reproduction, not a model's opinion, is what makes a bug real. Anything that is not a bug has nothing to reproduce. Either way, what leaves is a spec delta.

**Approved intent in, verified code out.** Gate 1 is an approving review on that spec PR, and the approval, not a merge, is what starts the build.

Everything between the two gates is automated. Every check is run by…
