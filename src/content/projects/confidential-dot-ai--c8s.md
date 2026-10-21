---
repo: "confidential-dot-ai/C8s"
name: "C8s"
description: "C8s is confidential Kubernetes. It runs K8s workloads confidentially and verifiably in Trusted Execution Environments (TEEs)."
readmeQualityOk: true
url: "https://github.com/confidential-dot-ai/C8s"
homepage: "https://confidential.ai"
language: "Go"
languages: ["Go"]
languagePcts: [92]
stars: 107
forks: 9
openIssues: 25
closedIssues: 42
watchers: 1
contributors: 11
recentReleases: 10
createdAt: "2025-08-19T19:03:31Z"
lastCommitAt: "2026-10-21T23:36:57Z"
lastReleaseAt: "2026-10-08T12:30:41Z"
status: "thriving"
tags: ["release_machine"]
healthScore: 92
undervaluedScore: 50
maintainers: ["joaosa", "AnomalRoil", "CluEleSsUK"]
openGraphImageUrl: "https://opengraph.githubassets.com/f6f4acffd7a8d50c6e1a119005df748ca8d0da0fcf6af6bf2bca24983049b5ac/confidential-dot-ai/C8s"
---

# C8s

**C8s is confidential Kubernetes.** It runs Kubernetes workloads inside
hardware-backed Trusted Execution Environments, so that the data they process
(model weights, prompts, responses, datasets, credentials) stays encrypted in
memory the entire time it is in the cluster, and that property is
cryptographically provable to a third party over the network.

Encryption at rest and in transit are solved problems. Encryption **in use**
is not: the moment a workload runs, its secrets sit in plaintext memory,
readable by whoever operates the machine underneath it. Confidential computing
closes that gap. Modern CPUs (AMD SEV-SNP, Intel TDX) can run a virtual
machine whose memory is encrypted with keys held by the hardware, measure
exactly what booted into it, and sign that measurement so a remote party can
verify it. The infrastructure operator and hypervisor cannot see inside the VM. The
measured node kernel and its Kubernetes runtime are inside the trust boundary.

C8s applies that model to Kubernetes end to end, following five principles at
every layer:

1. **Encrypt the runtime.** Workloads run in hardware-encrypted memory.
2. **Measure the code.** The hardware computes a launch…
