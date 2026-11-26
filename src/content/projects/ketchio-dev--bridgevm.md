---
repo: "Ketchio-dev/bridgevm"
name: "bridgevm"
description: "Mac-native virtualization for Apple silicon — a QEMU-free Windows 11 Arm VMM built directly on Hypervisor.framework, plus Apple VZ and QEMU compatibility engines"
readmeQualityOk: true
url: "https://github.com/Ketchio-dev/bridgevm"
language: "Rust"
languages: ["Rust", "Swift"]
languagePcts: [42, 34]
topics: ["apple-silicon", "hypervisor", "macos", "rust", "swift", "virtio", "virtualization", "vmm", "windows-11-arm"]
stars: 7
forks: 1
openIssues: 2
closedIssues: 22
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2026-06-16T18:48:27Z"
lastCommitAt: "2026-11-26T15:28:52Z"
lastReleaseAt: "2026-11-23T16:48:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 98
undervaluedScore: 55
maintainers: ["Ketchio-dev"]
openGraphImageUrl: "https://opengraph.githubassets.com/319ed4f63d34771aceccb17efcc01e4f022c6c10df0420e89727c53242375841/Ketchio-dev/bridgevm"
---

# BridgeVM

**Windows 11 Arm on Apple silicon, in a native Mac app.**

BridgeVM runs Windows alongside macOS using its own
[Hypervisor.framework VMM](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/crates/bridgevm-hvf/), without QEMU. It is the
app's only engine.

**Current access: [General Preview v0.1.0](https://github.com/Ketchio-dev/bridgevm/releases/tag/v0.1.0) · Engineering Preview · 3D-off.**
Install it with the terminal installer or the DMG. The app is ad-hoc signed,
not notarized.

```sh
curl -fsSL https://raw.githubusercontent.com/Ketchio-dev/bridgevm/main/install.sh | bash
```

**[Install guide](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/docs/install.md)** ·
**[Build from source](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/docs/install.md#build-the-current-source)** ·
**[Set up Windows](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/docs/install.md#what-you-need-after-installing)** ·
**[Current status](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/STATUS.md)** · **[Contribute](https://github.com/Ketchio-dev/bridgevm/blob/HEAD/CONTRIBUTING.md)**
