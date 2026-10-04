---
repo: "SeraphimSerapis/tool-eval-bench"
name: "tool-eval-bench"
description: "Tool-calling quality benchmark for LLM serving stacks. 80+ deterministic scenarios testing multi-turn orchestration, safety boundaries, and structured output. Supports vLLM, SGLang, and llama.cpp."
readmeQualityOk: true
url: "https://github.com/SeraphimSerapis/tool-eval-bench"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 358
forks: 47
openIssues: 0
closedIssues: 55
watchers: 2
contributors: 16
recentReleases: 0
createdAt: "2026-04-17T13:28:19Z"
lastCommitAt: "2026-10-04T10:00:55Z"
lastReleaseAt: "2026-04-24T20:22:49Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 26
maintainers: ["SeraphimSerapis", "siertum", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/b312aa2f905037a147c1e0888312f8addd7d93d9c8dce91c404a7fc6509a49a2/SeraphimSerapis/tool-eval-bench"
---

# tool-eval-bench

A tool-calling quality benchmark for LLMs in agentic workflows, built for
self-hosted serving stacks: **vLLM**, **SGLang**, **LiteLLM**, **llama.cpp**,
**NInfer**, **TensorFold**, and hosted **Gemini** and **Anthropic**.

Each scenario observes one assistant conversation with mock tools. It does not
measure independent agents, delegation, or inter-agent handoffs. Localization
coverage is currently German-focused. Difficulty tiers are author estimates,
not calibrated model rankings.

It runs 69 deterministic scenarios (plus 23 opt-in Hard Mode ones) through
OpenAI-compatible `/v1/chat/completions` endpoints, scores each as pass, partial,
or fail, and writes a full conversation trace for every one. Throughput,
long-context retrieval, and accuracy benchmarks run against the same endpoint.

## Quickstart

### Install

```bash
uv tool install git+https://github.com/SeraphimSerapis/tool-eval-bench.git

# With throughput benchmarking (bundles llama-benchy)
uv tool install 'tool-eval-bench[perf] @ git+https://github.com/SeraphimSerapis/tool-eval-bench.git'
```

Also available via [Docker](https://github.com/SeraphimSerapis/tool-eval-bench/blob/HEAD/docs/docker.md) if…
