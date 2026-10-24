---
repo: "1nslyn/autoMIL"
name: "autoMIL"
description: "Autonomous Agent-Driven Multiple Instance Learning"
readmeQualityOk: true
url: "https://github.com/1nslyn/autoMIL"
language: "Python"
languages: ["Python"]
languagePcts: [94]
stars: 5
forks: 1
openIssues: 0
closedIssues: 0
watchers: 0
contributors: 8
recentReleases: 1
createdAt: "2026-03-17T08:38:09Z"
lastCommitAt: "2026-10-24T00:15:19Z"
lastReleaseAt: "2026-10-21T14:42:41Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 89
undervaluedScore: 58
maintainers: ["1nslyn"]
openGraphImageUrl: "https://opengraph.githubassets.com/17508694981dd1b17b5109aef806558838392deb5b709ad7013c428fb7601dbb/1nslyn/autoMIL"
---

# autoMIL

### A coding agent runs the experiment loop on your existing ML code base.

It proposes a change, trains it as an isolated experiment, reads the validation
result, keeps or discards the change, and plans the next one. Every attempt,
decision and transcript is recorded.

[**Quick start**](#quick-start) ·
[**How it works**](#how-it-works) ·
[**Dashboard**](#the-dashboard) ·
[**Documentation**](#documentation) ·
[**Benchmarks**](https://github.com/1nslyn/autoMIL/blob/HEAD/benchmarks/README.md) ·
[**Citation**](#citation)

## Why autoMIL

Most ML research time goes into one loop: change the code, train, compare,
decide, repeat. Hyperparameter tools such as Optuna search a fixed set of knobs
inside a fixed pipeline. autoMIL hands the whole loop to a coding agent. The
agent edits the source itself (model, loss, training recipe), and autoMIL makes
every edit an experiment that is isolated, scheduled, scored and recorded.

autoMIL was built for Multiple Instance Learning on whole-slide pathology
images. The framework itself only needs a training script that writes a
`result.json`, in any language and with any ML library.

## Highlights

**The agent edits real code.** It reads…
