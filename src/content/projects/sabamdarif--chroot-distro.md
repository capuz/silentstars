---
repo: "sabamdarif/chroot-distro"
name: "chroot-distro"
description: "A lightweight chroot based utility for managing Linux containers"
readmeQualityOk: true
url: "https://github.com/sabamdarif/chroot-distro"
homepage: "https://pypi.org/project/chroot-distro/"
language: "Python"
languages: ["Python"]
languagePcts: [95]
topics: ["chroot", "chroot-distro", "android", "termux", "docker", "docker-container", "dockerhub", "linux", "linux-containers"]
stars: 151
forks: 19
openIssues: 1
closedIssues: 45
watchers: 2
contributors: 9
recentReleases: 0
createdAt: "2025-08-06T15:32:57Z"
lastCommitAt: "2026-09-18T14:00:40Z"
lastReleaseAt: "2025-08-31T05:06:17Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 46
maintainers: ["sabamdarif"]
openGraphImageUrl: "https://opengraph.githubassets.com/6e25069d460d9e2c839e33df16f549976e9ffe70dca69259bace46057af00a23/sabamdarif/chroot-distro"
discussionCount: 1
---

# Chroot-Distro

Chroot-Distro lets you run real Linux systems (Ubuntu, Debian, Alpine, Arch, and more) inside Termux on a rooted Android device, or on any regular Linux machine.

It works in three simple steps: it downloads an image from Docker Hub (or extracts a tarball you give it), unpacks it into a folder, and enters it using the Linux kernel's own `chroot` and `mount` features. Because it talks to the kernel directly, everything runs at native speed. It can also build images from a Dockerfile and push them to a registry.

Root access is required. On Termux, the root manager's `su` is used automatically. On regular Linux, a one-time `sudo chroot-distro setup` removes all future password prompts.

## Table of contents

1. [Introduction](#introduction)
2. [Commands reference](#commands-reference)
   * [`install`](#install)
   * [`login`](#login)
   * [`run`](#run)
   * [`list`](#list)
   * [`ps`](#ps)
   * [`copy`](#copy)
   * [`sync`](#sync)
   * [`rename`](#rename)
   * [`unmount`](#unmount)
   * [`kill`](#kill)
   * [`reset`](#reset)
   * [`backup`](#backup)
   * [`restore`](#restore)
   * [`diff`](#diff)
   * [`search`](#search)
   * [`setup`](#setup)
   * [`info`](#info)…
