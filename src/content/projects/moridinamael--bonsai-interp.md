---
repo: "moridinamael/bonsai-interp"
name: "bonsai-interp"
description: "A pre-registered, testable map of neurons in Bonsai-8B (1-bit): forward, inverse (SciPy + globalMOO) and steering probes, plus an open interp graph"
readmeQualityOk: true
url: "https://github.com/moridinamael/bonsai-interp"
language: "HTML"
languages: ["HTML"]
languagePcts: [81]
stars: 5
forks: 4
openIssues: 6
closedIssues: 1
watchers: 0
contributors: 6
recentReleases: 5
createdAt: "2026-10-19T00:41:59Z"
lastCommitAt: "2026-10-26T18:08:01Z"
lastReleaseAt: "2026-10-25T02:03:41Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 83
undervaluedScore: 63
maintainers: ["C-Eckleman235", "github-actions[bot]", "moridinamael"]
openGraphImageUrl: "https://opengraph.githubassets.com/cd06e6849461d0f7556515afe4e6463a6f8fc68d52770f57af188a01e6ced365/moridinamael/bonsai-interp"
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
