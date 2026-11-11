---
repo: "nshkrdotcom/DSPex"
name: "DSPex"
description: "Declarative Self Improving Elixir - DSPy Orchestration in Elixir"
readmeQualityOk: true
url: "https://github.com/nshkrdotcom/DSPex"
language: "Elixir"
languages: ["Elixir"]
languagePcts: [100]
topics: ["elixir", "beam", "otp", "erlang-vm", "functional-programming", "ai", "dspy", "declarative-programming", "self-improving", "program-optimization"]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-13T19:48:05Z"
lastCommitAt: "2026-11-11T19:45:37Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 74
undervaluedScore: 30
maintainers: ["nshkrdotcom"]
openGraphImageUrl: "https://opengraph.githubassets.com/eae638d06d1910a6156408665bd9878acc17633e5d1416a35384a66443ba8c3c/nshkrdotcom/DSPex"
---

Declarative LLM programming with full access to Stanford NLP's DSPy framework

---

## Overview

DSPex brings [DSPy](https://github.com/stanfordnlp/dspy) — Stanford NLP's framework for programming language models — to Elixir. It ships with SnakeBridge-generated `Dspy.*` bindings that mirror DSPy's package layout (great for HexDocs + IDE navigation), plus a minimal `DSPex` convenience layer over [SnakeBridge](https://github.com/nshkrdotcom/snakebridge)'s Universal FFI. Use the generated modules for the full API surface or the thin FFI wrapper for direct calls.

DSPex 0.14.0 pins and generates bindings for DSPy 3.5.0.

**Why DSPex?**

- **Two access layers** — Generated `Dspy.*` modules + a minimal `DSPex` FFI wrapper
- **Full DSPy access** — Signatures, Predict, ChainOfThought, optimizers, and more
- **Python-shaped docs** — Module tree mirrors DSPy packages for clean HexDocs
- **100+ LLM providers** — OpenAI, Anthropic, Google, Ollama, and anything LiteLLM supports
- **Production-ready timeouts** — Built-in profiles for ML inference workloads
- **Elixir-native error handling** — `{:ok, result}` / `{:error, reason}` everywhere

## Installation

Prerequisites (one-time):
- Python…
