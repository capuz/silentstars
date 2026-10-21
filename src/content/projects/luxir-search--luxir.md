---
repo: "luxir-search/luxir"
name: "luxir"
description: "search at the speed of light"
readmeQualityOk: true
url: "https://github.com/luxir-search/luxir"
homepage: "https://luxir.org"
language: "C++"
languages: ["C++"]
languagePcts: [99]
stars: 161
forks: 16
openIssues: 24
closedIssues: 3
watchers: 6
contributors: 6
recentReleases: 1
createdAt: "2026-09-08T16:50:35Z"
lastCommitAt: "2026-10-21T21:14:43Z"
lastReleaseAt: "2026-09-21T14:00:21Z"
status: "newborn"
tags: []
healthScore: 72
undervaluedScore: 26
maintainers: ["yonik", "synhershko"]
openGraphImageUrl: "https://opengraph.githubassets.com/79fad6d895f63b08f2560150b3f323d5381eba6a01735b2765885cbdbf3cbf36/luxir-search/luxir"
discussionCount: 2
---

# Luxir

Luxir is a high-performance hybrid search engine: full-text relevance, vector
similarity, faceting, and analytics in one native-code core. Queries, filters,
facets, metrics, and rank fusion are one composable request tree, served over
an HTTP/JSON API for humans and a typed streaming gRPC API for applications.

```http
POST /collections/books/_search
Content-Type: application/json

{"query":"title_t:(dune OR messiah) AND year_i:>=1965",
 "fields":["id","title_t","year_i"],"count_limit":-1}
```

```json
{
  "found": 2,
  "docs": [
    {
      "id": "b1",
      "title_t": "Dune",
      "year_i": 1965
    },
    {
      "id": "b2",
      "title_t": "Dune Messiah",
      "year_i": 1969
    }
  ]
}
```

No collection creation, schema, or client library is required to get
there. Built-in field templates provide useful defaults. Templates also
handle new field names as your data grows, and can be combined with explicit
field definitions. A write to a new collection creates it, and a
terse request can always be echoed back in its canonical form.

## Why Luxir

Luxir is a new search engine from Yonik Seeley, the original author of Apache
Solr and a longtime Lucene/Solr committer.…
