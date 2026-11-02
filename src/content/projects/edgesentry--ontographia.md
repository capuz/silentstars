---
repo: "edgesentry/ontographia"
name: "ontographia"
description: "Any ontology in, Cypher 25 out — deterministically. Multi-format ontology ingestion (RDF, OWL, LinkML, YAML, OBO) → Canonical Ontology Model → Intent JSON validation → parameter-bound Cypher 25 for Neo4j 2025+. Rust core, Python & Go bindings, CLI. LLMs emit schema-constrained Intent, never raw Cypher."
readmeQualityOk: true
url: "https://github.com/edgesentry/ontographia"
homepage: "https://edgesentry.github.io/ontographia/"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [35, 31]
stars: 8
forks: 0
openIssues: 15
closedIssues: 29
watchers: 1
contributors: 2
recentReleases: 9
createdAt: "2026-08-29T11:38:57Z"
lastCommitAt: "2026-11-02T13:38:12Z"
lastReleaseAt: "2026-11-01T04:46:22Z"
status: "thriving"
tags: ["hidden_gem", "release_machine", "under_pressure"]
healthScore: 90
undervaluedScore: 57
maintainers: ["yohei1126", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/acbdecb6d1449c4289a573fecabb07c119312900f3075e977e1549cc99521dff/edgesentry/ontographia"
discussionCount: 0
---

# Ontographia

**Any ontology in, Cypher 25 out — deterministically.**

Ontographia turns **ontology definitions** + **Intent JSON** into **parameter-bound Cypher** for Neo4j. The LLM (or a human) produces Intent; the Rust core validates it against the ontology and emits the query. It does not ask models to write Cypher.

```
Ontology → COM → validate(Intent) → AST → Cypher 25 + $params
```

## Start here

| Audience | Go to |
|----------|--------|
| **Humans (install, guides, Neo4j)** | Published docs: [edgesentry.github.io/ontographia](https://edgesentry.github.io/ontographia/) |
| **Overview & golden rules** | [docs/index.md](https://github.com/edgesentry/ontographia/blob/HEAD/docs/index.md) |
| **How the pipeline works** | [docs/architecture.md](https://github.com/edgesentry/ontographia/blob/HEAD/docs/architecture.md) |
| **AI coding agents** | [AGENTS.md](https://github.com/edgesentry/ontographia/blob/HEAD/AGENTS.md) (routes to `docs/`; do not treat this README as the manual) |
| **Roadmap** | [docs/roadmap.md](https://github.com/edgesentry/ontographia/blob/HEAD/docs/roadmap.md) |

## Docs map (short)

| Need | Doc |
|------|-----|
| Install (CLI / Rust / Python / Go) |…
