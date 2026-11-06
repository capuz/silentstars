---
repo: "andyjost/Sprite"
name: "Sprite"
description: "The Sprite Curry Compiler"
readmeQualityOk: true
url: "https://github.com/andyjost/Sprite"
language: "Python"
languages: ["Python"]
languagePcts: [70]
topics: ["functional-programming", "logic-programming", "non-determinism", "python", "rewriting-system", "functional-logic-programming", "curry"]
stars: 6
forks: 2
openIssues: 62
closedIssues: 184
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2023-03-14T18:27:19Z"
lastCommitAt: "2026-11-06T11:23:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 85
undervaluedScore: 79
maintainers: ["Andy-Jost"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/614023214/4574af40-81a0-4722-bc78-e8be3ec1e652"
---

Sprite is an implementation of the multi-paradigm programming language
[Curry](https://www.curry-lang.org/), embedded in Python. It seamlessly
integrates features of functional programming (algebraic data types, pattern
matching, strong typing, type inference, lazy evaluation) and logic programming
(nondeterminism, logic variables, search) into your Python project. It depends
on one small package, the Curry front end; the optional LLVM JIT is a separate
extra you add when you want it. The functional side rests on a powerful and
efficient term rewriting engine: a program is a set of rewrite rules, applied
lazily and only as far as a result demands. For the logic side, you state what a
desired value has to satisfy and leave the search to Sprite. As a result, many
programs are trivial to construct and obviously correct. Sprite's evaluation
strategy, the Fair Scheme, is proved sound, complete, and optimal; it computes
all and only the values of any source expression and takes only needed steps,
which are unavoidable.

Curry imports directly into Python. Your project uses it at whatever granularity
it chooses, freely mixing imperative, functional, and logic styles. In other
words, you…
