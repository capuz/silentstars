---
repo: "Renumics/renumics-rag"
name: "renumics-rag"
description: "Visualization for a Retrieval-Augmented Generation (RAG) Assistant  🤖❤️📚"
readmeQualityOk: true
url: "https://github.com/Renumics/renumics-rag"
language: "Python"
languages: ["Python", "Jupyter Notebook"]
languagePcts: [54, 41]
topics: ["huggingface", "langchain", "openai", "retrieval-augmented-generation", "streamlit", "large-language-models", "llm", "machine-learning", "rag", "umap"]
stars: 211
forks: 42
openIssues: 2
closedIssues: 6
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2024-01-23T19:53:11Z"
lastCommitAt: "2026-11-05T11:24:03Z"
status: "thriving"
tags: []
healthScore: 91
undervaluedScore: 40
maintainers: ["druzsan", "dependabot[bot]", "markus-stoll"]
openGraphImageUrl: "https://opengraph.githubassets.com/b551579a46d8c4d777086e44a5bdf9194b079062d389ac1857c7584ab1a1b8fd/Renumics/renumics-rag"
---

# 🤖 Renumics RAG: Explore and Visualize RAG Data

Retrieval-augmented generation assistant demo using [LangChain](https://github.com/langchain-ai/langchain) and [Streamlit](https://github.com/streamlit/streamlit).

## 🛠️ Installation

Setup a virtual environment in the project directory:

```shell
python3.8 -m venv .venv
source .venv/bin/activate  # Linux/MacOS
# .\.venv\Scripts\activate.bat  # Windows CMD
# .\.venv\Scripts\activate.ps1  # PowerShell
pip install -IU pip setuptools wheel
```

Install the RAG demo package and some extra dependencies:

```shell
# For GPU support
pip install renumics-rag[all]@git+https://github.com/Renumics/renumics-rag.git torch torchvision sentence-transformers accelerate
# For CPU support
# pip install renumics-rag[all]@git+https://github.com/Renumics/renumics-rag.git torch torchvision sentence-transformers accelerate --extra-index-url https://download.pytorch.org/whl/cpu
```

## ⚒️ Local Setup

If you intend to edit, not simply use, this project, clone the entire repository:

```shell
git clone git@github.com:Renumics/renumics-rag.git
```

Then install it in editable mode.

### Via `pip`

Setup virtual environment in the project folder:…
