---
repo: "leanprover/lean-eval-submissions"
name: "lean-eval-submissions"
description: "Submission pipeline and results store for the lean-eval benchmark (https://github.com/leanprover/lean-eval)"
readmeQualityOk: true
url: "https://github.com/leanprover/lean-eval-submissions"
language: "Python"
languages: ["Python", "TypeScript"]
languagePcts: [67, 32]
stars: 7
forks: 2
openIssues: 12
closedIssues: 1427
watchers: 0
contributors: 4
recentReleases: 0
createdAt: "2026-05-19T12:33:50Z"
lastCommitAt: "2026-10-03T09:22:59Z"
status: "thriving"
tags: ["solo_builder", "hidden_gem"]
healthScore: 100
undervaluedScore: 57
maintainers: ["kim-em"]
openGraphImageUrl: "https://opengraph.githubassets.com/7bcab2a9bf4645e7fbca59cd8ff1208ce690fc2d0529528f9edbfea05bc52fe5/leanprover/lean-eval-submissions"
---

# lean-eval-submissions

The submission pipeline and the stored results for the
[lean-eval](https://github.com/leanprover/lean-eval) benchmark.

This repository owns two things:

- **The submission process** — the issue intake, the `submission`
  workflow that fetches a submission, evaluates it with
  [comparator](https://github.com/leanprover/comparator), and records the
  outcome, and the reconciler that catches stranded submission issues.
- **The results store** — `results/<github-login>.json`, the append-only
  public log of solved problems.

The benchmark problem set, the `lean-eval` CLI, and the comparator/landrun
security model live in [`leanprover/lean-eval`](https://github.com/leanprover/lean-eval).
The public leaderboard that renders these results is
[`leanprover/lean-eval-leaderboard`](https://github.com/leanprover/lean-eval-leaderboard)
(**[view it →](https://lean-lang.org/eval/)**).

## Submitting a solution

The preferred submission path is the
[**LeanEval submission service**](https://lean-lang.org/eval/submit/).

Before submitting through the service, install both read-only Apps on only the
repository you intend to submit:

- [LeanEval Source…
