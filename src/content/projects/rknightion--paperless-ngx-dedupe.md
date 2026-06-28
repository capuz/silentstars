---
repo: "rknightion/paperless-ngx-dedupe"
name: "paperless-ngx-dedupe"
description: "Helps dedupe your paperless-ngx instance"
url: "https://github.com/rknightion/paperless-ngx-dedupe"
language: "TypeScript"
languages: ["TypeScript", "Svelte"]
languagePcts: [68, 31]
topics: ["document", "documentmanagement", "management", "paperless", "paperless-ng", "paperless-ngx", "paperless-ngx-docker", "document-classification", "document-processing", "paperless-ai"]
stars: 12
forks: 0
openIssues: 1
closedIssues: 6
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-08-15T07:37:36Z"
lastCommitAt: "2026-06-28T01:46:13Z"
lastReleaseAt: "2026-03-24T18:10:11Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 93
undervaluedScore: 60
maintainers: ["rknightion-renovate[bot]", "rknightion"]
openGraphImageUrl: "https://opengraph.githubassets.com/481a09bd0a9e3feabc4f36fbbbb619e4f61f850c6bf09d69ec317a117c1eb03c/rknightion/paperless-ngx-dedupe"
discussionCount: 1
---

# Paperless NGX Dedupe

A document deduplication and AI-powered metadata companion for [Paperless-NGX](https://github.com/paperless-ngx/paperless-ngx). It syncs your documents, identifies duplicates using MinHash/LSH algorithms, extracts metadata with LLMs, and lets you ask questions about your document library — all through a web UI and REST API.

## Features

### Deduplication

- **Intelligent duplicate detection** -- MinHash signatures + Locality-Sensitive Hashing for efficient O(n log n) candidate discovery
- **Similarity scoring** -- weighted Jaccard similarity and fuzzy text matching with a discriminative penalty that down-scores pairs sharing only boilerplate text
- **Side-by-side review** -- compare duplicate documents with OCR text diff and resolve them individually or in bulk

### AI Metadata Extraction

- **Automatic classification** -- extract correspondents, document types, and tags from document text using OpenAI models
- **Confidence scoring** -- per-field confidence scores with supporting evidence snippets so you can review before applying
- **Reference-aware** -- optionally feeds your existing correspondents, document types, and tags to the LLM to avoid creating…
