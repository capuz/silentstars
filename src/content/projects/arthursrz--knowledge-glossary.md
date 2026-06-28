---
repo: "ArthurSrz/knowledge_glossary"
name: "knowledge_glossary"
description: "Personal Knowledge Graph about Data "
url: "https://github.com/ArthurSrz/knowledge_glossary"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 7
forks: 2
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2025-01-14T15:09:41Z"
lastCommitAt: "2026-06-28T07:47:59Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 72
maintainers: ["ArthurSrz", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/2e73050bd53f9c2c3d89aa828166ebef8969b24094d82f3976179287bf9b5087/ArthurSrz/knowledge_glossary"
---

# Data knowledge graph

### Daily Stats

A personal knowledge graph containing **836 interconnected concepts** in data science, machine learning, and AI. Built as an [Obsidian](https://obsidian.md/) vault with typed relationships, this graph can serve as the foundation for a **data ontology**.

## Structure

Each concept is a markdown file with:
- **YAML frontmatter** defining typed relationships (`partOf`, `uses`, `subclass of`, etc.)
- **Definition/description** of the concept
- **Wiki-links** (`[[concept]]`) connecting to related terms

```yaml
# Example: Knowledge graph.md
---
uses:
  - "[[Ontology]]"
  - "[[Taxonomy]]"
subclass of:
  - "[[knowledge base]]"
  - "[[labeled directed graph]]"
studied in:
  - "[[Ontology engineering]]"
---
```

## Topics covered

- **Machine Learning**: Algorithms, model training, evaluation metrics, feature engineering
- **Data Engineering**: Pipelines, data lineage, ETL, data quality
- **NLP & LLMs**: Embeddings, RAG, transformers, prompt engineering
- **MLOps**: Model versioning, deployment, monitoring, drift detection
- **Data Privacy**: PII management, FERPA, compliance
- **Knowledge Representation**: Ontologies, taxonomies, knowledge graphs…
