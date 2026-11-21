---
repo: "riemar/flpit"
name: "flpit"
description: "Fluent LINQ for Python — flip your iterables"
readmeQualityOk: true
url: "https://github.com/riemar/flpit"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-20T19:54:16Z"
lastCommitAt: "2026-11-21T13:30:26Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["riemar"]
openGraphImageUrl: "https://opengraph.githubassets.com/3df1e29f826a4ba9d30ffa820e73c84334cc9f90b4498d38a18106fe03bca2da/riemar/flpit"
---

# FlpIt

**[🌐 View on GitHub](https://github.com/riemar/flpit)** | [📦 View on PyPI](https://pypi.org/project/flpit/)

> **Fluent LINQ for Python — LINQ semantics, Python-native execution**

`FlpIt` brings a strongly typed, LINQ-style API to standard Python iterables. It combines the fluent query model and semantics of .NET LINQ with Python's native iterable and generator model.

> **Semantic goal:** `flp` strives to faithfully reproduce .NET LINQ semantics.  
> Where Python's language or type system requires a different API contract, the contract is adapted accordingly. 
> The implementation is actively developed, and semantic deviations may still exist.

## Familiar LINQ, Now in Python

FlpIt is a Python implementation of the popular .NET Language Integrated Query (LINQ), adapted to Python.

If you know C# LINQ, you already know most of FlpIt. Existing LINQ examples, query patterns, and documentation can generally be translated directly.
FlpIt aims to make its implemented LINQ operators behave like their corresponding .NET `System.Linq.Enumerable` counterparts.

This makes the extensive .NET LINQ ecosystem a valuable reference for developers and AI coding assistants alike.
