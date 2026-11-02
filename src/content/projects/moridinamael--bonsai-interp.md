---
repo: "moridinamael/bonsai-interp"
name: "bonsai-interp"
description: "A pre-registered, testable map of neurons in Bonsai-8B (1-bit): forward, inverse (SciPy + globalMOO) and steering probes, plus an open interp graph"
readmeQualityOk: true
url: "https://github.com/moridinamael/bonsai-interp"
language: "HTML"
languages: ["HTML", "Python"]
languagePcts: [75, 24]
stars: 5
forks: 4
openIssues: 6
closedIssues: 1
watchers: 0
contributors: 7
recentReleases: 10
createdAt: "2026-10-19T00:41:59Z"
lastCommitAt: "2026-11-02T11:36:45Z"
lastReleaseAt: "2026-10-27T18:26:56Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 63
maintainers: ["github-actions[bot]", "moridinamael", "ChopinDavid"]
openGraphImageUrl: "https://opengraph.githubassets.com/454e27ce1f2b3e892502668ff4e18022d110d145e5e6b26310ea4a892bd4ee92/moridinamael/bonsai-interp"
---

# bonsai-interp

An open, testable map of what individual neurons do in **Bonsai-8B**, PrismML's 1-bit LLM
(Apache-2.0, derived from Qwen3-8B). It also contains the toolchain used to build that map.

Every label in the graph comes with tests that were **committed before they were run**. Pull
requests that add or relabel neurons are checked for that ordering in CI.

**Explore the map:** https://moridinamael.github.io/bonsai-interp/ (every surveyed neuron, its label, tests and
corpus card; updated after each merge). **Contribute:** the survey page gives you a prompt to paste into Claude Code
or Codex, which sets your machine up and plays a mission. A sweep of 16 neurons takes about 5 minutes and costs
about $1; [AGENTS.md](https://github.com/moridinamael/bonsai-interp/blob/HEAD/AGENTS.md) is what the agent follows.

## Background

This project tests a claim about neurons, so the two works it answers to come first:

- **Nick Cammarata, [*Neural Networks Are Already Clean*](https://already-clean.goodfire.com/)** (Goodfire, 2026).
  It argues that native MLP neurons in modern LLMs are far cleaner than their reputation, estimating that roughly
  90% of neuron poles in Qwen3-32B have one…
