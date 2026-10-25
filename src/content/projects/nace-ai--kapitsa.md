---
repo: "nace-ai/kapitsa"
name: "kapitsa"
description: "Blazing fast Apple Silicon optimized inference engine built for Qwen & Nemotron. OpenAI + Anthropic API compatible. Built by folks from nace.ai"
readmeQualityOk: true
url: "https://github.com/nace-ai/kapitsa"
homepage: "https://x.com/kapitsaserve"
language: "C++"
languages: ["C++", "Metal"]
languagePcts: [57, 20]
stars: 445
forks: 63
openIssues: 12
closedIssues: 23
watchers: 14
contributors: 35
recentReleases: 10
createdAt: "2026-10-16T00:41:59Z"
lastCommitAt: "2026-10-25T09:01:01Z"
lastReleaseAt: "2026-10-21T04:20:07Z"
status: "newborn"
tags: ["release_machine"]
healthScore: 93
undervaluedScore: 28
maintainers: ["alisher-amantay", "l0westbob", "fearampgreed"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1421473890/f13313da-6dae-4e74-87ae-0c44e563e5b4"
---

Kapitsa is an inference engine for Apple silicon that runs Qwen, Nemotron and Recursive's Flint models locally, built for coding agents. It starts opencode, Claude Code, Codex or pi on a local model, and serves OpenAI and Anthropic APIs.

[Quickstart](#quickstart) · [CLI](#cli) · [Benchmarks](#benchmarks) · [Models](#models) · [How KFlash works](https://github.com/nace-ai/kapitsa/blob/HEAD/docs/kflash.md) · [Docs](https://github.com/nace-ai/kapitsa/blob/HEAD/docs/usage.md)

## 🔥 What's new

- [2026/10] 🪶 **Flint on a 16 GB Mac: decodes at 61 tok/s vs llama.cpp's 43 on the same 2-bit GGUF.** `--model flint` takes unsloth's 2-bit GGUF on 16-24 GB Macs: its routed experts run as stored, the rest requantized to 3-6 bits. 61 tok/s decode on an M1 Pro, in 11.6 GB ([numbers](https://github.com/nace-ai/kapitsa/blob/HEAD/docs/benchmarks.md#recursive-flint-40b-a25b-with-2-bit-experts-m1-pro-16-gb-2026-10-22)).
- [2026/10] 🪨 **Recursive's Flint 40B-A2.5B: Kapitsa reads prompts faster than Recursive's own engine and decodes faster than llama.cpp.** On the M4 Pro every Kapitsa run read 4K and 16K prompts faster than every run of rec 0.1.0. On the M5 Pro, since Flint's attention moved to the…
