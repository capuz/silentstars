---
repo: "arcboxlabs/arcbox"
name: "arcbox"
description: "Run AI agents on real and isolated machines — own kernel, filesystem, and network — with <200ms boot. Local first, OCI compatible, pure Rust."
readmeQualityOk: true
url: "https://github.com/arcboxlabs/arcbox"
homepage: "https://arcbox.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [99]
topics: ["ai-agents", "computer-use", "containers", "docker", "firecracker", "microvm", "rust", "sandbox", "virtual-machine", "virtualization"]
stars: 270
forks: 10
openIssues: 46
closedIssues: 56
watchers: 4
contributors: 9
recentReleases: 0
createdAt: "2026-01-04T14:46:50Z"
lastCommitAt: "2026-08-03T06:45:01Z"
lastReleaseAt: "2026-03-12T03:47:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 90
undervaluedScore: 27
maintainers: ["AprilNEA", "PeronGH", "arcbox-labs[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cf5f4489e7ef26f99ef5e4dfd9592c7aa04278af3ea0910e201a729f7def347/arcboxlabs/arcbox"
---

# ArcBox

**A fast, open-source container and VM runtime for macOS.**

**Built from scratch in Rust. Drop-in Docker, agent sandboxes, native
Kubernetes, and full Linux and macOS VMs.**

</div>

## Why ArcBox

ArcBox is an open-source alternative to Docker Desktop and OrbStack on macOS.
OrbStack set the bar for running Docker on a Mac quickly and with little
overhead, but it is closed-source. ArcBox is open source under MIT/Apache-2.0
and written from scratch in Rust — its own VMM, VirtIO devices, filesystem
sharing, and network datapath — and aims to match it.

One daemon, one CLI, four kinds of workload on the same runtime:

| Tier | What it is | Where to start |
|------|------------|----------------|
| **Containers** | A drop-in Docker engine, plus native Kubernetes | `docker …`, `abctl k8s` |
| **Sandboxes** | Disposable microVMs for AI agents and untrusted code | `abctl claude`, `abctl sandbox` |
| **Linux machines** | Full VMs with their own kernel, disk, and distro | `abctl machine` |
| **macOS guests** | Throwaway macOS VMs, cloned from a base image | `abctl macos` |

The sandbox you run locally is the same primitive ArcBox Platform runs in the
cloud, so you can build…
