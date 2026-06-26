---
repo: "Nikkei/fast-mia"
name: "fast-mia"
description: "A framework designed to streamline the evaluation of Membership Inference Attacks (MIA) against Large Language Models (LLMs). By leveraging vLLM, it enables fast and flexible execution and assessment of various representative MIA techniques."
url: "https://github.com/Nikkei/fast-mia"
homepage: "https://nikkei.github.io/fast-mia/"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 15
forks: 2
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 252
recentReleases: 0
createdAt: "2025-10-31T01:59:26Z"
lastCommitAt: "2026-06-26T23:40:14Z"
lastReleaseAt: "2026-02-17T11:43:05Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 85
undervaluedScore: 46
maintainers: ["upura", "hiromu166", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c6f5eda756ab70157547580888b27de3b0a0171892b50301f1e5b30987d8eda/Nikkei/fast-mia"
---

<h1 align="center">Fast-MIA</h1>

  <strong>A framework for efficiently evaluating Membership Inference Attacks (MIA) against Large Language Models (LLMs).</strong><br>
  Fast execution of representative membership inference methods, powered by vLLM.
</p>

</p>

</p>

## Features

- **Reduced Execution Time**: Efficiently runs multiple inference methods using vLLM and result caching while preserving evaluation accuracy.
- **Cross-Method Evaluation**: Compare and evaluate methods (LOSS, PPL/zlib, Min-K% Prob, etc.) under the same conditions.
- **Flexibility & Extensibility**: Easily change models, datasets, evaluation methods, and parameters using YAML configuration files.
- **Multiple Data Formats**: Supports CSV, JSON, JSONL, Parquet.
- **Hugging Face Datasets Support**: Directly load datasets from the Hugging Face Datasets library (WikiMIA, MIMIR).

### Supported Inference Methods

Currently, the following methods are supported.
The identifier is the name used in this framework's configuration.

| Type      | Method Name (identifier)     | Description                                                        |…
