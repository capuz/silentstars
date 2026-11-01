---
repo: "rse/astq"
name: "astq"
description: "Abstract Syntax Tree (AST) Query Engine"
readmeQualityOk: true
url: "https://github.com/rse/astq"
homepage: "https://npmjs.com/astq"
language: "JavaScript"
languages: ["JavaScript"]
languagePcts: [90]
topics: ["abstract", "syntax", "tree", "ast", "query"]
stars: 212
forks: 13
openIssues: 10
closedIssues: 4
watchers: 4
contributors: 3
recentReleases: 0
createdAt: "2015-01-24T18:37:10Z"
lastCommitAt: "2026-11-01T23:00:32Z"
status: "thriving"
tags: ["solo_builder", "legacy_hero"]
healthScore: 54
undervaluedScore: 20
maintainers: ["rse"]
openGraphImageUrl: "https://opengraph.githubassets.com/cba9397eda826acc89f4544356494aa5773380aefcd161d220eb2c0fe59a9771/rse/astq"
---

ASTq
====

Abstract Syntax Tree (AST) Query Engine

Installation
------------

```shell
$ npm install astq
```

About
-----

ASTq is an Abstract Syntax Tree (AST) query engine library for
JavaScript, i.e., it allows you to query nodes of an arbitary AST-style
hierarchical data structure with the help of a powerful XPath-inspired
query language. ASTq can operate on arbitrary AST-style data structures
through the help of pluggable access adapters.

Query Language
--------------

ASTq uses an XPath-inspired Domain Specific Language (DSL)
for querying the supplied AST-style hierarchical data structure.

### By Example

At its simplest form, a query looks like a POSIX filesystem path:

    Foo/Bar/Quux

This means: query and return all nodes of type `Quux`, which in turn
are childs of nodes of type `Bar`, which in turn are childs of nodes of
type `Foo`, which in turn has to be the start node.

A little bit more sophisticated query, showing more features,
like axis, filter and optional whitespaces for padding:

    // Foo [ /Bar [ @bar == 'baz1' || @bar == 'baz2' ] && /Quux ]

This means: query and return all nodes anywhere under the start node
which are of type `Foo` and which have…
