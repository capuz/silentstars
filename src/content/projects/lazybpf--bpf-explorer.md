---
repo: "lazybpf/bpf-explorer"
name: "bpf-explorer"
description: "A cluster-wide, read-only web UI for browsing eBPF maps and programs across Kubernetes nodes"
readmeQualityOk: true
url: "https://github.com/lazybpf/bpf-explorer"
language: "Go"
languages: ["Go"]
languagePcts: [86]
topics: ["bpf", "kubernetes", "kubernetes-monitoring", "kubernetes-security"]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 9
createdAt: "2026-07-30T05:20:24Z"
lastCommitAt: "2026-08-28T14:22:33Z"
lastReleaseAt: "2026-08-27T22:54:09Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 88
undervaluedScore: 38
maintainers: ["danielpacak"]
openGraphImageUrl: "https://opengraph.githubassets.com/7b2773e69c93f282f8dad299932088c49ceae64ffe34f364bfd8ff578be70255/lazybpf/bpf-explorer"
---

# bpf-explorer

A cluster-wide, read-only web UI for browsing eBPF maps and programs across
Kubernetes nodes - so you don't have to `kubectl exec` into a per-node
[`bpftool-daemon`](https://github.com/lazybpf/bpftool-daemon) pod to see what's
loaded.

> [!NOTE]
> This is a relatively new project, so there may be some hiccups. If you hit
> one, please [open an issue](https://github.com/lazybpf/bpf-explorer/issues)
> with the build version from the UI header - or `bpf-explorer --version` - e.g.
> `v0.1.0 (0dd5b51)`, plus the output of `kubectl get nodes -o wide`. Kernel
> version, OS image, and container runtime largely decide which BPF objects are
> inspectable at all.

It runs as two components:

- agent (`--role=agent`) - gRPC server in a privileged DaemonSet; reads maps and
  programs via `cilium/ebpf`.
- ui (`--role=ui`) - a Deployment that discovers agents via the Kubernetes API
  and fans out gRPC calls, serving HTML. `ClusterIP` only; reached via
  `kubectl port-forward`.

One binary serves both roles; one image runs both workloads. A third role,
`--role=local`, runs the two together in a single process for development
without a cluster - see [Run locally without a…
