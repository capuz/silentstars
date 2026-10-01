---
repo: "simphotonics/directed_graph"
name: "directed_graph"
description: "Dart implementation of a directed graphs and graph crawler. Provides algorithms for sorting vertices, retrieving a topological ordering and detecting cycles."
readmeQualityOk: true
url: "https://github.com/simphotonics/directed_graph"
homepage: "https://pub.dev/packages/directed_graph"
language: "Dart"
languages: ["Dart"]
languagePcts: [99]
topics: ["dart", "graph", "directed-graph", "directed-acyclic-graph", "vertex", "vertices", "topological-sort", "sorting", "graph-theory", "shortest-paths"]
stars: 64
forks: 4
openIssues: 0
closedIssues: 8
watchers: 3
contributors: 2
recentReleases: 0
createdAt: "2020-03-31T17:23:38Z"
lastCommitAt: "2026-10-01T10:23:53Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 81
undervaluedScore: 45
maintainers: ["simphotonics"]
openGraphImageUrl: "https://opengraph.githubassets.com/e5e07bdb279e8aea1666278bdec244c59a0d1836e9a3bf61c6349f233d2754f1/simphotonics/directed_graph"
---

# Directed Graph

## Introduction

An integral part of storing, manipulating, and retrieving numerical data are *data structures* or as they are called in Dart: [collections].
Arguably the most common data structure is the *list*. It enables efficient storage and retrieval of sequential data that can be associated with an index.

A more general (non-linear) data structure where an element may be connected to one, several, or none of the other elements is called a *graph*.

Graphs are useful when keeping track of elements that are linked to or are dependent on other elements.
Examples include: network connections, links in a document pointing to other paragraphs or documents,
foreign keys in a relational database, file dependencies in a build system, etc.

The package [`directed_graph`][directed_graph] contains the graphs:
[`DirectedGraph`][DirectedGraph], [`WeightedDirectedGraph`][WeightedDirectedGraph],
[`BidirectedGraph`][BidirectedGraph], [`UnmodifiableDirectedGraph`][UnmodifiableDirectedGraph],
[`DirectedMultiGraph`][DirectedMultiGraph], and [`WeightedDirectedMultiGraph`][WeightedDirectedMultiGraph].

It includes methods that enable:
* adding/removing vertices and edges,
*…
