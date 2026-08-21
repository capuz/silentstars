---
repo: "huypham-0607/startorch"
name: "startorch"
description: "Literature retrieval engine using BM25 and Personalized PageRank over the OpenAlex citation graph."
readmeQualityOk: true
url: "https://github.com/huypham-0607/startorch"
language: "C++"
languages: ["C++", "Python"]
languagePcts: [64, 27]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 1
recentReleases: 0
createdAt: "2026-07-07T18:55:32Z"
lastCommitAt: "2026-08-21T04:10:42Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 79
undervaluedScore: 43
maintainers: ["huypham-0607"]
openGraphImageUrl: "https://opengraph.githubassets.com/4480fbae05f8d56a8bbd1f6ac72becf1d1c104ff1443a6501325b47ec23b5f5e/huypham-0607/startorch"
---

# Startorch

**Startorch** is a literature search engine built around lexical retrieval and citation-graph ranking.

It currently targets the OpenAlex English-only Works corpus: 345M+ papers. The retrieval layer uses BM25 with a custom Block-Max WAND implementation, while the graph side will use Global PageRank and approximate Personalized PageRank to rerank retrieved documents.

The long-term goal is to support sub-second top-k retrieval over the full corpus while using the citation graph as an additional ranking signal, all while keeping RAM usage manageable for a personal device.

## Why this project?

Startorch is an experiment in using the citation graph more directly for research artifact retrieval.

The main question is whether a combination of:

- Lexical relevance,
- Global graph authority, and
- Query-specific graph authority

can produce useful literature recommendations while remaining efficient enough to run over a graph with hundreds of millions of papers.

The project is also an excuse to implement the underlying systems rather than treating retrieval and ranking as black boxes. In particular, the current work focuses on compressed inverted indexes, dynamic pruning,…
