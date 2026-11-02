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
stars: 37
forks: 13
openIssues: 0
closedIssues: 4
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-07-20T23:39:01Z"
lastCommitAt: "2026-11-02T15:17:23Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 43
maintainers: ["youngmki", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1307096111/f07c83b2-b10e-46d8-96b7-a050c043bf3f"
---

# Unified Knowledge Graph RAG on AWS

🇰🇷 **[한국어 README](https://github.com/awslabs/unified-kg-rag-on-aws/blob/HEAD/README.ko.md)** · 🤝 **[Contributing](https://github.com/awslabs/unified-kg-rag-on-aws/blob/HEAD/CONTRIBUTING.md)**

An AWS-native knowledge graph RAG (Retrieval-Augmented Generation) framework that turns large, multilingual document corpora into a knowledge graph on Amazon Neptune and Amazon OpenSearch Service and answers questions over it with Amazon Bedrock, using multi-hop graph traversal to reason across document boundaries. It reimplements Microsoft GraphRAG and LightRAG on one shared stack, so you choose the retrieval methodology per query rather than per deployment. Running both methodologies on one stack, triple-hybrid search, incremental indexing, and multilingual processing are deliberate enhancements over the source papers.

Read the [AWS Open Source Blog introduction](https://aws.amazon.com/blogs/opensource/unified-knowledge-graph-rag-on-aws-graphrag-and-lightrag-on-one-stack/) for an overview of the architecture, both retrieval methodologies, and benchmark results.

## Why this framework

- **Two methodologies on one AWS stack.** GraphRAG (community…
