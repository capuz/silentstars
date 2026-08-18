---
repo: "skku-syslab/zerosock"
name: "zerosock"
description: "[NSDI'27] ZeroSock: Revisiting TCP Zero-Copy Receive in Linux"
readmeQualityOk: true
url: "https://github.com/skku-syslab/zerosock"
language: "C"
languages: ["C"]
languagePcts: [79]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-27T06:55:38Z"
lastCommitAt: "2026-08-18T04:07:26Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 78
undervaluedScore: 38
maintainers: ["kimkisu2502", "jaehyun-hwang"]
openGraphImageUrl: "https://opengraph.githubassets.com/caaecebe5b225a11a8a22a5c97153c343009cd660357d0813ea4a6d99123d8bb/skku-syslab/zerosock"
---

# ZeroSock: Revisiting TCP Zero-Copy Receive in Linux

**ZeroSock** is a novel zero-copy receive (RX) framework for CPU-efficient network I/O
processing, combining a **kernel-managed user virtual address pool** with **new
zero-copy APIs**. Linux's existing zero-copy RX (`tcp_mmap`) maps into user-chosen
addresses that may later be reused, so releasing a mapping must clear PTEs and flush
TLB entries. It also falls back to a data copy whenever payload is not page-aligned,
and returns released pages to the global freelist rather than the NIC's page pool.
Together these costs often negate the benefit of copy elimination.

ZeroSock instead maps kernel pages to previously unused virtual addresses to avoid
immediate TLB flushes, then batches PTE updates and flushes to amortize the remapping
cost. It preserves page-pool association, and through end-to-end coordination keeps
payload layouts mapping-friendly across a wide range of message sizes.

Implemented in Linux kernel 6.17, ZeroSock improves throughput by ~2.17× and ~2.87×
over the default Linux copy-based path and the existing zero-copy RX path, while
almost saturating a 400Gbps link using only three CPU cores.

## Repository…
