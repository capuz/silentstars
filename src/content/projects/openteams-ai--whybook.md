---
repo: "openteams-ai/whybook"
name: "whybook"
description: "A question-driven view of Jupyter notebooks, as a JupyterLab extension"
readmeQualityOk: true
url: "https://github.com/openteams-ai/whybook"
homepage: "https://whybook.dev"
language: "TypeScript"
languages: ["TypeScript", "Python"]
languagePcts: [64, 33]
topics: ["data-science", "jupyter", "jupyter-ai", "jupyterlab-extension", "research", "scientific-research", "causal-inference", "data-exploration", "human-in-the-loop", "local-llm"]
stars: 9
forks: 1
openIssues: 5
closedIssues: 0
watchers: 1
contributors: 6
recentReleases: 4
createdAt: "2026-10-01T18:32:19Z"
lastCommitAt: "2026-11-23T10:13:00Z"
lastReleaseAt: "2026-11-22T13:39:24Z"
status: "newborn"
tags: ["solo_builder", "needs_contributors", "hidden_gem"]
healthScore: 67
undervaluedScore: 48
maintainers: ["krassowski"]
openGraphImageUrl: "https://repository-images.githubusercontent.com/1400554262/0f918b00-5a5e-49f8-9daa-f4093cb9c869"
discussionCount: 0
---

# Whybook

A research prototype that explores how to close the understanding gap in data analysis: the divide between what AI produces and what the analyst understands of it. Try the interactive demos on [whybook.dev](https://whybook.dev), and read why the gap matters.

## You ask the questions. Agents write the code.

Whybook is a JupyterLab extension: a view of a Jupyter notebook for asking questions about data and understanding every result. It has no chat box. The analyst picks one of the questions it offers, or types or says their own. The offers follow what the analyst points at (a column dragged onto a cell or clicked in Click mode, a region of a plot, a chip on a cell). The code comes from a template or from the AI model of the analyst's choice, and Whybook places the cell and runs it. Every constant, default and choice that Whybook finds behind the result is shown on the cell, where the analyst can question it.
