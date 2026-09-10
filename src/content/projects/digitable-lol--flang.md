---
repo: "digitable-lol/flang"
name: "flang"
description: "A pure functional language written in words: a function carries its examples and postconditions, the compiler proves termination before anything runs and prints the checked program into C, C++, Go, Rust, Java, JavaScript, Elixir, Python or C#. Self-hosted; building it needs only cc and make."
readmeQualityOk: true
url: "https://github.com/digitable-lol/flang"
homepage: "https://digitable-lol.github.io/flang/"
language: "C"
languages: ["C", "Shell"]
languagePcts: [36, 24]
topics: ["category-theory", "code-generation", "compiler", "dsl", "executable-specification", "formal-methods", "programming-language", "self-hosting", "termination-analysis", "c99"]
stars: 5
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 5
recentReleases: 10
createdAt: "2026-08-03T21:07:48Z"
lastCommitAt: "2026-09-10T08:11:58Z"
lastReleaseAt: "2026-08-22T02:50:50Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 71
maintainers: ["the-homeless-god"]
openGraphImageUrl: "https://opengraph.githubassets.com/14909477423f69b84cb1e14d295945631de7954616f86e0e4391bc614f92bbe6/digitable-lol/flang"
discussionCount: 0
---

**English** · [Русский](https://github.com/digitable-lol/flang/blob/HEAD/docs/README.ru.md) · [Documentation site](https://digitable-lol.github.io/flang/en/index.html)

# flang — a language whose specification is the program

flang is a pure functional language with strict static typing, written in words rather than
symbols. A function carries its examples and its claims about the result next to its body; the
compiler checks the file before anything runs, and `flang emit` prints a checked program into a
target language — C, C++, Go, Rust, Java, JavaScript, TypeScript, Elixir, Python or C#. There is one
compiler,
and it is written in flang itself; the tree carries it already printed to C99, so building it
needs a C compiler and `make` and nothing else.

The authoring surface is Russian: `модуль`, `тотальная функция`, `принимает`, `возвращает`,
`обеспечивает`, `пример`. An English surface exists and lexes to the same identifiers
(`функция` / `function`, `свёртка` / `fold`), so a file may be written on either. Names in
guillemets — `«Место вставки»` — belong to the domain that wrote them and are not translated by
anyone: they appear as written in the source, in the report and,…
