---
repo: "eunomia-bpf/ActPlane"
name: "ActPlane"
description: "eBPF Information Flow Policy Engine for safe and effective AI Agent Harnesses"
url: "https://github.com/eunomia-bpf/ActPlane"
language: "C"
languages: ["C"]
languagePcts: [94]
topics: ["ebpf", "harness", "ifc", "policy-engine"]
stars: 50
forks: 5
openIssues: 1
closedIssues: 1
watchers: 0
contributors: 4
recentReleases: 9
createdAt: "2026-05-22T23:19:43Z"
lastCommitAt: "2026-06-24T00:20:28Z"
lastReleaseAt: "2026-05-24T04:55:58Z"
status: "newborn"
tags: ["hidden_gem", "funded", "release_machine"]
healthScore: 86
undervaluedScore: 38
maintainers: ["Littlefisher619", "yunwei37", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4af9a5c83d6c2a970c0df4852d722b1a621aa57f387fc33df3bd28adfdb37281/eunomia-bpf/ActPlane"
fundingLinks: ["GITHUB:https://github.com/yunwei37", "GITHUB:https://github.com/Officeyutong"]
---

# ActPlane: eBPF-Based IFC Policy Engine for AI Agent Harnesses

**Runtime `enforcement` and `observability` for AI agent harnesses and sandboxing: declare information-flow policies for safety and compliance, and ActPlane enforces them in the kernel with eBPF.**

Prompt constraints and model guardrails are probabilistic. ActPlane is deterministic. Tool call check cannot see indirect system behavior, e.g. a sh script.

**What you can express:**

- **"No `codex` may run `git push` or write outside `/src`"**: fine-grained sandboxing rules follow process lineage, no bypass via bash scripts or python.
- **"Never remove the build cache in makefile unless explicitly asked or debugging"**: bypassable with a specific argument when necessary, not just sandbox.
- **"When changing `specs/*`, also update the server, SDK, and docs"**: ActPlane never blocks the edit, it notifies the agent that downstream outputs are now stale.
- **"Run  `make check` & `npm tests` before committing"**: causal ordering, not just per-operation checks.

## Quickstart

Install with one command. The eBPF program ships prebuilt (CO-RE, architecture
independent), so there is **no clang/llvm/libbpf to install** — just a…
