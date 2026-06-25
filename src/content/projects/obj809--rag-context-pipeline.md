---
repo: "obj809/rag-context-pipeline"
name: "rag-context-pipeline"
description: "RAG pipeline answering page-cited questions over a PDF report with local embeddings and vector search. FastAPI | LangChain | pgvector"
url: "https://github.com/obj809/rag-context-pipeline"
language: "Python"
languages: ["Python"]
languagePcts: [89]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-02-08T09:50:08Z"
lastCommitAt: "2026-06-25T02:06:43Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 32
maintainers: ["obj809"]
openGraphImageUrl: "https://opengraph.githubassets.com/28500fddc3424258eaad1c28ddd62c1d8f66ae4d62a25ebf6a64241b330f87e0/obj809/rag-context-pipeline"
---

# RAG Context Pipeline

A Retrieval-Augmented Generation (RAG) pipeline over the three-volume
Environment Protection and Biodiversity Conservation Act 1999. Loads the PDFs,
splits them into chunks, embeds each chunk locally, stores the vectors in
Postgres + pgvector, and answers questions by retrieving the most relevant chunks
and sending them to an OpenAI model, with answers that cite the volume and page
each fact came from.

This umbrella project has been split into **four independent repos**, one per
concern, each nested here as its own git repo (with its own remote). The umbrella
itself now holds only this documentation; all code lives in the sub-repos.

## Repositories

| Repo | Owns | Entry point |
|---|---|---|
| [`vector-db-rag-context-pipeline/`](https://github.com/obj809/vector-db-rag-context-pipeline) | Postgres + pgvector (Docker) | `docker compose up -d` |
| [`indexing-rag-context-pipeline/`](https://github.com/obj809/indexing-rag-context-pipeline) | PDFs → chunks → embeddings → `chunks` table; the source PDFs | `python build_index.py` |
| [`engine-rag-context-pipeline/`](https://github.com/obj809/engine-rag-context-pipeline) | query engine (retriever + LCEL chain),…
