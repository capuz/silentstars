---
repo: "ariel-os/trevm"
name: "trevm"
description: "Tiny Rust embedded virtual machines bolted on Ariel OS"
readmeQualityOk: true
url: "https://github.com/ariel-os/trevm"
language: "Rust"
languages: ["Rust"]
languagePcts: [98]
stars: 7
forks: 2
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 9
recentReleases: 0
createdAt: "2025-10-22T13:03:16Z"
lastCommitAt: "2026-10-02T09:59:10Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 93
undervaluedScore: 71
maintainers: ["anlavandier", "jhirschler", "emmanuelsearch"]
openGraphImageUrl: "https://opengraph.githubassets.com/cb6b27d086322d5618f4ffc626ccae2437f487fc1af4e87d747e3142b19f2a79/ariel-os/trevm"
---

# Virtual Machines bolted on top of Ariel OS: [treVM][trevm-paper] and [SURE-VM](#sure-vm-examples)

This repository showcases small Rust embedded virtual machines, encapsuled and bolted on Ariel OS. Open source examples of code are given which you can run on a variety of boards (see below).

## WebAssembly

Currently, the only type of VM that has been tested with Ariel OS is WebAssembly. Currently, [Wasmtime](https://github.com/bytecodealliance/wasmtime) is the only WebAssembly runtime that is supported. See [this](https://github.com/ariel-os/trevm/blob/HEAD/Runtime-comparisons.md) for an overview of how other runtimes compare in terms of code size and features.
Note: Support for this is experimental and the implementation is subject to change.

### Setup & Requirements

Your system and toolchain should be set up for Ariel OS. To learn more about the OS check out the [Ariel OS repo](https://github.com/ariel-os/ariel-os) and follow the guide for [getting started](https://ariel-os.github.io/ariel-os/dev/docs/book/getting-started.html).

On top of the requirements for basic Ariel OS usage, to turn rust code into components the `wasm32v1-none` target should be installed for your…
