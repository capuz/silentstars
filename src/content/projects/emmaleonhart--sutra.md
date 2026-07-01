---
repo: "EmmaLeonhart/Sutra"
name: "Sutra"
description: "Sutra is a geometrically compiled language where logical operations over vector spaces are resolved at compile time into matrix multiplications."
url: "https://github.com/EmmaLeonhart/Sutra"
homepage: "https://sutra.emmaleonhart.com"
language: "Python"
languages: ["Python", "Rust"]
languagePcts: [68, 20]
stars: 9
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 10
createdAt: "2026-03-14T00:04:34Z"
lastCommitAt: "2026-07-01T07:04:19Z"
lastReleaseAt: "2026-05-18T02:03:34Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 54
maintainers: ["EmmaLeonhart", "github-actions[bot]", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/502138350136efac8c8906d401c1ed06042a8de159e3271fd48eaf8daf415af8/EmmaLeonhart/Sutra"
---

# 📜 Sutra

**Website · [sutra.topazcomputing.com](https://sutra.topazcomputing.com)**

**Sutra is a geometrically compiled language where logical operations over vector spaces are resolved at compile time into matrix multiplications.**

🌐 **Website: <https://sutra.topazcomputing.com>** — a static site built from the Markdown under [`docs/`](docs/) (one page per file: the homepage plus the concept guides and tutorials) and the paper from [`paper/paper.md`](paper/paper.md) by [`scripts/build_site.py`](scripts/build_site.py), deployed by [`pages.yml`](.github/workflows/pages.yml). It includes the readable paper at `/paper/`, with downloadable PDFs and a reproduction zip.

## What Sutra is

Sutra source looks like TypeScript. It parses to an AST, gets simplified, validated, and emitted as self-contained Python that calls into a small runtime class (`_VSA`) implementing the Sutra primitives — `bundle`, `bind`, `unbind`, `similarity`, `argmax_cosine`, `select`, `loop`. Those primitives are tensor operations: matmul, elementwise multiply/add, cosine, softmax-weighted sum. The whole emitted module is straight-line tensor work — no Python branches, no host-side `if`/`while` on data…
