---
repo: "flagos-ai/FlagQuantum"
name: "FlagQuantum"
description: "Sharded, differentiable quantum simulation and training in PyTorch, reaching domestic accelerators through FlagOS."
readmeQualityOk: true
url: "https://github.com/flagos-ai/FlagQuantum"
homepage: "https://flagquantum.com"
language: "Python"
languages: ["Python"]
languagePcts: [98]
topics: ["python", "quantum-computing", "sdks", "automatic-differentiation", "differentiable-programming", "distributed-computing", "distributed-training", "flagos", "gpu", "high-performance-computing"]
stars: 37
forks: 6
openIssues: 1
closedIssues: 13
watchers: 0
contributors: 5
recentReleases: 5
createdAt: "2026-05-09T02:51:10Z"
lastCommitAt: "2026-10-20T08:49:20Z"
lastReleaseAt: "2026-10-16T11:20:51Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 98
undervaluedScore: 49
maintainers: ["FlagQuantum", "cadake"]
openGraphImageUrl: "https://opengraph.githubassets.com/a7fa6aea471c30cbebe37f9925ad3e369a3abc38eae2ca94c831576e178c5013/flagos-ai/FlagQuantum"
---

[Qubit ordering](#qubit-ordering-qubit-0-is-the-most-significant-bit) · [Quick start](#install-and-train-your-first-quantum-model) · [Documentation](https://github.com/flagos-ai/FlagQuantum/blob/HEAD/docs/README.md) · [Wiki](https://github.com/flagos-ai/FlagQuantum/wiki) · [Examples](https://github.com/flagos-ai/FlagQuantum/blob/HEAD/examples/README.md)

Turn quantum circuits into trainable models. FlagQuantum brings PyTorch learning,
multiple simulation representations, and hardware execution into one workflow.
Its long-term goal is a continuous path from local scientific exploration to
distributed training, device modeling, and fault-tolerant quantum computing research.

- **Train with PyTorch.** Compose quantum and classical layers with autograd and
  familiar optimizers.
- **Choose the representation.** Statevector, matrix product state (MPS), and
  tensor-network simulation for different circuit structures and resource budgets.
- **Connect simulation to hardware.** Keep the circuit and requested observable
  explicit as you move between supported execution targets.

Support is specific to each backend and workload. Local training and selected
distributed paths have…
