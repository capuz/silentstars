---
repo: "justinchuby/onnx-genai"
name: "onnx-genai"
description: "A prototype of a GenAI runtime for ONNX"
readmeQualityOk: true
url: "https://github.com/justinchuby/onnx-genai"
language: "Rust"
languages: ["Rust"]
languagePcts: [96]
stars: 6
forks: 0
openIssues: 111
closedIssues: 126
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-07-12T15:14:32Z"
lastCommitAt: "2026-08-15T04:05:15Z"
lastReleaseAt: "2026-07-14T21:31:47Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 90
undervaluedScore: 49
maintainers: ["justinchuby", "Copilot"]
openGraphImageUrl: "https://opengraph.githubassets.com/29697f93e0b21c0c9c9a453bdb626df6d957bc2c609ae3e75a3aa677d61c74ee/justinchuby/onnx-genai"
---

# onnx-genai

A Rust inference runtime for generative AI models, built on ONNX Runtime.

**Reference implementation** of the [ONNX Inference Metadata Standard](https://github.com/onnx/onnx/issues/8184).

## Features

- **Generation:** greedy and categorical sampling with temperature, top-k, top-p,
  min-p, repetition, frequency, and presence controls.
- **Speculative decoding:** separate draft models and model-free prompt
  lookup/n-gram proposals, with greedy target verification and KV rewind.
- **Structured generation:** complete JSON plus llguidance-backed JSON Schema,
  regex, and Lark constraints; fill-in-the-middle (FIM) for compatible coder
  tokenizers.
- **Agent serving:** OpenAI-compatible chat completions, SSE streaming, model
  discovery, persistent sessions, Hugging Face/MiniJinja chat templates
  (including ChatML-style models), and tool calling (`tools`, `tool_choice`,
  and `<tool_call>` parsing).
- **Concurrency:** multi-session generation, prefix reuse, priority scheduling,
  swap preemption, and continuous static-cache batching. A tiny CPU fixture
  measured about 6.2x aggregate fixed-batch throughput; this is not a
  real-model GPU performance claim.
- **KV and…
