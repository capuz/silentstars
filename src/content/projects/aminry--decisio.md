---
repo: "aminry/decisio"
name: "decisio"
description: "A serving layer for decisions: typed questions in, a probability for every option out, one forward pass each. Three bases: Qwen3.6-35B-A3B, Gemma 4 12B, Gemma 4 31B."
readmeQualityOk: true
url: "https://github.com/aminry/decisio"
homepage: "https://opendecisio.com"
language: "Python"
languages: ["Python"]
languagePcts: [99]
topics: ["calibration", "classification", "decision-making", "gemma", "inference-server", "intent-classification", "llm", "llm-serving", "mlx", "qwen"]
stars: 10
forks: 1
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-30T14:31:24Z"
lastCommitAt: "2026-11-06T02:44:52Z"
lastReleaseAt: "2026-10-05T09:06:19Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 99
undervaluedScore: 63
maintainers: ["aminry", "dependabot[bot]", "decisio-release[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/d0cce6a60a4058a9ef7022057b76fa8eeb62a6e12d06d61e9b71f7940f7bb0ca/aminry/decisio"
---

# Decisio

**Decisions you can trust, on your own hardware. Open source.**

**Decisio is an open-source server that answers typed questions about any text, with a calibrated probability for every option, from one forward pass and no generated text.**

> **On JevBench v1.6.1 (the board's file, October 2026), Decisio 31B scored 71.69 on the composite (95% interval 69.86 to 72.81) and Jev 1.13.0 scored 71.49 (69.14 to 72.40); the two intervals overlap.** The live board is at https://benchmarkheaven.com/jev-models and has moved since.
> ([JevBench v1.6.1](https://benchmarkheaven.com/api/jevbench/v1.6.1), decisio on Gemma 4 31B; [how we read the board](#how-we-read-the-board).)

## Teach it your task

**Teach it your task in minutes. No retraining.**

Your labels, your rules, and it tells you which answers it is sure of.

- **BANKING77: 0.787 to 0.844 after 10 labelled examples per intent (mean of 3 draws, 150 test items).** Intent accuracy on the Gemma 4 31B, the test items held out.
- **CLINC150: 0.940 to 0.970 after 10 labelled examples per intent (mean of 3 draws, 100 test items).** The same, on 150 options, the test items held out.
- **169 of 200 held-out tickets certified, 17…
