---
repo: "zotero-rag/zotero-rag"
name: "zotero-rag"
description: "A RAG-based Q&A and search system for Zotero"
readmeQualityOk: true
url: "https://github.com/zotero-rag/zotero-rag"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
stars: 18
forks: 3
openIssues: 66
closedIssues: 62
watchers: 1
contributors: 2
recentReleases: 1
createdAt: "2024-10-26T03:20:15Z"
lastCommitAt: "2026-07-22T06:14:35Z"
lastReleaseAt: "2026-06-28T08:26:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "under_pressure"]
healthScore: 88
undervaluedScore: 62
maintainers: ["yrahul3910"]
openGraphImageUrl: "https://opengraph.githubassets.com/3349d9011cc3cb2d7122dc843951d7c7b7ebff63f08420bb6dffc21476beea70/zotero-rag/zotero-rag"
---

# Zotero RAG QA System

A Rust-based system for answering questions from your Zotero library using Retrieval-Augmented Generation (RAG).

## Overview

This project provides a command-line interface for querying your Zotero library with natural language questions. It uses RAG to search and retrieve relevant information from your academic papers, then generates answers grounded in your library content.

### Features

* Extracts text from PDFs and ignores tables/figures (they're unlikely to have useful context for LLMs)
* Support for OpenAI, Ollama, Anthropic, Gemini, and OpenRouter models for text generation, Cohere, Gemini, Voyage AI, and ZeroEntropy models for embedding, and Cohere, Voyage AI, and ZeroEntropy models for reranking.
* Locally-stored embeddings using LanceDB.
* Search-only mode retrieves papers

### Limitations

* The equation parsing currently leaves a lot to be desired. Specifically, the most likely cases to fail involve equations with the `bmatrix`, `cases`, and `align` environments. This part is particularly under active work, but this is the most likely place LLMs will make mistakes due to the PDF parsing not being particularly great for this yet. However,…
