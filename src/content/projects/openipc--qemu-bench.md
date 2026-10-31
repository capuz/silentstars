---
repo: "OpenIPC/qemu-bench"
name: "qemu-bench"
description: "QEMU models of IP-camera, DVR/NVR and STB SoCs — HiSilicon, Goke, Xiongmai, Anyka, SigmaStar, Novatek; boots unmodified OpenIPC and vendor firmware"
readmeQualityOk: true
url: "https://github.com/OpenIPC/qemu-bench"
homepage: "https://github.com/OpenIPC/firmware"
language: "C"
languages: ["C"]
languagePcts: [75]
topics: ["arm", "emulation", "hisilicon", "ip-camera", "ipcam", "openipc", "qemu", "anyka", "goke", "novatek"]
stars: 16
forks: 7
openIssues: 1
closedIssues: 34
watchers: 0
contributors: 6
recentReleases: 0
createdAt: "2026-03-28T18:19:41Z"
lastCommitAt: "2026-10-31T15:58:03Z"
lastReleaseAt: "2026-04-25T13:08:05Z"
status: "thriving"
tags: ["funded"]
healthScore: 98
undervaluedScore: 59
maintainers: ["widgetii", "openipc-ai", "dimerr"]
openGraphImageUrl: "https://opengraph.githubassets.com/828176574f808cac11e52c21fd439980db8886cbeae92ad6b731073072d6b2bd/OpenIPC/qemu-bench"
fundingLinks: ["OPEN_COLLECTIVE:https://opencollective.com/openipc"]
---

# qemu-bench — QEMU models of IP-camera, DVR/NVR and STB SoCs

QEMU machine and device models for the SoCs inside surveillance cameras,
recorders and set-top boxes, targeting QEMU v10.2.0. Boots unmodified
[OpenIPC](https://openipc.org/) firmware and vendor SDK kernels to a full Linux
userspace, so firmware can be developed and tested without the hardware on the
desk. Vendor families covered:

- **HiSilicon** V1–V5 IPC, DVR/NVR and STB SoCs, plus their Goke/XMedia
  rebrands (GK7205, GK7206, …) — the table-driven core
- **Xiongmai** XM510 / XM530 / XM550, and XM530V200 / XM533 / XM535
- **Goke** GK7101 / GK7102 and the GK710xS die
- **Anyka** AK39xx
- **SigmaStar / MStar** infinity2m (SSD20x, SSR621Q, SSC375) and infinity3 (MSC313E)
- **Novatek** NT9856x, NT98533 and NT98332
- **Allwinner** V831 / V833
- **Fullhan** FH8852 / FH8856 (V100 and V200), FH8858V200, FH865x,
  FH8626V100, FH8632
- **Grain Media** GM8135S, GM8136, GM8136S
- **Ingenic** T10, T20, T21, T23, T30, T31 (XBurst1) and T40, T41 (XBurst2) —
  the one MIPS family

The project was called `qemu-hisilicon` until the other families arrived;
GitHub redirects the old URL.

Builds three QEMU targets:
- `qemu-system-arm` —…
