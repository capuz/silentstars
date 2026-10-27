---
repo: "Jelly-RDF/pyjelly"
name: "pyjelly"
description: "Fast RDF serialization for Python"
readmeQualityOk: true
url: "https://github.com/Jelly-RDF/pyjelly"
homepage: "https://w3id.org/jelly/pyjelly"
language: "Python"
languages: ["Python"]
languagePcts: [100]
topics: ["jelly-rdf", "python", "rdf", "rdflib", "semantic-web", "serialization"]
stars: 22
forks: 6
openIssues: 3
closedIssues: 115
watchers: 3
contributors: 7
recentReleases: 0
createdAt: "2025-03-11T14:14:07Z"
lastCommitAt: "2026-10-27T09:17:12Z"
lastReleaseAt: "2025-07-30T19:09:03Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 91
undervaluedScore: 61
maintainers: ["Ostrzyciel", "dependabot[bot]", "Ja-Gk-00"]
openGraphImageUrl: "https://opengraph.githubassets.com/3b0bfe8206d1bece88dd79d1760421aca42d3328c49d43b7836ab1e64ee4d29a/Jelly-RDF/pyjelly"
---

# pyjelly

**pyjelly** is a Python implementation of [Jelly](http://w3id.org/jelly), a high-performance binary serialization format and streaming protocol for RDF knowledge graphs.

**Documentation, usage guide and more: https://w3id.org/jelly/pyjelly**

## Features

- **Fast reading and writing** of RDF knowledge graphs in the [Jelly format](http://w3id.org/jelly).
- Reading and writing **[SPARQL query results](https://w3id.org/jelly/pyjelly/dev/sparql)** in [Jelly-SPARQL](https://w3id.org/jelly/dev/specification/sparql), with rdflib or the generic API.
- **Standalone [generic API](https://w3id.org/jelly/pyjelly/dev/generic-sink)** with no third-party dependencies, allowing for:
    - Serialization and parsing of statements to and from Jelly files.
    - Parsing and serializing streams of graphs and statements.
- Precise control over **serialization options, framing and compression**.
- **Seamless** integration with: 
    - **[rdflib](https://w3id.org/jelly/pyjelly/dev/getting-started)**
    - **[RDFLib-Neo4j](https://w3id.org/jelly/pyjelly/dev/rdflib-neo4j-integration)**
    - **[NetworkX](https://w3id.org/jelly/pyjelly/dev/networkx-integration)**
- **Stream processing support**…
