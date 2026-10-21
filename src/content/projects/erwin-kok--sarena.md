---
repo: "erwin-kok/sarena"
name: "sarena"
description: "An eBPF-based cloud-native network dataplane and control plane written in Rust, exploring CNI, Linux networking, and programmable networking architectures."
readmeQualityOk: true
url: "https://github.com/erwin-kok/sarena"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["cni", "dataplane", "ebpf", "linux-kernel", "networking", "rust", "aya", "kubernetes", "tcx", "xdp"]
stars: 22
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-15T15:12:30Z"
lastCommitAt: "2026-10-21T08:49:36Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 38
maintainers: ["erwin-kok"]
openGraphImageUrl: "https://opengraph.githubassets.com/424525bb21124c5e5a1f2de7276986b5e96bbdcbcea023d0f76852b5f399ceeb/erwin-kok/sarena"
discussionCount: 1
---

# Sarena

An eBPF-based 🐝 virtual network dataplane, control plane, and CNI, written in Rust 🦀
using [Aya](https://aya-rs.dev/). 

Sarena is an independent, from-scratch exploration of how kernel-level networking (routing, ARP, forwarding, and others) actually works, built one feature at a time.

> **Status: early development.** Sarena is an educational project focused on 
> understanding and implementing kernel-level networking concepts in Rust especially
> around eBPF. It is not audited, not benchmarked, and not intended for production use.
> Expect incomplete features, rough edges, and breaking changes without
> notice.

## Why this exists

A lot of the way to learn eBPF networking is by reading about projects like Cilium and looking at how they work. But I wanted to actually build one myself.

Sarena is my attempt to understand what is happening underneath: TCX classifiers, BPF maps, ARP, and the other pieces that make a network dataplane work. The idea is to build these things one at a time, rather than hiding everything behind a CNI plugin.

Sarena is heavily inspired by Cilium's datapath and uses some of the same architectural ideas. It is not a fork, replacement, or…
