---
repo: "linux4sam/buildroot-external-microchip"
name: "buildroot-external-microchip"
description: "Buildroot External for Microchip SoC"
readmeQualityOk: true
url: "https://github.com/linux4sam/buildroot-external-microchip"
homepage: "https://www.linux4microchip.com"
language: "Shell"
languages: ["Shell", "Makefile", "C"]
languagePcts: [42, 33, 21]
topics: ["buildroot-external", "buildroot", "distribution", "makefile", "cross-compiler", "linux"]
stars: 48
forks: 41
openIssues: 3
closedIssues: 13
watchers: 21
contributors: 29
recentReleases: 0
createdAt: "2018-02-22T17:30:14Z"
lastCommitAt: "2026-10-28T10:05:47Z"
status: "thriving"
tags: ["legacy_hero", "fork_magnet"]
healthScore: 87
undervaluedScore: 50
maintainers: ["jamiegibbons", "manikandan-m11", "phckopper"]
openGraphImageUrl: "https://opengraph.githubassets.com/728e531e9779cd044a34d1ca8df626671527663446fc7f170b8130630550a668/linux4sam/buildroot-external-microchip"
---

# Microchip Buildroot External

This [buildroot external][1] includes Microchip packages, patches, setup, and
configuration to work with Microchip provided software that is not included in
mainline buildroot.  This includes creating demo root filesystems. This project
provides an extension to buildroot to support these customizations outside of
the standard buildroot tree.

## Install System Dependencies

The external is tested on Ubuntu 22.04 LTS.  The following system build
dependencies are required.

    sudo apt-get install subversion build-essential bison flex gettext \
    libncurses5-dev texinfo autoconf automake libtool mercurial git-core \
    gperf gawk expat curl cvs libexpat-dev bzr unzip bc python3-dev \
    wget cpio rsync xxd bmap-tools libgnutls28-dev libgl1

For AT91 boards, download and extract the [SAM-BA in-system programmer][16],
then add the extracted directory to your $PATH environment variable to ensure
the `sam-ba` binary can be located by buildroot. Also [upgrade the CMake
tool][17].

In some cases, buildroot will notify that additional host dependencies are
required.  It will let you know what those are.

## Buildroot Dependencies

For AT91, this…
