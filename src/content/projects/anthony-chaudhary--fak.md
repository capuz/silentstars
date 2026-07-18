---
repo: "anthony-chaudhary/fak"
name: "fak"
description: "fak — the Fused Agent Kernel: one Go binary for AI agent loops. Wrap Claude Code/Codex/Cursor, keep long sessions cache-efficient, route work per call, run local GGUF models, and adjudicate tool calls."
readmeQualityOk: true
url: "https://github.com/anthony-chaudhary/fak"
homepage: "https://anthony-chaudhary.github.io/fak/showcase.html"
language: "Go"
languages: ["Go"]
languagePcts: [80]
topics: ["agentic-ai", "ai-agents", "golang", "kv-cache", "llm-agents", "llm-inference", "llm-serving", "mcp", "self-hosted", "agent"]
stars: 15
forks: 5
openIssues: 1325
closedIssues: 3884
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-06-21T19:52:45Z"
lastCommitAt: "2026-07-18T05:43:53Z"
lastReleaseAt: "2026-07-11T21:41:37Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem", "release_machine"]
healthScore: 95
undervaluedScore: 58
maintainers: ["codex"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1276297427/9494cd94-2aa0-4aa3-9306-198f0534046e"
---

<picture><source media="(prefers-color-scheme: dark)" srcset="visuals/brand/fak-logo.svg"><img src="visuals/brand/fak-logo-ink.svg" alt="fak logo" width="320"></picture>
</p>

# fak — the Fused Agent Kernel

**fak turns a tool-using agent into a managed agent.**

The agent keeps its interface and model, while a fak kernel manages its model traffic, context lifetime, cache reuse, capabilities, and recovery.

## Try the kernel without a key, model, or GPU

**Audience:** first-time evaluators checking whether fak can manage a tool-using agent.

For the shortest public proof, run one deterministic end-to-end check:

```bash
fak agent --offline
```

The proof passes when the comparison ends with `task completed (booked) YES / YES`, `poisoned result blocked YES`, and `destructive op prevented YES`. This offline mode uses a deterministic mock planner, so it verifies the managed-agent path and policy boundary without claiming live-model quality or latency.

**Next action:** run `fak agent --offline` and check those three output rows. For the expanded policy, routing, and benchmark sequence, use the [reproduction…
