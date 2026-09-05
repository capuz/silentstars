---
repo: "vitalif/vitastor"
name: "vitastor"
description: "Simplified distributed block and file storage with strong consistency, like in Ceph (repository mirror)"
readmeQualityOk: true
url: "https://github.com/vitalif/vitastor"
homepage: "https://vitastor.io"
language: "C++"
languages: ["C++"]
languagePcts: [74]
stars: 242
forks: 39
openIssues: 20
closedIssues: 78
watchers: 15
contributors: 17
recentReleases: 0
createdAt: "2021-02-17T20:37:56Z"
lastCommitAt: "2026-09-05T07:50:15Z"
status: "thriving"
tags: ["legacy_hero"]
healthScore: 90
undervaluedScore: 41
maintainers: ["vitalif", "EpicStep", "koolkhel"]
openGraphImageUrl: "https://opengraph.githubassets.com/9ddd0b542ddc201bce29c780aa50b84b694ac1b072c2c114c8e25698420a52bf/vitalif/vitastor"
---

# Vitastor

[Читать на русском](https://github.com/vitalif/vitastor/blob/HEAD/README-ru.md)

## The Idea

Make Clustered Block Storage Fast Again.

Vitastor is a distributed block, file and object SDS, direct replacement of Ceph RBD, CephFS and RGW,
and also internal SDS's of public clouds. However, in contrast to them, Vitastor is fast
and simple at the same time. The only thing is it's slightly young :-).

Vitastor is architecturally similar to Ceph which means strong consistency,
primary-replication, symmetric clustering and automatic data distribution over any
number of drives of any size with configurable redundancy (replication or erasure codes/XOR).

Vitastor targets primarily SSD and SSD+HDD clusters with at least 10 Gbit/s network,
supports TCP and RDMA and may achieve 4 KB read and write latency as low as ~0.1 ms
with proper hardware which is ~10 times faster than other popular SDS's like Ceph
or internal systems of public clouds.

Vitastor supports QEMU, UBLK, NBD, NFS protocols, OpenStack, OpenNebula, Proxmox, Kubernetes drivers.
More drivers may be created easily.

Read more details in the documentation. You can start from here: [Quick…
