---
repo: "Ketchio-dev/bridgevm"
name: "bridgevm"
description: "Mac-native virtualization for Apple silicon — a QEMU-free Windows 11 Arm VMM built directly on Hypervisor.framework, plus Apple VZ and QEMU compatibility engines"
readmeQualityOk: true
url: "https://github.com/Ketchio-dev/bridgevm"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [41, 27]
topics: ["apple-silicon", "hypervisor", "macos", "rust", "swift", "virtio", "virtualization", "vmm", "windows-11-arm"]
stars: 6
forks: 1
openIssues: 1
closedIssues: 13
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-06-16T18:48:27Z"
lastCommitAt: "2026-11-07T09:30:09Z"
lastReleaseAt: "2026-08-20T14:10:27Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 58
maintainers: ["Ketchio-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/f2bc5de8c0951b43bde8dc1aff73af21be6afa82faee741358cb6116db7a8905/Ketchio-dev/bridgevm"
---

# BridgeVM

**Run Windows 11 Arm on Apple silicon with a Mac-native, QEMU-free
Hypervisor.framework VMM.**

BridgeVM develops its own Windows 11 Arm VMM on Apple's Hypervisor.framework.
The main engineering focus is CPU execution, interrupts and timers, device I/O,
and VM lifecycle reliability. Apple VZ and QEMU compatibility backends remain
separate engine paths.

**[Build and try the current source](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/docs/install.md#build-the-current-source)** ·
**[Current status](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/STATUS.md)** · **[Contribute](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/CONTRIBUTING.md)** ·
**[Documentation](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/docs/README.md)**

## Engineering Preview

Product wording and known defects come from the capability registry. Its dated
snapshot describes retained evidence, not a guarantee for every later commit:

**Product state: Engineering Preview.** Runs an installed Windows 11 Arm desktop on BridgeVM's own Hypervisor.framework VMM with persistent storage, display/input, network, audio, clipboard and folder integration, TPM/Secure Boot workflows, snapshots and…
