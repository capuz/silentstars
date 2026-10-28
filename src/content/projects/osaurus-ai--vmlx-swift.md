---
repo: "osaurus-ai/vmlx-swift"
name: "vmlx-swift"
description: "Unified Swift MLX inference stack for fast, local, multimodal AI on Apple Silicon."
readmeQualityOk: true
url: "https://github.com/osaurus-ai/vmlx-swift"
language: "Swift"
languages: ["Swift", "C++"]
languagePcts: [66, 30]
stars: 21
forks: 10
openIssues: 21
closedIssues: 14
watchers: 1
contributors: 52
recentReleases: 0
createdAt: "2026-05-12T07:53:37Z"
lastCommitAt: "2026-10-28T09:56:48Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 42
maintainers: ["jjang-ai", "rcfa"]
openGraphImageUrl: "https://opengraph.githubassets.com/099bb253415fa8f42b0e362d98186d7648584aa4ad05e6907b36ded61cc1bd77/osaurus-ai/vmlx-swift"
---

# vmlx-swift

vmlx-swift is Osaurus's unified Swift inference stack for MLX-powered local AI on
Apple Silicon.

The project is designed to become the single production package behind Osaurus
model serving: language models, vision-language models, multimodal models,
chat templates, tool calling, cache-aware generation, and quantized runtime
paths through one Swift interface.

The goal is simple: a fast, reliable, native MLX inference engine that product
teams can embed without stitching together several runtime repositories by hand.

## Why this exists

Local AI apps need more than a model loader. A production runtime has to keep
model behavior stable across real chat sessions, not just pass a one-token smoke
test. It has to apply generation config correctly, render the right chat
template, keep reasoning and tool-call streams parseable, preserve prefix-cache
contracts across turns, and handle dense, MoE, hybrid SSM, linear attention,
vision, audio, and multimodal model families without hidden per-app patches.

vmlx-swift exists to make that runtime surface explicit and testable.

It brings together the Osaurus Swift MLX stack into one package identity:

- MLX tensor,…
