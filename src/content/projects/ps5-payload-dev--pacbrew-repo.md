---
repo: "ps5-payload-dev/pacbrew-repo"
name: "pacbrew-repo"
description: "A PacBrew package repository for jailbroken PS5s"
readmeQualityOk: true
url: "https://github.com/ps5-payload-dev/pacbrew-repo"
language: "Shell"
languages: ["Shell"]
languagePcts: [98]
stars: 17
forks: 13
openIssues: 1
closedIssues: 9
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2024-04-06T10:00:13Z"
lastCommitAt: "2026-07-05T20:55:38Z"
lastReleaseAt: "2024-12-18T20:44:25Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 90
undervaluedScore: 67
maintainers: ["john-tornblom", "rootlis", "alex-free"]
openGraphImageUrl: "https://opengraph.githubassets.com/61aa5d43a36efbbb76ebc9f53489d58215ebea13e4b1df5fb681da585071bd10/ps5-payload-dev/pacbrew-repo"
---

# pacbrew-repo

## Prerequisites
On Debian-flavored operating systems, you can invoke the following commands to
install dependencies used by pacbrew-repo.
```console
john@localhost:ps5-payload-dev/pacbrew-repo$ sudo apt-get update && sudo apt-get upgrade
john@localhost:ps5-payload-dev/pacbrew-repo$ sudo apt-get install cmake pkg-config meson \
    clang lld build-essential autoconf libtool yasm nasm bison flex  gperf pkgconf \
    libarchive-tools autopoint po4a git curl doxygen makepkg pacman-package-manager \
    python3-mako python3-glad
```

## Building and installing to /opt/ps5-payload-sdk
```console
john@localhost:ps5-payload-dev/pacbrew-repo$ export MAKEFLAGS=-j8 # optionally build in parallel on 8 cores
john@localhost:ps5-payload-dev/pacbrew-repo$ ./ci-libs.sh
```
