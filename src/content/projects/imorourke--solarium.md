---
repo: "imorourke/Solarium"
name: "Solarium"
description: "Solarium provides interfaces to provide a processor (jib), assembler (jasm), and basic high-level language (c/buoy) around a hypothetical 32-bit processor that provides a simple ISA."
readmeQualityOk: true
url: "https://github.com/imorourke/Solarium"
homepage: "https://imorourke.github.io/Solarium/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2021-05-04T17:51:53Z"
lastCommitAt: "2026-08-16T04:09:07Z"
lastReleaseAt: "2026-07-10T03:21:39Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero", "release_machine"]
healthScore: 80
undervaluedScore: 83
maintainers: ["imorourke"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e4933da3f2c06964fabd021b9d7f1de1e9e0a5305cfff0d6850e267a36bd84d/imorourke/Solarium"
---

# Solarium

Solarium provides interfaces to provide a processor (jib), assembler (jasm), and basic high-level language (c/buoy) around a hypothetical 32-bit processor that provides a simple ISA. See the isa.tex document in the doc/ folder for more information.

## Libraries

Several libraries are provided:
* jib implements the processor and ISA itself in a simple virtual machine
* jib-asm implements a basic assembler
* cbuoy implements the high-level language
* cbfs-lib implements a FAT-style filesystem

## Programs

Programs included are listed below:
* virtual-jib provides a visual test-bench to compile and run programs
* cbc provides a front-end to the cbuoy compiler
* cbfs provides a FUSE driver for the cbfs filesystem
* cbfs-utils provides helpers to modify CBFS file system images
