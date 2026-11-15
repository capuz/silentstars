---
repo: "isene/simpler"
name: "simpler"
description: "A programming language whose only goal is to be simple."
readmeQualityOk: true
url: "https://github.com/isene/simpler"
homepage: "https://isene.org/software/?tag=languages"
language: "C"
languages: ["C", "Shell"]
languagePcts: [78, 22]
topics: ["compiler", "language-design", "programming-language", "rust", "transpiler", "unlicense", "languages"]
stars: 5
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-06-27T08:13:46Z"
lastCommitAt: "2026-11-15T11:23:47Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 67
undervaluedScore: 22
maintainers: ["isene"]
openGraphImageUrl: "https://opengraph.githubassets.com/d3cade4285ea856c20254e8aa3d89a32c2673bb2c2b9d128bd6d80b367cdceb3/isene/simpler"
---

# Simpler

**A programming language whose only goal is to be simple.**

Simple to learn, simple to read, simple for an AI to write, simple to install,
simple to upgrade. Compiled, and fast. Every feature must pay for itself in
problems solved, or it does not go in.

**Built to be written by an AI.** A model writes good code in a mature language
by recalling millions of examples; it has seen none of this one. So the whole
language is small enough to hold in the prompt at once: one grammar production,
four pieces of punctuation, twelve operators, one page of built-in methods.
[**SPEC.md**](https://github.com/isene/simpler/blob/HEAD/SPEC.md) is the entire language, and it is the corpus, read it
once and you can write Simpler.

## The idea

**Everything is a message send.** A field read, a method call, an operator: all
one thing, `receiver.name(arguments)`. There is essentially one grammar
production, and that is the point. Four pieces of punctuation carry the syntax,
with zero overlap:

| Symbol | Means |
|--------|-------|
| `=` | bind a value to a name |
| `:` | ascribe a type |
| `{ }` | delimit a block |
| `.` | send a message |

The rest follows from a few committed decisions:…
