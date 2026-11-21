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
forks: 2
openIssues: 0
closedIssues: 2
watchers: 0
contributors: 1
recentReleases: 10
createdAt: "2026-09-30T14:31:24Z"
lastCommitAt: "2026-11-21T13:32:37Z"
lastReleaseAt: "2026-10-05T09:06:19Z"
status: "newborn"
tags: ["hidden_gem", "release_machine"]
healthScore: 100
undervaluedScore: 65
maintainers: ["aminry", "decisio-release[bot]", "dependabot[bot]"]
openGraphImageUrl: "https://opengraph.githubassets.com/4aae77ba7bc1781417efec9d129b80af0593255c4216fbc31d6269b24cc7fdc5/aminry/decisio"
---

# Decisio

**Typed questions about any text, answered with a calibrated probability for every option. Open source, on your own hardware.**

Decisio is a server that reads a text and answers typed questions about it: yes or no, one choice among options, or a score on a scale you define.
Every answer is a probability for every option, read from one forward pass per question, with no text generated.
It runs open models on one NVIDIA GPU, on a Mac with Apple silicon, or through Ollama.

| | |
| --- | --- |
| **Questions** | yes/no, choice (up to 255 options), score |
| **Answer** | a probability for every option, calibrated so that 80% means right about 80% of the time |
| **Model** | Decisio v3, a Gemma 4 12B tuned for decisions, or an untrained Gemma 4 or Qwen base |
| **Runs on** | one NVIDIA GPU (vLLM), a Mac with Apple silicon (MLX), Ollama |
| **Licence** | Apache 2.0, code and weights |

## Why Decisio v3

**More accurate.** On 5,000 held-out questions it answers 78.8% right, against 67.7% for the Gemma 4 12B it is built on and 71.6% for the previous Decisio 12B.
It gains on every question type, most on scores.
