---
repo: "iyulab/FileFlux"
name: "FileFlux"
description: ".NET RAG document processing library that transforms PDF, DOCX, HWP, and more into optimized chunks via a 5-stage pipeline with Rust-based FFI readers."
readmeQualityOk: true
url: "https://github.com/iyulab/FileFlux"
language: "C#"
languages: ["C#"]
languagePcts: [100]
topics: ["chunking", "document-processing", "dotnet", "pdf", "rag", "rust-ffi"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-09-02T02:07:45Z"
lastCommitAt: "2026-08-28T14:19:52Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 86
undervaluedScore: 78
maintainers: ["birdnamoo", "zizixmas"]
openGraphImageUrl: "https://opengraph.githubassets.com/111632b850bd64a9d6f66d651c9bf55732308a4ce5e4debfaae269fbaf07e441/iyulab/FileFlux"
---

# FileFlux

> .NET document processing library for RAG systems

## Overview

FileFlux is a .NET library that transforms various document formats into optimized chunks for RAG (Retrieval-Augmented Generation) systems. Built on high-performance Rust FFI libraries for document parsing.

### Key Features

- **5-Stage Stateful Pipeline**: Extract → Rule-Refine → LLM-Refine → Chunk → Enrich
- **Native Document Readers**: Rust FFI-based readers (Unpdf, Undoc, Unhwp) for 2-5x faster processing. Binaries are NuGet-pinned for reproducibility; runtime self-update from GitHub releases is opt-in (off by default — set `UndocNativeLoader.AutoUpdateEnabled = true` / `UnhwpNativeLoader.AutoUpdateEnabled = true` or the `FILEFLUX_NATIVE_AUTOUPDATE=1` environment variable)
- **Multiple Document Formats**: PDF, DOCX, XLSX, PPTX, HWP, HWPX, Markdown, HTML, TXT, JSON, CSV
- **Flexible Chunking Strategies**: Auto, Smart, Intelligent, Semantic, Paragraph, FixedSize, Hierarchical, PageLevel
- **Interface-Driven AI**: Define AI service interfaces, implement with your preferred provider
- **Document Graph**: Inter-chunk relationship tracking with sequential, hierarchical, and semantic edges
- **Structural…
