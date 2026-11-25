---
repo: "andreabedini/ghc-bootstrap"
name: "ghc-bootstrap"
description: "Bootstrapping GHC from source"
readmeQualityOk: true
url: "https://github.com/andreabedini/ghc-bootstrap"
language: "Haskell"
languages: ["Haskell", "Shell", "Nix"]
languagePcts: [37, 25, 23]
topics: ["bootstrap", "ghc", "haskell"]
stars: 6
forks: 0
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-30T09:02:57Z"
lastCommitAt: "2026-11-25T03:10:27Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 88
undervaluedScore: 51
maintainers: ["andreabedini"]
openGraphImageUrl: "https://opengraph.githubassets.com/b0d034f6ce26a17261ff79c3d992d547a83a6b56f9d9c4882c863b8b627c51c6/andreabedini/ghc-bootstrap"
discussionCount: 0
---

# Bootstrapping GHC from source

This repository builds GHC 9.14.1 starting from a C compiler and the source code of Hugs. Every compiler in the
chain is built from source by the one before it. There is no Haskell binary
to trust, and generated code stands in for source only in the few places I
list in [What the chain trusts](#what-the-chain-trusts).

By "bootstrapping" I mean what [bootstrappable.org](https://bootstrappable.org)
means: the trusted base is a C toolchain and source code, not a pre-built
binary. "Bootstrapping GHC with Hugs" is on their
[list of projects](https://bootstrappable.org/projects.html). This is not about porting
GHC to a new platform, nor about rebuilding GHC with a GHC you already have.

I relied on Claude (Anthropic's coding agent) for most of the grunt work:
running the probes, chasing build failures, writing patches and Nix
derivations, and keeping the notes. The decisions that stand are in
[`DECISIONS.md`](https://github.com/andreabedini/ghc-bootstrap/blob/HEAD/DECISIONS.md); how we reached them is in the commit history.
