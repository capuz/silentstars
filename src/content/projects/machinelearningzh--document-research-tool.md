---
repo: "machinelearningZH/document-research-tool"
name: "document-research-tool"
description: "Perform intelligent research over document collections using hybrid search and LLMs."
readmeQualityOk: true
url: "https://github.com/machinelearningZH/document-research-tool"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [52, 48]
topics: ["llms", "machine-learning", "retrieval-augmented-generation", "semantic-search", "sentence-transformers", "weaviate", "openrouter", "shiny-python", "rag", "rag-chatbot"]
stars: 12
forks: 2
openIssues: 0
closedIssues: 2
watchers: 2
contributors: 1
recentReleases: 0
createdAt: "2025-05-23T08:35:56Z"
lastCommitAt: "2026-07-11T05:58:04Z"
lastReleaseAt: "2026-03-15T18:23:48Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 81
undervaluedScore: 45
maintainers: ["rnckp"]
openGraphImageUrl: "https://opengraph.githubassets.com/466f0b73d01b0df90a6a40ced72c3cdf835cbce352fc72e27e400b9e9b1f3f61/machinelearningZH/document-research-tool"
---

# Research Tool for Document Collections

**Perform intelligent research over document collections using hybrid search and LLMs.**

<details>
<summary>Contents</summary>

- [Features](#features)
- [Installation](#installation)
- [Running the App](#running-the-app)
  - [Using Your Own Data](#using-your-own-data)
- [Project Information](#project-information)
- [Project Team](#project-team)
- [Feedback and Contributing](#feedback-and-contributing)
- [License](#license)

</details>

## Features

- **Hybrid search**: Combines lexical and semantic search.
- **Retrieve with chunks, generate with documents**: Finds relevant documents via chunks but lets you chat with whole documents.
- **User control**: Choose which documents to include in the LLM context.
- **Multiple LLM support**: Easily switch between hundreds of commercial and open-source models via [OpenRouter](https://openrouter.ai/).
- **Local usage**: Uses local embedding models and can be adapted for local LLMs.

## Installation

To install the project and its dependencies:

```bash
git clone https://github.com/machinelearningZH/document-research-tool.git
cd document-research-tool

pip3 install uv
uv sync
```

## Running the App…
