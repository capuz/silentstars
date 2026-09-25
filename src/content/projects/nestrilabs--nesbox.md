---
repo: "nestrilabs/nesbox"
name: "nesbox"
description: "Fast, lightweight micro virtual machine for cloud streaming — GPU included"
readmeQualityOk: true
url: "https://github.com/nestrilabs/nesbox"
homepage: "https://nestri.io"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
topics: ["cloud", "firecracker-alternative", "gaming", "microvm"]
stars: 39
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-04-22T13:53:14Z"
lastCommitAt: "2026-09-25T09:02:54Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 81
undervaluedScore: 36
maintainers: ["wanjohiryan", "DatCaptainHorse", "neskaal1"]
openGraphImageUrl: "https://opengraph.githubassets.com/27c41c96398f4a074c25ca75f29c0fbc1a9ac6b24c745689e2e86fd9c898a8c7/nestrilabs/nesbox"
---

# nesbox

**A fast microVM with GPU sharing. Guests render within 2% of bare metal, on the
same card, at the same CPU cost — and boot to userspace in about a second.**

nesbox runs a Linux guest with a real GPU attached, built for cloud gaming: boot
a VM, hand it a game, stream the result. Many guests share one bare-metal card;
none of them has a driver for it.

## Is this what you are looking for?

**Yes, if** you want many short-lived Linux VMs sharing one GPU, each rendering
or encoding, isolated from each other, started in the time it takes to launch a
process — and you can build your own guest kernel and Mesa.

**No, if** you want a general-purpose hypervisor, a desktop VM with a display
attached, Windows guests, or GPU passthrough of a whole card to one VM. nesbox
does none of those and is not trying to.

## The numbers

Guest against **the same machine's bare metal**, same headless Vulkan load,
median of three 30-second runs after an 8-second warm-up discard:

| GPU | how the guest reaches it | frame time vs bare metal | CPU vs bare metal |
|---|---|---|---|
| **RX 9060 XT** (RDNA 4) | amdgpu native context, in-process | **99–102%** at ≥3.4 ms/frame | — |
| **RTX 3060** |…
