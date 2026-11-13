---
repo: "dlbewley/ovn-recon"
name: "ovn-recon"
description: "Open Virtual Network Reconnaissance (OVN Recon) is an OpenShift Console Plugin that provides a visualization of the Virtual and Node Network State in an OpenShift cluster."
readmeQualityOk: true
url: "https://github.com/dlbewley/ovn-recon"
language: "TypeScript"
languages: ["TypeScript"]
languagePcts: [79]
topics: ["networking", "openshift", "ovn-kubernetes"]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2025-12-31T20:44:18Z"
lastCommitAt: "2026-11-13T05:44:26Z"
lastReleaseAt: "2026-01-19T00:42:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 61
maintainers: ["dlbewley", "scottgpeters"]
openGraphImageUrl: "https://opengraph.githubassets.com/cc8a0f1838a1fe44a12aa830122b0b2819d361ea50105a6c5b539ffd26d7e6f6/dlbewley/ovn-recon"
---

# Open Virtual Network Reconnaissance (OVN Recon)

**Open Virtual Network Reconnaissance (OVN Recon) is an OpenShift Console Plugin that provides a visualization of the Virtual and Node Network State in an OpenShift cluster.**

Blog post: [OVN Recon: Making OpenShift Networking Connections](https://guifreelife.com/blog/2026/02/18/OVN-Recon-Making-OpenShift-Networking-Connections/)

## Feature Highlights

- **Physical topology view**: per-node graph of host interfaces, bonds, VLANs, bridges, OVN bridge mappings, VRFs, CUDNs/UDNs, attached namespaces and NADs, with LLDP neighbours, SR-IOV virtual functions and EVPN devices where present. Kernel routes are shown as tables. See [readme-visualization.md](https://github.com/dlbewley/ovn-recon/blob/HEAD/readme-visualization.md).
- **Logical topology views**: cluster-scoped and node-scoped ladder views of the logical OVN constructs per network, with drawers for NAT, static routes, ports, policy and Services, and a full-width detail page per switch and router. See [readme-logical-visualization.md](https://github.com/dlbewley/ovn-recon/blob/HEAD/readme-logical-visualization.md).
- **One explorer**: a tree of the cluster, its nodes and its…
