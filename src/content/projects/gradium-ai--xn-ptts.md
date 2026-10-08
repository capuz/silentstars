---
repo: "gradium-ai/xn-ptts"
name: "xn-ptts"
description: "Phonon TTS inference using xn"
readmeQualityOk: true
url: "https://github.com/gradium-ai/xn-ptts"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
stars: 15
forks: 9
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 5
recentReleases: 0
createdAt: "2026-05-03T11:30:57Z"
lastCommitAt: "2026-10-08T10:52:39Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 79
undervaluedScore: 41
maintainers: ["davencyw", "LaurentMazare"]
openGraphImageUrl: "https://opengraph.githubassets.com/c0430ee038e32a05a481a6c03305dd03d2d9aa1a9759749ede4ca68cf505b3f2/gradium-ai/xn-ptts"
---

# Phonon

Phonon is Gradium's on-device text-to-speech runtime, written in Rust, with Python bindings. It builds on [Pocket TTS](https://github.com/kyutai-labs/pocket-tts), developed by Kyutai. This preview pairs the code in this repository with a model package supplied by Gradium; the model is not in this repository.

Gradium's Phonon checkpoints are the primary integration target and use their own model config, weights, tokenizer, and voices. Pocket TTS checkpoints can be used when they supply a compatible `config.json`, `tokenizer.json`, and weights. The release will make the selected Phonon checkpoint the default.

## 1. Set up

You need [Rust](https://rustup.rs) for every path, and [uv](https://docs.astral.sh/uv/) for Python.

Point `MODEL_DIR` at the model folder, the one holding `config.json`, `model.q8.gguf`, `tokenizer.json` and its voice assets:

```bash
export MODEL_DIR=/path/to/model
```

Rust examples, Python, and both servers share the [checkpoint resolver](https://github.com/gradium-ai/xn-ptts/blob/HEAD/ptts/src/checkpoint.rs). Supply a local model directory or an HF repo explicitly. Each model supplies its own `config.json`, `tokenizer.json`, weights, and voice…
