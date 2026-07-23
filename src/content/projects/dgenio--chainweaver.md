---
repo: "dgenio/ChainWeaver"
name: "ChainWeaver"
description: "Deterministic MCP tool flows for AI agents. Remove unnecessary LLM calls between predictable tool steps."
readmeQualityOk: true
url: "https://github.com/dgenio/ChainWeaver"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agent-infrastructure", "ai-agents", "deterministic-agents", "mcp", "model-context-protocol", "python", "tool-orchestration", "workflow-engine", "weaver-stack"]
stars: 6
forks: 3
openIssues: 99
closedIssues: 319
watchers: 1
contributors: 4
recentReleases: 5
createdAt: "2026-03-03T10:10:56Z"
lastCommitAt: "2026-07-23T06:15:24Z"
lastReleaseAt: "2026-05-22T10:04:06Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 93
undervaluedScore: 65
maintainers: ["claude", "dgenio", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/84f8a4878964f08361dac100862299fe171a7f356bf80cd320a21397f36812e9/dgenio/ChainWeaver"
discussionCount: 0
---

# ChainWeaver

**Observe the tool paths your agent repeats. Compile them into typed, deterministic flows. Replace the LLM-in-the-loop with governed, auditable execution.**

</p>

**The moat — observe → compile → replace.** Point ChainWeaver at the tool paths
your agent already repeats. `ChainAnalyzer` maps every schema-compatible chain
among your tools; you compile the ones worth keeping into typed `Flow` objects;
and `FlowExecutor` *replaces* the per-step LLM round-trips with deterministic,
schema-validated execution — no model in the loop. You compile the path the
analyzer surfaces instead of hand-wiring it.

**Governance for tool flows.** Typed I/O at every step, file-serializable
flows, schema-drift detection, determinism *attestation*, property fuzzing, and
structured audit traces — disciplined, auditable, portable deterministic
execution.

> **Quantified and reproducible.** In the repo's
> [benchmark report](https://github.com/dgenio/ChainWeaver/blob/HEAD/benchmarks/results/latest.md), compiled flows show **0%
> data corruption** versus **61–96%** for naive LLM-in-the-loop chaining, and
> avoid **~$0.06** of LLM spend per 10-step flow. Regenerate it yourself with
> `python…
