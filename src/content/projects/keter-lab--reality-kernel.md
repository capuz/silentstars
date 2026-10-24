---
repo: "Keter-Lab/reality-kernel"
name: "reality-kernel"
description: "Deterministic execution barrier and eBPF kernel runtime for autonomous AI agents."
readmeQualityOk: true
url: "https://github.com/Keter-Lab/reality-kernel"
homepage: "https://realitykernel.dev"
language: "Rust"
languages: ["Rust"]
languagePcts: [69]
topics: ["ai-safety", "autonomous-agents", "cybersecurity", "ebpf", "linux-kernel", "rust", "symbolic-execution"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-09-03T06:45:55Z"
lastCommitAt: "2026-10-24T08:20:56Z"
lastReleaseAt: "2026-10-23T14:23:29Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 90
undervaluedScore: 54
maintainers: ["github-actions[bot]", "HunterX461", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1355612986/dcc89656-6bd6-4267-9717-084ab2e36f2a"
discussionCount: 1
---

# Reality Kernel

### Kernel-level enforcement for AI agents on Linux

Network, exec and file policy decided in the kernel, before the action, with a
signed record of every decision.

**[Install](https://github.com/Keter-Lab/reality-kernel/blob/HEAD/docs/install.md) · [Policy](https://github.com/Keter-Lab/reality-kernel/blob/HEAD/docs/policy.md) · [Architecture](https://github.com/Keter-Lab/reality-kernel/blob/HEAD/docs/architecture.md) · [Threat model](https://github.com/Keter-Lab/reality-kernel/blob/HEAD/docs/threat-model.md) · [Evidence](https://github.com/Keter-Lab/reality-kernel/blob/HEAD/docs/evidence.md) · [Website](https://realitykernel.dev/)**

---

AI agents run shell commands, read files and open network connections with
real privileges. Guardrails that inspect prompts or tool calls sit in front of
the agent; a prompt injection, a bug or a child process can step around them.
Reality Kernel puts the decision where it cannot be stepped around: in eBPF
programs attached to the Linux kernel's BPF-LSM and cgroup socket hooks, for
every process in a governed cgroup.

## What it does

Every statement below links to the criterion whose tests prove it, on every
supported kernel,…
