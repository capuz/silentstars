---
repo: "cpetig/wasm-shm-test"
name: "wasm-shm-test"
description: "Prototype for zero-copy shared memory inter-component exchange"
readmeQualityOk: true
url: "https://github.com/cpetig/wasm-shm-test"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2024-11-26T23:29:54Z"
lastCommitAt: "2026-11-27T16:17:01Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 80
undervaluedScore: 35
maintainers: ["cpetig"]
openGraphImageUrl: "https://opengraph.githubassets.com/4989f919ab95004b55908854f41974f7a4a01bd19960bbaedaab2cbed9f902e8/cpetig/wasm-shm-test"
---

# Zero-copy shared memory for Wasm components

The [component model](https://component-model.bytecodealliance.org/) is
*shared-nothing*: every component owns its linear memory, and every `list` or
`string` that crosses a component boundary is copied into the receiver's memory.
For small values that is cheap. For camera frames, audio buffers, tensors or
network packets passed along a pipeline of components, each hop costs a copy
and an allocation.

This repository is a working proof of concept for a different approach.
**Shared memory blocks** are resources owned by the host. Components pass
*handles* to them across boundaries instead of bytes. A component that wants to
read or write the contents *attaches* the block, and the host maps it into the
component's linear memory. The component works on it with ordinary loads and
stores, then *detaches* it again.

The sandbox stays intact:

- a block is only visible while it is attached
- writers attach exclusively, readers share
- the guest never chooses the address: it donates a region of its own memory
  and the host decides where inside it to map the block
