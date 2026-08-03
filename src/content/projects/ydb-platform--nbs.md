---
repo: "ydb-platform/nbs"
name: "nbs"
description: "Network Block & File Store"
readmeQualityOk: true
url: "https://github.com/ydb-platform/nbs"
language: "C++"
languages: ["C++", "C"]
languagePcts: [52, 26]
stars: 106
forks: 45
openIssues: 317
closedIssues: 634
watchers: 9
contributors: 132
recentReleases: 0
createdAt: "2023-03-14T17:49:43Z"
lastCommitAt: "2026-08-03T06:42:48Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 46
maintainers: ["qkrorlqr", "sharpeye", "debnatkh"]
openGraphImageUrl: "https://opengraph.githubassets.com/709daa8018a50f20b274b3c39ebf2a358f6ca8caf5ab8016a223aea806296c27/ydb-platform/nbs"
---

## Network Block Store and Network File Store

Network Block Device implementation over YDB BlobStorage or over our own storage nodes. Offers reliable thin-provisioned block devices which support snapshots.
Network File System implementation over YDB BlobStorage. Offers POSIX-compliant scalable filesystem which can be attached to virtual machines via virtiofs or simply mounted via FUSE.

Block storage [overview diagram](https://github.com/ydb-platform/nbs/blob/main/doc/blockstore/overview/overview.png?raw=true)

### Quickstart

Follow the instructions [here](https://github.com/ydb-platform/nbs/blob/HEAD/VSCODE.md) to generate workspace and install the necessary plugins.

Follow the instructions [here](https://github.com/ydb-platform/nbs/blob/HEAD/example/README.md) to build and run NBS on your machine and to attach an NBS-based disk via NBD. NBS-based disks can be attached via vhost-user-blk as well.

Follow the instructions [here](https://github.com/ydb-platform/nbs/blob/HEAD/cloud/filestore/README.md) to build and run Filestore on your machine and to attach it to a virtual machine via virtiofs or mount it on your host via FUSE.

Follow the instructions…
