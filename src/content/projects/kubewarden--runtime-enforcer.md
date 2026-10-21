---
repo: "kubewarden/runtime-enforcer"
name: "runtime-enforcer"
description: "A runtime enforcement solution for your Kubernetes cluster"
readmeQualityOk: true
url: "https://github.com/kubewarden/runtime-enforcer"
homepage: "https://www.kubewarden.io/component/runtime-enforcer/"
language: "Go"
languages: ["Go"]
languagePcts: [89]
topics: ["ebpf", "kubernetes", "kubernetes-security", "policy-as-code", "runtime-security"]
stars: 10
forks: 10
openIssues: 46
closedIssues: 188
watchers: 4
contributors: 16
recentReleases: 0
createdAt: "2025-11-10T15:53:41Z"
lastCommitAt: "2026-10-21T17:31:57Z"
lastReleaseAt: "2026-03-12T15:50:36Z"
status: "thriving"
tags: ["hidden_gem", "fork_magnet"]
healthScore: 95
undervaluedScore: 79
maintainers: ["dottorblaster", "dependabot[bot]", "holyspectral"]
openGraphImageUrl: "https://opengraph.githubassets.com/f5ddf8258197ca3c0d999076230aa1a5c180f8ca87dff70dd0f01b33bd874776/kubewarden/runtime-enforcer"
---

# Kubewarden Runtime Enforcer

Kubewarden Runtime Enforcer is a Kubernetes security tool that uses eBPF
(Extended Berkeley Packet Filter) to observe process executions in your
workloads and to enforce allow-list based security policies at the kernel
level.

It operates in three phases:

- **Learn** — observe process executions and generate a `WorkloadPolicyProposal`
  per workload.
- **Monitor** — report violations of an approved `WorkloadPolicy` without
  blocking them.
- **Protect** — block executions that violate the policy allow-list.

The project is in Beta. The design documents are in the
[RFCs](https://github.com/kubewarden/runtime-enforcer/tree/main/docs/rfc).

## Documentation

The full documentation is available at
[docs.kubewarden.io/runtime-enforcer](https://docs.kubewarden.io/runtime-enforcer/latest/en/introduction.html).

- [Kubewarden Runtime Enforcer Quick Start](https://docs.kubewarden.io/runtime-enforcer/latest/en/installation/quickstart.html)
  — deploy Runtime Enforcer and walk through the learn/monitor/protect workflow.
- [Compatibility](https://docs.kubewarden.io/runtime-enforcer/latest/en/compatibility.html)
  — kernel, architecture and platform…
