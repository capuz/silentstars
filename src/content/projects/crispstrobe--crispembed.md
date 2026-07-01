---
repo: "CrispStrobe/CrispEmbed"
name: "CrispEmbed"
description: "Lightweight text embedding inference via ggml in pure C++, plus OCR, document processing, etc"
url: "https://github.com/CrispStrobe/CrispEmbed"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [56, 33]
topics: ["bert", "embeddings", "mpnet", "xlm-roberta", "ggml", "ocr"]
stars: 31
forks: 5
openIssues: 1
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 10
createdAt: "2026-04-14T16:35:17Z"
lastCommitAt: "2026-07-01T07:04:41Z"
lastReleaseAt: "2026-05-12T19:41:53Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 80
undervaluedScore: 36
maintainers: ["CrispStrobe"]
openGraphImageUrl: "https://opengraph.githubassets.com/4c396f506e95807eec6c2133657c4f1fa9671a17db414a2d5afb10492a6d91e3/CrispStrobe/CrispEmbed"
---

# CrispEmbed

Lightweight embedding inference via ggml. No Python runtime, no ONNX.
Text, image, and face embeddings in one binary.

**Text**: 10 architectures (BERT, XLM-R, MPNet, NomicBERT, ModernBERT, GTE v1.5,
Qwen3, Gemma3, SPLADE, DeBERTa-v2). Dense, sparse (SPLADE/BGE-M3), ColBERT
multi-vector, cross-encoder rerankers, bi-encoder reranking.

**NER**: Zero-shot (GLiNER, DeBERTa-v3/LFM2.5) and fixed-label (BERT/XLM-R) Named
Entity Recognition. Auto-detected from GGUF — same `--ner` API for both.
Fixed-label: `bert-base-ner` (EN), `xlmr-ner-hrl` (10 languages). CLI, server, Python, Dart.

**KIE**: Key Information Extraction — chains OCR + NER to extract structured
key-value fields from document images (receipts, invoices, forms). No new model
needed. CLI (`--kie`), server (`POST /kie/extract`), Python (`CrispKIE`), Dart.

**LID**: Text language identification (CLD3/GlotLID) — auto-selects Tesseract model
by detected language. Server (`POST /lid/detect`), Python (`CrispTextLID`).

**LiLT**: Layout-aware document understanding via dual-stream encoder (RoBERTa +
layout transformer with BiACM). Token classification for form understanding
(FUNSD: question/answer/header). 130M…
