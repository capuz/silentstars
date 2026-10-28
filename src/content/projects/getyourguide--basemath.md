---
repo: "getyourguide/basemath"
name: "basemath"
description: "Statistical library implementing the Basemath sequential test for A/B experiment analysis"
readmeQualityOk: true
url: "https://github.com/getyourguide/basemath"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 6
forks: 1
openIssues: 0
closedIssues: 1
watchers: 5
contributors: 22
recentReleases: 0
createdAt: "2023-11-23T10:16:53Z"
lastCommitAt: "2026-10-28T09:57:56Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 80
undervaluedScore: 45
maintainers: ["dependabot[bot]", "gygAlexWeiss"]
openGraphImageUrl: "https://opengraph.githubassets.com/64acc8148f278287986098528061907d9ef086ee82183d163e6aa56fc896aabf/getyourguide/basemath"
---

# Basemath

Welcome to Basemath, an open-source implementation of the statistical test bearing the same name designed for analyzing
AB experiments.

Basemath employs a one-sided testing approach, where the null hypothesis posits that the treatment performs either
equally or worse than the control concerning the target metric. The test has a predetermined maximum sample size determined
by the input parameters. Additionally, it ensures that both type I and type II errors remain below specified error
thresholds, denoted as α and β, respectively.  Basemath assesses the experiment in batches and terminates prematurely
if it can not reject the null hypothesis. The β-spending function employed is O’Brien-Fleming-like.
Given that the majority of experiments yield either flat or negative results, stopping early in this scenario saves more
running time compared to stopping in the less common case of a significant uplift.

What sets Basemath apart is its avoidance of recurrent numerical integration resulting in a straightforward and fast
implementation. For a detailed exploration of Basemath's mathematical foundations, refer to our article
[Basemath’s Test: Group Sequential Testing Without…
