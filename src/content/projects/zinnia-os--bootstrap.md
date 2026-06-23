---
repo: "zinnia-os/bootstrap"
name: "bootstrap"
description: "A Distribution for the Zinnia kernel"
url: "https://github.com/zinnia-os/bootstrap"
language: "Shell"
languages: ["Shell"]
languagePcts: [83]
stars: 41
forks: 5
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2024-09-27T20:44:41Z"
lastCommitAt: "2026-06-23T23:17:38Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 94
undervaluedScore: 57
maintainers: ["marv7000", "ByteOtter"]
openGraphImageUrl: "https://opengraph.githubassets.com/0ab522f6faf2c7e1be36e0465e6d3a2a0a455dac2ff3d58e510345b68d028e09/zinnia-os/bootstrap"
---

# bootstrap

This repository builds a fully bootable distribution for the
[Zinnia](https://github.com/zinnia-os/zinnia) kernel.

It also includes several ports of popular programs and tools.

## Prerequisites

To build the distribution you will need the following tools installed on your system:

- Bash
- GNU make
- curl

To create a bootable image you will additionally need:

- dosfstools (for mkfs.vfat)
- e2fsprogs (for mkfs.ext2)
- sgdisk (for partitioning the image)
- build dependencies for the [xbps package manager](https://docs.voidlinux.org/xbps/index.html)

To run the built image you will also need QEMU for the target architecture.

## Build instructions

The easiest way to get a bootable image is to run

```sh
$ make
```

in the root of the repository.
This will build a small subset of the distribution and create a bootable image
named `zinnia.img` in the build directory.

> [!TIP]
> On some distributions, you may need to run the build command as root
> to fix a `file not found` error when bootstrap attempts to run `sgdisk`

You can also build separate packages by running `../jinx/jinx build <package>`
inside the respective build directory for the target architecture.

For…
