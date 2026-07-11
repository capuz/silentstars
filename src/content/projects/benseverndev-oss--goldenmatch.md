---
repo: "benseverndev-oss/goldenmatch"
name: "goldenmatch"
description: "Zero-config entity resolution & record linkage. The zero-tuning Fellegi-Sunter path beats hand-tuned Splink head-to-head and scales from a CSV to a verified 100M-row dedupe in 9.2 min. Fuzzy/exact/probabilistic + PPRL + LLM + identity graph. Python + edge-safe TypeScript (WASM), SQL-native in Postgres & DuckDB, MCP/REST + dbt/Airflow."
readmeQualityOk: true
url: "https://github.com/benseverndev-oss/goldenmatch"
homepage: "https://docs.bensevern.dev/"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [58, 32]
topics: ["data-engineering", "data-quality", "deduplication", "entity-resolution", "fuzzy-matching", "llm", "polars", "python", "record-linkage", "pprl"]
stars: 121
forks: 13
openIssues: 35
closedIssues: 130
watchers: 1
contributors: 5
recentReleases: 0
createdAt: "2026-03-16T20:13:08Z"
lastCommitAt: "2026-07-11T05:47:10Z"
lastReleaseAt: "2026-03-25T19:12:41Z"
status: "thriving"
tags: ["solo_builder", "funded", "community_hub"]
healthScore: 96
undervaluedScore: 32
maintainers: ["benzsevern", "dependabot[bot]"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1183640892/7b67c78a-7f1f-466e-9d0f-39def049a62d"
fundingLinks: ["GITHUB:https://github.com/benzsevern"]
discussionCount: 21
---

# Golden Suite

**Zero-config entity resolution that scales — dedupe & match messy records from a laptop CSV to 100M+ rows. No training data, no tuning.**

The headline package, **GoldenMatch**, does the matching — fuzzy + exact + probabilistic (Fellegi-Sunter) + LLM — and **beats hand-tuned Splink out of the box** (96.4% F1 on DBLP-ACM), identical in Python, edge-safe TypeScript, and SQL. It even runs on **unstructured input**: extract records from PDFs and images, then dedupe. Around it sits a full data-quality suite — Check, Flow, Analysis, Pipe, InferMap — with a Rust layer for Postgres / DuckDB and optional WebAssembly acceleration behind the TS ports.

**Made for GraphRAG, too** — entity resolution is the stage knowledge-graph pipelines do *worst* (the same entity scatters across documents as duplicate surface forms). GoldenMatch drops into **neo4j-graphrag / LlamaIndex / Graphiti** as the resolution stage ([`goldenmatch-kg`](https://github.com/benseverndev-oss/goldenmatch/blob/HEAD/packages/python/goldenmatch-kg/README.md)), or builds a KG straight from text with that resolution at its core…
