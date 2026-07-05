---
repo: "SteveHedden/open-knowledge-graphs"
name: "open-knowledge-graphs"
description: "Open Knowledge Graph Resources is a static, daily-refreshed catalog of ontology and semantic software records sourced from Wikidata. It publishes both machine-readable artifacts (Turtle + JSON) and a searchable browser UI."
readmeQualityOk: true
url: "https://github.com/SteveHedden/open-knowledge-graphs"
homepage: "https://openknowledgegraphs.com"
language: "HTML"
languages: ["HTML"]
languagePcts: [96]
stars: 64
forks: 11
openIssues: 7
closedIssues: 9
watchers: 3
contributors: 3
recentReleases: 1
createdAt: "2026-01-01T21:09:42Z"
lastCommitAt: "2026-07-05T20:16:29Z"
lastReleaseAt: "2026-07-03T21:43:05Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 91
undervaluedScore: 36
maintainers: ["github-actions[bot]", "SteveHedden"]
openGraphImageUrl: "https://opengraph.githubassets.com/9045216223e7869a4c861bccf2bc3ac9104fad303d6cb82d49aae2ddf9e87346/SteveHedden/open-knowledge-graphs"
---

# Open Knowledge Graphs

Open Knowledge Graphs is a static, daily-refreshed catalog of ontology and semantic software records sourced from Wikidata. It publishes both machine-readable artifacts (Turtle + JSON) and a searchable browser UI.

## Live Links

- Site: https://openknowledgegraphs.com/
- Semantic Search API: https://api.openknowledgegraphs.com/
- Ontology schema (Turtle): https://openknowledgegraphs.com/ontology.ttl
- Ontologies dataset (Turtle): https://openknowledgegraphs.com/data/ontologies.ttl
- Ontologies dataset (JSON): https://openknowledgegraphs.com/data/ontologies.json
- Software dataset (Turtle): https://openknowledgegraphs.com/data/software.ttl
- Software dataset (JSON): https://openknowledgegraphs.com/data/software.json

## API

Semantic search over the full catalog.

```
GET https://api.openknowledgegraphs.com/search?q=movie+ontology&limit=5
GET https://api.openknowledgegraphs.com/ontologies?q=healthcare+vocabulary
GET https://api.openknowledgegraphs.com/software?q=rdf+triplestore
```

**Parameters:** `q` (required), `category`, `type` (ontology|software), `limit` (default 20, max 100)

**Categories:** Life Sciences & Healthcare, Geospatial, Government &…
