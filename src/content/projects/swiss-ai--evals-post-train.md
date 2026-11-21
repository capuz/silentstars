---
repo: "swiss-ai/evals-post-train"
name: "evals-post-train"
description: "Updated Version of Apertus Evals for Apertus 1.5 Post-Training"
readmeQualityOk: true
url: "https://github.com/swiss-ai/evals-post-train"
language: "Python"
languages: ["Python", "Shell"]
languagePcts: [76, 24]
stars: 13
forks: 11
openIssues: 4
closedIssues: 4
watchers: 0
contributors: 28
recentReleases: 0
createdAt: "2026-02-13T14:11:52Z"
lastCommitAt: "2026-11-21T13:31:12Z"
lastReleaseAt: "2026-05-18T13:52:40Z"
status: "thriving"
tags: ["solo_builder", "fork_magnet"]
healthScore: 89
undervaluedScore: 63
maintainers: ["mzueri", "davmels"]
openGraphImageUrl: "https://opengraph.githubassets.com/3837b51723c1f74361c27fa36bbe1f2b5024a1e1effa02253296d8ef00c48ff8/swiss-ai/evals-post-train"
---

# Evals-Post-Train Evaluations

Evaluation infrastructure for LLMs on CSCS Alps (Clariden), with results in W&B. Four evaluation frameworks run side by side, each with its own folder in `scripts/`, entry point, environment and doc:

| Framework | Benchmarks | Entry point | Docs |
|---|---|---|---|
| [lm-evaluation-harness](https://github.com/swiss-ai/lm-evaluation-harness) | Standard benchmarks (MMLU, GSM8K, ...), task suites, LLM judges | `scripts/lm_eval_harness/launch_evaluations.sh` | [docs/lm-eval-harness.md](https://github.com/swiss-ai/evals-post-train/blob/HEAD/docs/lm-eval-harness.md) |
| [Inspect AI](https://inspect.aisi.org.uk/) | Benchmarks with their own scorer, judge or simulated user (tau2-bench, HLE, AA-LCR, ...) | `scripts/inspect_ai/run_inspect_eval.sh` | [docs/inspect-ai.md](https://github.com/swiss-ai/evals-post-train/blob/HEAD/docs/inspect-ai.md) |
| [Harbor](https://github.com/harbor-framework/harbor) | Agentic coding and terminal benchmarks (SWE-bench, Terminal-Bench, DeepSWE, Aider Polyglot, ...) | `scripts/harbor/run_harbor_eval.sh` | [docs/harbor.md](https://github.com/swiss-ai/evals-post-train/blob/HEAD/docs/harbor.md) |
