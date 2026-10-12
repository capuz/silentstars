---
repo: "spiffe/spiffe-csi"
name: "spiffe-csi"
description: "Container Storage Interface components for SPIFFE"
readmeQualityOk: true
url: "https://github.com/spiffe/spiffe-csi"
language: "Go"
languages: ["Go"]
languagePcts: [75]
stars: 70
forks: 36
openIssues: 7
closedIssues: 17
watchers: 4
contributors: 33
recentReleases: 0
createdAt: "2021-08-20T20:19:17Z"
lastCommitAt: "2026-10-12T11:10:35Z"
lastReleaseAt: "2025-08-19T18:18:40Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 83
undervaluedScore: 50
maintainers: ["dependabot[bot]", "amartinezfayo", "strideynet"]
openGraphImageUrl: "https://opengraph.githubassets.com/2294686571a0b813c5368399ebe7cbffdcc67d1685cc7d6aa1e88884289248e6/spiffe/spiffe-csi"
---

# SPIFFE CSI Driver

A [Container Storage
Interface](https://github.com/container-storage-interface/spec/blob/master/spec.md)
driver for Kubernetes that facilitates injection of the SPIFFE Workload API.

The SPIFFE Workload API is nominally served over a Unix domain socket. Some
SPIFFE implementations (e.g. [SPIRE](https://github.com/spiffe/spire)) rely on DaemonSets to run one Workload API
server instance per host. In these cases, it is necessary to inject the
Workload API socket into each pod. The primary motivation for using a CSI
driver for this purpose is to avoid the use of
[hostPath](https://kubernetes.io/docs/concepts/storage/volumes/#hostpath)
volumes in workload containers, which is commonly disallowed or limited by
policy due to inherent security concerns. Note that `hostPath` volumes are
still required for the CSI driver to interact with the
[Kubelet](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/)
(see [Limitations](#limitations)).

This driver mounts a directory containing a SPIFFE Workload API socket provided
by a SPIFFE implementation (e.g. SPIRE) as an ephemeral inline volume into
workload pods.

## How it Works

This component is…
