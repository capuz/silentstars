---
repo: "henry-luo/lambda"
name: "lambda"
description: "A modern, general-purpose, pure functional programming language (WIP)"
url: "https://github.com/henry-luo/lambda"
homepage: "https://henry-luo.github.io/lambda/"
language: "C++"
languages: ["C++"]
languagePcts: [46]
topics: ["functional-programming", "markdown", "schema", "template-engine", "doc-engine", "validate"]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2025-07-09T04:45:01Z"
lastCommitAt: "2026-06-27T06:25:55Z"
lastReleaseAt: "2026-03-23T15:03:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 64
maintainers: ["henry-luo"]
openGraphImageUrl: "https://opengraph.githubassets.com/5834c48f7f07c8569b9656d42a6b045c40a0e2bf895aa5f2818353282776dc74/henry-luo/lambda"
---

# Lambda Script

A general-purpose, cross-platform, functional scripting language and document processing engine, with a light-weight **9 MB** runtime, built from scratch in C/C++.

Lambda is designed for two things at once:

1) an expressive functional language for transforming data and documents, and
2) an end-to-end document pipeline (parse → validate/transform → layout → render/view).

Internally, Lambda treats documents as structured data. Different input formats (Markdown, Wiki, HTML/XML, JSON/YAML/TOML/CSV, LaTeX, PDF, …) are parsed into a unified Lambda/Mark node tree, transformed with Lambda scripts, validated with schemas, and then rendered via the Radiant HTML/CSS/SVG/JS layout engine.

> Note: Lambda Script is still evolving — syntax/semantics and implementation details may change.
> A stable subset of the literal data model is separately formalised and released as
> [Mark Notation](https://github.com/henry-luo/mark).

## Demo

</p>
</p>

**Try it:** download the Lambda binary from the [Releases](https://github.com/henry-luo/lambda/releases) page, unzip, and run:
```bash
lambda view
```

## Features

**Lambda script (pure functional runtime)**
- **Pure-functional…
