---
repo: "WolframInstitute/HypergraphRewritingEngine"
name: "HypergraphRewritingEngine"
description: "A high-performance implementation of multiway hypergraph rewriting for the Wolfram Physics Project."
readmeQualityOk: true
url: "https://github.com/WolframInstitute/HypergraphRewritingEngine"
language: "C++"
languages: ["C++"]
languagePcts: [76]
stars: 6
forks: 2
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2025-09-02T12:33:31Z"
lastCommitAt: "2026-08-03T06:45:01Z"
lastReleaseAt: "2026-07-22T10:45:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 80
maintainers: ["richardassar"]
openGraphImageUrl: "https://opengraph.githubassets.com/5318017217bf138cee9f29301af865f3f53f4ad09736b1f9b68a718cb433edfe/WolframInstitute/HypergraphRewritingEngine"
---

# Hypergraph Rewriting Engine

A high-performance implementation of multiway hypergraph rewriting with Mathematica integration.

## Status

This project is functional but under active development. No stable release has been made yet and APIs may change between versions.

## Features

- **Multiway Evolution**: Parallel state evolution with causal and branchial graph construction, single synchronisation point (no intra-evolution phase barriers).
- **Parallel Pattern Matching**: SCAN → EXPAND → SINK dataflow pipeline with work-stealing scheduling.
- **Edge Signature Indexing**: Fast candidate generation via multi-level signature partitioning.
- **Incremental Match Forwarding**: Re-use parent-state matches in child states; only find new matches that involve newly produced edges.
- **Canonicalization**: a fast Weisfeiler-Leman (WL) heuristic or exact McKay-style individualisation-refinement (IR) for isomorphism-correct deduplication.
- **Lock-free Data Structures**: concurrent hash map, lock-free list, lock-free deque, thread-safe arena.
- **Mathematica Paclet**: LibraryLink bindings with evolution, canonical/causal/branchial graph extraction, dimension / curvature / geodesic /…
