---
repo: "usbarmory/go-boot"
name: "go-boot"
description: "The bare metal Go UEFI boot manager"
readmeQualityOk: true
url: "https://github.com/usbarmory/go-boot"
language: "Go"
languages: ["Go"]
languagePcts: [94]
stars: 234
forks: 19
openIssues: 1
closedIssues: 11
watchers: 4
contributors: 6
recentReleases: 0
createdAt: "2025-02-11T13:43:51Z"
lastCommitAt: "2026-11-06T11:24:08Z"
lastReleaseAt: "2025-10-08T03:27:35Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 34
maintainers: ["abarisani", "walterchris", "martijnhoekstra"]
openGraphImageUrl: "https://opengraph.githubassets.com/4d00c9b1f4ba690720e471caa1f706397395c8a846e185927299b3cbd0823578/usbarmory/go-boot"
---

Introduction
============

The [go-boot](https://github.com/usbarmory/go-boot) project is a
[TamaGo](https://github.com/usbarmory/tamago) unikernel implementing a UEFI
Shell and OS loader for AMD64 platforms, allowing UEFI API interaction and OS
loading.

The OS loading functionality supports launching of:
 * `.` EFI application images
 * `l` Linux kernels, with configuration parsed from Linux Userspace API (UAPI) [boot loader entries](https://uapi-group.org/specifications/specs/boot_loader_specification/)
 * `w` Windows UEFI boot manager

The support of
[boot-transparency](https://github.com/usbarmory/boot-transparency) is planned
for future releases.

The unikernel can be executed as:
  * EFI application by an [existing loader](https://github.com/usbarmory/go-boot/tree/main?tab=readme-ov-file#executing-as-uefi-application) (e.g. [UEFI shell](https://github.com/pbatard/UEFI-Shell), [systemd-boot](https://www.freedesktop.org/wiki/Software/systemd/systemd-boot/))
  * [EFI boot entry](https://github.com/usbarmory/go-boot/tree/main?tab=readme-ov-file#uefi-boot-manager-entry)
  * QEMU [plain](https://github.com/usbarmory/go-boot/?tab=readme-ov-file#emulated-hardware-with-qemu) or…
