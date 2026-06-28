---
repo: "nvisycom/elide"
name: "elide"
description: "Composable redaction framework for building PII detection and removal pipelines over unstructured data. Built-in recognizers, custom rules, and ML models to analyze and anonymize multimodal documents."
url: "https://github.com/nvisycom/elide"
homepage: "https://nvisy.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [100]
topics: ["automation", "nvisy", "privacy", "processing", "redaction", "data-masking", "data-privacy", "de-identification", "pii", "pii-detection"]
stars: 5
forks: 0
openIssues: 57
closedIssues: 7
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-06-16T21:10:08Z"
lastCommitAt: "2026-06-28T01:45:08Z"
status: "thriving"
tags: ["solo_builder", "needs_contributors"]
healthScore: 82
undervaluedScore: 41
maintainers: ["martsokha", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/ff71ea7db1748e43e0ea89920e11b7e5223ebadd87f608cfcbfe1f5ea7239016/nvisycom/elide"
---

# Elide

Composable, multimodal toolkit for detecting and redacting sensitive data.

Elide is a Rust toolkit for finding and removing PII and PHI from text, images,
audio, and tabular data. It provides the building blocks (recognizers,
deduplication, validation, redaction operators, and format codecs) that a
consumer wires into their own document-processing flow. Elide is the toolkit
layer only; the orchestrating runtime and gateway server live in separate
projects.

> [!WARNING]
> **Active development: API not stable.** This project is under active
> development. Public APIs, configuration shapes, and on-disk formats may change
> without notice between releases. Pin a specific commit if you depend on this
> in production.

## Features

- **Multimodal**: detect and redact across text, images, audio, and tabular data
  through one entity model; OCR and speech-to-text lift images and audio into a
  text-recognizable surface so the same recognizers apply
- **Pattern detection**: regex, dictionary, and checksum recognizers find
  structured PII and PHI across many common formats and jurisdictions
- **Model-driven recognition**: NER with language detection, and LLM/VLM
  recognizers…
