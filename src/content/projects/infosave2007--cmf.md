---
repo: "infosave2007/cmf"
name: "cmf"
description: "One backbone, many specialists. CMF is a self-describing, memory-mappable single-file format and a dependency-free runtime for quantized LLMs — zero-copy execution on CPU or GPU (Vulkan · Metal · DX12) that overlays task-specialized skills onto one shared model, with no per-model duplication."
readmeQualityOk: true
url: "https://github.com/infosave2007/cmf"
language: "Rust"
languages: ["Rust"]
languagePcts: [90]
stars: 8
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-07-07T13:14:47Z"
lastCommitAt: "2026-07-25T06:00:46Z"
lastReleaseAt: "2026-07-08T06:11:25Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 52
maintainers: ["infosave2007"]
openGraphImageUrl: "https://opengraph.githubassets.com/38eba9585ea576b8686b73b4e4147d4434892532dcf62268ca641e20427d2bbd/infosave2007/cmf"
---

Русский: [README.ru.md](https://github.com/infosave2007/cmf/blob/HEAD/README.ru.md) · 中文: [README.zh.md](https://github.com/infosave2007/cmf/blob/HEAD/README.zh.md)

# CMF — Cortiq Model Format

**A single-file LLM format whose attention memory stops growing with the context.**

A `.cmf` file carries the weights, the tokenizer and the chat template together,
checks its own integrity, and memory-maps straight off disk. The runtime is a
small Rust core with no ML framework under it — no torch, no BLAS, no ONNX, no
CUDA install, no C++ toolchain — running on CPU everywhere, and on GPU via wgpu
(Vulkan / DX12 / Metal) in a source build. Converting a model takes one command
and no Python.

What makes it different: **you can convert a model's attention into a
constant-memory streaming operator with one flag** — no retraining, weights
byte-identical — so a long conversation stops costing more memory than a short
one.

## Try it

```sh
# prebuilt binary: github.com/infosave2007/cmf/releases/latest
# or, with a Rust toolchain:
cargo install cortiq-cli

cortiq convert --model Qwen/Qwen3-0.6B --quant q8 --output qwen.cmf
cortiq run qwen.cmf --prompt "What is the capital of France?" --greedy…
