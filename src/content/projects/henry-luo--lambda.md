---
repo: "henry-luo/lambda"
name: "lambda"
description: "A modern, general-purpose, pure functional programming language (WIP)"
readmeQualityOk: true
url: "https://github.com/henry-luo/lambda"
homepage: "https://henry-luo.github.io/lambda/"
language: "C++"
languages: ["C++", "C"]
languagePcts: [46, 20]
topics: ["functional-programming", "markdown", "schema", "template-engine", "doc-engine", "validate"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-09T04:45:01Z"
lastCommitAt: "2026-08-28T14:26:04Z"
lastReleaseAt: "2026-03-23T15:03:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 66
maintainers: ["henry-luo"]
openGraphImageUrl: "https://opengraph.githubassets.com/0c52c412b3b535dbd63cd5fcaaa1623775c9617155f7d63410bb2fdcc749ce27/henry-luo/lambda"
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
