---
repo: "reliaburger/reliaburger"
name: "reliaburger"
description: "The Batteries-Included Container Orchestrator"
readmeQualityOk: true
url: "https://github.com/reliaburger/reliaburger"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 12
forks: 3
openIssues: 176
closedIssues: 445
watchers: 0
contributors: 5
recentReleases: 7
createdAt: "2026-03-04T20:50:48Z"
lastCommitAt: "2026-11-04T08:03:19Z"
lastReleaseAt: "2026-10-07T01:26:08Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 94
undervaluedScore: 62
maintainers: ["seeker89", "FranticAerobics"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea4b941f0bbe8a96b5c0457563004768b23ecec40954464f132437855e69f872/reliaburger/reliaburger"
---

# Reliaburger

Container orchestration in two binaries: one agent, one CLI.

Reliaburger is a container orchestrator written in Rust. Each node runs one
agent, `bun`; you drive the cluster with one CLI, `relish`. Scheduling,
clustering, service discovery, ingress, PKI, secrets, an image registry,
metrics, logs, GitOps, jobs and fault injection are compiled into that agent.
There's no control plane to assemble and no add-ons to install. A Linux node
needs a few distribution packages (`runc`, `nftables`, `iproute2` and friends,
listed in the [Linux servers guide](https://github.com/reliaburger/reliaburger/blob/HEAD/docs/linux-servers.md)), and releases are
glibc builds; static builds are planned for 0.3.0
([#401](https://github.com/reliaburger/reliaburger/issues/401)).

It applies most Kubernetes manifests directly and tells you what it had to
change or drop (see [what converts](https://github.com/reliaburger/reliaburger/blob/HEAD/docs/manual/09_kubernetes.md)). The tour below
takes a laptop to a three-node cluster, runs a real Kubernetes app and a
batch of jobs on it, breaks it and watches it heal. Five minutes is the target.

## Five minutes, zero to cluster

0.2.5 was released on…
