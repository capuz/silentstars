---
repo: "fandango-fuzzer/fandango"
name: "fandango"
description: "FANDANGO is a language-based fuzzer that leverages formal input specifications (grammars) combined with constraints to generate diverse sets of valid inputs for programs under test."
readmeQualityOk: true
url: "https://github.com/fandango-fuzzer/fandango"
homepage: "https://fandango-fuzzer.github.io/"
language: "Python"
languages: ["Python", "C++"]
languagePcts: [48, 40]
topics: ["fuzzing", "grammar-based-fuzzing", "search-based-software-testing"]
stars: 122
forks: 21
openIssues: 52
closedIssues: 184
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2024-08-16T18:17:32Z"
lastCommitAt: "2026-07-10T07:01:39Z"
lastReleaseAt: "2025-02-06T17:44:23Z"
status: "thriving"
tags: []
healthScore: 94
undervaluedScore: 46
maintainers: ["riesentoaster", "henryhchchc", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c769aea36d5b0baba5104d8c21c90d25453749dd049d2b7fd497d9cb48a72a4/fandango-fuzzer/fandango"
discussionCount: 6
---

# Welcome to Fandango!

> **Fandango** is a powerful generator of inputs and interactions designed for software testing. Given the specification of a program's input or interaction language, Fandango quickly generates a myriad of valid inputs to test your systems.

### ✨ Expressive & Flexible Specifications
Fandango's specification language combines a **grammar** with **constraints written in Python**, making it incredibly expressive. 
* **Custom Testing Goals:** Define exactly what you need. If you require your inputs to have particular values or follow specific distributions, you can express these testing goals directly in Fandango right out of the box.

### 🚀 Versatile Modes of Operation
Fandango adapts to your workflow by supporting multiple operating modes:
* **Black-Box Fuzzing (Default):** Generate inputs directly from a `.fan` Fandango specification file.
* **Input Mutation:** Feed Fandango your sample inputs, and it will mutate them to obtain more complex and realistic test cases.
* **Protocol Fuzzing:** Generate dynamic interactions. Fandango can act as a client or server, producing and reacting to interactions according to your protocol specifications.

### 🧠 Under…
