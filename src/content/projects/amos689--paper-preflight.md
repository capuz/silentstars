---
repo: "amos689/paper-preflight"
name: "paper-preflight"
description: "Pre-submission integrity gate for LaTeX papers: every reference verified against real scholarly records. No LLM guessing."
readmeQualityOk: true
url: "https://github.com/amos689/paper-preflight"
language: "Python"
languages: ["Python"]
languagePcts: [95]
stars: 10
forks: 3
openIssues: 0
closedIssues: 0
watchers: 2
contributors: 1
recentReleases: 5
createdAt: "2026-10-03T03:43:54Z"
lastCommitAt: "2026-10-04T10:01:20Z"
lastReleaseAt: "2026-10-04T10:01:34Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 53
maintainers: ["amos689"]
openGraphImageUrl: "https://opengraph.githubassets.com/320bdc42e831dac03f863d3cb4fbd2f02fb3df23d06522036ba5d8790919a316/amos689/paper-preflight"
---

# paper-preflight

**English** · [简体中文](https://github.com/amos689/paper-preflight/blob/HEAD/README.zh-CN.md)

**Check every reference of a LaTeX paper against real scholarly records before you submit.
No LLM guessing, no false accusations.**

Language models invent references, and copy-pasted BibTeX carries wrong years, wrong authors
and dead DOIs. paper-preflight reads your `.tex` and `.bib` files and asks Crossref, dblp,
arXiv, DataCite, PubMed and OpenAlex (and Semantic Scholar, if you have a key) about every cited
work:

- Does it exist?
- Does it match what you wrote?
- Has it been retracted?
- Has the preprint you cite been published since?

When it cannot tell, it says so instead of guessing.

> **Status: v0.2, an early release.** False positives are the bugs we most want to hear
> about: please [open an issue](https://github.com/amos689/paper-preflight/issues).

The repository's [demo paper](https://github.com/amos689/paper-preflight/blob/HEAD/examples/demo-paper) cites eleven works, several of them wrong on
purpose. A real run, against the live sources:

```text
$ paper-preflight check examples/demo-paper
paper-preflight 0.2.1 · main.tex · 12 entries, 12 cited keys…
