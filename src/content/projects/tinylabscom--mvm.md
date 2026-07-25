---
repo: "tinylabscom/mvm"
name: "mvm"
description: "Manage secure microVMs — one command from zero to secure sessions, locally and remotely."
readmeQualityOk: true
url: "https://github.com/tinylabscom/mvm"
homepage: "https://gomicrovm.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 30
forks: 1
openIssues: 14
closedIssues: 103
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-08T23:45:29Z"
lastCommitAt: "2026-07-25T05:32:07Z"
lastReleaseAt: "2026-03-14T21:28:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 43
maintainers: ["auser"]
openGraphImageUrl: "https://opengraph.githubassets.com/ea04ee84169cf3acd632c971a32d1fdede0fabb091387f99e3218bd7a48e7f7b/tinylabscom/mvm"
---

# mvm

**mvm** is a Rust CLI (`mvmctl`) and a set of language SDKs for running
workloads in fast, hardware-isolated microVMs — from **OCI images**, **Nix
flakes**, or **decorated functions** — on macOS and Linux, with a security
posture that is enforced by CI, not by documentation.

Every machine boots its own Linux kernel under a real hypervisor. There is no
Docker on the runtime path, no SSH in any guest, and (on the in-house macOS
backend) no guest network device at all: guest I/O crosses **vsock**, where the
host can audit flows, substitute secrets so the workload never sees raw
credentials, detect-and-replace secrets and structured PII on owned cleartext
egress paths, and enforce default-deny egress from a signed execution plan.

```
macOS 26+ (Apple Silicon)  →  in-house HVF VMM (Hypervisor.framework, zero extra deps)
macOS 13–25                →  libkrun (Homebrew)
Linux + /dev/kvm           →  Firecracker
```

## Highlights

- **One command from image to isolated VM** — `mvmctl machine run --image alpine -- uname -a`
- **Three ways to define a workload** — an OCI image, a Nix flake (`mkGuest`), or
  a decorated function (`@mvm.app`) — all compile to the same signed,…
