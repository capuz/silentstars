---
repo: "CrispStrobe/CrispEmbed"
name: "CrispEmbed"
description: "Lightweight text embedding inference via ggml in pure C++, plus OCR, document processing, etc"
readmeQualityOk: true
url: "https://github.com/CrispStrobe/CrispEmbed"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [54, 35]
topics: ["bert", "embeddings", "mpnet", "xlm-roberta", "ggml", "ocr"]
stars: 45
forks: 7
openIssues: 0
closedIssues: 5
watchers: 1
contributors: 4
recentReleases: 6
createdAt: "2026-04-14T16:35:17Z"
lastCommitAt: "2026-08-01T06:14:23Z"
lastReleaseAt: "2026-05-12T19:41:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 45
maintainers: ["CrispStrobe"]
openGraphImageUrl: "https://opengraph.githubassets.com/9b8c756ddf9c150c58a4b3ab43dfb515d5ff4c63c07a981209c4a343e34d5beb/CrispStrobe/CrispEmbed"
---

# CrispEmbed

**A single C++/ggml binary for retrieval and document understanding — no Python
runtime, no ONNX.** Text/image/face embeddings, sparse & multi-vector retrieval,
rerankers, a full OCR stack (general, scene-text, math, music), layout analysis,
NER/KIE, and document preprocessing — all auto-detected from GGUF metadata and
GPU-accelerated (CUDA / Vulkan / Metal), with Python, Rust, Dart, HTTP, and
**WebAssembly** front-ends.

Where llama.cpp focuses on text *generation*, CrispEmbed covers the *retrieval,
understanding, and document-processing* half of the ggml world. **9.5× faster
than FastEmbed (ONNX)** on MiniLM-L6; runs on Linux, macOS, Windows, iOS,
Android, and in the browser.

> **Live demos:** [WASM OCR (client-side)](https://crispstrobe.github.io/CrispEmbed/)
> · [HuggingFace Space](https://huggingface.co/spaces/cstr/CrispEmbed) (embeddings + math OCR)

---

## Capabilities at a glance

| Domain | What it does | Highlights |
|---|---|---|
| **Text embeddings** | Dense vectors from 10 encoder/decoder architectures | BERT, XLM-R, MPNet, NomicBERT (+MoE), ModernBERT, GTE-v1.5, DeBERTa-v2, Qwen3, Gemma3. Matryoshka truncation, prompt prefixes. cos ≥ 0.965 vs HF |
|…
