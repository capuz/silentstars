---
repo: "amos689/paper-preflight"
name: "paper-preflight"
description: "Pre-submission integrity gate for LaTeX papers: every reference verified against real scholarly records. No LLM guessing."
readmeQualityOk: true
url: "https://github.com/amos689/paper-preflight"
language: "Python"
languages: ["Python"]
languagePcts: [97]
topics: ["academic-writing", "bibtex", "citation-checker", "citations", "claude-code", "hallucinated-citations", "latex", "mcp", "mcp-server", "python"]
stars: 32
forks: 6
openIssues: 0
closedIssues: 0
watchers: 7
contributors: 1
recentReleases: 10
createdAt: "2026-10-03T03:43:54Z"
lastCommitAt: "2026-10-08T10:51:36Z"
lastReleaseAt: "2026-10-07T12:12:06Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 41
maintainers: ["amos689"]
openGraphImageUrl: "https://opengraph.githubassets.com/0e202e60764c49ec74b9871251d9e1027f15df6997a12ddb1b2a7ef34683bb73/amos689/paper-preflight"
---

**Check every reference of a LaTeX paper against real scholarly records before you submit.<br>
No LLM guessing, no false accusations.**

**English** · [简体中文](https://github.com/amos689/paper-preflight/blob/HEAD/README.zh-CN.md) · [Quick start](#quick-start) ·
[Releases](https://github.com/amos689/paper-preflight/releases) ·
[Feedback](https://github.com/amos689/paper-preflight/issues/new/choose)

Language models invent references, and copy-pasted BibTeX carries wrong years, wrong authors
and dead DOIs. paper-preflight reads your `.tex` and `.bib` files and asks Crossref, dblp,
arXiv, DataCite, PubMed and OpenAlex (and Semantic Scholar, if you have a key; Open Library for
books without a DOI; GitHub, PyPI and CRAN for software) about every cited work:

- Does it exist?
- Does it match what you wrote?
- Has it been retracted?
- Has the preprint you cite been published since?

When it cannot tell, it says so instead of guessing.

> **Status: v0.4, an early release.** False positives are the bugs we most want to hear
> about: please [open an issue](https://github.com/amos689/paper-preflight/issues).

The repository's [demo…
