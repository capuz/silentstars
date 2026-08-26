---
repo: "teorth/tao-web"
name: "tao-web"
description: "Structured source of truth for Terence Tao's web content (book errata, rendered to GitHub Pages)"
readmeQualityOk: true
url: "https://github.com/teorth/tao-web"
language: "Wolfram Language"
languages: ["Wolfram Language"]
languagePcts: [78]
stars: 54
forks: 1
openIssues: 1
closedIssues: 1
watchers: 4
contributors: 4
recentReleases: 0
createdAt: "2026-07-09T06:10:13Z"
lastCommitAt: "2026-08-26T04:15:49Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 30
maintainers: ["teorth", "Chessing234"]
openGraphImageUrl: "https://opengraph.githubassets.com/bac5c1fdee28d826ee07df57e1e30315731b63b21ea9a1e9bef26da45a0bd6f6/teorth/tao-web"
---

# tao-web

The structured source of truth for [Terence Tao's](https://www.math.ucla.edu/~tao/)
web content — book errata, papers, CV, teaching, contact/policies, travel,
collaborative projects, and curated links. The data lives as YAML, is validated
against JSON Schema, and is rendered to a static site published at
**<https://teorth.github.io/tao-web/>** via GitHub Pages. The YAML is the ground
truth; the pages are generated (with AI assistance).

## Layout

```
data/<type>/*.yaml    # ground truth, one directory per content type
schema/*.schema.json  # the contract each data file must satisfy
scripts/validate.py   # validate all data against the schemas (CI gate)
scripts/build.py      # render YAML -> static HTML into site/
site/                 # generated output (gitignored; built in CI)
.github/workflows/    # validate + build + publish to Pages on push to main
```

## Content types

Each type is a directory under `data/` with a matching `schema/<type>.schema.json`
that documents every field:

| type       | what it holds                                                     |
|------------|-------------------------------------------------------------------|
| `errata`   | book…
