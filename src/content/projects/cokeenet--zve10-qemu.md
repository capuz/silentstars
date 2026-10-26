---
repo: "cokeenet/zve10-qemu"
name: "zve10-qemu"
description: "Running ZV-E10 (gen 1) firmware in QEMU Running Sony ZV-E10 (gen 1) firmware in QEMU — boot patches, scripts and research notes (no firmware included)"
originalDescription: "在 QEMU 中运行 ZV-E10 (一代) 的固件 Running Sony ZV-E10 (gen 1) firmware in QEMU — boot patches, scripts and research notes (no firmware included)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cokeenet/zve10-qemu"
language: "C"
languages: ["C", "Python"]
languagePcts: [61, 30]
stars: 24
forks: 1
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-16T12:19:51Z"
lastCommitAt: "2026-10-26T09:17:50Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 70
undervaluedScore: 30
maintainers: ["cokeenet"]
openGraphImageUrl: "https://opengraph.githubassets.com/93f2f73b0a44501549dfdefe4439006241548170d61c52a2d17789f90219f47a/cokeenet/zve10-qemu"
---

# zve10 — Sony ZV-E10 (Gen 1 / CXD90045 "ASTRA") reverse engineering and emulation research

A collection of **interoperability research** for the **Sony ZV-E10 (ILCE-ZV-E10, CXD90045 / "ASTRA" SoC, ARMv7 soft-float)**: real-device rescue and anti-bricking, firmware decryption, unpacking and system mapping, and running the original firmware in QEMU.

> **This repository contains only original glue code and research outputs (patches / scripts / docs / derived data). It does not include any Sony firmware, binaries, certificates, or copies of them.** Users must export firmware from their own devices.

> 🔥 **2026-10-22 breakthrough: Line A closed the loop on real hardware.** The hardware fastboot channel is working (BootROM injection → USB fastboot → eMMC read + write). It was used on a real device to perform a 1-byte fix and recover the UI, and to locate and fix a surviving watchdog that killed sessions after about 3 min 40 s. See [`docs/FASTBOOT_EMMC.md`](https://github.com/cokeenet/zve10-qemu/blob/HEAD/docs/FASTBOOT_EMMC.md).
> 📌 **Read first before starting next time:** [`docs/STATUS_20261023.md`](https://github.com/cokeenet/zve10-qemu/blob/HEAD/docs/STATUS_20261023.md) (current…
