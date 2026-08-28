---
repo: "L-Defraiteur/lucivy"
name: "lucivy"
description: "  BM25 full-text search that actually finds what you type — fuzzy substrings across   token boundaries, accent-insensitive, with byte-offset highlights. Python + Rust,   built for hybrid search with vector DBs."
readmeQualityOk: true
url: "https://github.com/L-Defraiteur/lucivy"
language: "Rust"
languages: ["Rust"]
languagePcts: [95]
stars: 43
forks: 3
openIssues: 6
closedIssues: 0
watchers: 1
contributors: 1
recentReleases: 5
createdAt: "2026-02-07T14:23:36Z"
lastCommitAt: "2026-08-28T14:22:46Z"
lastReleaseAt: "2026-08-28T13:32:04Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 70
undervaluedScore: 34
maintainers: []
openGraphImageUrl: "https://opengraph.githubassets.com/0c52c412b3b535dbd63cd5fcaaa1623775c9617155f7d63410bb2fdcc749ce27/L-Defraiteur/lucivy"
---

# lucivy 3.0.8

BM25 full-text search engine with substring matching, fuzzy search and regex — all
across token boundaries, with exact highlights — in Rust, Python, Node.js, C++ and
the browser.

Built for code search, technical documentation, and as the BM25 side of a vector
database. Everything is MIT.

[**Try the live playground**](https://l-defraiteur.github.io/lucivy/) — it clones
lucivy's own source from GitHub and indexes it in your browser in a few seconds.

*Nothing is pre-recorded in that terminal: it is the page doing the work in a
tab. The last query is typed by hand — `--fuzzy 2 "ShardedHandel"` finds
`ShardedHandle` in 51 ms.*

### What's new in 3.0.0

- **SFX v3** — a new index format: chunked tokens with overlap, a word partition,
  a sibling table, and **exact byte spans** on every query mode, verified one by
  one against `grep` on 50 000 kernel files.
- **Boolean query syntax** (`parse`): `kmalloc AND NOT kfree`, `"exact phrase"`,
  `+must -mustnot`, parentheses — lowered to substring queries with highlights.
- **Fuzzy by Levenshtein or Jaro-Winkler** (`fuzzy_metric`, `min_similarity`):
  a typo at the end of a word now ranks above one at its start.
- **Query…
