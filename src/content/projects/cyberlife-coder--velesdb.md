---
repo: "cyberlife-coder/VelesDB"
name: "VelesDB"
description: "The explainable, local-first memory engine for AI agents. One ~9 MB binary fuses vector + graph + columnar under VelesQL; why() returns the evidence path behind every recall. No cloud, no glue code — runs on server, browser, mobile and desktop."
readmeQualityOk: true
url: "https://github.com/cyberlife-coder/VelesDB"
homepage: "https://velesdb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [83]
topics: ["ai", "embeddings", "hnsw", "local-first", "machine-learning", "rag", "rust", "search-engine", "vector-database", "graph-database"]
stars: 82
forks: 9
openIssues: 12
closedIssues: 275
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-12-17T18:01:02Z"
lastCommitAt: "2026-08-08T04:35:29Z"
lastReleaseAt: "2026-01-01T10:39:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 40
maintainers: ["cyberlife-coder", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/7c5c669faffd8e8cb06b171f73727ebaa40a12a6890e986b487a06af9331caa2/cyberlife-coder/VelesDB"
discussionCount: 3
---

</p>
<h1 align="center">VelesDB</h1>
  <strong>One ~10 MB binary fuses vector + graph + columnar under a single query language — with an agent memory that shows its evidence and a deterministic context compiler that cuts your real, billed token spend.</strong><br/>
  Local-first: nothing leaves the machine, no LLM and no API key in the memory path. Every number below links to a committed harness you can rerun.
</p>
</p>

---

## Start here — three commands that work

```bash
pip install velesdb
curl -O https://raw.githubusercontent.com/cyberlife-coder/VelesDB/main/examples/python/hello_velesdb.py
python hello_velesdb.py
```

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

**Give your agent a persistent memory — three more commands:**

```bash
cargo install velesdb-memory…
