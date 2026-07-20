---
repo: "HadrienG2/grayscott"
name: "grayscott"
description: "Rust version of the \"Performance with stencil\" course's examples"
readmeQualityOk: true
url: "https://github.com/HadrienG2/grayscott"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 11
forks: 2
openIssues: 12
closedIssues: 4
watchers: 1
contributors: 1
recentReleases: 0
createdAt: "2023-01-26T13:20:13Z"
lastCommitAt: "2026-07-20T06:32:17Z"
status: "thriving"
tags: ["under_pressure"]
healthScore: 81
undervaluedScore: 60
maintainers: ["HadrienG2", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/420e8e76c80e20264301435f64348990d9d4f4359d003a4856e7244f602c0bf9/HadrienG2/grayscott"
---

# Performance with stencil (Rust version)

This is a Rust version of the examples from the ["Performance with Stencil"
course](https://cta-lapp.pages.in2p3.fr/COURS/PERFORMANCE_WITH_STENCIL/), with a
few new tricks of mine.

## Prerequisites

In addition to [a recent Rust toolchain](https://www.rust-lang.org/learn/get-started),
you will need to install development packages for the following C/++ libraries:

- [hdf5](https://github.com/metno/hdf5-rust/blob/main/README.md#compatibility)
- [hwloc](https://github.com/Ichbinjoe/hwloc2-rs#prerequisites)

Additinally, GPU examples use the Vulkan API through the
[vulkano](https://docs.rs/vulkano) library, which comes with [extra build
requirements](https://github.com/vulkano-rs/vulkano#setup-and-troubleshooting).

In addition to the Vulkano build requirements, actually running the GPU examples
requires at least one working Vulkan implementation. Any reasonably modern
Linux GPU driver will do, or if you just want them to run and don't care about
actual performance, you may alternatively using the llvmpipe software renderer.

Debug builds additionally enable Vulkan validation layers for richer debug logs,
so these must be installed too.…
