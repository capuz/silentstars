---
repo: "CrispStrobe/CrispEmbed"
name: "CrispEmbed"
description: "Lightweight text and scans processing: embedding, document processing, OCR, OMR, etc,  with inference via ggml in pure C++"
readmeQualityOk: true
url: "https://github.com/CrispStrobe/CrispEmbed"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [48, 45]
topics: ["bert", "embeddings", "mpnet", "xlm-roberta", "ggml", "ocr"]
stars: 71
forks: 13
openIssues: 1
closedIssues: 18
watchers: 1
contributors: 6
recentReleases: 0
createdAt: "2026-04-14T16:35:17Z"
lastCommitAt: "2026-10-29T10:20:53Z"
lastReleaseAt: "2026-05-12T19:41:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 37
maintainers: ["CrispStrobe"]
openGraphImageUrl: "https://opengraph.githubassets.com/9c0c3b98c7401a48c25d1be6534896dce05b284ec2a84a3f6f7991d133f94409/CrispStrobe/CrispEmbed"
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
