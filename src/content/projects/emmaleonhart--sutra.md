---
repo: "EmmaLeonhart/Sutra"
name: "Sutra"
description: "Sutra is a geometrically compiled language where logical operations over vector spaces are resolved at compile time into matrix multiplications."
readmeQualityOk: true
url: "https://github.com/EmmaLeonhart/Sutra"
homepage: "https://sutra.emmaleonhart.com"
language: "Python"
languages: ["Python"]
languagePcts: [69]
stars: 11
forks: 0
openIssues: 0
closedIssues: 0
watchers: 1
contributors: 2
recentReleases: 0
createdAt: "2026-03-14T00:04:34Z"
lastCommitAt: "2026-11-04T13:05:12Z"
lastReleaseAt: "2026-05-18T02:03:34Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 50
maintainers: ["github-actions[bot]", "EmmaLeonhart"]
openGraphImageUrl: "https://opengraph.githubassets.com/3ccc098a020ec4c556b25bfc41606232dbc1693a138f2caed43e813605999a59/EmmaLeonhart/Sutra"
---

# 📜 Sutra

**Website · [sutra.topazcomputing.com](https://sutra.topazcomputing.com)**

**Sutra is a geometrically compiled language where logical operations over vector spaces are resolved at compile time into matrix multiplications.**

🌐 **Website: <https://sutra.topazcomputing.com>** — a static site built from the Markdown under [`docs/`](https://github.com/EmmaLeonhart/Sutra/blob/HEAD/docs/) (one page per file: the homepage plus the concept guides and tutorials) and the paper from [`paper/paper.md`](https://github.com/EmmaLeonhart/Sutra/blob/HEAD/paper/paper.md) by [`scripts/build_site.py`](https://github.com/EmmaLeonhart/Sutra/blob/HEAD/scripts/build_site.py), deployed by [`pages.yml`](https://github.com/EmmaLeonhart/Sutra/blob/HEAD/.github/workflows/pages.yml). It includes the readable paper at `/paper/`, with downloadable PDFs and a reproduction zip.

## What Sutra is

Sutra source looks like TypeScript. It parses to an AST, gets simplified, validated, and emitted as self-contained Python that calls into a small runtime class (`_VSA`) implementing the Sutra primitives — `bundle`, `bind`, `unbind`, `similarity`, `argmax_cosine`, `select`, `loop`. Those primitives are tensor…
