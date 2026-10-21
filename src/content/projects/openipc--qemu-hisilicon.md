---
repo: "OpenIPC/qemu-hisilicon"
name: "qemu-hisilicon"
description: "QEMU machine definitions for HiSilicon IP camera SoCs (V1–V5), boots unmodified OpenIPC firmware to Linux userspace"
readmeQualityOk: true
url: "https://github.com/OpenIPC/qemu-hisilicon"
homepage: "https://github.com/OpenIPC/firmware"
language: "C"
languages: ["C"]
languagePcts: [77]
topics: ["arm", "emulation", "hisilicon", "ip-camera", "ipcam", "openipc", "qemu"]
stars: 14
forks: 7
openIssues: 2
closedIssues: 32
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-28T18:19:41Z"
lastCommitAt: "2026-10-21T08:49:34Z"
lastReleaseAt: "2026-04-25T13:08:05Z"
status: "thriving"
tags: ["funded"]
healthScore: 95
undervaluedScore: 60
maintainers: ["widgetii", "openipc-ai", "dimerr"]
openGraphImageUrl: "https://opengraph.githubassets.com/f3d5e68a4216741572efe910ae58eda45274b8be2e7b701d2d9b176f4fed481d/OpenIPC/qemu-hisilicon"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/openipc"]
---

# QEMU HiSilicon SoC Emulator (IPC + DVR/NVR + STB)

QEMU machine definitions for the HiSilicon surveillance and STB SoC lineup,
targeting QEMU v10.2.0. Boots unmodified [OpenIPC](https://openipc.org/) firmware
and vendor SDK kernels to a full Linux userspace on all supported platforms.

Builds two QEMU targets:
- `qemu-system-arm` — 32 IPC + 11 DVR/NVR + 1 STB (ARMv7-A) + 3 Xiongmai + 4 Goke GK710x/GK710xS (ARM1176) + 6 Anyka AK39xx (ARM926) + 3 SigmaStar (Cortex-A7) + 2 Novatek NT9856x (Cortex-A9)
- `qemu-system-aarch64` — 3 IPC + 1 STB (ARMv8-A, Cortex-A53/A55)

## Supported Machines (66 total)

### IPC family — V1 through V5 (`qemu-system-arm`)

| Machine | Generation | CPU | IRQ | Kernel | Boot tested |
|---------|-----------|-----|-----|--------|-------------|
| `hi3516cv100` | V1 | ARM926EJ-S | VIC | 3.0.8 | yes |
| `hi3518av100` | V1 | ARM926EJ-S | VIC | 3.0.8 | yes |
| `hi3518cv100` | V1 | ARM926EJ-S | VIC | 3.0.8 | yes |
| `hi3518ev100` | V1 | ARM926EJ-S | VIC | 3.0.8 | yes |
| `hi3516cv200` | V2 | ARM926EJ-S | VIC | 4.9.37 | yes |
| `hi3516av100` | V2A | Cortex-A7 | GIC | 4.9.37 | yes |
| `hi3516dv100` | V2A | Cortex-A7 | GIC | 4.9.37 | yes |
| `hi3516cv300` | V3 |…
