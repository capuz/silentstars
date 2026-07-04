---
repo: "sporevm/sporevm"
name: "sporevm"
description: "Forkable aarch64 Linux microVMs with fast capture, resume, and local fan-out"
readmeQualityOk: true
url: "https://github.com/sporevm/sporevm"
homepage: "https://sporevm.com"
language: "Zig"
languages: ["Zig"]
languagePcts: [78]
topics: ["sporevm", "aarch64", "apple-silicon", "kvm", "linux", "microvm", "sandboxing", "virtualization", "vmm", "zig"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 7
createdAt: "2026-06-13T01:21:48Z"
lastCommitAt: "2026-07-04T23:14:07Z"
lastReleaseAt: "2026-07-04T22:07:41Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 56
maintainers: ["lox"]
openGraphImageUrl: "https://opengraph.githubassets.com/78957a750f3c7860d87816827b204311589465295c472e06075ababa0d6a3b03/sporevm/sporevm"
---

</p>

# SporeVM

SporeVM is a small aarch64 virtual machine monitor for forkable Linux microVM
checkpoints.

A spore is a sealed VM checkpoint with normalized machine state, device state,
verified memory chunks, optional rootfs state, and a platform contract that
fails closed when a host cannot restore it honestly.

The useful shape is:

1. Start a runtime once.
2. Warm it up until the expensive boring work is done.
3. Capture it at a clean point.
4. Fork cheap child spores.
5. Resume the children on compatible aarch64 hosts without copying all RAM for
   every child.

SporeVM 1.0 expects spores to resume on the same backend and compatible host
class they were captured for: KVM/aarch64 to KVM/aarch64, or Apple Silicon HVF
to Apple Silicon HVF. The repo still keeps KVM/HVF restore checks because they
catch backend-specific state leaking into the spore format, but users should
not plan distribution around moving one running machine between those
hypervisors.

## Design details

- [docs/spore-format.md](https://github.com/sporevm/sporevm/blob/HEAD/docs/spore-format.md): manifest, bundle, and invariant
  contract.
-…
