---
repo: "ShahzaibAhmad05/NextSearch-api"
name: "NextSearch-api"
description: "A Search Engine for cord19 Research Articles based on Google's search architecture, built with C++ across 1M+ articles"
readmeQualityOk: true
url: "https://github.com/ShahzaibAhmad05/NextSearch-api"
homepage: "https://NextSearch.vercel.app"
language: "C++"
languages: ["C++"]
languagePcts: [99]
topics: ["cpp", "forward-index", "inverted-index", "lexicon", "search-engine", "search-engine-optimization", "searching-algorithms", "search-engines"]
stars: 9
forks: 0
openIssues: 5
closedIssues: 44
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-11-18T16:05:52Z"
lastCommitAt: "2026-11-15T11:22:02Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 88
undervaluedScore: 37
maintainers: ["muhammadali182-q"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1099138883/ea6ed5ce-f7a8-46fb-a0a5-8f93c0e891ae"
---

# NextSearch API

A high-performance C++ search engine API designed for large-scale document collections (e.g., CORD-19 research papers). Features BM25 ranking, autocomplete, AI-powered overviews, and lazy-loaded metadata for efficient memory usage.

---

## Overview

**NextSearch** is a scalable search engine built in C++ using:
- **Inverted index** with BM25 scoring for relevance ranking
- **Forward index** for fast document retrieval
- **Lexicon-based autocomplete** with document frequency ranking
- **Lazy metadata loading** (loads only ~16 bytes per doc at startup)
- **LRU caching** for search results and AI responses (no expiry - infinite cache)
- **Azure OpenAI integration** for AI overviews and document summaries

---

## Data Storage

### Index Files (in `INDEX_DIR/`)
- `manifest.bin` - List of segment names
- `segments/seg_XXXXXX/` - Individual index segments containing:
  - `lexicon.bin` - Term dictionary with posting list offsets
  - `postings.bin` - Document IDs and term frequencies
  - `docids.bin` - Segment-local document IDs
  - `forward.bin` - Document offsets into metadata CSV

### Metadata
- `metadata.csv` - Document metadata (title, author, abstract, URL, etc.)…
