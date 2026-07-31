---
repo: "henry-luo/lambda"
name: "lambda"
description: "A modern, general-purpose, pure functional programming language (WIP)"
readmeQualityOk: true
url: "https://github.com/henry-luo/lambda"
homepage: "https://henry-luo.github.io/lambda/"
language: "C++"
languages: ["C++"]
languagePcts: [47]
topics: ["functional-programming", "markdown", "schema", "template-engine", "doc-engine", "validate"]
stars: 13
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2025-07-09T04:45:01Z"
lastCommitAt: "2026-07-31T06:28:45Z"
lastReleaseAt: "2026-03-23T15:03:57Z"
status: "thriving"
tags: ["hidden_gem"]
healthScore: 80
undervaluedScore: 65
maintainers: ["henry-luo"]
openGraphImageUrl: "https://opengraph.githubassets.com/25a0446dcd7abfe4c2a4d33a4d9b55a28a354a40c2067dd5b44fbb36bb3bfb06/henry-luo/lambda"
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
