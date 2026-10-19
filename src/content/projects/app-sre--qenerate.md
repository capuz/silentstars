---
repo: "app-sre/qenerate"
name: "qenerate"
description: "Code Generator for GraphQL Query and Fragment Data Classes"
readmeQualityOk: true
url: "https://github.com/app-sre/qenerate"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["code-generator", "python", "graphql"]
stars: 14
forks: 8
openIssues: 2
closedIssues: 3
watchers: 1
contributors: 8
recentReleases: 0
createdAt: "2022-06-16T11:49:47Z"
lastCommitAt: "2026-10-19T09:08:24Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "fork_magnet"]
healthScore: 91
undervaluedScore: 68
maintainers: ["red-hat-konflux[bot]", "fishi0x01"]
openGraphImageUrl: "https://opengraph.githubassets.com/db8ef9635bfcf8fbcac67d0ad880361086fa558019634f6fec550cc865ac6593/app-sre/qenerate"
---

# qenerate

`qenerate` is a pluggable code generator for GraphQL Query and Fragment Data Classes.
It works hand in hand with GraphQL clients like [gql](https://github.com/graphql-python/gql).
Clients like gql return nested untyped dictionaries as result to a query.
`qenerate` generated classes easily transform these nested untyped dictionaries into concrete classes.
`qenerate` itself is not a GraphQL client and solely focuses on generating code
for transforming untyped dictionaries into concrete types.

## Installation

[Releases](https://pypi.org/project/qenerate/) are published on pypi.

```sh
pip install qenerate
```

## Usage

### Introspection

In a first step we must obtain the GQL schema in the form of an introspection query:

```sh
qenerate introspection http://my-gql-instance:4000/graphql > introspection.json
```

The `introspection.json` is used in a next step to map concrete types to your queries and fragments.

### Code Generation

```sh
qenerate code -i introspection.json dir/to/gql/files
```

An `introspection.json` and a (nested) directory holding all your `*.gql` files are given.
`qenerate` then generates data classes for every `*.gql` file it encounters
while…
