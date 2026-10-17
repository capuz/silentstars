---
repo: "gardener/gardener-extension-runtime-gvisor"
name: "gardener-extension-runtime-gvisor"
description: "Gardener extension controller for the gVisor container runtime sandbox (https://gvisor.dev)."
readmeQualityOk: true
url: "https://github.com/gardener/gardener-extension-runtime-gvisor"
homepage: "https://gardener.cloud"
language: "Go"
languages: ["Go"]
languagePcts: [79]
stars: 6
forks: 42
openIssues: 4
closedIssues: 16
watchers: 8
contributors: 84
recentReleases: 0
createdAt: "2020-03-06T08:44:17Z"
lastCommitAt: "2026-10-17T07:58:26Z"
lastReleaseAt: "2023-03-10T07:28:04Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero", "fork_magnet"]
healthScore: 93
undervaluedScore: 84
maintainers: ["gardener-ci-robot", "github-actions[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/3f79a269fbc8b903bc35f54fac8d93d67386a85276b6df9c4897f0b3572b024b/gardener/gardener-extension-runtime-gvisor"
---

# Gardener Extension for the gVisor Container Runtime Sandbox

Project Gardener implements the automated management and operation of [Kubernetes](https://kubernetes.io/) clusters as a service. Its main principle is to leverage Kubernetes concepts for all of its tasks.

Recently, most of the vendor specific logic has been developed [in-tree](https://github.com/gardener/gardener). However, the project has grown to a size where it is very hard to extend, maintain, and test. With [GEP-1](https://github.com/gardener/gardener/blob/master/docs/proposals/01-extensibility.md) we have proposed how the architecture can be changed in a way to support external controllers that contain their very own vendor specifics. This way, we can keep Gardener core clean and independent.

---

## How to use this Controller

This controller operates on the [ContainerRuntime](https://github.com/gardener/gardener/blob/master/docs/extensions/resources/containerruntime.md) resource in the `extensions.gardener.cloud/v1alpha1 API` group.

It manages objects that are requesting (`.spec.type=gvisor`) to enable the gVisor container runtime sandbox for a worker pool of a shoot cluster.

The ContainerRuntime can be…
