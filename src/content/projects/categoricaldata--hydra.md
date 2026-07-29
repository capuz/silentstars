---
repo: "CategoricalData/hydra"
name: "hydra"
description: "Graph programming language"
readmeQualityOk: true
url: "https://github.com/CategoricalData/hydra"
language: "Haskell"
languages: ["Haskell"]
languagePcts: [49]
stars: 186
forks: 25
openIssues: 87
closedIssues: 505
watchers: 12
contributors: 9
recentReleases: 0
createdAt: "2021-09-18T07:47:02Z"
lastCommitAt: "2026-07-29T06:14:52Z"
status: "thriving"
tags: ["solo_builder"]
healthScore: 97
undervaluedScore: 41
maintainers: ["joshsh"]
openGraphImageUrl: "https://opengraph.githubassets.com/253011b3f201e9259442856c3fdca0d3be0eb69f8d06b9526ff9ac7ee2c4c381/CategoricalData/hydra"
---

# Hydra

Hydra is a strongly typed intermediate language for data, schemas, and code.
Programs and domain models written in Hydra map seamlessly to major programming languages
like Java, Scala, and Python, to data exchange formats like Protobuf, Avro, and JSON,
and to graph data models like RDF and labeled property graphs.

Hydra has been used in production at Microsoft for data modeling, validation, and transforms;
its predecessor [Dragon](https://www.uber.com/blog/dragon-schema-integration-at-uber-scale/)
drove data integration and graph construction at Uber.
Expressive enough to define and compile its own kernel —
the core types, functions, and tools which make up the language itself —
Hydra is built on the [LambdaGraph](https://bit.ly/lg-kgc2024) data model,
which establishes an isomorphism between labeled [hypergraphs](https://en.wikipedia.org/wiki/Hypergraph)
and [typed lambda calculus](https://en.wikipedia.org/wiki/Typed_lambda_calculus):
in Hydra, programs are graphs, and graphs are programs
(see [The LambdaGraph isomorphism](https://github.com/CategoricalData/hydra/wiki/Concepts#the-lambdagraph-isomorphism)).

## Use cases

* **Translingual programming**. Write a program…
