---
repo: "OpenVADL/openvadl"
name: "openvadl"
description: "An open-source implementation of the VADL processor description language."
readmeQualityOk: true
url: "https://github.com/OpenVADL/openvadl"
homepage: "https://openvadl.org"
language: "Java"
languages: ["Java", "C++"]
languagePcts: [60, 21]
topics: ["compiler", "hardware", "llvm", "qemu", "simulator", "processors"]
stars: 57
forks: 3
openIssues: 143
closedIssues: 223
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2025-03-06T13:22:37Z"
lastCommitAt: "2026-10-13T10:57:31Z"
lastReleaseAt: "2026-07-13T09:15:50Z"
status: "thriving"
tags: ["needs_contributors", "community_hub"]
healthScore: 91
undervaluedScore: 51
maintainers: ["AlexanderRipar", "BadGraphixD", "skidudl"]
openGraphImageUrl: "https://opengraph.githubassets.com/63f04eb5dee5a772f7cc82095299589b714d5cb0373b8e76a5b0f42eb426e511/OpenVADL/openvadl"
discussionCount: 35
---

**OpenVADL** is an open-source implementation of **VADL**, a processor description language.
VADL enables users to specify both instruction set architectures (ISA) and microarchitectures in a modern, intuitive
way.
For details, see the [official documentation](https://openvadl.github.io/openvadl/).

OpenVADL can generate multiple artifacts from a single VADL specification:

- **Instruction Set Simulator** via a custom QEMU frontend
- **Compiler** via a custom LLVM backend
- **Linker and Assembler** by integrating a generated parser into LLVM

Additional tools, such as a **Chisel** generator for hardware synthesis, are in development.

Check out our [VADL-related publications](https://www.complang.tuwien.ac.at/vadl/pubs) for more background.

## Getting Started

If you want to use OpenVADL, please refer to [the documentation](https://openvadl.github.io/openvadl/).
It covers everything you need to install OpenVADL, write a specification, and use the CLI to generate artifacts like a
simulator or compiler.

For working VADL specifications examples, check out
our [reference specifications](https://github.com/OpenVADL/openvadl/tree/master/vadl/test/resources/testSource/sys).  
These are…
