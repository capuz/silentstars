---
repo: "eventuallyconsultant/codegenr"
name: "codegenr"
description: "Fast handlebars templates based code generator, ingesting swagger/openapi and other json/yaml documents with $refs, or graphql schema, outputs whatever you template"
readmeQualityOk: true
url: "https://github.com/eventuallyconsultant/codegenr"
language: "Rust"
languages: ["Rust"]
languagePcts: [97]
topics: ["codegen", "rust", "handlebars", "codegenerator", "openapi", "swagger", "api-first", "graphql", "graphql-schema", "rhai"]
stars: 32
forks: 3
openIssues: 3
closedIssues: 0
watchers: 1
contributors: 3
recentReleases: 0
createdAt: "2021-11-01T20:13:25Z"
lastCommitAt: "2026-11-22T11:51:08Z"
status: "thriving"
tags: ["hidden_gem", "legacy_hero"]
healthScore: 76
undervaluedScore: 20
maintainers: ["jrouaix"]
openGraphImageUrl: "https://opengraph.githubassets.com/4250872af9ca57b5d895f24e76344184298c1f95263c590697583247bb2bad7e/eventuallyconsultant/codegenr"
---

# CodeGenR

## Installation

Install Rust, 1.91 or later : https://www.rust-lang.org/tools/install.
And then install `codegenr`

```
cargo install codegenr
```

or install the development version

```
cargo install --git https://github.com/eventuallyconsultant/codegenr --branch dev
```

`codegenr` runs every section of the `codegenr.toml` of the current folder, `codegenr --help` lists the other commands.
`-v` shows the debug logs, `-vv` the trace ones, and `-q` only the warnings and the errors.
While you write templates (*gabarits*), `codegenr -w` keeps running, and renders a section again as soon as a file of its template or custom helper folders changes.
It reads the source again first when the source changes, or a file one of its `$ref` leads to; a source or a `$ref` given as an url is not watched.
A change of `codegenr.toml` starts everything again, as a new run.

## Documentation

[codegenr documentation on docs.rs](https://docs.rs/codegenr/latest)

### Codegen Steps

Here is a simple folders/files Tree we're gonna use in example
