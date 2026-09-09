---
repo: "projecteru2/core"
name: "core"
description: "Eru core: a stateless gRPC resource scheduler that deploys workloads on Docker and virtual-machine engines, with pluggable resource plugins and etcd or redis metadata storage."
readmeQualityOk: true
url: "https://github.com/projecteru2/core"
homepage: "https://projecteru2.github.io/core/"
language: "Go"
languages: ["Go"]
languagePcts: [97]
topics: ["eru", "golang", "docker", "orchestration", "virtual-machine", "grpc", "etcd", "redis", "scheduler"]
stars: 266
forks: 45
openIssues: 4
closedIssues: 79
watchers: 10
contributors: 21
recentReleases: 0
createdAt: "2017-09-07T07:10:04Z"
lastCommitAt: "2026-09-09T08:21:23Z"
lastReleaseAt: "2021-01-15T08:26:39Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 98
undervaluedScore: 40
maintainers: ["CMGS"]
openGraphImageUrl: "https://opengraph.githubassets.com/af52441aa472a43b567d5281ebfbf5deb78d5e7d72e0ef33837b7696b9bddb38/projecteru2/core"
discussionCount: 1
---

# core

Eru core is a stateless gRPC resource scheduler: it holds cluster metadata in etcd or redis, allocates
resources through pluggable resource plugins, and deploys workloads onto containerd containers,
bare processes or cocoon virtual machines through a single `CoreRPC` API.

**Documentation: [projecteru2.github.io/core](https://projecteru2.github.io/core/)** (source in [`docs/`](https://github.com/projecteru2/core/blob/HEAD/docs/)).

## Highlights

- **One gRPC API** — the `CoreRPC` service covers pods, nodes, workloads, images, networks, files
  and status streams; long-running calls (deploy, build, logs, exec) are server streams
- **Stateless, multi-instance** — every instance keeps its state in etcd or redis and coordinates
  through distributed locks, so instances can be added and removed freely
- **Multiple engines** — containerd over an SSH-forwarded socket (`containerd://`), cocoon VMs over
  SSH (`cocoon://`), bare processes as systemd transient units over SSH (`process://`) and a mock
  engine, selected per node by endpoint scheme
- **Resource plugins** — `cpumem` is built in; external plugins are ordinary executables in
  `resource_plugin.dir`, invoked with a…
