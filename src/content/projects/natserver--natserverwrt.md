---
repo: "natserver/NatserverWrt"
name: "NatserverWrt"
description: "NatserverWrt snapshot JDCloud RE-SS-01 + daed cloud build (qualcommax ipq60xx)"
originalDescription: "NatserverWrt snapshot JDCloud RE-SS-01 + daed cloud build (qualcommax ipq60xx)"
descriptionLang: "zh"
readmeQualityOk: true
url: "https://github.com/natserver/NatserverWrt"
language: "Shell"
languages: ["Shell"]
languagePcts: [86]
stars: 10
forks: 3
openIssues: 0
closedIssues: 1
watchers: 0
contributors: 1
recentReleases: 2
createdAt: "2026-09-24T05:48:01Z"
lastCommitAt: "2026-11-17T12:21:52Z"
lastReleaseAt: "2026-11-17T12:14:19Z"
status: "thriving"
tags: []
healthScore: 84
undervaluedScore: 57
maintainers: ["natserver"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ca92a9945a093534e1f36d254123dd2c165567b00aaf5066ae3d2a0d3e97bb5/natserver/NatserverWrt"
---

# NatserverWrt for JDCloud AX1800 Pro (RE-SS-01)

## Built-in software

- **eBPF / BTF kernel support**: BTF, XDP, BPF Events, CGROUPS, and the BPF toolchain are enabled, and the kernel modules required by honk are built in (kmod-sched-core / kmod-sched-bpf / kmod-veth / kmod-nft-queue);
- **honk pre-installed**: the Rust rewrite of dae, with kernel-space eBPF traffic splitting. The core ships with the doona web panel and is ready to use after flashing. This firmware does not include dae/daed.

## Flashing procedure

1. Flash the **12M large-partition U-Boot** (HLOS 12MiB);
2. Flash the **2GB GPT template** (expands rootfs to 2048MiB, needed for installing the firmware, do not skip);
3. From the U-Boot page, flash this project's `factory.bin`
4. Upgrade via the web interface with `sysupgrade.bin`.

### Flashing file downloads

| File | Download |
| --- | --- |
| 12M large-partition U-Boot (jdcloud_re-ss-01) | [direct download .bin](https://github.com/chenxin527/uboot-qsdk12.5-build/releases/download/26.08.16-14.22.36-3011049/uboot-ipq60xx-jdcloud_re-ss-01-260816_142236_3011049.bin) |
| GPT template (rootfs2048M / HLOS12M) | [direct download…
