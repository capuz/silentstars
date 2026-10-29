---
repo: "haiku-pi/haiku-rpi"
name: "haiku-rpi"
description: "Haiku on the Raspberry Pi 4 — coordination: scripts, tools, docs, manifests"
readmeQualityOk: true
url: "https://github.com/haiku-pi/haiku-rpi"
language: "Shell"
languages: ["Shell", "C"]
languagePcts: [50, 29]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-10-17T21:51:06Z"
lastCommitAt: "2026-10-29T12:24:48Z"
lastReleaseAt: "2026-10-24T12:04:16Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 80
undervaluedScore: 51
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/35da1b27c65feb1df77771d0b88626315b9dd60ad102e9416abbad9ece371b0b/haiku-pi/haiku-rpi"
---

# Haiku on the Raspberry Pi 4

This repository coordinates the port of [Haiku](https://www.haiku-os.org) to the **Raspberry Pi 4 Model B**. It holds
the build and test scripts, the bench tools, the documentation, the patches for third-party software and the
manifests that record which source revisions were tested together. The Haiku sources themselves are in the fork
[haiku-pi/haiku](https://github.com/haiku-pi/haiku), branch `rpi4`. `scripts/bootstrap.sh` clones that fork and
every other source into `sources/`.

The image boots from an SD card, or over the network from the build host, to the full Haiku desktop on HDMI. It
has GPU-accelerated OpenGL, OpenGL ES and Vulkan on the V3D, all four CPU cores, gigabit Ethernet, WiFi, Bluetooth,
USB 3, audio over HDMI and on the headphone jack, and hardware HEVC decoding. The image has two web browsers, WebPositive and Firefox 157
(Firefox is an optional build step), and a package repository built for arm64 works with `pkgman` out of the box.

*Haiku on a Raspberry Pi 4 Model B (4 GB), booted from its SD card. This is an HDMI capture, unedited. More
pictures are in [SHOWCASE.md](https://github.com/haiku-pi/haiku-rpi/blob/HEAD/SHOWCASE.md)…
