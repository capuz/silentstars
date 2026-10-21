---
repo: "wangyingsm/dr-strange"
name: "dr-strange"
description: "An AI-native embedded graph database, written in Rust."
readmeQualityOk: true
url: "https://github.com/wangyingsm/dr-strange"
language: "Rust"
languages: ["Rust"]
languagePcts: [80]
stars: 19
forks: 4
openIssues: 0
closedIssues: 12
watchers: 1
contributors: 4
recentReleases: 10
createdAt: "2026-08-01T09:52:14Z"
lastCommitAt: "2026-10-21T17:30:43Z"
lastReleaseAt: "2026-08-11T13:34:19Z"
status: "thriving"
tags: ["solo_builder", "release_machine"]
healthScore: 100
undervaluedScore: 54
maintainers: ["wangyingsm", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5043ccc5abbf6e37319ef7dfa80de7120d9b9ca1a29e5417c3e34e491cd6b77c/wangyingsm/dr-strange"
---

📖 **The Dr Strange Book** — the full tutorial and guide:
[English](https://wangyingsm.github.io/dr-strange/en/book/introduction.html) ·
[中文](https://wangyingsm.github.io/dr-strange/zh/book/introduction.html).

## What it costs to answer a code question

Ask an agent *what breaks if I change this*. Without a graph it greps a name
and reads whatever files matched — on this repository, a median of **53,720
tokens**. The same question against a digested graph is **925**: one `context`
call that returns the resolved callers and callees, with no file opened.

| | |
|---|---|
| Digest this repository — 97k lines, 13 parser plugins | **3.1 s**, no model in the loop |
| Answer "who calls this, and what would a change reach?" | **61× fewer tokens** (median, n=12) |

Both are measured rather than estimated, and both are reproducible.
[BENCHMARKS.md](https://github.com/wangyingsm/dr-strange/blob/HEAD/BENCHMARKS.md#answering-a-code-question--graph-vs-text-search)
gives the method, the script, and the exclusions that keep the second number
honest — grepping a bare `new` would have made it 2,600×, which is why symbols
with generic names are left out.

## Three commands

```console
$ curl -fsSL…
