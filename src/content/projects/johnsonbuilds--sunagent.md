---
repo: "johnsonbuilds/sunagent"
name: "sunagent"
description: "A modular, provider-independent AI Agent runtime built from scratch for experimenting with and evaluating modern AI Agent architectures."
readmeQualityOk: true
url: "https://github.com/johnsonbuilds/sunagent"
homepage: "https://getclawcloud.com/sunagent"
language: "Shell"
languages: ["Shell", "Python"]
languagePcts: [68, 30]
topics: ["agent", "agent-runtime", "ai", "modular-agent"]
stars: 10
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-08-08T10:34:14Z"
lastCommitAt: "2026-11-06T11:24:04Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["johnsonbuilds"]
openGraphImageUrl: "https://opengraph.githubassets.com/5a930fbd0cff41b4034a90c2950294f8093e90feee8afd0c2c9b0f055a0187f0/johnsonbuilds/sunagent"
---

# SunAgent

> A small, readable Agent Runtime built from first principles.

SunAgent is a modular, provider-agnostic runtime for tool-calling agents. The engine (loop, tracing, events, executors) stays stable; everything that shapes an agent's behavior — prompt, tools, limits, context, recovery, verification — is versioned data in a YAML **harness manifest**. Change one gene, rerun a benchmark, and attribute the score change to that mutation.

- Any OpenAI-compatible Chat Completions endpoint, with streaming and reasoning replay
- Harness genome with lineage, content hashes, and immutable evaluation records
- Schema-validated tool calls; malformed model output never enters history
- Context strategies (`full_history`, `compact_observations`, `llm_summary`) with output spilling
- Per-category LLM retries, tool-error feedback, and a context-window hard gate
- Optional verification gate with evidence grounding and command re-execution
- Two event streams: internal `RunTrace` JSONL and user-facing `EventEmitter`
- CLI and browser UI over the same runtime; Harbor adapters for benchmarks

## Architecture

```text
CLI · Web UI · Harbor adapter
        │  AgentEvent / frames
Channels…
