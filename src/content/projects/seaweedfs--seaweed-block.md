---
repo: "seaweedfs/seaweed-block"
name: "seaweed-block"
description: "Block Storage for Kubernetes and Agent System"
readmeQualityOk: true
url: "https://github.com/seaweedfs/seaweed-block"
language: "Go"
languages: ["Go"]
languagePcts: [86]
stars: 8
forks: 0
openIssues: 23
closedIssues: 18
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2026-04-11T21:21:08Z"
lastCommitAt: "2026-11-19T12:03:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 87
undervaluedScore: 47
maintainers: ["pingqiu"]
openGraphImageUrl: "https://opengraph.githubassets.com/2b1b3a3a58d9f1e0a8f769397f222e611e287f5374228e470517b77db89e262a/seaweedfs/seaweed-block"
---

# Seaweed Block

Block storage written in Go: a local-speed block device whose ownership is
fenced by epochs. It serves agent workspace disks backed by
[SeaweedFS](https://github.com/seaweedfs/seaweedfs) snapshots, and Kubernetes
block volumes (alpha).

## What it is

| | Agent workspace disks | Kubernetes block volumes |
|---|---|---|
| Consumer | an agent sandbox or microVM, as a plain virtio block device | an app pod, through a PVC and the CSI driver |
| Frontend | NVMe/TCP loopback or ublk | iSCSI, or NVMe/TCP (source-gated) |
| Durability | one local replica, with cuts to SeaweedFS | RF=1 with best-effort ack by default; synchronous RF=2 or RF=3 (`sync-quorum`, `sync-all`) when configured, in a supported lab |
| Maturity | proof of concept | alpha |
