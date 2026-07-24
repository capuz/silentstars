---
repo: "raphaelmansuy/edgequake-pdf2md"
name: "edgequake-pdf2md"
description: "Convert PDF documents to Markdown using Vision Language Models — CLI and library"
readmeQualityOk: true
url: "https://github.com/raphaelmansuy/edgequake-pdf2md"
homepage: "https://crates.io/crates/edgequake-pdf2md"
language: "Rust"
languages: ["Rust"]
languagePcts: [92]
stars: 38
forks: 6
openIssues: 0
closedIssues: 10
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-19T02:01:44Z"
lastCommitAt: "2026-07-24T06:07:03Z"
lastReleaseAt: "2026-03-01T17:52:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 26
maintainers: ["raphaelmansuy"]
openGraphImageUrl: "https://opengraph.githubassets.com/eeef95961b6e961f72c7f3d6699af7eb6c25f578bbb65b0501c5e94658755905/raphaelmansuy/edgequake-pdf2md"
---

<h1 align="center">edgequake-pdf2md</h1>
</p>

</p>

---

`edgequake-pdf2md` is a Rust CLI and library that converts PDF files (local or URL) into well-structured Markdown using vision-capable LLMs. It rasterises each page with [pdfium](https://pdfium.googlesource.com/pdfium/), sends the image to a VLM (GPT-4.1, Claude, Gemini, etc.), and post-processes the result into clean Markdown.

Inspired by [pyzerox](https://github.com/getomni-ai/zerox), rebuilt in Rust for speed and reliability.

## Features

- **Multi-provider** — AWS Bedrock (default), OpenAI, Anthropic, Google Gemini, Mistral AI, Azure, Ollama, or any OpenAI-compatible endpoint
- **Fast** — concurrent page processing with configurable parallelism
- **Accurate** — 10-rule post-processing pipeline fixes tables, removes hallucinations, normalises output
- **Flexible** — page selection, fidelity tiers, custom system prompts, streaming API
- **Self-contained** — pdfium (~5 MB) embedded in the binary by default; no runtime downloads, no env vars
- **Cross-platform** — macOS (arm64/x64), Linux (x64/aarch64), Windows (x64/arm64)
- **Library + CLI** — use as a Rust crate or standalone command-line tool

## Quick Start

>…
