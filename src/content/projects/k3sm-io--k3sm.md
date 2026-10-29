---
repo: "k3sm-io/k3sm"
name: "k3sm"
description: "Kubernetes for macOS, natively — Pods as native Darwin processes on Apple Silicon. No Linux VM in the default path."
readmeQualityOk: true
url: "https://github.com/k3sm-io/k3sm"
homepage: "https://k3sm.io"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["apple-silicon", "darwin", "kubernetes", "macos", "virtual-kubelet", "arm64", "k3s", "k8s", "kubernetes-distribution"]
stars: 5
forks: 1
openIssues: 4
closedIssues: 31
watchers: 1
contributors: 5
recentReleases: 9
createdAt: "2026-06-24T08:13:06Z"
lastCommitAt: "2026-10-29T12:24:47Z"
lastReleaseAt: "2026-10-28T17:44:17Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "funded", "release_machine"]
healthScore: 97
undervaluedScore: 68
maintainers: ["kitsumiko", "zxdev"]
openGraphImageUrl: "https://opengraph.githubassets.com/9f94d45551732892c648bda0ad2779f782193aeab93216d82fc66c129c815488/k3sm-io/k3sm"
fundingLinks: ["GITHUB:https://github.com/kitsumiko"]
discussionCount: 1
---

# k3sm

k3sm is a macOS-native Kubernetes distribution for Apple Silicon, the macOS/arm64 analog of
[k3s](https://github.com/k3s-io/k3s). Pods run as native Darwin processes: real arm64 Mach-O
executables, isolated with a Seatbelt sandbox, on the same Mac as the control plane. There is
no Linux, no container runtime, and no VM in the default path. Linux container images can run
too, in a per-pod Virtualization.framework micro-VM, through an opt-in RuntimeClass
(`runtimeClassName: vm`). The `vm` path runs `linux/arm64` images; `linux/amd64` images do not
run on any path yet.

The latest release is v0.2.2 (2026-10-28). The control plane on `main` embeds
Kubernetes v1.37.1. Multi-node clusters, two Macs joined over a wireguard mesh, and a control plane shared by
two servers are experimental; both graduate in a later release. Models served on
the Mac's GPU with MLX have their own resource and CRD (`mlx.k3sm.io/gpu` and `MLXModel`). The
[roadmap](https://github.com/k3sm-io/k3sm/blob/HEAD/ROADMAP.md) says what has shipped and what comes next.

## What's in the binary

k3sm ships as a single binary. Its subcommands:

| Command | What it does |
|---|---|
| `server` | Run the control plane…
