---
repo: "docling-project/docling-pipelines"
name: "docling-pipelines"
description: "Scalable Ingestion pipeline"
readmeQualityOk: true
url: "https://github.com/docling-project/docling-pipelines"
homepage: "https://docling-project.github.io/docling-pipelines/"
language: "Python"
languages: ["Python"]
languagePcts: [81]
topics: ["docling", "docling-serve", "hacktoberfest", "rag-pipeline", "unstructured-data"]
stars: 47
forks: 39
openIssues: 75
closedIssues: 73
watchers: 6
contributors: 61
recentReleases: 5
createdAt: "2026-06-11T17:53:58Z"
lastCommitAt: "2026-10-29T10:37:14Z"
lastReleaseAt: "2026-10-09T08:46:31Z"
status: "thriving"
tags: ["needs_contributors", "hidden_gem", "release_machine", "fork_magnet"]
healthScore: 87
undervaluedScore: 48
maintainers: ["dependabot[bot]", "it-rec", "nsbayas"]
openGraphImageUrl: "https://opengraph.githubassets.com/079a4d30d6ccc1d149846a023f0b76514e19dc3db0e00c73608c03d953ada96b/docling-project/docling-pipelines"
discussionCount: 2
---

# Docling pipelines

## What is Docling pipelines?

Docling pipelines is an enterprise-grade document curation pipeline for Retrieval Augmented Generation (RAG) applications. It ingests data from unstructured sources, curates documents, and writes entities and vector embeddings to targets — enabling AI-ready pipelines at scale.

It connects to cloud document sources (S3, OneDrive, SharePoint, Google Drive, Box, and more) and extracts content and entities from PDF, DOCX, HTML, images, and other formats using [Docling](https://github.com/docling-project/docling). Extracted content is curated for LLMs, converted into chunks and embeddings, and stored in a vector database such as Milvus or OpenSearch.

## Features

- 📥 **[Multi-source ingestion](https://github.com/docling-project/docling-pipelines/blob/HEAD/docs/operators/ingest/ingest_source_readme.md)** — local filesystem, Amazon S3, IBM COS, SharePoint, OneDrive, Google Drive, Box, Dropbox, and web pages
- 📄 **[Document extraction](https://github.com/docling-project/docling-pipelines/blob/HEAD/docs/operators/extract/extract_operator_readme.md)** — PDF, DOCX, HTML, images, and more via Docling, with configurable OCR engines, GPU…
