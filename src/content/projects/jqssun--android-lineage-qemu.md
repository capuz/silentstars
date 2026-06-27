---
repo: "jqssun/android-lineage-qemu"
name: "android-lineage-qemu"
description: "LineageOS for QEMU virtual machines"
url: "https://github.com/jqssun/android-lineage-qemu"
homepage: "https://wiki.lineageos.org/libvirt-qemu"
language: "Shell"
languages: ["Shell"]
languagePcts: [100]
stars: 201
forks: 23
openIssues: 4
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 3
createdAt: "2025-10-11T21:13:11Z"
lastCommitAt: "2026-06-27T00:34:05Z"
lastReleaseAt: "2026-06-26T18:51:03Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 43
undervaluedScore: 14
maintainers: ["jqssun"]
openGraphImageUrl: "https://opengraph.githubassets.com/7dfffe81f809c7af42218c565d27aef524821eb7fd8b91981e7d7e822e187b49/jqssun/android-lineage-qemu"
---

# LineageOS for QEMU Virtual Machines

[LineageOS](https://lineageos.org/Changelog-30/) builds for running Android VM on 
- [any macOS/iOS device (via UTM)](https://wiki.lineageos.org/utm-vm-on-apple-silicon-mac), or 
- [generic libvirt QEMU virtual machines](https://wiki.lineageos.org/libvirt-qemu#create-and-configure-the-virtual-machine-using-virt-manager)

For the latest CI release, see [releases](https://github.com/jqssun/android-lineage-qemu/releases/latest).

## Usage

- For first time installs, download `UTM-VM-lineage-*.zip` from releases and unzip.

- To run via `qemu-system` directly, see [Development](#development).

- To install an update package, boot into **LineageOS Recovery**, select **Apply update**, then **Apply from ADB**. Use [`lineage_virtio_arm64only-ota.zip`](https://github.com/jqssun/android-lineage-qemu/releases/latest/download/lineage_virtio_arm64only-ota.zip) or [`lineage_virtio_x86_64-ota.zip`](https://github.com/jqssun/android-lineage-qemu/releases/latest/download/lineage_virtio_x86_64-ota.zip) from releases if updating to a new LineageOS build, or use your own update package. On the host, run
```shell
adb sideload [*.zip]
```

### Generic System…
