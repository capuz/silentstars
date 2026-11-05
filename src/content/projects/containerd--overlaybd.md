---
repo: "containerd/overlaybd"
name: "overlaybd"
description: "Overlaybd: a block based remote image format for containers/vms/sandboxes. The storage backend of containerd/accelerated-container-image."
readmeQualityOk: true
url: "https://github.com/containerd/overlaybd"
homepage: "https://containerd.github.io/overlaybd/"
language: "C++"
languages: ["C++"]
languagePcts: [92]
topics: ["blockdevice", "iscsi-target", "storage", "container-images", "virtual-machine-images", "remote-image", "agent-sandbox", "sandbox", "snapshot"]
stars: 433
forks: 93
openIssues: 20
closedIssues: 68
watchers: 15
contributors: 52
recentReleases: 0
createdAt: "2021-03-10T08:16:08Z"
lastCommitAt: "2026-11-05T00:21:09Z"
lastReleaseAt: "2023-05-28T05:05:20Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 94
undervaluedScore: 37
maintainers: ["BigVan", "liulanzheng", "lihuiba"]
openGraphImageUrl: "https://opengraph.githubassets.com/4df009a1cc38965fd3788dfa0792be05ac1b2491ab232259be0336073d3dfb92/containerd/overlaybd"
discussionCount: 5
---

# Overlaybd

[简体中文](https://github.com/containerd/overlaybd/blob/HEAD/README_zh.md)

Overlaybd (overlay block device) is a novel layering block-level image format, which is design for container, secure container and applicable to virtual machine. And it is an open-source implementation of paper [DADI: Block-Level Image Service for Agile and Elastic Application Deployment. USENIX ATC'20"](https://www.usenix.org/conference/atc20/presentation/li-huiba).

[Scaling up Without Slowing Down: Accelerating Pod Start Time. KubeCon+CloudNativeCon Europe 2024](https://youtu.be/RJ6Lt9bVNTw)

Overlaybd is based on [PhotonLibOS](https://github.com/alibaba/PhotonLibOS), which is a high-efficiency LibOS framework.

Overlaybd has 2 core component:
* **Overlaybd**
  is a block-device based image format, provideing a merged view of a sequence of block-based layers as a virtual block device. The LBA lookup algorithm employs a linearized B+ tree and AVX-512 to optimize performance, significantly accelerating search speed up to 10X. [Lookup Performance](https://github.com/containerd/overlaybd/blob/main/docs/lsmt_lookup.md)

* **Zfile**
  is a compression file format which support seekalbe online…
