---
repo: "cwu766485-ctrl/NMAForge"
name: "NMAForge"
description: "A synthesizable AXI4 near-memory tensor accelerator with a banked scratchpad, queued DMA and INT8/Transformer primitives."
readmeQualityOk: true
url: "https://github.com/cwu766485-ctrl/NMAForge"
language: "SystemVerilog"
languages: ["SystemVerilog", "Verilog"]
languagePcts: [57, 25]
stars: 15
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-25T17:37:01Z"
lastCommitAt: "2026-10-18T08:16:30Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 86
undervaluedScore: 34
maintainers: ["cwu766485-ctrl"]
openGraphImageUrl: "https://opengraph.githubassets.com/f12f62be4e02b04c2f1b290eca8baa7f145cc977136e9bae1c26bb6f4be23c43/cwu766485-ctrl/NMAForge"
---

# NMAForge — AXI4 Near-Memory Tensor Accelerator

[中文 README](https://github.com/cwu766485-ctrl/NMAForge/blob/HEAD/README_ZH.md) · [Architecture](https://github.com/cwu766485-ctrl/NMAForge/blob/HEAD/docs/architecture/ARCHITECTURE.md) ·
[Specification](https://github.com/cwu766485-ctrl/NMAForge/blob/HEAD/docs/spec/SPEC.md) · [Verification plan](https://github.com/cwu766485-ctrl/NMAForge/blob/HEAD/docs/verification/VPLAN.md) ·
[Documentation index](https://github.com/cwu766485-ctrl/NMAForge/blob/HEAD/docs/README.md)

> **Short description:** A synthesizable AXI4 near-memory tensor accelerator
> with a banked scratchpad, queued DMA and INT8/Transformer primitives.

NMAForge is a synthesizable, all-digital near-memory tensor-accelerator IP.
It is **not** analog compute-in-memory: arithmetic remains digital, while a
four-bank scratchpad keeps tiles close to bank-local compute and reduces
external-memory traffic.

## Architecture at a glance

- 32-bit AXI4-Lite control plane and 128-bit AXI4 memory-master interface.
- 512 KiB four-bank scratchpad with a single arbitration point and control-plane
  priority.
- Command/completion queues, scratchpad or external descriptors, dependency…
