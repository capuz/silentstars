---
repo: "ydb-platform/nbs"
name: "nbs"
description: "Network Block & File Store"
readmeQualityOk: true
url: "https://github.com/ydb-platform/nbs"
language: "C++"
languages: ["C++", "C"]
languagePcts: [54, 25]
stars: 113
forks: 54
openIssues: 414
closedIssues: 711
watchers: 9
contributors: 146
recentReleases: 0
createdAt: "2023-03-14T17:49:43Z"
lastCommitAt: "2026-11-26T15:07:10Z"
status: "thriving"
tags: []
healthScore: 92
undervaluedScore: 46
maintainers: ["neihar", "komarevtsev-d", "asorotsky"]
openGraphImageUrl: "https://opengraph.githubassets.com/c43c7fe34b24e919f9f893584e0e09a21bb2e327780cba31342875a0a1df97ef/ydb-platform/nbs"
---

## Network Block Store and Network File Store

Network Block Device implementation over YDB BlobStorage or over our own storage nodes. Offers reliable thin-provisioned block devices which support snapshots.
Network File System implementation over YDB BlobStorage. Offers POSIX-compliant scalable filesystem which can be attached to virtual machines via virtiofs or simply mounted via FUSE.

Block storage [overview diagram](https://github.com/ydb-platform/nbs/blob/main/doc/blockstore/overview/overview.png?raw=true)

### Quickstart

Follow the instructions [here](https://github.com/ydb-platform/nbs/blob/HEAD/VSCODE.md) to generate workspace and install the necessary plugins.

Follow the instructions [here](https://github.com/ydb-platform/nbs/blob/HEAD/example/README.md) to build and run NBS on your machine and to attach an NBS-based disk via NBD. NBS-based disks can be attached via vhost-user-blk as well.

Follow the instructions [here](https://github.com/ydb-platform/nbs/blob/HEAD/cloud/filestore/README.md) to build and run Filestore on your machine and to attach it to a virtual machine via virtiofs or mount it on your host via FUSE.
