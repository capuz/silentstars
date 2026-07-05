---
repo: "emexlab/emex64"
name: "emex64"
description: "lightweight 64bit architecture"
readmeQualityOk: true
url: "https://github.com/emexlab/emex64"
language: "C"
languages: ["C"]
languagePcts: [94]
stars: 35
forks: 5
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 10
recentReleases: 0
createdAt: "2025-12-30T17:04:28Z"
lastCommitAt: "2026-07-05T20:55:14Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 41
maintainers: ["mach-port-t"]
openGraphImageUrl: "https://opengraph.githubassets.com/249304f8961d5db8bd9090fb44eb744fd35a5444e8090acbeea5a734311363f3/emexlab/emex64"
---

# emex64

## Introduction
emex64 is a 64bit lightweight little endian architecture. It's a mix out of RISC and CISC it is based on no previous architecture.

Outside the SoC, the emulated board additionally integrates support for UART, Audio, and (implementation pending) Graphics.

## Setup and Installation of the emex64 toolchain
Bulding the toolchain and installing it is as simple as the following:

```bash
make && make install
```

This will install emex64's toolchain and VM to `/usr/local`, and will prompt for a superuser password to do so.

emex64vm will additionally require GLFW/GLEW if using the virtual display.

## Using the Virtual Machine (VM)
The VM can be invoked to run firmware with `emex64vm -f <image path>`. Test programs and the current testing firmware can be found in `./tests/`.

These examples will be compiled and directly run with `make`. 

## Instruction Set Architecture (ISA)
The instruction coding is variable, it is not a fixed lenght instruction set, which is a CISC concept. Instructions are coded by the first 8 bit serving as the opcode, followed by operands that are not aligned to a byte boundary. Operands are coded by the first 3 bit serving as the type…
