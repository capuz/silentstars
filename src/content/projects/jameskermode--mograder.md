---
repo: "jameskermode/mograder"
name: "mograder"
description: "Semi-automated grading for Marimo notebooks"
readmeQualityOk: true
url: "https://github.com/jameskermode/mograder"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["autograding", "education", "grading", "marimo", "moodle", "nbgrader", "notebooks", "python"]
stars: 21
forks: 0
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 3
recentReleases: 0
createdAt: "2026-03-04T09:40:42Z"
lastCommitAt: "2026-10-09T10:50:41Z"
lastReleaseAt: "2026-03-26T21:41:12Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 75
undervaluedScore: 34
maintainers: ["jameskermode"]
openGraphImageUrl: "https://opengraph.githubassets.com/8712bd7ae2c76d01a842bca541229b941fcd7b9396453a8bbb940e4c07f907cf/jameskermode/mograder"
---

# mograder

Semi-automated grading for [Marimo](https://marimo.io) notebooks.

**How it works:** Instructors author source notebooks with solution blocks and automated checks. `mograder generate` strips solutions to create release versions. Students complete the notebooks and get instant formative feedback from `check()` calls. `mograder autograde` executes submissions in sandboxed subprocesses, parses results, and stores grades in an SQLite gradebook. Markers review and add manual marks via the grader dashboard. `mograder feedback` exports annotated HTML for students.

## Quick start

```bash
pip install mograder          # or: uv add mograder
mograder generate hw1         # strip solutions → release/
mograder autograde hw1        # grade submissions → autograded/
mograder feedback hw1         # export HTML → feedback/
```

## Live demo

**[Try the student dashboard](https://jameskermode.github.io/mograder/dashboard/?server=https://mograder-demo.jrkermode.uk&wasm_base=notebooks)** — a WASM app running entirely in your browser. See also the **[hub](https://mograder-demo.jrkermode.uk)** (student notebook editing), the **[grader](https://mograder-demo.jrkermode.uk/grader)**…
