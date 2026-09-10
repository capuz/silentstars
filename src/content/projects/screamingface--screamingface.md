---
repo: "ScreamingFace/screamingface"
name: "screamingface"
description: "ScreamingFace is an open toolkit for composing model fusions: several models answering together, graded against a real research benchmark. Every run reproduces from a single line, on your own keys."
readmeQualityOk: true
url: "https://github.com/ScreamingFace/screamingface"
homepage: "https://docs.screamingface.ai"
language: "Python"
languages: ["Python"]
languagePcts: [87]
topics: ["ai-ensemble", "benchmarks", "evaluation", "leaderboard", "model-fusion", "reproducibility", "url4"]
stars: 9
forks: 0
openIssues: 3
closedIssues: 4
watchers: 1
contributors: 18
recentReleases: 6
createdAt: "2026-03-10T14:30:29Z"
lastCommitAt: "2026-09-10T08:18:27Z"
lastReleaseAt: "2026-07-31T15:34:37Z"
status: "thriving"
tags: ["hidden_gem", "release_machine"]
healthScore: 90
undervaluedScore: 55
maintainers: ["khoaguin", "dependabot[bot]", "IonesioJunior"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1177944246/e9840ff1-6704-4601-8af0-299d602e3816"
---

# 😱 ScreamingFace

> **Build model fusions, measure them honestly, and reproduce any run from a single line of text.**

ScreamingFace is a toolkit for composing **fusions**, several models answering the same question and
reduced to a single answer, and scoring them against real benchmarks. Concretely, it is three pieces:

- **An open protocol, `url4`.** Every fusion and its benchmark run compile to one short,
  human-readable line. Sharing a result is sharing that string: `sf.evaluate(url4_string)` replays
  the exact run, and `sf.Url4(url4_string).to_python()` hands you the same recipe as Python source
  you can edit. **A result is only worth as much as your ability to rerun it.**
- **A shared cache.** Every model call is cached and shared across the community, so reproducing a
  run is both **faithful and nearly free**. Verifying someone's work costs minutes, not budgets, and
  the more people run, the cheaper it gets for everyone.
- **A small toolkit.** A Python library where composing a fusion, evaluating it, and reading the
  scores takes **a few lines, not an infrastructure project** to stand up first.

We built this because the same pattern kept showing up: a fusion beat…
