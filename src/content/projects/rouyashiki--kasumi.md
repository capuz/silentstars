---
repo: "Rouyashiki/Kasumi"
name: "Kasumi"
description: "Kasumi - a kernel-level path manipulation and hiding framework"
readmeQualityOk: true
url: "https://github.com/Rouyashiki/Kasumi"
homepage: "https://t.me/manosaba"
language: "C"
languages: ["C"]
languagePcts: [99]
topics: ["vfs", "kernel"]
stars: 145
forks: 72
openIssues: 0
closedIssues: 10
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2025-12-10T13:42:06Z"
lastCommitAt: "2026-11-15T08:00:11Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 92
undervaluedScore: 39
maintainers: ["Anatdx"]
openGraphImageUrl: "https://opengraph.githubassets.com/2c3892d715e0da0165d29da3930a85c7cf3f1956f2d64f998ff5ab03e717bc9c/Rouyashiki/Kasumi"
---

# Kasumi

Kasumi is an out-of-tree Linux kernel module (`kasumi_lkm.ko`) for Android GKI/Linux path control in root/SU environments.

It provides path redirection, hiding, directory merge/injection, and scoped proc/mount presentation through a root-only anonymous-fd + `ioctl` control plane. Kasumi was previously developed as HymoFS; Kasumi/KSM is the current project and ABI name.

中文版本：[README.zh-CN.md](https://github.com/Rouyashiki/Kasumi/blob/HEAD/README.zh-CN.md)

## Status

- Repository type: LKM, not an in-tree kernel patch set
- Implementation: `src/`
- Userspace ABI: `src/include/kasumi_uapi.h`
- Protocol: `KSM_PROTOCOL_VERSION = 19`

Userspace and kernel must both use API 19. Older and newer protocols are unsupported; there is no downgrade path. All ioctls retain the fixed `'S'` magic. Clients check `KSM_IOC_GET_VERSION` before issuing operations and stop on a protocol mismatch.
- Path view: VFS lookup/vnode based; there is no syscall-table dispatcher or `sys_enter` redirect engine
- Control entry: root-only `reboot` GET_FD command, followed by fd-based ioctls

## API 19 transactions

API 19 publishes path rules, settings, standalone policy, maps rules and kstat rules…
