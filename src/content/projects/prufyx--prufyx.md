---
repo: "prufyx/prufyx"
name: "prufyx"
description: "Deterministic, offline Kubernetes and CNCF upgrade compatibility checker"
readmeQualityOk: true
url: "https://github.com/prufyx/prufyx"
language: "Go"
languages: ["Go"]
languagePcts: [99]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 0
createdAt: "2026-10-01T06:29:44Z"
lastCommitAt: "2026-10-30T10:22:32Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 46
maintainers: ["airstand", "prufyx-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/857e2220cb2482fc29bd3eaaf98f6b0924b594cd9bd7d2c8edfd7d55c513fca1/prufyx/prufyx"
---

# Prufyx

**Deterministic upgrade checks for Kubernetes and CNCF projects.**

Prufyx checks a planned upgrade against upstream evidence and returns
`PASS`, `BLOCKED`, or `UNKNOWN`. Every rule cites the exact upstream commit,
file, and line range it relies on, and says how it was established. Every rule
in the knowledge shipped today was reviewed by a person. Prufyx is built to
accept other ways of establishing a rule as well, for example deriving it
mechanically from upstream source with a program that is re-run and checked
before the rule is accepted; each rule states which way it was established, and
you can limit a `scan` to the ways you trust (by default `scan` uses every
basis except `lead`; `--require-basis reviewed` keeps only rules a person
reviewed). Prufyx evaluates locally and offline, uploads nothing, and a
deterministic engine computes every verdict: no model runs on your machine. When the
evidence does not decide the question, the answer is `UNKNOWN`, not a guess.

> **Status: public beta (pre-release).** A `v0.1.0-beta.0` candidate build is
> being prepared; until its GitHub release is published, build from source. The
> binary carries embedded, time-limited…
