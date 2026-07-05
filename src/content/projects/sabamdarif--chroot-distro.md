---
repo: "sabamdarif/chroot-distro"
name: "chroot-distro"
description: "A lightweight utility for managing Linux containers, built around chroot"
readmeQualityOk: true
url: "https://github.com/sabamdarif/chroot-distro"
homepage: "https://pypi.org/project/chroot-distro/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["chroot", "chroot-distro", "android", "termux", "docker", "docker-container", "dockerhub", "linux", "linux-containers"]
stars: 115
forks: 15
openIssues: 0
closedIssues: 36
watchers: 2
contributors: 8
recentReleases: 0
createdAt: "2025-08-06T15:32:57Z"
lastCommitAt: "2026-07-05T06:32:27Z"
lastReleaseAt: "2025-08-31T05:06:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 45
maintainers: ["sabamdarif", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f726d8a118392ff3062d27b602bd67f7274012bf2b9d000f9e29387733c47f21/sabamdarif/chroot-distro"
discussionCount: 1
---

# Chroot-Distro

Chroot-Distro is a utility for managing rootful Linux containers in Termux and on standard Linux hosts. It uses the host kernel's native `chroot(2)` and `mount(2)` system calls directly (instead of running external binaries) to provide a high-performance, near-native Linux environment.

Containers are created by pulling Docker/OCI images directly from Docker Hub (or any compatible registry), or by extracting a local tarball / OCI image archive. The container filesystem is assembled from the image layers and stored locally, ready to be entered at any time.

Chroot-Distro can also **build** OCI images from a Dockerfile (no Docker daemon required), storing the result in the local manifest cache or exporting it as a standalone OCI tarball.

Chroot-Distro requires **root privileges** on the host, but you don't have to type a password every time: a one-time `sudo chroot-distro setup` enables Docker-style passwordless operation through the `chroot-distro` group (see [Passwordless setup](#passwordless-setup-linux)). On Termux, Android's native `su` is used directly — no `sudo`/`tsu` package needed.

---

## Table of contents

1. [Introduction](#introduction)
2. [Commands…
