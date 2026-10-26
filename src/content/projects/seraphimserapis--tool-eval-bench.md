---
repo: "SeraphimSerapis/tool-eval-bench"
name: "tool-eval-bench"
description: "Tool-calling quality benchmark for LLM serving stacks. 80+ deterministic scenarios testing multi-turn orchestration, safety boundaries, and structured output. Supports vLLM, SGLang, and llama.cpp."
readmeQualityOk: true
url: "https://github.com/SeraphimSerapis/tool-eval-bench"
language: "Python"
languages: ["Python"]
languagePcts: [98]
stars: 397
forks: 53
openIssues: 0
closedIssues: 70
watchers: 2
contributors: 20
recentReleases: 0
createdAt: "2026-04-17T13:28:19Z"
lastCommitAt: "2026-10-26T09:17:07Z"
lastReleaseAt: "2026-04-24T20:22:49Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 99
undervaluedScore: 27
maintainers: ["SeraphimSerapis", "Whning0513", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/491a6d13adf2e1fa1d9b0d70ca8bfdaca25117162ae37aa15c0f666049b84b82/SeraphimSerapis/tool-eval-bench"
---

# tool-eval-bench

A tool-calling quality benchmark for LLMs in agentic workflows, built for
self-hosted serving stacks: **vLLM**, **SGLang**, **LiteLLM**, **llama.cpp**, **Strata**,
**TabbyAPI**, **NInfer**, **TensorFold**, **TandemLLM**, and hosted **Gemini** and **Anthropic**.

Each scenario observes one assistant conversation with mock tools. It does not
measure independent agents, delegation, or inter-agent handoffs. Localization
coverage is currently German-focused. Difficulty tiers are author estimates,
not calibrated model rankings.

It runs 97 scenarios in total across 16 categories: 69 standard deterministic
scenarios in categories A–O, plus 28 Hard Mode scenarios in category P that run
only on request. Requests go
through OpenAI-compatible `/v1/chat/completions` endpoints or the native Gemini
and Anthropic APIs. Each scenario scores pass, partial, or fail, with a full
conversation trace for every one. Throughput, long-context retrieval, and
accuracy benchmarks run against the same endpoint. A local web UI browses the
results, and one command turns a session into a shareable results card.

## Quickstart

### Install

```bash
uv tool install…
