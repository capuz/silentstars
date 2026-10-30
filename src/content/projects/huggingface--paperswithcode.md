---
repo: "huggingface/paperswithcode"
name: "paperswithcode"
description: "This repository hosts the code of Papers with Code, which tracks trending AI research with code, datasets and leaderboards. "
readmeQualityOk: true
url: "https://github.com/huggingface/paperswithcode"
homepage: "https://paperswithcode.co"
language: "Python"
languages: ["Python"]
languagePcts: [77]
topics: ["ai-research", "arxiv", "papers", "papers-with-code"]
stars: 287
forks: 37
openIssues: 6
closedIssues: 73
watchers: 4
contributors: 10
recentReleases: 0
createdAt: "2025-09-12T20:59:15Z"
lastCommitAt: "2026-10-30T11:03:33Z"
lastReleaseAt: "2026-07-24T10:47:37Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 98
undervaluedScore: 41
maintainers: ["NielsRogge", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/edcc05fbd2389cbfc5c5adf561d051266e1355dee827a6406f7e3672138c718d/huggingface/paperswithcode"
---

# Papers with Code

Papers with Code makes open AI research and its artifacts accessible: papers,
code, models, datasets, tasks, methods, and benchmark leaderboards. It recreates
the original paperswithcode.com, which Meta retired in 2025, and keeps it up to
date with automated imports from Hugging Face, arXiv, GitHub, and public
leaderboards.

**Live site:** https://paperswithcode.co

## Features

- **Paper catalog.** arXiv and external papers with official code, project
  pages, Hugging Face models, datasets, and Spaces, plus thumbnails, TL;DRs,
  lineage, and a Markdown reader.
- **Taxonomy.** Browsable tasks, methods, datasets, frameworks, conferences,
  organizations, and authors, with trending views.
- **Leaderboards.** Paper-native evaluation results on benchmarks, plus
  scheduled syncs of external leaderboards.
- **Search.** Hybrid lexical (`pg_trgm`) and semantic (`pgvector`) paper
  retrieval.
- **Public API.** A REST API under `/api/v1/` that stays compatible with the
  original [Papers with Code API client](https://github.com/paperswithcode/paperswithcode-client).
  OpenAPI docs are served at `/docs`.
- **Research chat (optional).** An assistant grounded in the…
