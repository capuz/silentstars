---
repo: "OrchardLinux/orchard"
name: "orchard"
description: "Linux on Apple devices: hardware support, kernel patches, recipes and the orchard tool"
readmeQualityOk: true
url: "https://github.com/OrchardLinux/orchard"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 58
forks: 25
openIssues: 7
closedIssues: 8
watchers: 3
contributors: 19
recentReleases: 10
createdAt: "2026-10-25T14:27:08Z"
lastCommitAt: "2026-11-07T13:55:14Z"
lastReleaseAt: "2026-11-06T20:53:13Z"
status: "newborn"
tags: ["needs_contributors", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 40
maintainers: ["henrikklee", "shaynelegault", "stephencox"]
openGraphImageUrl: "https://opengraph.githubassets.com/badb0bf18af88294ba50ad4c87ec8d71da377795073edef855bf629658e84170/OrchardLinux/orchard"
---

# Orchard

Linux on Apple devices. This repository holds everything a device needs and the
`orchard` tool that builds, boots and installs it: device descriptions, kernel
patches and configuration, m1n1 and Pongo patches, firmware recipes, the recovery
and device runtime, and the host side (USB transports, firmware conversion,
installation, launch). Distributions such as
[omarchy-a](https://github.com/OrchardLinux/omarchy-a) and
[minimal-linux](https://github.com/OrchardLinux/minimal-linux) build on it.

## Start

```sh
git clone https://github.com/OrchardLinux/orchard && cd orchard
./setup
orchard run examples/minimal-boot
```

`./setup` shows what this computer needs to build and boot (uv, Podman, libusb,
palera1n, the `orchard` command), asks, and sets it up; rerun it until it says
Ready. `orchard doctor` shows the same without changing anything. Put the device
in DFU mode before `orchard run`: it builds what is missing for the attached
board, then boots it. The first build compiles Linux, which takes a while; later
ones reuse it.

## Supported hardware

Currently: iPad 6 Wi-Fi (`iPad7,5`, J71b), experimental. Boot is tethered and GPU acceleration is not available.

The iPhone 6…
