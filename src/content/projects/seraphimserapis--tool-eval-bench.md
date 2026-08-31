---
repo: "SeraphimSerapis/tool-eval-bench"
name: "tool-eval-bench"
description: "Tool-calling quality benchmark for LLM serving stacks. 80+ deterministic scenarios testing multi-turn orchestration, safety boundaries, and structured output. Supports vLLM, SGLang, and llama.cpp."
readmeQualityOk: true
url: "https://github.com/SeraphimSerapis/tool-eval-bench"
language: "Python"
languages: ["Python"]
languagePcts: [99]
stars: 319
forks: 42
openIssues: 0
closedIssues: 44
watchers: 2
contributors: 14
recentReleases: 0
createdAt: "2026-04-17T13:28:19Z"
lastCommitAt: "2026-08-31T09:59:50Z"
lastReleaseAt: "2026-04-24T20:22:49Z"
status: "thriving"
tags: []
healthScore: 99
undervaluedScore: 27
maintainers: ["SeraphimSerapis", "siertum", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/f32fdeef141c9ddc49fbfe94a2fc932f12ac1245bac0e46c1c06d2bdf306b082/SeraphimSerapis/tool-eval-bench"
---

# tool-eval-bench

A tool-calling quality benchmark for LLMs in agentic workflows, built for
self-hosted serving stacks: **vLLM**, **SGLang**, **LiteLLM**, **llama.cpp**,
**NInfer**, and hosted **Gemini**.

It runs 69 deterministic scenarios (plus 19 opt-in Hard Mode ones) through
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

Also available via [Docker](https://github.com/SeraphimSerapis/tool-eval-bench/blob/HEAD/docs/docker.md) if you would rather not have a local
Python, or as a [development checkout](https://github.com/SeraphimSerapis/tool-eval-bench/blob/HEAD/CONTRIBUTING.md#development-setup).

### Run it

Point it at an OpenAI-compatible endpoint and run the core 15 scenarios. This
takes a couple of minutes and needs no…
