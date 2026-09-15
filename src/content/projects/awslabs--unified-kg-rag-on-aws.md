---
repo: "awslabs/unified-kg-rag-on-aws"
name: "unified-kg-rag-on-aws"
description: "AWS-native knowledge graph RAG framework unifying two graph-retrieval methodologies — Microsoft GraphRAG community summarization and LightRAG dual-level keyword search — on Amazon Bedrock, Neptune, and OpenSearch. Multi-hop QA over document corpora, with incremental indexing and multilingual support."
readmeQualityOk: true
url: "https://github.com/awslabs/unified-kg-rag-on-aws"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["amazon-bedrock", "amazon-neptune", "amazon-opensearch", "aws", "generative-ai", "graphrag", "hexagonal-architecture", "incremental-indexing", "knowledge-graph", "lightrag"]
stars: 31
forks: 5
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-07-20T23:39:01Z"
lastCommitAt: "2026-09-15T08:54:28Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 36
maintainers: ["dependabot[bot]", "youngmki", "bits-bytes-nn"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1307096111/f07c83b2-b10e-46d8-96b7-a050c043bf3f"
---

# Unified Knowledge Graph RAG on AWS

🇰🇷 **[한국어 README](https://github.com/awslabs/unified-kg-rag-on-aws/blob/HEAD/README.ko.md)** · 🤝 **[Contributing](https://github.com/awslabs/unified-kg-rag-on-aws/blob/HEAD/CONTRIBUTING.md)**

</p>

An AWS-native knowledge graph RAG (Retrieval-Augmented Generation) framework that turns large multilingual document corpora into knowledge graphs and answers questions over them with multi-hop graph traversal.

It reimplements two retrieval methodologies — Microsoft's GraphRAG ("From Local to Global: A Graph RAG Approach to Query-Focused Summarization") and LightRAG ("Simple and Fast Retrieval-Augmented Generation") — over a single AWS-native stack. The two are selectable per query and share one ingestion, indexing, caching, multilingual, and hybrid (lexical + semantic + graph) search infrastructure; only the retrieval algorithm differs.

> **Highlights**
> - **Two methodologies, one stack.** GraphRAG community-summary (`auto`/`drift`/`global`/`local`/`simple`) and LightRAG dual-level keyword (`mix`/`hybrid`/`naive`), chosen per query via `search_strategy`.
> - **Incremental indexing.** The DynamoDB document-status registry (`aws.dynamodb`)…
