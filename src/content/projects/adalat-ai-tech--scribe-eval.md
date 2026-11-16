---
repo: "adalat-ai-tech/scribe-eval"
name: "scribe-eval"
description: "Error Rate Analysis tool for Dictation"
readmeQualityOk: true
url: "https://github.com/adalat-ai-tech/scribe-eval"
language: "Python"
languages: ["Python"]
languagePcts: [100]
stars: 8
forks: 1
openIssues: 0
closedIssues: 1
watchers: 1
contributors: 18
recentReleases: 1
createdAt: "2025-09-26T11:56:14Z"
lastCommitAt: "2026-11-16T11:57:01Z"
lastReleaseAt: "2026-09-23T13:28:15Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 93
undervaluedScore: 55
maintainers: ["kavyamanohar"]
openGraphImageUrl: "https://opengraph.githubassets.com/2cbf45e8e20026c5489dbc4f01d6094d9e8bdfb1097c56851c3dba7653ee2f1a/adalat-ai-tech/scribe-eval"
---

# SCRIBE — Diagnostic Evaluation for Indic & Domain-Specific ASR

`scribe-eval` is the open-source evaluation framework introduced in the SCRIBE
paper (*Diagnostic Evaluation and Rich Transcription Models for Indic ASR*,
accepted at Interspeech 2026). It provides fine-grained error metrics for
ASR systems on Indic languages (Malayalam, Kannada, Hindi, ...) and on
domain-specific transcription (legal, medical, technical).

Token categories are decomposed into base classes (LEXICAL, NUMERAL, PUNCT) and
optional domain classes (LEGAL, MEDICAL, TECH, or custom). Domain-critical
terminology is shielded from incorrect splitting and tracked separately — so a
single misrecognized legal term doesn't inflate your general lexical
error rate (ER_LEX).

## Installation

```bash
pip install scribe-eval                 # core library
pip install 'scribe-eval[visualizer]'   # adds Streamlit UI
pip install 'scribe-eval[charts]'       # adds matplotlib charts
```

The core library depends only on `levenshtein` and `tabulate`. The extras are
optional and independent of each other.

To work on SCRIBE itself, install from source instead:

```bash
git clone…
