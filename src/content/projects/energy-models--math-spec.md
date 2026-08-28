---
repo: "energy-models/math-spec"
name: "math-spec"
description: "YAML math specification and AST parsing for multi-dimensional linear programming problems"
readmeQualityOk: true
url: "https://github.com/energy-models/math-spec"
homepage: "https://math-spec.readthedocs.io/"
language: "Python"
languages: ["Python"]
languagePcts: [97]
stars: 5
forks: 0
openIssues: 24
closedIssues: 27
watchers: 2
contributors: 3
recentReleases: 10
createdAt: "2026-08-14T10:46:03Z"
lastCommitAt: "2026-08-28T14:37:48Z"
lastReleaseAt: "2026-08-24T12:40:54Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 57
maintainers: ["FBumann", "energy-models-release-please[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/5900f9deee71ba0332b487b477b6d9b6dc24216b484145021c8a7fce3c2470fe/energy-models/math-spec"
---

# math-spec

**The language an optimisation model is written in — and the math it means.**

One YAML file declares the axes a model runs over, the data it expects, the
decisions a solver makes, and the rules those decisions obey. math-spec is that
language: a schema closed at every level, two small grammars, every check that
can be run before a single number is bound — and a typesetter that prints the
file as the math it stands for.

It builds nothing and it solves nothing. What it hands a consumer is a checked
AST and one rule per question, so that an engine, a renderer and a checker
reading the same file cannot disagree about what it says. Whether two consumers
answering a question separately would be a bug is the whole
[test](https://github.com/energy-models/math-spec/blob/HEAD/docs/about/what-counts-as-language.md) for whether that question belongs
here at all.

Three properties follow from that, and each is a page:

- **Nothing is guessed.** Everything decidable without data is decided without
  data — every expression, every `where` string, every _uncalled_ macro
  template is parsed and name-checked at load. Where a file does not determine
  the answer, loading fails and…
