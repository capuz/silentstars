---
repo: "CodeAsm/teeny-linux"
name: "teeny-linux"
description: "An tiny linux kernel with initramfs for Qemu based on Mitch Galgs linux tutorials."
readmeQualityOk: true
url: "https://github.com/CodeAsm/teeny-linux"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 14
forks: 3
openIssues: 5
closedIssues: 8
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2018-07-12T10:51:41Z"
lastCommitAt: "2026-11-24T14:07:07Z"
lastReleaseAt: "2026-01-12T12:04:43Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors", "legacy_hero"]
healthScore: 66
undervaluedScore: 39
maintainers: ["CodeAsm"]
openGraphImageUrl: "https://opengraph.githubassets.com/09a118e40303b0e3161673dc1dac9fa653a0ec846cdaf2d5ea8fdaacbf4b2a1b/CodeAsm/teeny-linux"
---

# TeenyLinux

TeenyLinux is a do it yourself kernel and userland build script to make a bootable and somewhat usable Linux environment.
Busybox provides the shell, some basic utilities and init system. We target a few common older, commonly used and newer architectures and bootable systems.

Based on Mitch Galg's instructions on how to build a Linux kernel for qemu.
This awesome guy also updated his build instructions so expect some updates on my attempt if he updates too.
<http://mgalgs.github.io/2015/05/16/how-to-build-a-custom-linux-kernel-for-qemu-2015-edition.html>

His latest update included a docker build system, here I chose to add cross-compilation support to other ARCH types.
So no docker, everything should run locally and save enough to not need containers or virtual environments. 
Due to superiority of buildroot, I don't think we need all their features or goals. If you're new here, this is an experiment to build a small Linux system that could be, but just isn't it yet.

* The kernel currently is: 8.8M (14M - x86_64)
* Boots in qemu within 2.71 seconds.
* The initramfs without other programs but busybox: 1.3M
* Added musl will grow the initramfs: 78Mb
