---
repo: "secunet-AG/hwaas"
name: "hwaas"
description: "The HWaaS is a reproducible hardware-in-the-loop testing platform for shared hardware leases, enabling development, testing, and CI/CD pipelines."
readmeQualityOk: true
url: "https://github.com/secunet-AG/hwaas"
homepage: "https://secunet-ag.github.io/hwaas/"
language: "Rust"
languages: ["Rust"]
languagePcts: [63]
topics: ["ci", "hardware-in-the-loop", "nix", "nixos", "rust"]
stars: 45
forks: 3
openIssues: 23
closedIssues: 8
watchers: 0
contributors: 5
recentReleases: 2
createdAt: "2026-07-13T09:31:24Z"
lastCommitAt: "2026-10-19T09:15:09Z"
lastReleaseAt: "2026-10-09T10:12:17Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem"]
healthScore: 83
undervaluedScore: 36
maintainers: ["cyberhar7an", "dependabot[bot]", "lgrosche"]
openGraphImageUrl: "https://opengraph.githubassets.com/98c325cac6cbd9c148e2d785e00b7e2ba6898117e44873201a7534ccde20a126/secunet-AG/hwaas"
---

# HWaaS (Hardware-as-a-Service)

## What is the HWaaS

The HWaaS is a hardware-in-the-loop (HIL) testing platform. It allows teams to lease hardware (Bare Metal Resources - BMRs), and interact with it remotely (boot from an image, power cycle, connect via network, read/write via serial, …), enabling software development tailored for the target hardware, and automated CI/CD tests.

## Project Goals

This project makes a few assumptions, that there are groups of teams that meet the following requirements:

- A desire to test on real hardware shared amongst a team
- The need to use easily sourceable components
- The requirement to run a number of custom images for BMRs, with no special configuration, bootloaders, etc., other than that the machine supports USB boot

This results in a project that lives between testing frameworks like KernelCI and LAVA, and projects for managing bare metal resources.

**There is no special requirement for what images you can run under test.**

The HWaaS uses Raspberry Pi OTG to simulate a USB drive. You can select any image you would like, and it is run as-if your machine were booting off of a USB drive. For the time being, this means that the amount…
