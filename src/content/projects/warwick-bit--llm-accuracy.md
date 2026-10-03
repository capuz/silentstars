---
repo: "warwick-bit/llm-accuracy"
name: "llm-accuracy"
description: "Evidence-first accuracy hygiene for Claude."
readmeQualityOk: true
url: "https://github.com/warwick-bit/llm-accuracy"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["data-analysis", "llm-accuracy", "llm-inference", "llm-tools"]
stars: 7
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 2
recentReleases: 10
createdAt: "2026-07-22T06:00:32Z"
lastCommitAt: "2026-10-03T22:03:43Z"
lastReleaseAt: "2026-09-23T07:29:03Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem", "release_machine"]
healthScore: 86
undervaluedScore: 46
maintainers: ["warwick-bit"]
openGraphImageUrl: "https://opengraph.githubassets.com/132d3d3c8d678fc2fc69e5f9d27fc79d41c667b5a0cf203f67e03aa682aa8a3f/warwick-bit/llm-accuracy"
---

# LLM Accuracy

Make everyday Claude answers more predictable, consistent and trustworthy.

LLMs are built to give useful answers quickly. When a question is ambiguous,
they often fill the gaps by choosing a definition, time period, comparison or
source for you. Those choices can change between sessions, so the same simple
question can produce different answers.

LLM Accuracy asks Claude to slow down at those decision points: clarify what
you mean, keep claims within the evidence, preserve conflicts between sources
and say what is still unknown. Deterministic Data adds your team's reviewed
definitions and declared source routes when repeat questions need a consistent
method.

## Start here

Use **LLM Accuracy** for everyday questions where a plausible answer could
still be the wrong answer. Most people should install only this plugin first.

The basic loop is:

1. You ask Claude a normal question.
2. A configured Claude Code hook adds a short general evidence reminder on each
   non-empty prompt, including technical requests and brief follow-ups.
3. Claude is asked to clarify material ambiguity or keep the answer aligned
   with the source's population, definition, time window,…
