---
repo: "Dendro-Inspector/Dendro-Inspector"
name: "Dendro-Inspector"
description: " Eval-driven multimodal agent for identifying trees, logs, bark, leaves and wood from photographs. Dendrology is the reference domain; the engineering subject is evidence handling, calibrated uncertainty and evaluation."
readmeQualityOk: true
url: "https://github.com/Dendro-Inspector/Dendro-Inspector"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["dendrology", "evals", "evaluation", "llm", "llm-agents", "llm-as-a-judge", "llm-as-judge", "prompt-engineering", "tree-identification", "wood-identification"]
stars: 19
forks: 4
openIssues: 5
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 1
createdAt: "2026-07-25T21:42:04Z"
lastCommitAt: "2026-11-10T11:39:04Z"
lastReleaseAt: "2026-08-30T19:52:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 76
undervaluedScore: 36
maintainers: ["dmytroslotvinskyy", "claude"]
openGraphImageUrl: "https://opengraph.githubassets.com/74882b877134c7a219927add5b0d11f67023695b39b88ed92a2232ec1659bbaa/Dendro-Inspector/Dendro-Inspector"
discussionCount: 0
---

# Dendro Inspector

  <img
    src="https://raw.githubusercontent.com/Dendro-Inspector/Dendro-Inspector/main/docs/assets/dendro-inspector-banner.png"
    alt="Dendro Inspector logo: a magnifying glass framing tree rings and a leafy tree"
    width="900"
  />

An eval-driven, evidence-based, multimodal agent for identifying trees, logs, bark, leaves,
fruit, cones and wood from photographs.

The core idea is an executable graph, not a single prompt:

**photographs &rarr; typed observations &rarr; card-validated candidates &rarr; adversarial
review &rarr; bounded decision**

Models may propose each artifact. Deterministic code decides what is admissible, when a run
must retry or escalate, and how specific and confident the final answer may be.

**What it is:** a reference implementation for evidence handling, adversarial review,
calibrated uncertainty, evaluation and CI in a multimodal agent.

**What it is not:** a tree identification app, a dataset, or a source of botanical truth.
Dendrology is the *reference domain*; the engineering subject is evidence handling, review,
calibrated uncertainty, evaluation and CI. The 25-taxon knowledge pack shipped here is
demonstration content that…
