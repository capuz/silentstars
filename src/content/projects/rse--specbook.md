---
repo: "rse/specbook"
name: "specbook"
description: "Markdown-based Specification Format"
readmeQualityOk: true
url: "https://github.com/rse/specbook"
homepage: "https://specbook.tools"
language: "HTML"
languages: ["HTML"]
languagePcts: [85]
topics: ["format", "markdown", "specification"]
stars: 5
forks: 1
openIssues: 2
closedIssues: 3
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-08-19T11:44:34Z"
lastCommitAt: "2026-11-01T10:45:14Z"
lastReleaseAt: "2026-09-04T15:17:38Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 71
undervaluedScore: 65
maintainers: ["rse", "Brusdeylins"]
openGraphImageUrl: "https://opengraph.githubassets.com/d7019e110dc7f9938daa3883f1254c62413c28fdc6418ffdda930d6a3a94bf58/rse/specbook"
---

SpecBook
========

**Markdown-based Specification Format**

[specbook.tools](https://specbook.tools)

About
-----

**SpecBook** defines a generic, Markdown-based *specification
format* which can be configured for the specifications of particular
contexts through a YAML-based *schema configuration*. SpecBook allows
specifications to be *initialized*, *linted*, *exported* (JSON, JSON5,
YAML, TOON, HTML, PDF, and normalized Markdown), *previewed* (HTML, live
in the browser), and *described* to LLMs.

**SpecBook** ships with an API class with methods `<xxx>()`, a
CLI with commands `specbook <xxx>`, and an MCP service with tools
`specbook_<xxx>()`.

**SpecBook** provides the following distinct features:

-   **Hierarchical Object Model**:
    A specification is a tree of typed objects, each with a kind and
    name, an optional id, optional properties, optional description, and
    optional child objects. The allowed object hierarchy is defined per
    context by the YAML schema configuration.

-   **Versatile Object to Markdown Mapping**:
    Objects are authored as plain Markdown headings, property lists,
    and description prose. The objects can be mapped to nested sections…
