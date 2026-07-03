---
repo: "berntpopp/phentrieve"
name: "phentrieve"
description: "AI-powered system for mapping clinical text to Human Phenotype Ontology (HPO) terms using Retrieval-Augmented Generation (RAG). Features Python CLI/library, FastAPI backend, and Vue.js frontend for interactive phenotype extraction from medical texts."
url: "https://github.com/berntpopp/phentrieve"
homepage: "https://phentrieve.kidney-genetics.org/"
language: "Python"
languages: ["Python"]
languagePcts: [83]
topics: ["artificial-intelligence", "biomedical-informatics", "clinical-text", "fastapi", "healthcare", "hpo", "machine-learning", "medical-nlp", "phenotype-ontology", "python"]
stars: 6
forks: 0
openIssues: 10
closedIssues: 69
watchers: 1
contributors: 3
recentReleases: 7
createdAt: "2025-04-24T14:13:09Z"
lastCommitAt: "2026-07-03T06:23:38Z"
lastReleaseAt: "2026-04-19T17:13:46Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 96
undervaluedScore: 87
maintainers: ["berntpopp"]
openGraphImageUrl: "https://opengraph.githubassets.com/3119eecb5967e5b59ff0e385a12fd72ccfb6b98bb82ee439233af08ff6742568/berntpopp/phentrieve"
---

# Phentrieve

Phentrieve is an advanced AI-powered research system for mapping phenotype descriptions to Human Phenotype Ontology (HPO) terms using a Retrieval-Augmented Generation (RAG) approach. It supports multiple languages and offers robust tools for benchmarking, text processing, and HPO term retrieval.

**Research use only:** Phentrieve is not a medical device and must not be used for diagnosis, treatment selection, patient triage, or other clinical decision-making. See the [Research Use Only guide](docs/compliance/research-use.md) and [Privacy and LLM Processing](docs/compliance/privacy-and-llm-processing.md).

**For comprehensive documentation, please visit the [Phentrieve Documentation Site](https://berntpopp.github.io/phentrieve/).**

## Key Features

* Multilingual HPO term mapping using state-of-the-art embedding models
* Advanced text processing pipeline including semantic chunking and assertion detection
* Optional adaptive re-chunking improves recall on multi-concept clinical sentences (`--adaptive-rechunking`). See [docs/user-guide/adaptive-rechunking.md](docs/user-guide/adaptive-rechunking.md).
* Extensive benchmarking framework for model evaluation and…
