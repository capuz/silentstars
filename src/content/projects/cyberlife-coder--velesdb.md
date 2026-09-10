---
repo: "cyberlife-coder/VelesDB"
name: "VelesDB"
description: "The explainable, local-first memory engine for AI agents. One ~9 MB binary fuses vector + graph + columnar under VelesQL; why() returns the evidence path behind every recall. No cloud, no glue code — runs on server, browser, mobile and desktop."
readmeQualityOk: true
url: "https://github.com/cyberlife-coder/VelesDB"
homepage: "https://velesdb.com"
language: "Rust"
languages: ["Rust"]
languagePcts: [82]
topics: ["ai", "embeddings", "hnsw", "local-first", "machine-learning", "rag", "rust", "search-engine", "vector-database", "graph-database"]
stars: 91
forks: 9
openIssues: 14
closedIssues: 353
watchers: 2
contributors: 5
recentReleases: 0
createdAt: "2025-12-17T18:01:02Z"
lastCommitAt: "2026-09-10T08:19:22Z"
lastReleaseAt: "2026-01-01T10:39:07Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 99
undervaluedScore: 41
maintainers: ["cyberlife-coder", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5ef27cd08219498eaff7481813f0086f7482d0aa443c1d71a63c24d67d0054d7/cyberlife-coder/VelesDB"
discussionCount: 3
---

</p>
<h1 align="center">VelesDB</h1>
  <strong>One ~14 MB binary fuses vector + graph + columnar under a single query language — with an agent memory that shows its evidence and a deterministic context compiler that cuts your real, billed token spend.</strong><br/>
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

To search your own text instead of hand-written vectors, install the opt-in local adapter (`pip install "velesdb[embed-sentence-transformers]"`) and run [`hello_velesdb_text.py`](https://github.com/cyberlife-coder/VelesDB/blob/HEAD/examples/python/hello_velesdb_text.py); its first run downloads `all-MiniLM-L6-v2`.

Expected output, byte-for-byte ([read the script](https://github.com/cyberlife-coder/VelesDB/blob/HEAD/examples/python/hello_velesdb.py) — no server, no embedding model):

```
Query: "tech"
  score=1.000  Rust 1.89 release notes
  score=0.600…
