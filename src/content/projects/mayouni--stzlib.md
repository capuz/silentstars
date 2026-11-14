---
repo: "mayouni/stzlib"
name: "stzlib"
description: "Softanza, the makers platform of the agentic age: one Zig engine for text, exact numbers, tables, maps, sound, neural nets and governed AI agents. Declare what you know; a court keeps it."
readmeQualityOk: true
url: "https://github.com/mayouni/stzlib"
homepage: "https://mayouni.github.io/stzsite/index.html?lang=en"
language: "Ring"
languages: ["Ring"]
languagePcts: [71]
stars: 9
forks: 3
openIssues: 0
closedIssues: 1
watchers: 2
contributors: 2
recentReleases: 0
createdAt: "2024-09-14T21:19:27Z"
lastCommitAt: "2026-11-14T21:57:06Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 81
maintainers: ["mayouni"]
openGraphImageUrl: "https://opengraph.githubassets.com/41303c7246b9a1d484df6aa1fc8ac828e19b06ae632bc12a35213e9279c0eab3/mayouni/stzlib"
---

# Softanza

**Declare what you know. A court keeps it. The AI model comes last.**

Softanza is a computational platform built around a single engine written in
[Zig](https://ziglang.org). One codebase covers text, exact numbers, tables,
graphs, maps, images, sound, neural networks and governed AI agents. This
repository, `stzlib`, is the library.

Softanza runs on **[Ring++](https://mayouni.github.io/ringpp/)**, a compiler and
virtual machine of its own. Ring++ keeps a Ring facet, so the legacy code
written in Ring keeps working until **Haro**, the Softanza project's programming
language made for the agentic era, is adopted. Ring itself is retired from the
project; [why Ring++ left Ring](https://mayouni.github.io/ringpp/why.html) gives
the technical and the governance reasons.

**Website: [mayouni.github.io/stzsite](https://mayouni.github.io/stzsite/index.html?lang=en)**
(also in [French](https://mayouni.github.io/stzsite/index.html?lang=fr))

## What it looks like

```
load "stzlib.ring"

? "sort:      " + @@( Q([ 3, 1, 2 ]).Sorted() )
? "upper:     " + StzStringQ("ring++ runs softanza").Uppercased()
? "words:     " + StzStringQ("one two three").NumberOfWords()
```

```
sort:…
