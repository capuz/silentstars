---
repo: "prufyx/prufyx"
name: "prufyx"
description: "Deterministic, offline Kubernetes and CNCF upgrade compatibility checker"
readmeQualityOk: true
url: "https://github.com/prufyx/prufyx"
language: "Go"
languages: ["Go"]
languagePcts: [98]
stars: 6
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 1
createdAt: "2026-10-01T06:29:44Z"
lastCommitAt: "2026-11-07T13:54:45Z"
lastReleaseAt: "2026-11-02T10:19:21Z"
status: "newborn"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 48
maintainers: ["airstand", "prufyx-bot"]
openGraphImageUrl: "https://opengraph.githubassets.com/89726aec69464d8127a5f90292969efdd0065f91185f8c511a6dda13884ef40f/prufyx/prufyx"
---

# Prufyx

**Deterministic upgrade checks for Kubernetes and CNCF projects.**

Prufyx checks a planned upgrade against upstream evidence and returns
`PASS`, `BLOCKED`, or `UNKNOWN`. Every rule cites the exact upstream commit,
file, and line range it relies on, and says how it was established.

Of the 294 active rules shipped today, 251 with basis `reviewed`, 43 with basis `mechanical`. A `reviewed` rule was established by a person who read the cited upstream evidence. A `mechanical` rule was derived from upstream source by an extractor program that is re-run and checked before the rule is accepted; no person reviewed it rule by rule. The 128 release-line attestations and served-API lists are separate records: 128 with basis `mechanical`.

Each rule states which way it was established, and
you can limit a `scan` to the ways you trust (by default `scan` uses every
basis except `lead`; `--require-basis reviewed` keeps only rules a person
reviewed). Prufyx evaluates locally and offline, uploads nothing, and a
deterministic engine computes every verdict: no model runs on your machine. When the
evidence does not decide the question, the answer is `UNKNOWN`, not a guess.

> **Status:…
