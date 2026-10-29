---
repo: "cokeenet/zve10-qemu"
name: "zve10-qemu"
description: "Running Sony ZV-E10 (gen 1) firmware in QEMU — boot patches, scripts and research notes (no firmware included)"
originalDescription: "在 QEMU 中运行 ZV-E10 (一代) 的固件 Running Sony ZV-E10 (gen 1) firmware in QEMU — boot patches, scripts and research notes (no firmware included)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/cokeenet/zve10-qemu"
language: "C"
languages: ["C", "Python"]
languagePcts: [56, 37]
stars: 31
forks: 3
openIssues: 2
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-10-16T12:19:51Z"
lastCommitAt: "2026-10-29T10:20:54Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 60
undervaluedScore: 29
maintainers: ["cokeenet"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b6fc0647380ff8839ad239e3d2eb2967a80ac146f87a99ac0f748c8e43bd97d/cokeenet/zve10-qemu"
---

# zve10 — Sony ZV-E10 (Gen 1 / CXD90045 "ASTRA") Reverse Engineering and Emulation Research

A collection of **interoperability research** for the **Sony ZV-E10 (ILCE-ZV-E10, CXD90045 / "ASTRA" SoC, ARMv7 soft-float)**: real-device rescue and brick prevention, firmware decryption/unpacking and system mapping, and running the original firmware in QEMU.

> **This repository contains only original glue code and research output (patches / scripts / documentation / derived data). It does not include any Sony firmware, binaries, certificates, or copies of them.** Users must export firmware from their own devices.

> 🔥 **2026-10-22 breakthrough: Line A closed the loop on real hardware.** The hardware fastboot channel is working (BootROM injection → USB fastboot → eMMC read + write). It was used on the real device to apply a 1-byte fix and recover the UI, and to locate and fix a surviving watchdog that killed sessions after about 3 min 40 s. See [`docs/FASTBOOT_EMMC.md`](https://github.com/cokeenet/zve10-qemu/blob/HEAD/docs/FASTBOOT_EMMC.md).
> 📌 **Read first next time:** [`docs/README.md`](https://github.com/cokeenet/zve10-qemu/blob/HEAD/docs/README.md) (documentation map) →…
