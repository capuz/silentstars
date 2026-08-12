---
repo: "tinylabscom/mvm"
name: "mvm"
description: "Manage secure microVMs — one command from zero to secure sessions, locally and remotely."
readmeQualityOk: true
url: "https://github.com/tinylabscom/mvm"
homepage: "https://gomicrovm.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [94]
stars: 35
forks: 2
openIssues: 42
closedIssues: 223
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-02-08T23:45:29Z"
lastCommitAt: "2026-08-12T02:44:46Z"
lastReleaseAt: "2026-03-14T21:28:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 41
maintainers: ["auser"]
openGraphImageUrl: "https://opengraph.githubassets.com/edda6f627f3a243bb248b85d616d421696abf33e13965e6310efbe044f41596d/tinylabscom/mvm"
---

# mvm

**mvm** is a Rust CLI (`mvmctl`) and a set of language SDKs for running
workloads in fast, hardware-isolated microVMs — from **OCI images**, **Nix
flakes**, or **decorated functions** — on macOS and Linux, with a security
posture that is enforced by CI, not by documentation.

Every machine boots its own Linux kernel under a real hypervisor. There is no
Docker on the runtime path, no SSH in any guest, and **no guest network device
at all** — on any workload backend. Every byte a workload sends crosses
**vsock**, where the host can audit flows, substitute secrets so the workload
never sees raw credentials, detect-and-replace secrets and structured PII on
owned cleartext egress paths, and enforce default-deny egress from a signed
execution plan.

That last point is load-bearing: because the guest has no NIC, the **host
originates every outbound connection**. That is what makes default-deny egress,
"no raw secret reaches the guest", and the audit chain mechanically enforceable
rather than merely intended.

```
macOS 26+ (Apple Silicon)  →  in-house HVF VMM (Hypervisor.framework, zero extra deps)
macOS 13–25                →  libkrun (Homebrew)
Linux + /dev/kvm           →…
