---
repo: "JuliaCI/rootfs-images"
name: "rootfs-images"
description: "Rootfs images used in Base Julia CI"
readmeQualityOk: true
url: "https://github.com/JuliaCI/rootfs-images"
language: "Julia"
languages: ["Julia"]
languagePcts: [100]
stars: 5
forks: 9
openIssues: 0
closedIssues: 25
watchers: 7
contributors: 32
recentReleases: 0
createdAt: "2021-06-17T16:28:52Z"
lastCommitAt: "2026-11-24T14:06:03Z"
lastReleaseAt: "2021-08-12T22:00:19Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 90
undervaluedScore: 71
maintainers: ["maleadt", "Keno", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/663bfa61e56e608d03bb2551a4bba35d0af4e2ee531002f7a2f927b9d3f2d273/JuliaCI/rootfs-images"
---

# Rootfs images for Base Julia CI

[build-img]: https://github.com/JuliaCI/rootfs-images/actions/workflows/linux.yml/badge.svg "Build"
[build-url]: https://github.com/JuliaCI/rootfs-images/actions/workflows/linux.yml?query=branch%3Amain

The [Base Julia](https://github.com/JuliaLang/julia) CI setup makes use of rootfs images that contain our build tools.
Every image is a directory tree, published as `<image>.<arch>.tar.gz` on a release of this repository and identified by its git tree hash:

- Linux images (`linux/*.jl`) are the root of the sandbox a job runs in. Most are based on Debian, making use of `debootstrap` to provide a quick and easy rootfs with packages installed through an initial `apt` invocation.
- Windows toolchains (`windows/package_windows.jl`, image `package_windows.x86_64`) hold MSYS2 and the GCC of GCCToolchain_jll, which Julia's Windows builds use; see [below](#windows-toolchains).

This repository contains the scripts to build the rootfs images.
The other configuration files for Base Julia CI are located in the [`.buildkite`](https://github.com/JuliaLang/julia/tree/master/.buildkite) directory in the [Julia](https://github.com/JuliaLang/julia) repository.
