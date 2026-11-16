---
repo: "wendylabsinc/WendyOS-Builder"
name: "WendyOS-Builder"
description: "OS build scripts for WendyOS"
readmeQualityOk: true
url: "https://github.com/wendylabsinc/WendyOS-Builder"
homepage: "https://docs.wendy.dev"
language: "Shell"
languages: ["Shell", "Python", "BitBake"]
languagePcts: [34, 25, 22]
stars: 20
forks: 2
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 15
recentReleases: 0
createdAt: "2025-09-15T16:18:58Z"
lastCommitAt: "2026-11-16T10:52:41Z"
lastReleaseAt: "2026-08-10T09:43:20Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 95
undervaluedScore: 67
maintainers: ["kelenyibenjamin", "abularca", "thombles"]
openGraphImageUrl: "https://opengraph.githubassets.com/01b11b46a7be33c18be4984657351cebba8ed369f4e3fcb6b8b3113718f5c05f/wendylabsinc/WendyOS-Builder"
---

# WendyOS

This repository provides the meta-layer and build flow to build **WendyOS** — a Yocto-based embedded Linux distribution — across a broad range of ARM64 hardware:
- **NVIDIA Jetson** Developer Kits — Orin Nano, AGX Orin, and AGX Thor
- **Raspberry Pi** — Pi 3, Pi 4, and Pi 5 (SD card; the Pi 3/4 image also boots from a USB disk, the Pi 5 image from NVMe)
- **QEMU ARM64** (virtual machine, for development)
- **Generic x86_64 PCs** (experimental UEFI/BIOS disk image)

### Supported Hardware

| Hardware | SoC | RAM | Board id (`BOARD=`) | Machine Config | Boot Device | OTA |
|----------|-----|-----|---------------------|----------------|-------------|-----|
| Jetson Orin Nano DevKit | Tegra234 | 8GB | `jetson-orin-nano` | `jetson-orin-nano-devkit-wendyos` | SD or NVMe | wendyos-update |
| Jetson AGX Orin DevKit | Tegra234 | 64GB | `jetson-agx-orin` | `jetson-agx-orin-devkit-wendyos` | onboard eMMC or NVMe | wendyos-update |
| Jetson AGX Thor DevKit | Tegra264 | 128GB | `jetson-agx-thor` | `jetson-agx-thor-devkit-nvme-wendyos` | NVMe | _(coming, wendyos-update)_ |
| Raspberry Pi 3 (B/B+) | Broadcom BCM2837 | 1GB | `rpi3` | `raspberrypi3-64-wendyos` | SD or USB |…
