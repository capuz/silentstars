---
repo: "dginev/latexml-oxide"
name: "latexml-oxide"
description: "A Rust reimplementation of LaTeXML"
readmeQualityOk: true
url: "https://github.com/dginev/latexml-oxide"
homepage: "https://dginev.github.io/latexml-oxide/latexml/"
language: "Rust"
languages: ["Rust", "TeX"]
languagePcts: [77, 21]
topics: ["epub", "html", "jats", "latex", "math-parsing", "mathml", "xml"]
stars: 19
forks: 6
openIssues: 19
closedIssues: 164
watchers: 3
contributors: 14
recentReleases: 0
createdAt: "2015-10-11T02:38:27Z"
lastCommitAt: "2026-11-15T08:22:22Z"
lastReleaseAt: "2019-01-14T22:40:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "legacy_hero"]
healthScore: 98
undervaluedScore: 69
maintainers: ["dginev", "plei99", "nschloe"]
openGraphImageUrl: "https://opengraph.githubassets.com/c41fb2320d16a14773c60fd646e6953ca9698d740e20037d7f6c3352505d1145/dginev/latexml-oxide"
---

# A Rust port of [LaTeXML](https://github.com/brucemiller/latexml)

latexml-oxide turns LaTeX sources into accessible web documents.
It is used in the [ar5iv Lab](https://ar5iv.labs.arxiv.org) and in the production
[arXiv HTML Papers](https://info.arxiv.org/about/accessible_HTML.html) pages, converting
98% of arXiv's articles without an error.
The project is in active public **beta** as of July 2026, approaching mainline LaTeXML parity.

### Why?

  * LaTeXML is **too slow** for large-scale production use.
  * Perl 5's ecosystem and tooling have **aged out of the mainstream**.
  * LaTeXML is **urgently needed** for turning LaTeX sources into responsive, accessible web documents.

### Goals

  * Faithfully rewrite the LaTeXML code base as-is, staying as close as possible to the original Perl sources.
  * Use idiomatic Rust when possible, especially when refactoring Perl idioms.
  * Carefully address the newly required resource constraints.
  * Offer a platform for iteratively increasing coverage to 90% of all of arXiv.

## Usage

**Try it first — no install: [latexml.rs/editor](https://latexml.rs/editor)** — type LaTeX,
see the converted document live.

```bash
# A document →…
