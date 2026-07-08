---
repo: "sporevm/sporevm"
name: "sporevm"
description: "Forkable aarch64 Linux microVMs with fast capture, resume, and local fan-out"
readmeQualityOk: true
url: "https://github.com/sporevm/sporevm"
homepage: "https://sporevm.com"
language: "Zig"
languages: ["Zig"]
languagePcts: [79]
topics: ["sporevm", "aarch64", "apple-silicon", "kvm", "linux", "microvm", "sandboxing", "virtualization", "vmm", "zig"]
stars: 12
forks: 0
openIssues: 1
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 10
createdAt: "2026-06-13T01:21:48Z"
lastCommitAt: "2026-07-08T05:40:44Z"
lastReleaseAt: "2026-07-05T07:09:14Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 44
maintainers: ["lox"]
openGraphImageUrl: "https://opengraph.githubassets.com/be8c07e5f8d157121edd23507a3b1affd1d26a566ce04828200398a0a87db4db/sporevm/sporevm"
---

</p>

# SporeVM

SporeVM is a small aarch64 virtual machine monitor for saving and forking Linux
microVM state.

A spore is sealed VM state with normalized machine state, device state,
verified memory chunks, optional rootfs state, and a platform contract that
fails closed when a host cannot restore it honestly.

The useful shape is:

1. Start a runtime once.
2. Warm it up until the expensive boring work is done.
3. Save it at a clean point.
4. Fork cheap child spores.
5. Attach the children on compatible aarch64 hosts without copying all RAM for
   every child.

SporeVM 1.0 expects spores to restore on the same backend and compatible host
class they were saved for: KVM/aarch64 to KVM/aarch64, or Apple Silicon HVF
to Apple Silicon HVF. The repo still keeps KVM/HVF restore checks because they
catch backend-specific state leaking into the spore format, but users should
not plan distribution around moving one running machine between those
hypervisors.

## Design details

- [docs/spore-format.md](https://github.com/sporevm/sporevm/blob/HEAD/docs/spore-format.md): manifest, bundle, and invariant
  contract.
-…
