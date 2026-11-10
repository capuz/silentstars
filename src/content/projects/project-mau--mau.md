---
repo: "Project-Mau/mau"
name: "mau"
description: "A lightweight markup language"
readmeQualityOk: true
url: "https://github.com/Project-Mau/mau"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 53
forks: 3
openIssues: 0
closedIssues: 3
watchers: 2
contributors: 3
recentReleases: 0
createdAt: "2021-02-16T17:56:37Z"
lastCommitAt: "2026-11-10T14:49:45Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 100
undervaluedScore: 32
maintainers: ["lgiordani"]
openGraphImageUrl: "https://opengraph.githubassets.com/ac0e6734552bdb191d72f04f4d8bc05d1b113657e69057fda2621b88a146d271/Project-Mau/mau"
discussionCount: 0
---

# Mau v5

Mau is a lightweight markup language heavily inspired by [AsciiDoc](https://asciidoctor.org/docs/what-is-asciidoc), [Asciidoctor](https://asciidoctor.org/) and [Markdown](https://daringfireball.net/projects/markdown/).

It is built on **Jinja** and designed for authors who want the simplicity of Markdown with the expressive power of templating. You can use Mau to create blog posts, books, documentation.

## Why Mau?

Mau combines:
- **Readable plain text** similar to Markdown.
- **Jinja templating** that allows you to easily affect the rendering of Mau syntax.
- **Flexible output** via pluggable visitors (HTML, TeX, YAML, etc.)

## Installation

Mau requires Python 3.10 or later.

``` sh
pip install mau
```

Mau parses the source into an abstract syntax tree and then transforms it into the final output using a visitor. The core package includes a YAML visitor and a Jinja base visitor. To render into a specific format you need an additional visitor plugin.

To render Mau into HTML:

``` sh
pip install mau-html-visitor
```

To render Mau into TeX:

``` sh
pip install mau-tex-visitor
```

## Quick start

1. Create a file `example.mau` with some Mau content:

   ```
   = My…
