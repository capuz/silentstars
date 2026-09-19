---
repo: "tinylabscom/mvm"
name: "mvm"
description: "Manage secure microVMs — one command from zero to secure sessions, locally and remotely."
readmeQualityOk: true
url: "https://github.com/tinylabscom/mvm"
homepage: "https://runmvm.com/"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 42
forks: 4
openIssues: 65
closedIssues: 474
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-02-08T23:45:29Z"
lastCommitAt: "2026-09-19T07:13:51Z"
lastReleaseAt: "2026-03-14T21:28:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 97
undervaluedScore: 44
maintainers: ["auser", "aneyzberg"]
openGraphImageUrl: "https://opengraph.githubassets.com/6bbb5012383bbc82598961be3c2892f54b7d56b669ee063daed3c1ed586942ca/tinylabscom/mvm"
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

## Role of the `mvmctl` crate

The repository root is also the `mvmctl` Cargo package. Its binary is the thin
process entry point that initializes platform-specific…
