---
repo: "CrispStrobe/CrispSorter"
name: "CrispSorter"
description: "AI-powered document organiser. Extracts text and/or sorts documents: Drop in a bunch of PDFs, DOCX files, or ebooks, and it extracts Document Text, identifies Title, Author, and Year, with a local or remote LLM, and moves them into folders, and/or keeps the extracted text."
readmeQualityOk: true
url: "https://github.com/CrispStrobe/CrispSorter"
language: "Rust"
languages: ["Rust", "JavaScript"]
languagePcts: [46, 37]
topics: ["documents-management", "documents-manager", "extract-text", "extractor", "llm", "mistral-rs", "mlx-lm", "ocr", "ollama", "sorter"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-03-13T14:31:41Z"
lastCommitAt: "2026-08-01T06:14:25Z"
lastReleaseAt: "2026-05-02T10:01:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 47
maintainers: ["CrispStrobe"]
openGraphImageUrl: "https://opengraph.githubassets.com/bb1b247c8e788e9734ee96560fbb259c019f294debf992fdfe361d719ec152ba/CrispStrobe/CrispSorter"
---

# CrispSorter

**AI-powered document organiser.** Drop in a folder of PDFs, DOCX files, or ebooks — CrispSorter extracts Title, Author, and Year from each one using a local LLM and moves them into a clean, consistent hierarchy like `Sorted/Author/Year/Title.pdf`. Every step runs on your device; nothing leaves your machine unless you explicitly configure a cloud provider.

Successor to BiblioForge and ZotBiblioForge — no Python, no cloud required.

---

## How it works

1. **Ingest** — drag in files or an entire folder tree
2. **Analyse** — a local (or cloud) LLM reads each document and suggests Title, Author, Year
3. **Review** — edit any field inline in the grid; preview extracted text alongside
4. **Sort** — accept suggestions and files are moved to `Sorted/{Author}/{Year}/{Title}.{ext}`

---

## Supported file types

| Format | Extraction method |
|---|---|
| PDF (digital) | pdfjs-dist (JS) or pdf-extract (native Rust) |
| PDF (scanned) | [Smart OCR pipeline](https://github.com/CrispStrobe/CrispSorter/blob/HEAD/docs/ocr-workflow.md) — per-page rasterize (PDFium) → cleanup → engine → accept-gate; or the legacy 4-tier ladder (CrispEmbed GGUF / PaddleOCR / ocrs / Tesseract) |
|…
