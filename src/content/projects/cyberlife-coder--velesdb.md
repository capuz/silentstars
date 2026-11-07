---
repo: "cyberlife-coder/VelesDB"
name: "VelesDB"
description: "The explainable, local-first memory engine for AI agents. One ~9 MB binary fuses vector + graph + columnar under VelesQL; why() returns the evidence path behind every recall. No cloud, no glue code — runs on server, browser, mobile and desktop."
readmeQualityOk: true
url: "https://github.com/cyberlife-coder/VelesDB"
homepage: "https://velesdb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [79]
topics: ["ai", "embeddings", "hnsw", "local-first", "machine-learning", "rag", "rust", "search-engine", "vector-database", "graph-database"]
stars: 102
forks: 13
openIssues: 5
closedIssues: 453
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-12-17T18:01:02Z"
lastCommitAt: "2026-11-07T10:37:14Z"
lastReleaseAt: "2026-01-01T10:39:07Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 100
undervaluedScore: 45
maintainers: ["cyberlife-coder", "github-actions[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/33d037eed070c1699f6bbe1a70f067abe97b58ca8cc4c439ecc4f6daf79791c9/cyberlife-coder/VelesDB"
discussionCount: 3
---

Local-first: nothing leaves the machine, no LLM and no API key in the memory path. Every number below links to a committed harness you can rerun.

---

## Start here — three commands that work

```bash
pip install velesdb
curl -O https://raw.githubusercontent.com/cyberlife-coder/VelesDB/main/examples/python/hello_velesdb.py
python hello_velesdb.py
```

To search your own text instead of hand-written vectors, install the opt-in local adapter (`pip install "velesdb[embed-sentence-transformers]"`) and run [`hello_velesdb_text.py`](https://github.com/cyberlife-coder/VelesDB/blob/HEAD/examples/python/hello_velesdb_text.py); its first run downloads `all-MiniLM-L6-v2`.

Expected output, byte-for-byte ([read the script](https://github.com/cyberlife-coder/VelesDB/blob/HEAD/examples/python/hello_velesdb.py) — no server, no embedding model):

```
Query: "tech"
  score=1.000  Rust 1.89 release notes
  score=0.600  AI-generated jazz: the new wave
  score=0.000  Best ramen in Tokyo

Query: "tech + music"
  score=0.990  AI-generated jazz: the new wave
  score=0.707  Rust 1.89 release notes
  score=0.707  Miles Davis discography
```

An embedding model determines the vector dimension, while your…
