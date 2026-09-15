---
repo: "zyvorai/kairon"
name: "kairon"
description: "Apache-2.0 Kubernetes-native VM orchestration without KubeVirt or libvirt. Kubernetes declares. Kairon orchestrates. FluxVM executes."
readmeQualityOk: true
url: "https://github.com/zyvorai/kairon"
homepage: "https://zyvor.dev"
language: "Go"
languages: ["Go"]
languagePcts: [85]
topics: ["apache2", "golang", "kubernetesubernetes", "kvm", "qemu", "virtualization", "fluxvm"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-09-11T00:54:08Z"
lastCommitAt: "2026-09-15T08:55:42Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 44
maintainers: ["ssahani"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ff57af93e49986968e479d8540891984ac27c6b21ce639d616dc7ccd763c063/zyvorai/kairon"
---

# Kairon

### Real VMs, on Kubernetes, without the weight of KubeVirt

**Kubernetes declares. Kairon orchestrates. FluxVM executes.**

[Why](#why-kairon-exists) · [Architecture](https://github.com/zyvorai/kairon/blob/HEAD/ARCHITECTURE.md) · [Quick start](#quick-start) · [Dashboard](#the-dashboard) · [Guarding the fleet](#guarding-the-fleet) · [Getting started](https://github.com/zyvorai/kairon/blob/HEAD/docs/getting-started.md) · [Security](https://github.com/zyvorai/kairon/blob/HEAD/SECURITY.md) · [Roadmap](https://github.com/zyvorai/kairon/blob/HEAD/ROADMAP.md) · [zyvor.dev](https://zyvor.dev?utm_source=github&utm_medium=kairon)

</div>

---

## Why Kairon exists

KubeVirt makes a VM look like a Pod: a `virt-launcher` Pod wrapping libvirt wrapping QEMU, scheduled by the Kubernetes Pod scheduler, migrated by machinery bolted onto that same abstraction. It works, but every layer you add is a layer you have to trust, patch, and debug at 2am.

Kairon starts from a different premise: a VM is not a Pod, so stop pretending it is. A `Machine` is desired state in the Kubernetes API. `kairon-controller` places it. `kairon-node` turns that placement into a real…
