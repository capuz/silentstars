---
repo: "brig-sh/hull"
name: "hull"
description: "hull: the microVM runtime brig drives on macOS (Virtualization.framework)"
readmeQualityOk: true
url: "https://github.com/brig-sh/hull"
homepage: "https://brig.sh"
language: "Go"
languages: ["Go"]
languagePcts: [87]
stars: 6
forks: 0
openIssues: 22
closedIssues: 9
watchers: 0
contributors: 6
recentReleases: 10
createdAt: "2026-08-12T16:01:09Z"
lastCommitAt: "2026-09-26T08:47:36Z"
lastReleaseAt: "2026-08-18T11:08:41Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 81
undervaluedScore: 55
maintainers: ["ananos", "pmoust", "panosmaurikos"]
openGraphImageUrl: "https://opengraph.githubassets.com/c7c72acc10f51964d3ceff3f948b10ccfcc59c19277d12602a7615118339dd79/brig-sh/hull"
---

<picture>
    <source media="(prefers-color-scheme: dark)" srcset="assets/hull-lockup-on-dark.svg">
  </picture>
</p>

</p>

**hull boots an OCI image as a real virtual machine on an Apple Silicon Mac.**

You give it an image reference. It pulls the image, prepares a root filesystem,
picks a kernel, and starts a VM with one of three hypervisor backends. The
workload inside gets its own kernel and its own memory, not a shared one.

hull is the microVM runtime that [brig](https://github.com/brig-sh/brig) drives
on macOS. It also works on its own as a CLI.

Two kinds of workload run here, and the difference matters:

- **Ordinary Linux container images**, such as `ubuntu:latest`. hull supplies a
  generic arm64 Linux kernel and an init wrapper, then boots your image's
  filesystem inside the VM. Most people want this.
- **Unikernel images**, packaged with a kernel of their own. hull boots the
  kernel the image carries.

hull is not a Docker replacement. It has no daemon, no image building, no
Kubernetes integration, and it implements a subset of Compose. See
[Limitations](#limitations).

## Requirements

- An Apple Silicon Mac. There is no Intel build.
- macOS 26 (Tahoe) is the…
