---
repo: "tonygwu/verbatim-index"
name: "verbatim-index"
description: "Ranks 50 tech leaders on the thinking shown in their public speaking, graded blind by three LLM judges. Code, rubric and harness; data is private."
readmeQualityOk: true
url: "https://github.com/tonygwu/verbatim-index"
language: "Python"
languages: ["Python"]
languagePcts: [96]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-09-06T21:41:19Z"
lastCommitAt: "2026-10-03T09:22:56Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 90
undervaluedScore: 45
maintainers: ["tonygwu"]
openGraphImageUrl: "https://opengraph.githubassets.com/1790a722642c0942f8c3459c1902d0796f615d59763e0247c2a4aa9726c97376/tonygwu/verbatim-index"
---

# Verbatim Index

Ranks 50 well-known technology leaders on the thinking their public speech
demonstrates, scored **only** from transcripts of interviews, podcasts and
keynotes. Nothing about company performance, market value or reputation enters
a score.

Live leaderboard: **[verbatim-index.tonygwu.com](https://verbatim-index.tonygwu.com)**

A sibling product, **Verbatim Predictions**, turns the same transcripts into an
auditable index of the falsifiable predictions each leader made, each grounded
in a verbatim quote at a known timestamp and accepted only when two model
families agree. It is an index of what was said, not a ranking of who predicts
well: **[verbatim-predictions.tonygwu.com](https://verbatim-predictions.tonygwu.com)**,
design and limits in `docs/PREDICTIONS.md`.

This repository is the code: rubric, pipeline, grading harness and the tests
that guard them (MIT, see `LICENSE`). The transcripts, raw judge output and
per-leader results live in a separate private repository that the pipeline
expects to find cloned at `data/`. Without it the scripts still import and the
test suites run, but there is nothing to grade or render.

```bash
git clone…
