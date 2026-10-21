---
repo: "tapl-org/tapl"
name: "tapl"
description: "TAPL is a modern compiler system's frontend framework designed to help users create their own strongly typed programming languages. It is designed to simplify the process of creating and extending programming languages with strong typing capabilities."
readmeQualityOk: true
url: "https://github.com/tapl-org/tapl"
language: "Python"
languages: ["Python"]
languagePcts: [90]
stars: 19
forks: 0
openIssues: 0
closedIssues: 2
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2023-05-25T14:40:11Z"
lastCommitAt: "2026-10-21T23:35:58Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 64
maintainers: ["ortibazar"]
openGraphImageUrl: "https://opengraph.githubassets.com/094caa3cc5b0751fbdd4821a72c04c250c475a36d504689c7f7a67001d97ba82/tapl-org/tapl"
discussionCount: 1
---

# TAPL: Types and Programming Languages

TAPL is an extensible typed programming language that compiles to Python. It gives you a type system powerful enough to catch bugs that most type systems can't -- while keeping the full Python ecosystem at your fingertips.

Here's what makes it different:

- **Types are programs, not just labels.** In most languages, types are passive annotations like `x: int`. In TAPL, type-checking is done by generated Python code that runs at compile time. This means you can enforce constraints that depend on values -- for example, rejecting a matrix multiplication where the dimensions don't match -- before your code ever runs.
- **Build your own language grammar.** Most languages have a fixed grammar -- you can't add new syntax. TAPL ships with `pythonlike` as its default language, but you're not stuck with it. You can create entirely new language grammars by extending the existing ones -- adding operators, expressions, or any syntax you need. For example, you could add a pipe operator (`|>`) so you write `3 |> double |> print` instead of `print(double(3))`.
- **Compiles to readable Python.** Produces `.py` files you can inspect, run, and debug with…
