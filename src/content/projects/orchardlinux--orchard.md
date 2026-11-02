---
repo: "OrchardLinux/orchard"
name: "orchard"
description: "Linux on Apple devices: hardware support, kernel patches, recipes and the orchard tool"
readmeQualityOk: true
url: "https://github.com/OrchardLinux/orchard"
language: "Python"
languages: ["Python"]
languagePcts: [92]
stars: 30
forks: 18
openIssues: 8
closedIssues: 4
watchers: 3
contributors: 13
recentReleases: 3
createdAt: "2026-10-25T14:27:08Z"
lastCommitAt: "2026-11-02T15:10:50Z"
lastReleaseAt: "2026-10-31T15:12:52Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 85
undervaluedScore: 45
maintainers: ["henrikklee", "edulmartins", "shaynelegault"]
openGraphImageUrl: "https://opengraph.githubassets.com/931e851e36a56a44663eca825f3e0714a0de731f7c7c84b342c83a07051b5416/OrchardLinux/orchard"
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
