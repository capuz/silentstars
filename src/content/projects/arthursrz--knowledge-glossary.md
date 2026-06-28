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
lastCommitAt: "2026-06-28T06:57:30Z"
status: "thriving"
tags: []
healthScore: 90
undervaluedScore: 72
maintainers: ["ArthurSrz", "actions-user"]
openGraphImageUrl: "https://opengraph.githubassets.com/f9895948f47aba4a2a13f19b51a32786431d9c25e03ea5322a2e363e2247ebdc/ArthurSrz/knowledge_glossary"
---

# Data knowledge graph

### Daily Stats

A personal knowledge graph containing **803 interconnected concepts** in data science, machine learning, and AI. Built as an [Obsidian](https://obsidian.md/) vault with typed relationships, this graph can serve as the foundation for a **data ontology**.

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
