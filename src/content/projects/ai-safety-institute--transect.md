---
repo: "AI-Safety-Institute/transect"
name: "transect"
description: "Transcript analysis for long-horizon agent evaluations"
readmeQualityOk: true
url: "https://github.com/AI-Safety-Institute/transect"
language: "Python"
languages: ["Python"]
languagePcts: [96]
topics: ["agents", "evals", "inspect-ai", "transcript-analysis", "inspect-scout"]
stars: 68
forks: 15
openIssues: 22
closedIssues: 28
watchers: 1
contributors: 20
recentReleases: 0
createdAt: "2026-09-09T13:36:02Z"
lastCommitAt: "2026-11-03T11:15:37Z"
status: "newborn"
tags: ["hidden_gem"]
healthScore: 87
undervaluedScore: 32
maintainers: ["alexandraabbas", "March-7", "Arth-Singh"]
openGraphImageUrl: "https://opengraph.githubassets.com/2a5c13583e621f72468271c5eb463ffe5828ab88bf048c4d1354493f7e199d7e/AI-Safety-Institute/transect"
---

# Transect

Transcript analysis for long-horizon agent evaluations, built on
[Inspect Scout](https://meridianlabs-ai.github.io/inspect_scout/).

As agent runs stretch to hundreds of pages, the range of what a
reviewer can reliably infer about the model's behaviour narrows.
Pointing an LLM judge at the transcript only moves the problem:
judged labels cannot be taken at face value either. Transect is
built around that fact. Every classification it produces carries
provenance and reliability information so reviewers can inspect how labels
were produced and where judges disagree.

```python
from transect import transect

results = transect(
    "logs/",  # Inspect .eval log(s), or OpenClaw .jsonl
    "spec.yaml",  # your phase + sub-agent vocabulary
    judge_models="anthropic/claude-sonnet-4-6",
)
# Transect report  -> scans/report.html
# Scout viewer  -> http://127.0.0.1:PORT  (deep links into the transcript)
```

Transect places a run on one navigable turn-based timeline:
structural scanners extract recorded events (token use, context
compactions, human interventions, sub-agent activity) at no model
cost, judged scanners classify behaviour against your own
vocabulary, and an HTML…
