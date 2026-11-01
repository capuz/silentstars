---
repo: "growgraph/ontocast"
name: "ontocast"
description: "Agentic Ontology Assisted Framework for Semantic Triple Extraction"
readmeQualityOk: true
url: "https://github.com/growgraph/ontocast"
homepage: "https://growgraph.github.io/ontocast/"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["agentic-framework", "knowledge-graph", "ontology", "rdf", "semantic"]
stars: 252
forks: 27
openIssues: 10
closedIssues: 44
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2025-03-31T20:36:17Z"
lastCommitAt: "2026-11-01T22:59:15Z"
lastReleaseAt: "2026-03-10T01:16:29Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 89
undervaluedScore: 29
maintainers: ["alexander-belikov", "guillaumematheron"]
openGraphImageUrl: "https://opengraph.githubassets.com/1ceb0e0ffbd077c44dae0fef61e2836b2dfad8fea5e0281c9426ad76a3ac08de/growgraph/ontocast"
---

# OntoCast <img src="https://raw.githubusercontent.com/growgraph/ontocast/refs/heads/main/docs/assets/logo.png" alt="OntoCast logo" height="32" width="32"/>

**Ontology-guided extraction of RDF knowledge graphs from documents.**

OntoCast reads documents and writes an RDF knowledge graph: an ontology that
describes the domain, and the facts the documents state in its terms. Give it
your ontologies and it extracts facts against them; give it none and it builds
one as it reads. Run it as an HTTP service, as a batch command, or inside your
own LangChain or LangGraph agent.

**Documentation:** [growgraph.github.io/ontocast](https://growgraph.github.io/ontocast/)

## Features

- **Ontology and facts together.** Each part of a document goes through a
  language model in a render-and-critique loop, in parallel; ontology changes
  are merged, versioned and checked before facts are extracted against them.
- **Patches, not rewrites.** The model emits insert/delete updates to a graph
  rather than regenerating it.
- **Entity disambiguation.** Mentions of the same entity across a document are
  merged into one.
- **Validation.** Deterministic checks, SHACL shapes, and repairs that need no…
